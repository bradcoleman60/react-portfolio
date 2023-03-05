import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Portfolio.css';



export default function Projects() {
  return (
    <section class="main-container">
        
{/* Container_1 includes the marquee project and is the most prominent on the  */}
{/* page.  */}

    <section class="container_1" id="main-project">
        <a href="https://bradcoleman60.github.io/GitYourGameOn/" target="_blank">
        <div class="card_1">
            <h1>GitYourGameOn</h1>
            <p>My first team project building a site from scratch </p>
        </div>
        </a>
    </section>

{/* <!-- Container_2 includes the other noteable projects --> */}

    <section class="container_2">
        
        <a href="https://bradcoleman60.github.io/prework-study-guide/" target="_blank">
            <div class="card_3">
                <h1>Pre Work Site</h1>
                <p>My first static webpage using HTML and CSS and a little Java Script.</p>
            </div>
        </a>

        <a href="https://bradcoleman60.github.io/landing-page-two/" target="_blank">
            <div class="card_2">
                <h1>First Landing Page </h1>
                <p>Creation of my First Landing Page.</p>
            </div>
        </a>

        <a href="https://bradcoleman60.github.io/marketing-refactor/" target="_blank">
            <div class="card_2">
                <h1>Code Refactor</h1>
                <p>In this project I refactored existing HMTL and CSS to add semantic elements and instituted aaccessibility standards.</p>
            </div>
        </a>

        <a href="#" target="_blank">
            <div class="card_2">
                <h1>React</h1>
                <p>Coming Soon.</p>
            </div>
        </a>
       
    </section>
 
</section>
  );
}
