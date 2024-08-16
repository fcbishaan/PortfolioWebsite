import React from 'react';
import '../css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Ishaan Vashishth. All rights reserved.</p>
        <div className="social-links">
          <a href="https://github.com/fcbishaan" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;