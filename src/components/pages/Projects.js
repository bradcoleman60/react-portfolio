import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/Portfolio.css";
import nbaPic from '../../images/nba_project.jpg'
import digitalPic from '../../images/digital-marketing-meeting.jpg'
import techPic from '../../images/tech_blog.jpg'
import weatherPic from '../../images/weather.jpg'
import pandaPic from '../../images/panda.jpg'
import javaPic from '../../images/javascript_quiz.jpg'



export default function Projects() {
  const projects = [
    {
      url: "https://bradcoleman60.github.io/GitYourGameOn/",
      github: "https://github.com/bradcoleman60/GitYourGameOn",
      backgroundImage: `url(${nbaPic})`,
    },
    {
      url: "https://bradcoleman60.github.io/marketing-refactor/",
      github: "https://github.com/bradcoleman60/marketing-refactor",
      backgroundImage: `url(${digitalPic})`,
    },
    {
      url: "https://afternoon-badlands-25422.herokuapp.com/",
      github: "https://github.com/bradcoleman60/tech-blog",
      backgroundImage: `url(${techPic})`,
    },
    {
      url: "https://bradcoleman60.github.io/weather-dashboard/",
      github: "https://github.com/bradcoleman60/weather-dashboard",
      backgroundImage: `url(${weatherPic})`,
    },
    {
      url: "https://pure-depths-43598.herokuapp.com/",
      github: "https://github.com/bradcoleman60/project-panda",
      backgroundImage: `url(${pandaPic})`,
    },
    
    {
      url: "https://bradcoleman60.github.io/javascript-quiz/",
      github: "https://github.com/bradcoleman60/javascript-quiz",
      
      backgroundImage: `url(${javaPic})`
    },
  ];

  function handleClick(url) {
    window.open(url, "_blank");
  }

  /*This return statement iterates through the Projects array (above) and inserts 
  the url, github link and the background image for each project and then 
  displays in a separate DIV */
  return (
    <div className="container m-5">
      <div className="row m-5">
        {projects.map((item, index) => (
          <div
            key={index}
            className="col-md-4 col-lg-4 col-xl-4 m-5 position-relative"
            title="Deployed Site"
            style={{
              backgroundImage: item.backgroundImage,
              height: "400px",
              width: "400px",
              backgroundSize: "cover",
              padding: "30px",
              border: "solid black",
              borderRadius: '10px',
              cursor:'grab'
              
            
            }}
            onClick={() => handleClick(item.url)}
          >

            <div
              className="gitHub col p-2 "
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
