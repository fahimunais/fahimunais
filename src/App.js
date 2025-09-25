import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ChatWidget from './components/ChatWidget';
import ParticleBackground from './components/ParticleBackground';
import useScrollAnimation from './hooks/useScrollAnimation';
import './App.css';

function App() {
  useScrollAnimation();

  return (
    <Router>
      <div className="App">
        <ParticleBackground />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Education />
          <Experience />
          <Projects />
          <Contact />
        </main>
        <Footer />
        <ChatWidget />
      </div>
    </Router>
  );
}

export default App;
