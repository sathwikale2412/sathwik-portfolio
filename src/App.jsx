import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import ReactionTest from './components/ReactionTest';
import Education from './components/Education';
import InteractiveTerminal from './components/InteractiveTerminal';
import Skills from './components/Skills';
import Architecture from './components/Architecture';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CyberCursor from './components/CyberCursor';
import ProjectModal from './components/ProjectModal';

export default function App() {
  const [activeModalProject, setActiveModalProject] = useState(null);

  return (
    <div className="app-container">
      {/* Interactive Cybernetic Reticle Cursor */}
      <CyberCursor />

      {/* 3D Ambient Cyber Atmosphere */}
      <div className="ambient-scanline" />
      <div className="ambient-grid-cyber" />
      <div className="ambient-glow-mint" />
      <div className="ambient-glow-teal" />

      {/* Navigation with Sound FX Toggle */}
      <Navbar />

      {/* Main Intellectual Content */}
      <main>
        {/* Hero with Functional 3D Galaxy Navigator */}
        <Hero onSelectProject={(p) => setActiveModalProject(p)} />

        {/* Shipped Applications */}
        <Projects
          activeModalProject={activeModalProject}
          setActiveModalProject={setActiveModalProject}
        />

        {/* CADAT Live Psychomotor Reaction Benchmark Section */}
        <section id="benchmark" className="section" style={{ background: 'rgba(3, 8, 5, 0.45)' }}>
          <div className="container">
            <div className="section-header">
              <div className="terminal-pill">
                <span className="pill-dot"></span>
                <span>// HARDWARE_ACCELERATED_BENCHMARK</span>
              </div>
              <h2 className="section-title">Live Psychomotor Reaction Drill</h2>
              <p className="section-desc">
                Interactive demonstration of the sub-millisecond reaction timing engine engineered for the CADAT Railway Cognitive Assessment platform.
              </p>
            </div>
            <ReactionTest />
          </div>
        </section>

        {/* Education History */}
        <Education />

        {/* Interactive CLI Console */}
        <InteractiveTerminal />

        {/* Skills Matrix */}
        <Skills />

        {/* Architecture Principles */}
        <Architecture />

        {/* Contact Dispatch */}
        <Contact />
      </main>

      {/* Live Footer */}
      <Footer />

      {/* Deep Inspection Modal (Triggered by 3D Galaxy Nodes or Project Cards) */}
      {activeModalProject && (
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      )}
    </div>
  );
}
