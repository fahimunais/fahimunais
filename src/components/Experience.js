import React from 'react';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      date: 'April 2024 - Present',
      title: 'AI/ML Engineer',
      company: 'astTECS Communications Pvt Ltd',
      description: [
        'Working on developing advanced AI voicebots and voice agents integrated with telephony systems using Asterisk. Implementing LLM-powered solutions for customer support automation and building RAG pipelines to enhance information access.',
        'Exploring and prototyping Agentic AI solutions for proactive customer engagement while collaborating on end-to-end deployment of AI systems in production environments.'
      ],
      technologies: ['AI Voicebots', 'RASA', 'LLMs', 'RAG', 'Agentic AI', 'Asterisk', 'LiveKit', 'PipeCat', 'Alexa Skills']
    }
  ];

  return (
    <section id="experience">
      <div className="container">
        <h2 className="section-title">Professional Experience</h2>
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-date">{exp.date}</div>
              <h3 className="timeline-title">{exp.title}</h3>
              <div className="timeline-company">{exp.company}</div>
              <div className="timeline-desc">
                {exp.description.map((desc, descIndex) => (
                  <p key={descIndex}>{desc}</p>
                ))}
              </div>
              <div className="timeline-tech">
                {exp.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
