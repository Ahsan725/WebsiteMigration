import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { createResumeToken, RESUME_COOKIE_NAME } from "@/lib/resume-access";
import { readResumeDocument } from "@/lib/resume-document";

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
    const resume = await readResumeDocument(configuredPassword);

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
