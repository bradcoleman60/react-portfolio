import React from 'react';

import '../styles/About.css';

export default function About() {
  return (
    <div className="container">
      <div className='row'>
        <div className='col-4'>
          <img src={process.env.PUBLIC_URL + '/images/bc.JPG'} alt='Brad Coleman' width="120%"></img>
          </div>
      <div className='col-8'>
      <h1>About Me</h1>
      <h3>
      My name is Brad Coleman. I am new to web development but have considered it a hobby for several years and have hacked my way through learning various aspects including php, html and mysql.  I am currently enrolled in the Cal Berkeley Extension Web Development Boot camp and am excited to learn web development more holistically.  I have spent my earlier career working as a corporate controller / CPA.
      </h3>
    </div>
    </div>
    </div>
  );
}
