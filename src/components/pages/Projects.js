import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Portfolio.css";
import nbapic from '../../images/nba_project.jpg'



export default function Projects() {
  const projects = [
    {
      url: "https://bradcoleman60.github.io/GitYourGameOn/",
      github: "https://github.com/bradcoleman60/GitYourGameOn",
      backgroundImage: `url(${nbapic})`,
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
      // backgroundImage: "url('/images/javascript_quiz.jpg')",
      backgroundImage: `{process.env.PUBLIC_URL + '/images/javascript_quiz.jpg'}`
    },
  ];

  function handleClick(url) {
    window.open(url, "_blank");
  }

  /*This return statement iterates through the Projects array (above) and inserts 
  the url, github link and the background image for each project and then 
  displays in a separate DIV */
  return (
    <div className="container">
      <div className="row">
        {projects.map((item, index) => (
          <div
            key={index}
            className="col-md-4 col-lg-4 col-xl-4 m-4 position-relative"
            style={{
              backgroundImage: item.backgroundImage,
              height: "400px",
              width: "400px",
              backgroundSize: "cover",
              padding: "30px",
            
            }}
            onClick={() => handleClick(item.url)}
          >

            <div
              className="col p-2 "
              id="github"
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                width: "100%",
                textAlign: "center",
                cursor: "pointer",
                opacity: ".5",
                
              }}
            >
                   
                <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" onClick={() => window.open(item.github)} max-width="50%" title="GitHub Repo" alt="github icon"/>
              
            </div>
        </div>
        ))}
      </div>
    </div>
  );
}
