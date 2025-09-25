import React from 'react';
import './About.css';
import ProfileCard from './ProfileCard';

const About = () => {
  const scrollToSection = (sectionId) => {
    const element = document.querySelector(sectionId);
    if (element) {
      const y = element.getBoundingClientRect().top + window.pageYOffset - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-grid">
          <div className="about-image glow no-frame" style={{borderRadius: '1rem', overflow: 'hidden'}}>
            <ProfileCard
              name="Muhammed Fahim"
              title="AI Engineer"
              handle="fahim"
              status="Online"
              contactText="Contact Me"
              avatarUrl="/images/fahim.jpg"
              showUserInfo={true}
              enableTilt={true}
              minimal={false}
              onContactClick={() => scrollToSection('#contact')}
            />
          </div>
          <div className="about-content">
            <p>I'm an AI enthusiast with hands-on experience in conversational AI, NLP, and telephony systems. My expertise lies in designing AI-powered voicebots using RASA and integrating them with telephony backends.</p>
            <p>With a strong foundation in Large Language Models (LLMs), Retrieval-Augmented Generation (RAG), and Agentic AI systems, I specialize in deploying scalable AI architectures in real-world environments that solve practical problems.</p>
            <p>Currently working at astTECS Communication Pvt Ltd as an AI/ML Engineer, I'm passionate about pushing the boundaries of what AI can accomplish in business contexts while maintaining a focus on usability and practical implementation.</p>
            <p>I graduated with a B.Tech in Information Technology from College of Engineering Thalassery in 2023, where I developed a strong foundation in computer science principles and specialized in AI/ML technologies.</p>
            <div className="about-buttons">
              <button 
                type="button"
                className="btn"
                onClick={() => scrollToSection('#contact')}
              >
                Let's Connect
              </button>
              <a 
                href="/files/Muhammed_Fahim_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
                title="Download CV"
              >
                Download CV <i className="fas fa-download"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

