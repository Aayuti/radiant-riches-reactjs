import React from 'react';
import '../styles/Footer.scss'; // Import SCSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-column">
        <h1>CATEGORIES</h1><br />
        <ul>
          <li><a href="#">Web Builder</a></li>
          <li><a href="#">Hosting</a></li>
          <li><a href="#">Data Center</a></li>
          <li><a href="#">Robotic Authentication</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <h1>CONTACT</h1><br />
        <ul>
          <li><a href="#">contact</a></li>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Terms of services</a></li>
          <li><a href="#">Categories</a></li>
          <li><a href="#">About</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
