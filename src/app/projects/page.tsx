import Link from 'next/link';

export default function Projects() {
  return (
    <>
      <section className="home" id="home">
        <div className="home-content">   
          <h3>Hello, It's Me:</h3>
          <h1 className="nm">Ahsan Baseer</h1>
          <h3>And I'm <span className="text"></span></h3>
          <p className="text-contrast">
            An aspiring Software Engineer, majoring in Computer Science with a knack for turning caffeine into code! Eager to embark on a journey of continuous learning through internships in Spring, Summer, Fall, and Winter 2025.
          </p>
          <div className="home-sci">
            <a href="" id="email" title="Email"><i className="bx bxl-gmail"></i></a>
            <a href="https://www.linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=ahsan-" target="_blank" rel="noopener noreferrer" title="LinkedIn"><i className="bx bxl-linkedin"></i></a>
            <a href="https://github.com/Ahsan725" title="GitHub"><i className="bx bxl-github"></i></a>
            <a href="https://calendly.com/ahsanbaseer/chat" title="Calendly"><i className="bx bxl-zoom"></i></a>
          </div>
          <a href="#about" className="btn-box"> <b>More About Me</b></a>
        </div>

        <div>
          <span className="home-imgHover"></span>
        </div>
      </section>

      <section style={{ textAlign: "center" }}>
        <div className="portfolio" id="portfolio">
          <div className="main-text" id="project">
            <h2>Latest <span>Projects</span></h2>
            <button className="cssbuttons-io project-btn">
              <span>
                <Link href="https://www.ahsanbaseer.com/" className="btn-link">
                  <i className="bx bx-left-arrow-alt"></i> &nbsp;Back to Home
                </Link>
              </span>
            </button>

            <div className="row">
              <h3 className="project-title">Chatter-Bot</h3>
              <img src="" alt="" />
              <div className="layer">
                <h5>Chatter-Bot</h5>
                <p>
                  Designed and developed an AI chatbot, integrating GPT 3.5 Large Language Model API, to replicate and deliver exceptional conversational experience. 
                  Crafted a modern, responsive web app utilizing Next Js, ensuring a sleek and user-friendly interface for seamless interactions.
                  Optimized deployment efficiency by utilizing Vercel’s Edge Network, resulting in a 25% reduction in website latency and a remarkable 40% enhancement in overall website performance, leading to improved user retention and positive feedback.
                  Implemented streaming responses, resulting in an estimated 50% reduction in content delivery time, offering users instantaneous access to information. [Max API tokens usage reached]
                </p>
                <br />
                <button className="cssbuttons-io">
                  <span>
                    <a href="https://github.com/Ahsan725/Chatter-Bot/tree/main" target="_blank" rel="noopener noreferrer" className="btn-link">
                      <i className="bx bx-link-external"></i> View Repo &nbsp;
                    </a>
                  </span>
                </button>
              </div>
            </div>

            <div className="row">
              <h3 className="project-title">Convertify</h3>
              <img src="" alt="" />
              <div className="layer">
                <h5>Convertify</h5>
                <p>
                  Developed an image and video converter powered by Next.js. With its client-side processing capabilities, Convertify offers rapid conversions without limitations ensuring blazing-fast performance and enhanced security, positioning Convertify as a highly scalable and cost-efficient Software as a Service (SaaS) solution. Used FFmpeg to convert image and video files to WebAssembly (.wasm), facilitating real-time format changes. Its intelligent auto-detection feature recognizes the format of uploaded files, presenting users with a dynamic list of compatible formats for conversion. Supports simultaneous and asynchronous conversion of multiple files with a remarkable 67% faster conversion rate compared to most conventional file converters when processing the same set of files. 
                </p>
                <br />
                <button className="cssbuttons-io">
                  <span>
                    <a href="https://chat-gpt-clone-rouge.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn-link">
                      <i className="bx bx-link-external"></i> View Project &nbsp;
                    </a>
                  </span>
                </button>
              </div>
            </div>

            <div className="row">
              <h3 className="project-title">Blog Dot Dev</h3>
              <img src="" alt="" />
              <div className="layer">
                <h5>Blog Dot Dev</h5>
                <p>
                  Developed an image and video converter powered by Next.js. With its client-side processing capabilities, Convertify offers rapid conversions without limitations ensuring blazing-fast performance and enhanced security, positioning Convertify as a highly scalable and cost-efficient Software as a Service (SaaS) solution. Used FFmpeg to convert image and video files to WebAssembly (.wasm), facilitating real-time format changes. Its intelligent auto-detection feature recognizes the format of uploaded files, presenting users with a dynamic list of compatible formats for conversion. Supports simultaneous and asynchronous conversion of multiple files with a remarkable 67% faster conversion rate compared to most conventional file converters when processing the same set of files. 
                </p>
                <br />
                <button className="cssbuttons-io">
                  <span>
                    <a href="https://chat-gpt-clone-rouge.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn-link">
                      <i className="bx bx-link-external"></i> View Repo &nbsp;
                    </a>
                  </span>
                </button>
              </div>
            </div>

            <div className="row">
              <h3 className="project-title">Convertify</h3>
              <img src="" alt="" />
              <div className="layer">
                <h5>Convertify</h5>
                <p>
                  Developed an image and video converter powered by Next.js. With its client-side processing capabilities, Convertify offers rapid conversions without limitations ensuring blazing-fast performance and enhanced security, positioning Convertify as a highly scalable and cost-efficient Software as a Service (SaaS) solution. Used FFmpeg to convert image and video files to WebAssembly (.wasm), facilitating real-time format changes. Its intelligent auto-detection feature recognizes the format of uploaded files, presenting users with a dynamic list of compatible formats for conversion. Supports simultaneous and asynchronous conversion of multiple files with a remarkable 67% faster conversion rate compared to most conventional file converters when processing the same set of files. 
                </p>
                <br />
                <button className="cssbuttons-io">
                  <span>
                    <a href="https://chat-gpt-clone-rouge.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn-link">
                      <i className="bx bx-link-external"></i> View Project &nbsp;
                    </a>
                  </span>
                </button>
              </div>
            </div>

            <button className="cssbuttons-io project-btn">
              <span>
                <Link href="https://www.ahsanbaseer.com/" className="btn-link">
                  <i className="bx bx-left-arrow-alt"></i> &nbsp;Back to Home
                </Link>
              </span>
            </button>
          </div>
        </div>
      </section>

      <section className="about" id="about" style={{ textAlign: "center" }}>
        <div className="about-text">
          <h3 className="ab-text2" style={{ textAlign: "center" }}>
            My Skills include: <span className="text1"></span>
          </h3>
        </div>
      </section>
    </>
  );
}
