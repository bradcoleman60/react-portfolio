import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Portfolio.css";
import "../styles/Overall.css";

export default function Projects() {
  const projects = [
    {
      url: "https://bradcoleman60.github.io/GitYourGameOn/",
      backgroundImage: "url('/images/nba_project.jpg')",
    },
    {
      url: "https://bradcoleman60.github.io/marketing-refactor/",
      backgroundImage: "url('/images/digital-marketing-meeting.jpg')",
    },
  ];

  function handleClick(url) {
    window.location.href = url;
  }

  return (
    <div className="container border border-primary">
      {projects.map((item, index) => (
        <div
          key={index}
          className="col-md-4 border border-primary"
          style={{
            backgroundImage: item.backgroundImage,
            height: "300px",
            width: "300px",
            backgroundSize: "cover",
          }}
          onClick={() => handleClick(item.url)}
        >
          test
        </div>
      ))}

      {/* <div class="col-lg-12 border border-primary">
        <div class="row border border-primary">
          <a
            href="https://bradcoleman60.github.io/GitYourGameOn/"
            target="_blank"
            rel="noreferrer"
          >
            <div class="col-md-4 border border-primary" id="card_1">
              col-sm
            </div>
          </a>
          <div class="col-md-4 border border-primary" id="card_2">
            col-sm
          </div>
          <div class="col-md-4 border border-primary">col-sm</div>
        </div>
        <div class="row border border-primary">
          <div class="col-md-4 border border-primary">col-sm</div>
          <div class="col-md-4 border border-primary">col-sm</div>
          <div class="col-md-4 border border-primary">col-sm</div>
        </div>
      </div> */}
    </div>

    //     <section class="main-container">

    // {/* Container_1 includes the marquee project and is the most prominent on the  */}
    // {/* page.  */}

    //     <section class="container_1" id="main-project">
    //         <a href="https://bradcoleman60.github.io/GitYourGameOn/" target="_blank">
    //         <div class="card_1">
    //             <h1>GitYourGameOn</h1>
    //             <p>My first team project building a site from scratch </p>
    //         </div>
    //         </a>
    //     </section>

    // {/* <!-- Container_2 includes the other noteable projects --> */}

    //     <section class="container_2">

    //         <a href="https://bradcoleman60.github.io/prework-study-guide/" target="_blank">
    //             <div class="card_3">
    //                 <h1>Pre Work Site</h1>
    //                 <p>My first static webpage using HTML and CSS and a little Java Script.</p>
    //             </div>
    //         </a>

    //         <a href="https://bradcoleman60.github.io/landing-page-two/" target="_blank">
    //             <div class="card_2">
    //                 <h1>First Landing Page </h1>
    //                 <p>Creation of my First Landing Page.</p>
    //             </div>
    //         </a>

    //         <a href="https://bradcoleman60.github.io/marketing-refactor/" target="_blank">
    //             <div class="card_2">
    //                 <h1>Code Refactor</h1>
    //                 <p>In this project I refactored existing HMTL and CSS to add semantic elements and instituted aaccessibility standards.</p>
    //             </div>
    //         </a>

    //         <a href="#" target="_blank">
    //             <div class="card_2">
    //                 <h1>React</h1>
    //                 <p>Coming Soon.</p>
    //             </div>
    //         </a>

    //     </section>

    // </section>
  );
}
