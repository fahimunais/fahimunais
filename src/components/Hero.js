import React, { useRef } from 'react';
import './Hero.css';
import VariableProximity from './VariableProximity';

const Hero = () => {
  const containerRef = useRef(null);

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="container">
        <div ref={containerRef} className="hero-content fade-in">
          <h1 className="hero-title" style={{lineHeight: '1.2'}}>
            <VariableProximity
              label={"Hi, I'm"}
              className={"vp-heading"}
              fromFontVariationSettings="'wght' 650, 'opsz' 22"
              toFontVariationSettings="'wght' 950, 'opsz' 40"
              containerRef={containerRef}
              radius={120}
              falloff='exponential'
            />
            <span> </span>
            <VariableProximity
              label={"Muhammed Fahim"}
              className={"vp-heading hero-name"}
              fromFontVariationSettings="'wght' 700, 'opsz' 24"
              toFontVariationSettings="'wght' 980, 'opsz' 44"
              containerRef={containerRef}
              radius={120}
              falloff='exponential'
            />
            <span> </span>
            <VariableProximity
              label={"AI Engineer & ML Specialist"}
              className={"vp-heading"}
              fromFontVariationSettings="'wght' 650, 'opsz' 22"
              toFontVariationSettings="'wght' 950, 'opsz' 40"
              containerRef={containerRef}
              radius={120}
              falloff='exponential'
            />
          </h1>
          <p>I design and build advanced AI solutions including conversational agents, voice systems, and intelligent automation with focus on practical implementation of cutting-edge technologies.</p>
          <div>
            <button 
              className="btn" 
              onClick={() => scrollToSection('#contact')}
            >
              Get in Touch
            </button>
            <button 
              className="btn btn-outline" 
              onClick={() => scrollToSection('#projects')}
            >
              View My Work
            </button>
            <a 
              href="/files/Muhammed_Fahim_CV.pdf" 
              download 
              className="btn btn-download"
            >
              Download CV <i className="fas fa-download"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

