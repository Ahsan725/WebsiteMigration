import { createHash, timingSafeEqual } from "node:crypto";

export const RESUME_COOKIE_NAME = "resume_access";

export function createResumeToken(password: string) {
  const secret = process.env.RESUME_SESSION_SECRET ?? password;
  return createHash("sha256")
    .update(`resume-access:${password}:${secret}`)
    .digest("hex");
}

export function passwordsMatch(submitted: string, expected: string) {
  const submittedHash = createHash("sha256").update(submitted).digest();
  const expectedHash = createHash("sha256").update(expected).digest();
  return timingSafeEqual(submittedHash, expectedHash);
}
