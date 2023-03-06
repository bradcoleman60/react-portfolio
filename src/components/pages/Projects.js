import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Portfolio.css";
import "../styles/Overall.css";

export default function Projects() {
  const projects = [
    {
      url: "https://bradcoleman60.github.io/GitYourGameOn/",
      github: "https://github.com/bradcoleman60/GitYourGameOn",
      backgroundImage: "url('/images/nba_project.jpg')",
    },
    {
      url: "https://bradcoleman60.github.io/marketing-refactor/",
      github: "https://github.com/bradcoleman60/marketing-refactor",
      backgroundImage: "url('/images/digital-marketing-meeting.jpg')",
    },
    {
      url: "https://afternoon-badlands-25422.herokuapp.com/",
      github: "https://github.com/bradcoleman60/tech-blog",
      backgroundImage: "url('/images/tech_blog.jpg')",
    },
    {
      url: "https://bradcoleman60.github.io/weather-dashboard/",
      github: "https://github.com/bradcoleman60/weather-dashboard",
      backgroundImage: "url('/images/weather.jpg')",
    },
    {
      url: "https://pure-depths-43598.herokuapp.com/",
      github: "https://github.com/bradcoleman60/project-panda",
      backgroundImage: "url('/images/panda.jpg')",
    },
    
    {
      url: "https://bradcoleman60.github.io/javascript-quiz/",
      github: "https://github.com/bradcoleman60/javascript-quiz",
      backgroundImage: "url('/images/javascript_quiz.jpg')",
    },
  ];

  function handleClick(url) {
    window.open(url, "_blank");
  }

  return (
    <div className="container border border-primary">
      <div className="row px-5">
        {projects.map((item, index) => (
          <div
            key={index}
            className="col-md-4 col-lg-4 col-xl-4 px-5 border border-primary position-relative"
            style={{
              backgroundImage: item.backgroundImage,
              height: "400px",
              width: "400px",
              backgroundSize: "cover",
              padding: "30px"
            }}
            onClick={() => handleClick(item.url)}
          >
            <div
              className="bg-light p-2 position-absolute"
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                textAlign: "center",
              }}
            >
              <a href={item.github} target="_blank" rel="noopener noreferrer">
                GitHub Repo
              </a>
            </div>
        </div>
        ))}
      </div>
    </div>
  );
}
