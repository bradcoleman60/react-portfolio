import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

//Apply css styling in line - note the use of camel case for the css properties as required by React
const styles = {
  navbarStyle: {
    background: 'blue',
    justifyContent: 'flex-end',
    display: 'flex',
    fontSize: '30px',
    
  },
  linkStyle: {
    textDecoration: 'none',
    color: "red",
    background: 'blue'
  },
  navbarNameStyle: {
    background: 'blue',
    display: 'flex',
    fontSize: '30px',
    color: 'red'
  }
};

// Here we are using object destructuring assignment to obtain variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
    
    <nav style={styles.navbarStyle} className="navbar fixed-top">
      <div className='container-fluid'style={styles.navbarNameStyle} >
    <div className='navbar-brand' style={styles.navbarNameStyle}>Brad Coleman
    </div>
       
    
    <ul className="nav">
      
      <li className="nav-item">
        <a
        style={styles.linkStyle}
          href="#about"
          onClick={() => handlePageChange('About')}
          // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About |
        </a>
      </li>
      <li className="nav-item">
        <a
        style={styles.linkStyle}
          href="#project"
          onClick={() => handlePageChange('Projects')}
          // Check to see if the currentPage is `Projects`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
        >
          My Projects |
        </a>
      </li>
      <li className="nav-item">
        <a
        style={styles.linkStyle}
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact |
        </a>
      </li>
      <li className="nav-item">
        <a
        style={styles.linkStyle}
          href="#resume"
          onClick={() => handlePageChange('Resume')}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
      </li>
      
    </ul>
    </div>
    </nav>
   
    );
}

export default NavTabs;
