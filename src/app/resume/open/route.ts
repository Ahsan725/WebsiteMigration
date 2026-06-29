import { NextRequest, NextResponse } from "next/server";
import {
  createResumeToken,
  passwordsMatch,
  RESUME_COOKIE_NAME,
} from "@/lib/resume-access";
import { readResumeDocument } from "@/lib/resume-document";

export const dynamic = "force-dynamic";

export async function POST(request: NextRequest) {
  const configuredPassword = process.env.RESUME_PASSWORD;
  if (!configuredPassword) {
    return NextResponse.redirect(new URL("/resume?error=config", request.url), 303);
  }

  const formData = await request.formData();
  const submittedPassword = String(formData.get("password") ?? "");
  if (!passwordsMatch(submittedPassword, configuredPassword)) {
    return NextResponse.redirect(new URL("/resume?error=invalid", request.url), 303);
  }

  try {
    const resume = await readResumeDocument(configuredPassword);
    const response = new NextResponse(resume, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'inline; filename="Ahsan-Baseer-Resume.pdf"',
        "Cache-Control": "private, no-store, max-age=0",
      },
    });
    response.cookies.set(RESUME_COOKIE_NAME, createResumeToken(configuredPassword), {
      httpOnly: true,
      sameSite: "strict",
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60,
      path: "/resume",
    });
    return response;
  } catch {
    return NextResponse.redirect(new URL("/resume?error=file", request.url), 303);
  }
}
