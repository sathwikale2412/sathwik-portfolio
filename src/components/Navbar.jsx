import React, { useState } from 'react';
import { Github, Menu, X, Volume2, VolumeX, Sparkles, Terminal } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { setAudioEnabled, isAudioEnabled, playClickSound } from '../utils/audio';
import AudioVisualizer from './AudioVisualizer';

export default function Navbar({ ambientMode, setAmbientMode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundOn, setSoundOn] = useState(false);

  const toggleSound = () => {
    const newState = !soundOn;
    setSoundOn(newState);
    setAudioEnabled(newState);
    if (newState) {
      setTimeout(() => playClickSound(), 50);
    }
  };

  const cycleAmbientMode = () => {
    playClickSound();
    const modes = ['grid', 'matrix', 'void'];
    const nextIdx = (modes.indexOf(ambientMode) + 1) % modes.length;
    setAmbientMode(modes[nextIdx]);
  };

  return (
    <nav className="navbar">
      <div className="container nav-content">
        {/* Brand with Sathwik's Custom Pixel-Art Logo */}
        <a href="#" className="nav-brand" onClick={() => playClickSound()}>
          <div className="brand-logo-container">
            <img
              src="/sathwik-logo.png"
              alt="Sathwik Cyber Logo"
              className="brand-logo-img"
            />
          </div>
          <div className="brand-text-col">
            <span className="brand-name">{personalInfo.name}</span>
            <span className="brand-role-mini">VBIT • CSE 2028</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="nav-links hide-mobile">
          <a href="#projects" className="nav-link" onClick={() => playClickSound()}>Projects</a>
          <a href="#crypto-sandbox" className="nav-link" onClick={() => playClickSound()}>Crypto Engine</a>
          <a href="#benchmark" className="nav-link" onClick={() => playClickSound()}>Reaction Test</a>
          <a href="#education" className="nav-link" onClick={() => playClickSound()}>Education</a>
          <a href="#terminal" className="nav-link" onClick={() => playClickSound()}>Terminal</a>
          <a href="#contact" className="nav-link" onClick={() => playClickSound()}>Contact</a>

          {/* Ambient Mode Switcher (Feature D) */}
          <button
            onClick={cycleAmbientMode}
            className="ambient-toggle-pill"
            title="Toggle Ambient Atmosphere: Quantum Grid, Digital Matrix Rain, or Deep Void"
          >
            <Sparkles size={13} color="var(--mint)" />
            <span>MODE: {ambientMode.toUpperCase()}</span>
          </button>

          {/* Sound FX Synthesizer with AudioVisualizer (Feature C) */}
          <div className="nav-sound-cluster">
            <button
              onClick={toggleSound}
              className={`sound-toggle-btn ${soundOn ? 'sound-active' : ''}`}
              title="Toggle Synthesizer Sci-Fi Interface Sound FX"
            >
              {soundOn ? <Volume2 size={13} color="var(--mint)" /> : <VolumeX size={13} />}
              <span>{soundOn ? 'SOUND ON' : 'SOUND OFF'}</span>
            </button>
            <AudioVisualizer isActive={soundOn} />
          </div>

          {/* Internship Status Pill */}
          <div className="open-internships-pill">
            <span className="opp-dot"></span>
            <span>OPEN FOR INTERNSHIPS</span>
          </div>

          {/* Direct CTA */}
          <a
            href="#contact"
            className="btn-lets-talk"
            onClick={() => playClickSound()}
          >
            <span>LET'S TALK</span>
            <span className="arrow-diag">↗</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => {
            playClickSound();
            setMobileMenuOpen(!mobileMenuOpen);
          }}
          className="mobile-nav-toggle show-mobile"
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="mobile-menu-dropdown">
          <a href="#projects" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>Projects</a>
          <a href="#crypto-sandbox" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>Crypto Sandbox</a>
          <a href="#benchmark" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>Reaction Benchmark</a>
          <a href="#education" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>Education</a>
          <a href="#terminal" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>Terminal CLI</a>
          <a href="#contact" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>Contact</a>
          <button onClick={cycleAmbientMode} className="mobile-link ambient-toggle-pill" style={{ justifyContent: 'center' }}>
            <Sparkles size={14} color="var(--mint)" />
            <span>Switch Ambient Mode: {ambientMode.toUpperCase()}</span>
          </button>
          <button onClick={toggleSound} className="mobile-link sound-toggle-btn" style={{ justifyContent: 'center' }}>
            {soundOn ? <Volume2 size={16} color="var(--mint)" /> : <VolumeX size={16} />}
            <span>{soundOn ? 'Audio FX: Enabled' : 'Audio FX: Disabled'}</span>
          </button>
        </div>
      )}
    </nav>
  );
}
