import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Education from './components/Education';
import InteractiveTerminal from './components/InteractiveTerminal';
import Skills from './components/Skills';
import Architecture from './components/Architecture';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="app-container">
      {/* 3D Ambient Cyber Atmosphere */}
      <div className="ambient-scanline" />
      <div className="ambient-grid-cyber" />
      <div className="ambient-glow-mint" />
      <div className="ambient-glow-teal" />

      {/* Navigation */}
      <Navbar />

      {/* Main Intellectual Content */}
      <main>
        <Hero />
        <Projects />
        <Education />
        <InteractiveTerminal />
        <Skills />
        <Architecture />
        <Contact />
      </main>

      {/* Live IST Telemetry Footer */}
      <Footer />
    </div>
  );
}
