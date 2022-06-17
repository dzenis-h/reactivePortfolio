import React, { Fragment, useEffect } from "react";

// import CV from "../documents/Dzenis H..pdf";

const Home = () => {
  setTimeout(() => {
    (() => {
      // Cloning divs where particles go in order not to put 300 of them in the markup :)
      const node = document.querySelector(".parts");
      [...Array(300)].forEach((_) =>
        node.parentNode.insertBefore(node.cloneNode(true), node)
      );
    })();
  }, 200);

  useEffect(() => {
    document.title = "Dzenis H."; // making the document title dynamic
  }, []);

  return (
    <Fragment>
      <main id="home">
        <div className="particles">
          <div className="parts"></div>
        </div>
        <div className="wrapper animate__animated bounceInLeft">
          <h1 className="dzenis specialFont text textShadow">
            <span className="specialFont"></span> Dzenis
            <i className="text-secondary"> H.</i>
          </h1>
        </div>
        <h2 className="text textShadow">
          <i>
            Competent <span className="text-secondary">Full Stack</span> Web
            Developer
          </i>
        </h2>
        <div className="icons">
          <a
            href="https://github.com/BiggaHD"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub account"
          >
            <i className="fab fa-github fa-2x" />
          </a>
          <a
            href="https://stackoverflow.com/users/8146571/bigga-hd"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="StackOverflow account"
          >
            <i className="fab fa-stack-overflow fa-2x" />
          </a>
          <a
            href="https://www.linkedin.com/in/dzenis-h/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn account"
          >
            <i className="fab fa-linkedin-in fa-2x" />
          </a>
          {/* <a href={CV} download="Dzenis-H" className="cv">
            <i className="fas fa-cloud-download-alt fa-2x" />
            <span className="dox">Download Resume</span>
          </a> */}
          {/*
          <a href={CL} download="Cover-Letter" style={{ marginLeft: "1rem" }}>
            <i className="fas fa-file-signature fa-2x" />
            <span className="dox">Cover Letter</span>
          </a> */}
        </div>
      </main>
    </Fragment>
  );
};

export default Home;
