type ContactPageProps = {
  searchParams: Promise<{ sent?: string }>;
};

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const { sent } = await searchParams;

  return (
    <main className="contact-page">
      <form action="https://api.web3forms.com/submit" method="POST">
        <input
          type="hidden"
          name="redirect"
          value="https://www.ahsanbaseer.com/contact?sent=true"
        />
        <input
          type="hidden"
          name="access_key"
          value="89b85a1d-9630-4362-85b2-76ff6fc9f6ee"
        />

        {sent === "true" && (
          <p className="contact-success" role="status">
            Your message was sent successfully.
          </p>
        )}

        <div className="background">
          <div className="container">
            <h1 className="sub-title"><span>Contact</span></h1>
            <div className="screen">
              <div className="screen-header" aria-hidden="true">
                <div className="screen-header-left">
                  <div className="screen-header-button close" />
                  <div className="screen-header-button maximize" />
                  <div className="screen-header-button minimize" />
                </div>
                <div className="screen-header-right">
                  <div className="screen-header-ellipsis" />
                  <div className="screen-header-ellipsis" />
                  <div className="screen-header-ellipsis" />
                </div>
              </div>

              <div className="screen-body">
                <div className="screen-body-item left">
                  <div className="app-title">
                    <span><strong>Get In Touch With Me!</strong></span>
                  </div>
                  <div className="app-contact">Ahsan Baseer</div>
                </div>

                <div className="screen-body-item">
                  <div className="app-form">
                    <div className="app-form-group">
                      <label className="sr-only" htmlFor="contact-name">Name</label>
                      <input
                        id="contact-name"
                        className="app-form-control"
                        placeholder="NAME"
                        type="text"
                        name="name"
                        autoComplete="name"
                        required
                      />
                    </div>
                    <div className="app-form-group">
                      <label className="sr-only" htmlFor="contact-email">Email</label>
                      <input
                        id="contact-email"
                        className="app-form-control"
                        placeholder="EMAIL"
                        type="email"
                        name="email"
                        autoComplete="email"
                        required
                      />
                    </div>
                    <div className="app-form-group message">
                      <label className="sr-only" htmlFor="contact-message">Message</label>
                      <textarea
                        id="contact-message"
                        className="app-form-control"
                        placeholder="MESSAGE"
                        name="message"
                        required
                      />
                    </div>
                    <div className="app-form-group buttons">
                      <button className="app-form-button" type="submit">
                        SEND <i className="bx bx-send bx-tada" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </main>
  );
}
