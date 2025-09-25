import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://formspree.io/f/xanonqjl', {
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        },
        body: new FormData(e.target)
      });

      if (response.ok) {
        setShowSuccessPopup(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Oops! There was a problem submitting your form. Please try again.');
    }
  };

  return (
    <section id="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact">
          <div className="contact-grid">
            <div className="contact-info">
              <p>I'm currently looking for new opportunities to apply my AI engineering skills. Whether you have a question, a project idea, or just want to connect, I'd love to hear from you!</p>
              <div className="contact-method">
                <div className="contact-icon">📧</div>
                <div>
                  <h3>Email</h3>
                  <p>fahimunais57@gmail.com</p>
                </div>
              </div>
              <div className="contact-method">
                <div className="contact-icon">📱</div>
                <div>
                  <h3>Phone</h3>
                  <p>+91 85477 64880</p>
                </div>
              </div>
              <div className="contact-method">
                <div className="contact-icon">📍</div>
                <div>
                  <h3>Location</h3>
                  <p>Maniyur, Kozhikode, Kerala, India, 673015</p>
                </div>
              </div>
              <div className="social-links">
                <a href="https://github.com/fahimunais" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/fahim-unais-b907b81b7" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://www.instagram.com/faayumm?igsh=N2g2cWZiY2Z1Y21v" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  className="form-control" 
                  placeholder="Your Name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  className="form-control" 
                  placeholder="Your Email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  className="form-control" 
                  placeholder="Subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  className="form-control" 
                  placeholder="Your Message" 
                  value={formData.message}
                  onChange={handleChange}
                  required 
                ></textarea>
              </div>
              <button type="submit" className="btn">Send Message</button>
            </form>
          </div>
        </div>

        {showSuccessPopup && (
          <div className="success-popup show">
            <div className="success-content">
              <div className="success-icon">✓</div>
              <h3>Message Sent!</h3>
              <p>Thank you for reaching out. I'll get back to you as soon as possible.</p>
              <button 
                className="btn" 
                onClick={() => setShowSuccessPopup(false)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;

