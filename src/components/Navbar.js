import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-content">
        <a href="#home" className="logo" onClick={(e) => { e.preventDefault(); scrollToSection('#home'); }}>
          Muhammed<span>Fahim</span>
        </a>
        <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('#home'); }}>Home</a></li>
          <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('#about'); }}>About</a></li>
          <li><a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('#skills'); }}>Skills</a></li>
          <li><a href="#education" onClick={(e) => { e.preventDefault(); scrollToSection('#education'); }}>Education</a></li>
          <li><a href="#experience" onClick={(e) => { e.preventDefault(); scrollToSection('#experience'); }}>Experience</a></li>
          <li><a href="#projects" onClick={(e) => { e.preventDefault(); scrollToSection('#projects'); }}>Projects</a></li>
          <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('#contact'); }}>Contact</a></li>
        </ul>
        <button 
          className="mobile-nav-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? '✕' : '☰'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
