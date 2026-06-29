import { createDecipheriv, scryptSync } from "node:crypto";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { createResumeToken, RESUME_COOKIE_NAME } from "@/lib/resume-access";

export const dynamic = "force-dynamic";

export async function GET() {
  const configuredPassword = process.env.RESUME_PASSWORD;
  if (!configuredPassword) {
    return NextResponse.json({ error: "Resume access is not configured." }, { status: 503 });
  }

  const cookieStore = await cookies();
  const isUnlocked =
    cookieStore.get(RESUME_COOKIE_NAME)?.value === createResumeToken(configuredPassword);

  if (!isUnlocked) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const resumePath = path.join(process.cwd(), "private", "Ahsan-Baseer-Resume.enc");
    const encrypted = await readFile(resumePath);
    const salt = encrypted.subarray(0, 16);
    const iv = encrypted.subarray(16, 28);
    const authTag = encrypted.subarray(28, 44);
    const ciphertext = encrypted.subarray(44);
    const key = scryptSync(configuredPassword, salt, 32);
    const decipher = createDecipheriv("aes-256-gcm", key, iv);
    decipher.setAuthTag(authTag);
    const resume = Buffer.concat([decipher.update(ciphertext), decipher.final()]);

    return new NextResponse(resume, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'inline; filename="Ahsan-Baseer-Resume.pdf"',
        "Cache-Control": "private, no-store, max-age=0",
      },
    });
  } catch {
    return NextResponse.json({ error: "Resume file is unavailable." }, { status: 404 });
  }
}
