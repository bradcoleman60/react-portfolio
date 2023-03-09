import React from "react";
import '../styles/Resume.css';
import resume from '../../assets/brad_coleman_resume.pdf'


export default function Resume() {
  return (
    <div className="container">
      <div className="row justified-content-center">
        <div className="col-10">
          <div className="row">
            <div className="col-8">
              <h2>Brad Coleman</h2>
            </div>
            <div className="col-4 ">
            <a href={resume} download className="badge badge-primary" id="resume">
            Download Resume
          </a>
            </div>


          </div>
          
          <p>925-786-4017</p>
          <p>bradcoleman60@gmail.com</p>
          <h3>Skills:</h3>
          <ul>
          <li>
              Experience with HTML, CSS, JavaScript, Node.js, React, MySql,
              MongoDb, Express
            </li>
            <li>
              Extensive knowledge and application of Generally Accepted
              Accounting Principles (GAAP) and SEC reporting requirements.
            </li>
            <li>IPO Readiness and S-1 process</li>
            <li>Effective management of cross-functional teams</li>
            <li>
              Effective communication with executive management and audit
              committees.
            </li>
            <li>
              Design of effective internal controls and process improvements.
            </li>
          </ul>
          <h3>Professional Experience:</h3>
          <h4>
            UC Berkeley Extension Full Stack Coding Boot Camp (12/22 to present)
          </h4>
          <h5>Student</h5>
          <ul>
            <li>
              Understand the process of serving a webpage and how the browser
              renders code
            </li>
            <li>
              Build front-end websites from scratch, as well as with ready-made
              frameworks
            </li>
            <li>
              Create full-stack, single-page web applications with RESTful
              routes{" "}
            </li>
            <li>
              Generate dynamic content and implement user-authentication schemes
              by incorporating different types of databases like MySQL and
              MongoDB
            </li>
            <li>
              Develop apps while applying the accepted and standard basics of
              social coding—source control, issue tracking, functional feedback,
              etc.
            </li>
            <li>
              Run through the entire development cycle of complex projects in
              both independent and collaborative settings
            </li>
            <li>
              Experience with HTML, CSS, JavaScript, Node.js, React, MySql,
              MongoDb, Express
            </li>
          </ul>

          <h4>Marqeta, Inc. – Oakland, Ca (2/19 to 12/22)</h4>
          <h5>Corporate Controller</h5>
          
          <h4>Lending Club – San Francisco, CA (12/13 to 2/19)</h4>
          <h5>Chief Audit Executive (10/17 to 2/19)</h5>
          
          <h5>
            Senior Vice President – Principal Accounting Officer and Corporate
            Controller (12/13 to 8/17)
          </h5>
          
          <h4>Charles Schwab– San Francisco, CA (2/00 to 12/13)</h4>
          <h5>
            Vice President, Finance / Controller of Schwab Bank (2006 – 2013)
          </h5>
          
          <h5>
            External SEC Reporting / Accounting Policy / Controller of Schwab
            Bank
          </h5>
          
          <h4>
            KPMG LLP – San Francisco, CA and Sydney, Australia (9/93 – 2/00)
          </h4>
          <h5>Manager</h5>
          
          <h3>Education / Certification:</h3>
          <h4>University of San Francisco, San Francisco, CA</h4>
          <h5>
            Bachelor of Science in Business Administration with a concentration
            in accounting
          </h5>
          <h4>Certified Public Accountant - license #81150(inactive)</h4>
        </div>
      </div>
    </div>
  );
}
