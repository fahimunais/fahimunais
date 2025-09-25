import React from 'react';
import './Education.css';

const Education = () => {
  return (
    <section id="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education-card fade-in">
          <div className="education-period">2019 - 2023</div>
          <h3 className="education-degree">B.Tech in Information Technology</h3>
          <div className="education-institution">College of Engineering Thalassery</div>
          <div className="education-details">
            <p>Completed my Bachelor of Technology degree with a focus on cutting-edge information technology concepts and applications. During my academic journey, I developed strong foundations in:</p>
            <ul style={{marginTop: '1rem', marginLeft: '1.5rem', color: 'var(--text-tertiary)'}}>
              <li>Artificial Intelligence & Machine Learning</li>
              <li>Data Structures & Algorithms</li>
              <li>Natural Language Processing</li>
              <li>Computer Networks</li>
              <li>Database Management Systems</li>
              <li>Web Development Technologies</li>
            </ul>
            <p style={{marginTop: '1rem'}}>Participated in numerous technical workshops and hackathons, enhancing my problem-solving abilities and collaborative coding skills while working on real-world projects.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
