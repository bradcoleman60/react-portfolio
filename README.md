# react-portfolio

# **Table of Contents**
1. [Description](#description)
2. [Testing](#testing)
3. [Technology Used and Credits](#technology-used-and-credits)
4. [About the Author](#about-the-author)
5. [License](#license)

Deployed Site: [https://bradcoleman60.github.io/react-portfolio/](https://bradcoleman60.github.io/react-portfolio/)



# **Description**

The goal of this project was to create a website to share my projects with potential employers and fellow developers and collaborate on future projects.  This site was created using React and was deployed on GitHub Pages. 

# **Highlighted Code Example**

The following is code that I created that I would like to highlight.  

In this first block I created the a projects array that contains the image of the application, a link to the deployed site and a link to the github repo.  The return function iterates through this array and renders a separate DIV for each of the projects. I overlaid a github badge at the bottom of the div that is a link to my respective repo. 

```
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


```


# **Testing** 


To test to ensure the code rendered the desired output I iterated a series of tests to ensure that all acceptance criteria were met and documented completion below:

| User Acceptance Criteria | Test Result | 
| ------------- |:-------------| 
|1. WHEN I load the portfolio THEN I am presented with a page containing a header, a section for content, and a footer|**Completed**.  Renders.   |
|2. WHEN I view the header THEN I am presented with the developer's name and navigation with titles corresponding to different sections of the portfolio|**Completed**.  This navigation works.   |
|3. WHEN I view the navigation titles THEN I am presented with the titles About Me, Portfolio, Contact, and Resume, and the title corresponding to the current section is highlighted|**Completed**.  This navigation works. |
|4. WHEN I click on a navigation title THEN I am presented with the corresponding section below the navigation without the page reloading and that title is highlighted|**Completed**.  This navigation works.  |
|5. WHEN I load the portfolio the first time THEN the About Me title and section are selected by default  | **Not Completed**.
|6. WHEN I am presented with the About Me section THEN I see a recent photo or avatar of the developer and a short bio about them|**Completed**.  This functionality works.   |
|7. WHEN I am presented with the Portfolio section THEN I see titled images of six of the developer’s applications with links to both the deployed applications and the corresponding GitHub repository|**Completed**.  This functionality works.    |
|8. WHEN I am presented with the Contact section THEN I see a contact form with fields for a name, an email address, and a message|**Completed**.  This functionality works.  |
|9. WHEN I move my cursor out of one of the form fields without entering text THEN I receive a notification that this field is required|**Not Completed**.    |
|10. WHEN I enter text into the email address field THEN I receive a notification if I have entered an invalid email address|**Completed**.  This functionality works.  |
|11. WHEN I am presented with the Resume section THEN I see a link to a downloadable resume and a list of the developer’s proficiencies|**Completed**.  This functionality works.  |
|12. WHEN I view the footer THEN I am presented with text or icon links to the developer’s GitHub and LinkedIn profiles, and their profile on a third platform (Stack Overflow, Twitter)|**Completed**.  This functionality the third source is a link to my resume.  |



# **Technology Used and Credits**

I used many useful references in completing this project including the following.  In particular, I found the layout of the w3schools reference materials to be extremely intuitive and helpful.  They even have a "try me" feature where elements of code can be reviewed and tested. 


| Technology Used | Resource URL | 
| ------------- |:-------------| 
| <img src="https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white"> | [https://git-scm.com/](https://git-scm.com/) | 
| <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> | [https://developer.mozilla.org/en-US/docs/Learn/JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript) |
| <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"> | [https://nodejs.org/en/](https://nodejs.org/en/) |
| <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"> | [https://reactjs.org/](https://reactjs.org/) |
| <img src="https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white"> | [https://getbootstrap.com/](https://getbootstrap.com/)|

# **About the Author**

My name is Brad Coleman. I am fairly new to web development but have considered it a hobby for several years and have hacked my way through learning various aspects including php, html and mysql.  I am currently enrolled in the Cal Berkeley Extension Web Development Boot camp and am excited to learn web development more holistically.  I have spent my earlier career working as a corporate controller / CPA.

- [Linkedin Profile](https://www.linkedin.com/in/brad-coleman-109529/)
- [GitHub Repos](https://github.com/bradcoleman60?tab=repositories)


# **License**

MIT License

Copyright (c) 2022 Brad Coleman

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

