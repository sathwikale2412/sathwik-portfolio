import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import CryptoSandbox from './components/CryptoSandbox';
import ReactionTest from './components/ReactionTest';
import Education from './components/Education';
import InteractiveTerminal from './components/InteractiveTerminal';
import Skills from './components/Skills';
import Architecture from './components/Architecture';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CyberCursor from './components/CyberCursor';
import ProjectModal from './components/ProjectModal';
import BootLoader from './components/BootLoader';
import MatrixRain from './components/MatrixRain';

export default function App() {
  const [activeModalProject, setActiveModalProject] = useState(null);
  const [ambientMode, setAmbientMode] = useState('grid'); // 'grid' | 'matrix' | 'void'
  const [showBootLoader, setShowBootLoader] = useState(true);

  return (
    <div className={`app-container ambient-${ambientMode}`}>
      {/* Cybernetic Logo Bootloader Screen */}
      {showBootLoader && (
        <BootLoader onComplete={() => setShowBootLoader(false)} />
      )}

      {/* Interactive Cybernetic Reticle Cursor */}
      <CyberCursor />

      {/* Dynamic Ambient Background Engine */}
      {ambientMode === 'matrix' && <MatrixRain mode="matrix" />}
      {ambientMode === 'grid' && (
        <>
          <div className="ambient-scanline" />
          <div className="ambient-grid-cyber" />
          <div className="ambient-glow-mint" />
          <div className="ambient-glow-teal" />
        </>
      )}
      {ambientMode === 'void' && (
        <div className="ambient-void-stars" />
      )}

      {/* Navigation with Ambient & Audio Visualizer Controls */}
      <Navbar ambientMode={ambientMode} setAmbientMode={setAmbientMode} />

      {/* Main Intellectual Content */}
      <main>
        {/* Hero with Functional 3D Galaxy Navigator */}
        <Hero onSelectProject={(p) => setActiveModalProject(p)} />

        {/* Shipped Applications */}
        <Projects
          activeModalProject={activeModalProject}
          setActiveModalProject={setActiveModalProject}
        />

        {/* Live On-Device Cryptography Sandbox (CypherCore Engine) */}
        <section id="crypto-sandbox" className="section" style={{ background: 'rgba(2, 6, 4, 0.65)' }}>
          <div className="container">
            <div className="section-header">
              <div className="terminal-pill">
                <span className="pill-dot"></span>
                <span>// ON_DEVICE_CRYPTOGRAPHIC_RUNTIME</span>
              </div>
              <h2 className="section-title">Live Zero-Knowledge Crypto Sandbox</h2>
              <p className="section-desc">
                Interactive client-side implementation of the Web Crypto API (AES-GCM-256 with 100k-iteration PBKDF2 salt derivation) engineered for the BuildSecure CypherCore vault.
              </p>
            </div>
            <CryptoSandbox />
          </div>
        </section>

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

        {/* Academic Discipline & Education History */}
        <Education />

        {/* Interactive CLI Console */}
        <InteractiveTerminal />

        {/* Skills Matrix */}
        <Skills />

        {/* Architecture Principles */}
        <Architecture />

        {/* Direct Channels & Send A Direct Message */}
        <Contact />
      </main>

      {/* Live Telemetry Footer with Replay Boot Sequence */}
      <Footer onReplayBoot={() => setShowBootLoader(true)} />

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
