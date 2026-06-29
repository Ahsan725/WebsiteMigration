"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import {
  createResumeToken,
  passwordsMatch,
  RESUME_COOKIE_NAME,
} from "@/lib/resume-access";

export async function unlockResume(formData: FormData) {
  const configuredPassword = process.env.RESUME_PASSWORD;
  if (!configuredPassword) redirect("/resume?error=config");

  const submittedPassword = String(formData.get("password") ?? "");
  if (!passwordsMatch(submittedPassword, configuredPassword)) {
    redirect("/resume?error=invalid");
  }

  const cookieStore = await cookies();
  cookieStore.set(RESUME_COOKIE_NAME, createResumeToken(configuredPassword), {
    httpOnly: true,
    sameSite: "strict",
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60,
    path: "/resume",
  });

  redirect("/resume");
}

export async function lockResume() {
  const cookieStore = await cookies();
  cookieStore.delete(RESUME_COOKIE_NAME);
  redirect("/resume");
}
