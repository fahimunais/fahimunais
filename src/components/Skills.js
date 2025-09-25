import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = [
    {
      icon: '🤖',
      name: 'AI Voicebots',
      description: 'Building intelligent voice-driven interfaces that understand and respond naturally'
    },
    {
      icon: '💬',
      name: 'RASA NLP',
      description: 'Developing context-aware conversational agents with open-source framework'
    },
    {
      icon: '📞',
      name: 'Asterisk & Telephony',
      description: 'Integrating AI systems with advanced telecommunication infrastructure'
    },
    {
      icon: '🧠',
      name: 'LLMs',
      description: 'Working with cutting-edge language models (GPT, Mistral) for intelligent applications'
    },
    {
      icon: '📚',
      name: 'RAG Systems',
      description: 'Building Retrieval-Augmented Generation pipelines for knowledge-intensive tasks'
    },
    {
      icon: '🔮',
      name: 'Agentic AI',
      description: 'Creating autonomous AI agents that can reason, plan and execute tasks'
    },
    {
      icon: '🐍',
      name: 'Python',
      description: 'Expert-level programming for AI/ML application development'
    },
    {
      icon: '🔄',
      name: 'Open Source Tech',
      description: 'Leveraging Ollama, Hugging Face, and other OSS tools for AI projects'
    }
  ];

  return (
    <section id="skills">
      <div className="container">
        <h2 className="section-title">My Expertise</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className={`skill-card fade-in delay-${(index % 4) + 1}`}>
              <div className="skill-icon">{skill.icon}</div>
              <h3 className="skill-name">{skill.name}</h3>
              <p className="skill-desc">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
