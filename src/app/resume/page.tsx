import { cookies } from "next/headers";
import { createResumeToken, RESUME_COOKIE_NAME } from "@/lib/resume-access";
import { lockResume, unlockResume } from "./actions";

export const dynamic = "force-dynamic";

type ResumePageProps = {
  searchParams: Promise<{ error?: string }>;
};

export default async function ResumePage({ searchParams }: ResumePageProps) {
  const { error } = await searchParams;
  const configuredPassword = process.env.RESUME_PASSWORD;
  const cookieStore = await cookies();
  const expectedToken = configuredPassword
    ? createResumeToken(configuredPassword)
    : null;
  const isUnlocked = Boolean(
    expectedToken && cookieStore.get(RESUME_COOKIE_NAME)?.value === expectedToken,
  );

  if (isUnlocked) {
    return (
      <main className="resume-page">
        <div className="resume-shell">
          <div className="resume-viewer-header">
            <div>
              <p className="resume-eyebrow">Private document</p>
              <h1 className="resume-title">Resume</h1>
            </div>
            <form action={lockResume}>
              <button className="resume-lock" type="submit">Lock Resume</button>
            </form>
          </div>
          <iframe
            className="resume-viewer"
            src="/resume/file"
            title="Ahsan Baseer resume"
            tabIndex={-1}
          />
        </div>
      </main>
    );
  }

  return (
    <main className="resume-page">
      <section className="resume-gate-card">
        <p className="resume-eyebrow">Private document</p>
        <h1 className="resume-title">Resume Access</h1>
        <p className="resume-description">
          Enter the password to view Ahsan Baseer&apos;s resume. Access expires after one hour.
        </p>
        <form action={unlockResume} className="resume-password-form">
          <label htmlFor="resume-password" className="resume-eyebrow">Password</label>
          <input
            id="resume-password"
            className="resume-password-input"
            type="password"
            name="password"
            autoComplete="current-password"
            required
          />
          <button className="resume-submit" type="submit">View Resume</button>
        </form>
        {error === "invalid" && (
          <p className="resume-error" role="alert">Incorrect password. Try again.</p>
        )}
        {(error === "config" || !configuredPassword) && (
          <p className="resume-config-note" role="alert">
            Resume access is not configured yet.
          </p>
        )}
      </section>
    </main>
  );
}
