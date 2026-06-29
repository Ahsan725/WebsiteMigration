export const dynamic = "force-dynamic";

type ResumePageProps = {
  searchParams: Promise<{ error?: string }>;
};

export default async function ResumePage({ searchParams }: ResumePageProps) {
  const { error } = await searchParams;
  const configuredPassword = process.env.RESUME_PASSWORD;

  return (
    <main className="resume-page">
      <section className="resume-gate-card">
        <p className="resume-eyebrow">Private document</p>
        <h1 className="resume-title">Resume Access</h1>
        <p className="resume-description">
          Enter the password to view Ahsan Baseer&apos;s resume. Access expires after one hour.
        </p>
        <form
          action="/resume/open"
          method="POST"
          target="_blank"
          className="resume-password-form"
        >
          <label htmlFor="resume-password" className="resume-eyebrow">Password</label>
          <input
            id="resume-password"
            className="resume-password-input"
            type="password"
            name="password"
            autoComplete="current-password"
            required
          />
          <button className="resume-submit" type="submit">Open Resume</button>
        </form>
        {error === "invalid" && (
          <p className="resume-error" role="alert">Incorrect password. Try again.</p>
        )}
        {error === "file" && (
          <p className="resume-error" role="alert">The resume could not be opened. Try again.</p>
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
