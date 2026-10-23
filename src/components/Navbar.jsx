import React, { useState } from 'react';
import { Github, Menu, X, Terminal, Cpu } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container nav-content">
        {/* Brand with Sathwik's Custom Pixel-Art Logo */}
        <a href="#" className="nav-brand">
          <div className="brand-logo-container">
            <img
              src="/sathwik-logo.png"
              alt="Sathwik Cyber Logo"
              className="brand-logo-img"
            />
          </div>
          <div className="brand-text-col">
            <span className="brand-name">{personalInfo.name}</span>
            <span className="brand-role-mini">VBIT • B.Tech CSE</span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="nav-links hide-mobile">
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#education" className="nav-link">Education</a>
          <a href="#terminal" className="nav-link">Terminal CLI</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#architecture" className="nav-link">Architecture</a>
          <a href="#contact" className="nav-link">Contact</a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-btn-github"
          >
            <Github size={15} />
            <span>GitHub</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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
          <a href="#education" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>Education</a>
          <a href="#terminal" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>Terminal CLI</a>
          <a href="#skills" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>Skills</a>
          <a href="#architecture" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>Architecture</a>
          <a href="#contact" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>Contact</a>
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
