import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import linkInPic from '../images/LI-In-Bug.png'
import GitHubPic from '../images/github-mark.png'
import ResumePic from '../images/resume.jpg'
import resumeDoc from '../assets/brad_coleman_resume.pdf'

function Footer() {
    return (
      <footer className="footer">
        <div class="container text-center">
        <a href="https://github.com/bradcoleman60" class="mx-5" target="_blank" rel="noopener noreferrer" title="GitHub">
         <img src={GitHubPic} alt='Brad Coleman' width="4%"></img>
       </a>
       <a href="https://www.linkedin.com/in/brad-coleman-109529/" class="mx-5" target="_blank" rel="noopener noreferrer" title="LinkedIn">
         <img src={linkInPic} alt='Brad Coleman' width="4%"></img>
       </a>
       <a href={resumeDoc} class="mx-5" target="_blank" rel="noopener noreferrer" title="Resume">
         <img src={ResumePic} alt='Brad Coleman' width="4%"></img>
       </a>
   
      
     </div>
     </footer>
    );
  }
  
  export default Footer;