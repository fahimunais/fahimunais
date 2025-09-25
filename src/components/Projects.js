import React from 'react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Intelligent Voice Agent',
      description: 'A sophisticated AI voice agent powered by LLMs and integrated with telephony systems for natural conversations and customer support automation.',
      image: '/images/aivoiceagent.jpg',
      technologies: ['RASA', 'Asterisk', 'LLMs', 'Python'],
      link: '/project-voice-agent.html'
    },
    {
      title: 'Enterprise RAG System',
      description: 'Retrieval-Augmented Generation system for enterprise knowledge management, providing accurate information retrieval and contextual responses.',
      image: '/images/RAG.jpg',
      technologies: ['LangChain', 'Vector DB', 'LLMs', 'FastAPI'],
      link: '/project-rag-system.html'
    },
    {
      title: 'Autonomous AI Agent',
      description: 'Self-directed AI agent capable of reasoning, planning, and executing complex multi-step tasks with minimal human intervention.',
      image: '/images/agentic.jpg',
      technologies: ['LLM Chains', 'ReAct', 'Tool Use', 'Python'],
      link: '/project-autonomous-agent.html'
    }
  ];

  return (
    <section id="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card glow">
              <div className="project-image">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  width="400" 
                  height="320" 
                  style={{borderRadius: '10px'}} 
                />
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.link} className="project-link">View Details</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
