import React from 'react';
import './Footer.css';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      const y = element.getBoundingClientRect().top + window.pageYOffset - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <footer>
      <div className="container">
        <div className="footer-links">
          <a href="#home" onClick={(e)=>{e.preventDefault();scrollToSection('#home');}} className="footer-link">Home</a>
          <a href="#about" onClick={(e)=>{e.preventDefault();scrollToSection('#about');}} className="footer-link">About</a>
          <a href="#skills" onClick={(e)=>{e.preventDefault();scrollToSection('#skills');}} className="footer-link">Skills</a>
          <a href="#education" onClick={(e)=>{e.preventDefault();scrollToSection('#education');}} className="footer-link">Education</a>
          <a href="#experience" onClick={(e)=>{e.preventDefault();scrollToSection('#experience');}} className="footer-link">Experience</a>
          <a href="#projects" onClick={(e)=>{e.preventDefault();scrollToSection('#projects');}} className="footer-link">Projects</a>
          <a href="#contact" onClick={(e)=>{e.preventDefault();scrollToSection('#contact');}} className="footer-link">Contact</a>
        </div>
        <div className="copyright">
          &copy; 2025 Muhammed Fahim. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

