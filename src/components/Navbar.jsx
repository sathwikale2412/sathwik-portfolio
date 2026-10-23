import React, { useState, useEffect } from 'react';
import { Github, Menu, X, Volume2, VolumeX } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { setAudioEnabled, isAudioEnabled, playClickSound } from '../utils/audio';

export default function Navbar() {
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
            <span className="brand-role-mini">VBIT • B.Tech CSE (2028)</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="nav-links hide-mobile">
          <a href="#projects" className="nav-link" onClick={() => playClickSound()}>Projects</a>
          <a href="#benchmark" className="nav-link" onClick={() => playClickSound()}>Reaction Test</a>
          <a href="#education" className="nav-link" onClick={() => playClickSound()}>Education</a>
          <a href="#terminal" className="nav-link" onClick={() => playClickSound()}>Terminal CLI</a>
          <a href="#skills" className="nav-link" onClick={() => playClickSound()}>Skills</a>
          <a href="#architecture" className="nav-link" onClick={() => playClickSound()}>Architecture</a>
          <a href="#contact" className="nav-link" onClick={() => playClickSound()}>Contact</a>

          {/* Sound FX Synthesizer Toggle */}
          <button
            onClick={toggleSound}
            className={`sound-toggle-btn ${soundOn ? 'sound-active' : ''}`}
            title="Toggle Synthesizer Sci-Fi Interface Sound FX"
          >
            {soundOn ? <Volume2 size={14} color="var(--mint)" /> : <VolumeX size={14} />}
            <span>{soundOn ? 'SFX: ON' : 'SFX: OFF'}</span>
          </button>

          {/* GitHub CTA */}
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-btn-github"
            onClick={() => playClickSound()}
          >
            <Github size={15} />
            <span>GitHub</span>
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
          <a href="#benchmark" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>Reaction Benchmark</a>
          <a href="#education" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>Education</a>
          <a href="#terminal" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>Terminal CLI</a>
          <a href="#skills" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>Skills</a>
          <a href="#architecture" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>Architecture</a>
          <a href="#contact" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>Contact</a>
          <button onClick={toggleSound} className="mobile-link sound-toggle-btn" style={{ justifyContent: 'center' }}>
            {soundOn ? <Volume2 size={16} color="var(--mint)" /> : <VolumeX size={16} />}
            <span>{soundOn ? 'Audio FX: Enabled' : 'Audio FX: Disabled'}</span>
          </button>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-link"
            style={{ color: 'var(--mint)' }}
          >
            GitHub ({personalInfo.handle})
          </a>
        </div>
      )}
    </nav>
  );
}
