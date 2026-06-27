import Script from 'next/script';

export default function Home() {
  return (
    <>
      {/* 1. Home Section */}
      <section className="home" id="home">
        <div className="home-content">
          <h3>Hello, It's Me:</h3>
          <h1 className="nm">Ahsan Baseer</h1>
          <h3>And I'm <span className="text"></span></h3>
          <p className="text-contrast">I like building things :)</p>
          
          <div className="home-sci">
            <a href="" id="email" title="Email">
              <i className="bx bxl-gmail"></i>
            </a>
            <a 
              href="https://www.linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=ahsan-"
              target="_blank" 
              rel="noopener noreferrer"
              title="LinkedIn"
            >
              <i className="bx bxl-linkedin"></i>
            </a>
            <a href="https://github.com/Ahsan725" title="GitHub">
              <i className="bx bxl-github"></i>
            </a>
            <a href="https://calendly.com/ahsanbaseer/chat" title="Calendly">
              <i className="bx bxl-zoom"></i>
            </a>
          </div>
          
          <a href="#timeline" className="btn-box">
            <b>More About Me</b>
          </a>
          <a href="https://chroma-visual-folio.vercel.app/" className="btn-box">
            <b>Projects</b>
          </a>
        </div>

        <div>
          <span className="home-imgHover"></span>
        </div>
      </section>

      {/* 2. Timeline Section Spacer */}
      <section style={{ padding: "40px 18%" }}>
        <h1 id="timeline"></h1>
      </section>

      {/* 3. Experience Section */}
      <h1 className="sub-title"><span>Experience</span></h1>
      <br />
      
      <div className="timeline">
        <div className="timeline-entry timeline-entry-left">
          <div className="timeline-entry-content">
            <div className="timeline-logo">
              <img src="/capital-one-logo.png" alt="Capital One Logo" />
            </div>
            <h3>Capital One</h3>
            <p className="job-title">Software Engineer Intern</p>
          </div>
        </div>

        <div className="timeline-entry timeline-entry-right">
          <div className="timeline-entry-content">
            <div className="timeline-logo">
              <img src="/morgan-stanley-logo.png" alt="Morgan Stanley Logo" />
            </div>
            <h3>Morgan Stanley</h3>
            <p className="job-title">Software Engineer Intern</p>
          </div>
        </div>

        <div className="timeline-entry timeline-entry-left">
          <div className="timeline-entry-content">
            <div className="timeline-logo">
              <img src="/nbc-logo.jpeg" alt="NBCUniversal Logo" />
            </div>
            <h3>NBCUniversal</h3>
            <p className="job-title">Software Engineer Intern</p>
          </div>
        </div>

        <div className="timeline-entry timeline-entry-right">
          <div className="timeline-entry-content">
            <div className="timeline-logo">
              <img src="/pngegg.png" alt="NASA Logo" />
            </div>
            <h3>NASA</h3>
            <p className="job-title">Software Engineer Intern</p>
          </div>
        </div>

        <div className="timeline-entry timeline-entry-left">
          <div className="timeline-entry-content">
            <div className="timeline-logo">
              <img src="/meta1.avif" alt="Meta Logo" />
            </div>
            <h3>Meta</h3>
            <p className="job-title">Production Engineer Fellow</p>
          </div>
        </div>

        <div className="timeline-entry timeline-entry-right">
          <div className="timeline-entry-content">
            <div className="timeline-logo">
              <img src="/verizon.png" alt="Verizon Logo" />
            </div>
            <h3>Verizon</h3>
            <p className="job-title">AI Research & Strategy Intern</p>
          </div>
        </div>

        <div className="timeline-entry timeline-entry-left">
          <div className="timeline-entry-content">
            <div className="timeline-logo">
              <img src="/google.png" alt="Google Logo" />
            </div>
            <h3>Google</h3>
            <p className="job-title">Software Engineer Program Fellow</p>
          </div>
        </div>
      </div>

      {/* 4. About Section */}
      <section className="about" id="about" style={{ textAlign: "center" }}>
        <div className="about-text">
          <h1 className="sub-title"><span>About Me</span></h1>
          <br />
          <div className="about-longtxt">
            <p className="text-contrast">
              In a perfectly ordinary apartment where nothing magical ever happened unless you count the microwave
              finally heating food evenly, I was raised on two reliable forces: love and necessity. I’m an
              immigrant and a first-gen college student, so “resourceful” is my middle name. We didn’t have much
              money for new toys, which sounds unfortunate until you realize it accidentally gave me my first
              engineering lab and my passion. My happiest moments were with broken toys, the kind most kids would
              toss aside. I treated them like mysteries. I’d crack them open to figure out what made them tick,
              then try to revive them after their inevitable demise, often caused by my own extremely rigorous
              experiments like “what if I bend this” or “what if I press every button at once.”
              
              <br /><br />
              Somewhere between
              missing screws and questionable reassembly, I learned problem solving early. If I can understand how
              something works, I can fix it, reverse engineer it, and probably add a modification that makes it
              slightly better or at least more interesting.

              When I got to college, I tried pre-med track because science scratched the same curiosity itch. But
              something was missing. After switching majors a few times, I found Computer Science and it clicked.
              CS gave me my favorite two step passion: first, understand the system. Second, get hands on and
              iterate over it. Now instead of toys, it’s software. I’ve taught myself most of what I know because
              I genuinely love learning, and because deep down I’m still that kid staring at a broken thing
              thinking, alright, show me what makes you tick.
            </p>
            <br />
          </div>
          <h3 className="ab-text2" style={{ textAlign: "center" }}>
            My Skills include: <span className="text1"></span>
          </h3>
          <br /><br /><br />
          <a href="#contact" className="btn-box">Get in Touch?</a>
        </div>
      </section>

      {/* 5. Skills Section */}
      <section id="skills">
        <div className="skills-wrapper">
          <div className="sticky-sidebar">
            <h2 className="sub-title">Technical Expertise</h2>
            <p className="text-contrast">
              Specializing in full-stack architecture, machine learning, and scalable systems.
            </p>
          </div>

          <div className="skills-column">
            {/* Frontend Card */}
            <div className="skill-card">
              <div className="card-inner">
                <div className="card-header">
                  <div className="card-icon">
                    <i className="bx bx-code-alt"></i>
                  </div>
                  <div className="card-title-group">
                    <h3>Frontend Development</h3>
                    <h4>Interactive UI/UX</h4>
                  </div>
                </div>
                <p className="text-contrast">
                  Adept in building high-performance SPAs and PWAs. Proficient in web performance
                  optimization, lazy loading, and server-side rendering for seamless user experiences.
                </p>
                <div className="card-tags">
                  <span className="tech-tag">React</span>
                  <span className="tech-tag">NextJS</span>
                  <span className="tech-tag">TypeScript</span>
                  <span className="tech-tag">Tailwind</span>
                  <span className="tech-tag">Figma</span>
                </div>
              </div>
            </div>

            {/* Backend Card */}
            <div className="skill-card">
              <div className="card-inner">
                <div className="card-header">
                  <div className="card-icon">
                    <i className="bx bx-data"></i>
                  </div>
                  <div className="card-title-group">
                    <h3>Backend Architecture</h3>
                    <h4>Scalable Systems</h4>
                  </div>
                </div>
                <p className="text-contrast">
                  Expertise in database design, sharding, and fault-tolerant systems. Experienced in building
                  RESTful APIs and managing complex data workflows with NoSQL and relational databases.
                </p>
                <div className="card-tags">
                  <span className="tech-tag">NodeJS</span>
                  <span className="tech-tag">PostgreSQL</span>
                  <span className="tech-tag">Express</span>
                  <span className="tech-tag">AWS</span>
                  <span className="tech-tag">Prisma</span>
                </div>
              </div>
            </div>

            {/* OOP Card */}
            <div className="skill-card">
              <div className="card-inner">
                <div className="card-header">
                  <div className="card-icon">
                    <i className="bx bx-code-curly"></i>
                  </div>
                  <div className="card-title-group">
                    <h3>Core Engineering</h3>
                    <h4>OOP & Algorithms</h4>
                  </div>
                </div>
                <p className="text-contrast">
                  Strong foundation in Object-Oriented Design and Data Structures. Proficient in Java, Python,
                  and C++ for building robust, modular software architectures.
                </p>
                <div className="card-tags">
                  <span className="tech-tag">Java</span>
                  <span className="tech-tag">Python</span>
                  <span className="tech-tag">C++</span>
                  <span className="tech-tag">Design Patterns</span>
                </div>
              </div>
            </div>

            {/* ML Card */}
            <div className="skill-card">
              <div className="card-inner">
                <div className="card-header">
                  <div className="card-icon">
                    <i className="bx bxs-network-chart"></i>
                  </div>
                  <div className="card-title-group">
                    <h3>AI & Data Science</h3>
                    <h4>Deep Learning</h4>
                  </div>
                </div>
                <p className="text-contrast">
                  Learning supervised and unsupervised learning models. Currently focused on neural
                  network architectures, feature engineering, and predictive modeling for AI solutions.
                </p>
                <div className="card-tags">
                  <span className="tech-tag">Supervised Learning</span>
                  <span className="tech-tag">Regression</span>
                  <span className="tech-tag">Neural Networks</span>
                  <span className="tech-tag">Pandas</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Technologies Section */}
      <section id="technologies" style={{ textAlign: "center" }}>
        <h1 className="sub-title"><span>Technologies</span></h1>
        <div className="marquee-container">
          <div className="marquee-content">
            <div className="tech-clip"><i className="bx bxl-java"></i><h3>JAVA</h3></div>
            <div className="tech-clip"><i className="bx bxl-javascript" style={{ color: "rgb(157, 126, 222)" }}></i><h3>JAVASCRIPT</h3></div>
            <div className="tech-clip"><i className="bx bxl-html5" style={{ color: "rgb(157, 126, 222)" }}></i><h3>HTML</h3></div>
            <div className="tech-clip"><i className="bx bxl-bootstrap" style={{ color: "rgb(157, 126, 222)" }}></i><h3>BOOTSTRAP</h3></div>
            <div className="tech-clip"><i className="bx bxl-css3" style={{ color: "rgb(157, 126, 222)" }}></i><h3>CSS</h3></div>
            <div className="tech-clip"><i className="bx bxl-git" style={{ color: "rgb(157, 126, 222)" }}></i><h3>GIT</h3></div>
            <div className="tech-clip"><i className="bx bxl-react" style={{ color: "rgb(157, 126, 222)" }}></i><h3>REACT</h3></div>
            <div className="tech-clip"><i className="bx bxl-php" style={{ color: "rgb(157, 126, 222)" }}></i><h3>PHP</h3></div>
            <div className="tech-clip"><i className="bx bxl-postgresql" style={{ color: "rgb(157, 126, 222)" }}></i><h3>POSTGRESQL</h3></div>
            <div className="tech-clip"><i className="bx bxl-apple" style={{ color: "rgb(157, 126, 222)" }}></i><h3>SWIFT</h3></div>
            <div className="tech-clip"><i className="bx bxl-figma" style={{ color: "rgb(157, 126, 222)" }}></i><h3>FIGMA</h3></div>
            <div className="tech-clip"><i className="bx bxl-tailwind-css" style={{ color: "rgb(157, 126, 222)" }}></i><h3>TAILWIND</h3></div>
            <div className="tech-clip"><i className="bx bxl-nodejs" style={{ color: "rgb(157, 126, 222)" }}></i><h3>Node JS</h3></div>
            <div className="tech-clip"><i className="bx bxl-aws" style={{ color: "rgb(157, 126, 222)" }}></i><h3>AWS</h3></div>
            <div className="tech-clip"><i className="bx bxl-python" style={{ color: "rgb(157, 126, 222)" }}></i><h3>Python</h3></div>
            <div className="tech-clip"><i className="bx bxl-c-plus-plus" style={{ color: "rgb(157, 126, 222)" }}></i><h3>C ++</h3></div>
            <div className="tech-clip"><i className="bx bxl-redux" style={{ color: "rgb(157, 126, 222)" }}></i><h3>Redux</h3></div>
            <div className="tech-clip"><i className="bx bxl-firebase" style={{ color: "rgb(157, 126, 222)" }}></i><h3>Firebase</h3></div>
            {/* Duplicated for loop */}
            <div className="tech-clip"><i className="bx bxl-java"></i><h3>JAVA</h3></div>
            <div className="tech-clip"><i className="bx bxl-javascript" style={{ color: "rgb(157, 126, 222)" }}></i><h3>JAVASCRIPT</h3></div>
            <div className="tech-clip"><i className="bx bxl-html5" style={{ color: "rgb(157, 126, 222)" }}></i><h3>HTML</h3></div>
            <div className="tech-clip"><i className="bx bxl-bootstrap" style={{ color: "rgb(157, 126, 222)" }}></i><h3>BOOTSTRAP</h3></div>
            <div className="tech-clip"><i className="bx bxl-css3" style={{ color: "rgb(157, 126, 222)" }}></i><h3>CSS</h3></div>
            <div className="tech-clip"><i className="bx bxl-git" style={{ color: "rgb(157, 126, 222)" }}></i><h3>GIT</h3></div>
            <div className="tech-clip"><i className="bx bxl-react" style={{ color: "rgb(157, 126, 222)" }}></i><h3>REACT</h3></div>
            <div className="tech-clip"><i className="bx bxl-php" style={{ color: "rgb(157, 126, 222)" }}></i><h3>PHP</h3></div>
            <div className="tech-clip"><i className="bx bxl-postgresql" style={{ color: "rgb(157, 126, 222)" }}></i><h3>POSTGRESQL</h3></div>
            <div className="tech-clip"><i className="bx bxl-apple" style={{ color: "rgb(157, 126, 222)" }}></i><h3>SWIFT</h3></div>
            <div className="tech-clip"><i className="bx bxl-figma" style={{ color: "rgb(157, 126, 222)" }}></i><h3>FIGMA</h3></div>
            <div className="tech-clip"><i className="bx bxl-tailwind-css" style={{ color: "rgb(157, 126, 222)" }}></i><h3>TAILWIND</h3></div>
            <div className="tech-clip"><i className="bx bxl-nodejs" style={{ color: "rgb(157, 126, 222)" }}></i><h3>Node JS</h3></div>
            <div className="tech-clip"><i className="bx bxl-aws" style={{ color: "rgb(157, 126, 222)" }}></i><h3>AWS</h3></div>
            <div className="tech-clip"><i className="bx bxl-python" style={{ color: "rgb(157, 126, 222)" }}></i><h3>Python</h3></div>
            <div className="tech-clip"><i className="bx bxl-c-plus-plus" style={{ color: "rgb(157, 126, 222)" }}></i><h3>C ++</h3></div>
            <div className="tech-clip"><i className="bx bxl-redux" style={{ color: "rgb(157, 126, 222)" }}></i><h3>Redux</h3></div>
            <div className="tech-clip"><i className="bx bxl-firebase" style={{ color: "rgb(157, 126, 222)" }}></i><h3>Firebase</h3></div>
          </div>
        </div>
      </section>

      {/* 7. Portfolio Section */}
      <section style={{ textAlign: "center" }}>
        <div className="portfolio" id="portfolio">
          <h1 className="sub-title"><span>Projects</span></h1>
          <div id="project">
            <button className="cssbuttons-io project-btn">
              <span>
                <a href="/projects" className="btn-link">
                  <i className="bx bx-link-external"></i> View Projects &nbsp;
                </a>
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* 8. Articles Section */}
      <section id="articles">
        <h1 className="sub-title"><span>Articles</span></h1>
        <p style={{ textAlign: "center" }}>Scroll through my LinkedIn articles</p>
        <br />
        <div className="articles" id="article-scroll">
          <div className="article">
            <div className="img-div">
              <img src="/bulb.png" className="art-img" alt="Article Icon" />
            </div>
            <div className="art-text">
              <h3 className="art-heading">How can you handle large amounts of scraped data?</h3>
              <p className="art-para">Storing large amounts of scraped data for web development involves...</p>
              <button className="cssbuttons-io">
                <span>
                  <a 
                    href="https://www.linkedin.com/advice/3/how-can-you-effectively-handle-large-amounts-scraped-c4w3f?contributionUrn=urn%3Ali%3Acomment%3A%28articleSegment%3A%28urn%3Ali%3AlinkedInArticle%3A7165395442984181761%2C7165395444901048320%29%2C7166595633577984000%29&trk=rtyc&utm_source=share&utm_campaign=copy_contribution_link&utm_medium=member_desktop&articleSegmentUrn=urn%3Ali%3AarticleSegment%3A%28urn%3Ali%3AlinkedInArticle%3A7165395442984181761%2C7165395444901048320%29&dashContributionUrn=urn%3Ali%3Afsd_comment%3A%287166595633577984000%2CarticleSegment%3A%28urn%3Ali%3AlinkedInArticle%3A7165395442984181761%2C7165395444901048320%29%29"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-link"
                  > 
                    <i className="bx bxl-linkedin-square"></i> Read On LinkedIn &nbsp;&nbsp;&nbsp;
                    <i className="bx bxs-right-arrow-alt bx-fade-left"></i>
                  </a>
                </span>
              </button>
            </div>
          </div>

          <div className="article">
            <div className="img-div">
              <img src="/bulb.png" className="art-img" alt="Article Icon" />
            </div>
            <div className="art-text">
              <h3 className="art-heading">How can you make the most of your mentor?</h3>
              <p className="art-para">A mentor with relevant industry experience can offer valuable insights into industry trends...</p>
              <button className="cssbuttons-io">
                <span>
                  <a 
                    href="https://www.linkedin.com/advice/1/youre-software-developer-who-needs-guidance-tnyie?contributionUrn=urn%3Ali%3Acomment%3A%28articleSegment%3A%28urn%3Ali%3AlinkedInArticle%3A7169729872779554816%2C7169729874465660928%29%2C7171842799435239425%29&trk=rtyc&utm_source=share&utm_campaign=copy_contribution_link&utm_medium=member_desktop&articleSegmentUrn=urn%3Ali%3AarticleSegment%3A%28urn%3Ali%3AlinkedInArticle%3A7169729872779554816%2C7169729874465660928%29&dashContributionUrn=urn%3Ali%3Afsd_comment%3A%287171842799435239425%2CarticleSegment%3A%28urn%3Ali%3AlinkedInArticle%3A7169729872779554816%2C7169729874465660928%29%29"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-link"
                  > 
                    <i className="bx bxl-linkedin-square"></i> Read On LinkedIn &nbsp;&nbsp;&nbsp;
                    <i className="bx bxs-right-arrow-alt bx-fade-left"></i>
                  </a>
                </span>
              </button>
            </div>
          </div>

          <div className="article">
            <div className="img-div">
              <img src="/bulb.png" className="art-img" alt="Article Icon" />
            </div>
            <div className="art-text">
              <h3 className="art-heading">What are the most common mistakes SWE make?</h3>
              <p className="art-para">Pressure to meet deadlines often leads engineers to prioritize coding over testing...</p>
              <button className="cssbuttons-io">
                <span>
                  <a 
                    href="https://www.linkedin.com/advice/0/youre-software-developer-what-most-common-cewbc?contributionUrn=urn%3Ali%3Acomment%3A%28articleSegment%3A%28urn%3Ali%3AlinkedInArticle%3A7171598503004061697%2C7171598621468033025%29%2C7171844373503033344%29&trk=rtyc&utm_source=share&utm_campaign=copy_contribution_link&utm_medium=member_desktop&articleSegmentUrn=urn%3Ali%3AarticleSegment%3A%28urn%3Ali%3AlinkedInArticle%3A7171598503004061697%2C7171598621468033025%29&dashContributionUrn=urn%3Ali%3Afsd_comment%3A%287171844373503033344%2CarticleSegment%3A%28urn%3Ali%3AlinkedInArticle%3A7171598503004061697%2C7171598621468033025%29%29"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-link"
                  > 
                    <i className="bx bxl-linkedin-square"></i> Read On LinkedIn &nbsp;&nbsp;&nbsp;
                    <i className="bx bxs-right-arrow-alt bx-fade-left"></i>
                  </a>
                </span>
              </button>
            </div>
          </div>

          <div className="article">
            <div className="img-div">
              <img src="/bulb.png" className="art-img" alt="Article Icon" />
            </div>
            <div className="art-text">
              <h3 className="art-heading">How can you delegate tasks more effectively?</h3>
              <p className="art-para">Assigning tasks in a task management system can ensure clarity in scope, requirements...</p>
              <button className="cssbuttons-io">
                <span>
                  <a 
                    href="https://www.linkedin.com/advice/0/youre-leading-software-development-team-how-ud3ke?contributionUrn=urn%3Ali%3Acomment%3A%28articleSegment%3A%28urn%3Ali%3AlinkedInArticle%3A7168701514352439296%2C7168701516348911616%29%2C7171843811621359616%29&trk=rtyc&utm_source=share&utm_campaign=copy_contribution_link&utm_medium=member_desktop&articleSegmentUrn=urn%3Ali%3AarticleSegment%3A%28urn%3Ali%3AlinkedInArticle%3A7168701514352439296%2C7168701516348911616%29&dashContributionUrn=urn%3Ali%3Afsd_comment%3A%287171843811621359616%2CarticleSegment%3A%28urn%3Ali%3AlinkedInArticle%3A7168701514352439296%2C7168701516348911616%29%29"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-link"
                  > 
                    <i className="bx bxl-linkedin-square"></i> Read On LinkedIn &nbsp;&nbsp;&nbsp;
                    <i className="bx bxs-right-arrow-alt bx-fade-left"></i>
                  </a>
                </span>
              </button>
            </div>
          </div>

          <div className="article">
            <div className="img-div">
              <img src="/bulb.png" className="art-img" alt="Article Icon" />
            </div>
            <div className="art-text">
              <h3 className="art-heading">How do you become a web manager?</h3>
              <p className="art-para">Familiarize yourself with popular content management systems (CMS) and understand design and user experience...</p>
              <button className="cssbuttons-io">
                <span>
                  <a 
                    href="https://www.linkedin.com/advice/1/how-do-you-become-web-manager-skills-web-development-out2c?contributionUrn=urn%3Ali%3Acomment%3A%28articleSegment%3A%28urn%3Ali%3AlinkedInArticle%3A7153810574496174081%2C7153810576241004544%29%2C7154322121756667905%29&trk=rtyc"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-link"
                  > 
                    <i className="bx bxl-linkedin-square"></i> Read On LinkedIn &nbsp;&nbsp;&nbsp;
                    <i className="bx bxs-right-arrow-alt bx-fade-left"></i>
                  </a>
                </span>
              </button>
            </div>
          </div>

          <div className="article">
            <div className="img-div">
              <img src="/bulb.png" className="art-img" alt="Article Icon" />
            </div>
            <div className="art-text">
              <h3 className="art-heading">You're developing a website. How can you make it more interactive and engaging?</h3>
              <p className="art-para">Start by including the WAAPI polyfill for wider browser support. Create HTML elements to be animated, define...</p>
              <button className="cssbuttons-io">
                <span>
                  <a 
                    href="https://www.linkedin.com/advice/1/youre-developing-website-how-can-you-make-more-mkshc?contributionUrn=urn%3Ali%3Acomment%3A%28articleSegment%3A%28urn%3Ali%3AlinkedInArticle%3A7155987323795501056%2C7155987325825511425%29%2C7156544370295394304%29&trk=rtyc"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-link"
                  > 
                    <i className="bx bxl-linkedin-square"></i> Read On LinkedIn &nbsp;&nbsp;&nbsp;
                    <i className="bx bxs-right-arrow-alt bx-fade-left"></i>
                  </a>
                </span>
              </button>
            </div>
          </div>

          <div className="article">
            <div className="img-div">
              <img src="/bulb.png" className="art-img" alt="Article Icon" />
            </div>
            <div className="art-text">
              <h3 className="art-heading">You’re starting a cloud computing project. What are the best web development tools to use?</h3>
              <p className="art-para">Consider factors like use case, performance, scalability, and budget. AWS offers Amazon Aurora for robust relational...</p>
              <button className="cssbuttons-io">
                <span>
                  <a 
                    href="https://www.linkedin.com/advice/0/youre-starting-cloud-computing-project-what-best-fstwe?contributionUrn=urn%3Ali%3Acomment%3A%28articleSegment%3A%28urn%3Ali%3AlinkedInArticle%3A7156347599023669248%2C7156347601108258816%29%2C7156542488235687937%29&trk=rtyc"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-link"
                  > 
                    <i className="bx bxl-linkedin-square"></i> Read On LinkedIn &nbsp;&nbsp;&nbsp;
                    <i className="bx bxs-right-arrow-alt bx-fade-left"></i>
                  </a>
                </span>
              </button>
            </div>
          </div>

          <div className="article">
            <div className="img-div">
              <img src="/bulb.png" className="art-img" alt="Article Icon" />
            </div>
            <div className="art-text">
              <h3 className="art-heading">How do you become a web developer and types of web developers?</h3>
              <p className="art-para">Web developers specialize in different aspects of web development, such as front-end, back-end, full-stack, UI/UX, mobile, and DevOps...</p>
              <button className="cssbuttons-io">
                <span>
                  <a 
                    href="https://www.linkedin.com/advice/3/how-do-you-become-web-developer-skills-web-development-tmcqe?contributionUrn=urn%3Ali%3Acomment%3A%28articleSegment%3A%28urn%3Ali%3AlinkedInArticle%3A7153470008336031744%2C7153470010030497792%29%2C7153842108787793921%29&trk=rtyc"
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-link"
                  > 
                    <i className="bx bxl-linkedin-square"></i> Read On LinkedIn &nbsp;&nbsp;&nbsp;
                    <i className="bx bxs-right-arrow-alt bx-fade-left"></i>
                  </a>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Contact Section */}
      <form action="https://api.web3forms.com/submit" method="POST" id="contact">
        <input type="hidden" name="redirect" value="https://www.ahsanbaseer.com/#contact" />
        <div className="background">
          <div className="container">
            <h1 className="sub-title"><span>Contact</span></h1>
            <div className="screen">
              <div className="screen-header">
                <div className="screen-header-left">
                  <div className="screen-header-button close"></div>
                  <div className="screen-header-button maximize"></div>
                  <div className="screen-header-button minimize"></div>
                </div>
                <div className="screen-header-right">
                  <div className="screen-header-ellipsis"></div>
                  <div className="screen-header-ellipsis"></div>
                  <div className="screen-header-ellipsis"></div>
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
                    <input type="hidden" name="access_key" value="89b85a1d-9630-4362-85b2-76ff6fc9f6ee" />
                    <div className="app-form-group">
                      <input className="app-form-control" placeholder="NAME" type="text" name="name" required />
                    </div>
                    <div className="app-form-group">
                      <input className="app-form-control" placeholder="EMAIL" type="email" name="email" required />
                    </div>
                    <div className="app-form-group message">
                      <textarea className="app-form-control" placeholder="MESSAGE" name="message" required></textarea>
                    </div>
                    <div className="app-form-group buttons">
                      <button className="app-form-button" type="submit">
                        SEND <i className="bx bx-send bx-tada"></i>
                      </button>
                      <div id="existingDiv"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>

      {/* 10. Resume Section */}
      <div id="resume" style={{ textAlign: 'center', padding: '50px 0' }}>
        <h1 className="sub-title"><span>Resume</span></h1>
        {/* Render JotForm as a responsive iframe */}
        <iframe
          src="https://form.jotform.com/240124424717146"
          title="Ahsan Baseer Resume Form"
          style={{ width: "100%", height: "800px", border: "none", marginTop: "20px" }}
        />
      </div>
    </>
  );
}
