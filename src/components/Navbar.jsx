import React from 'react';
import { Terminal, Github, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container nav-content">
        <a href="#" className="nav-brand">
          <div className="brand-icon">
            <Terminal size={18} />
          </div>
          <span>Ale Sathwik Netha</span>
        </a>

        <div className="nav-links">
          <a href="#projects" className="nav-link">Projects</a>
          <a href="#skills" className="nav-link">Skills</a>
          <a href="#architecture" className="nav-link">Architecture</a>
          <a href="#contact" className="nav-link">Contact</a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
            style={{ padding: '0.45rem 0.95rem', fontSize: '0.82rem' }}
          >
            <Github size={15} />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
