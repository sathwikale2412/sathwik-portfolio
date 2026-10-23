import React from 'react';
import { ArrowRight, Github, Mail, ShieldCheck, Terminal, Award } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="container">
        {/* Availability Badge */}
        <div className="status-badge">
          <span className="status-dot"></span>
          <span>{personalInfo.status}</span>
        </div>

        {/* Headline */}
        <h1 className="hero-title">{personalInfo.name}</h1>
        <p className="hero-subtitle">{personalInfo.title}</p>
        <p className="hero-desc">{personalInfo.bio}</p>

        {/* Hero CTAs */}
        <div className="hero-buttons">
          <a href="#projects" className="btn-primary">
            <span>Explore Engineering Work</span>
            <ArrowRight size={16} />
          </a>
          <a href="#contact" className="btn-secondary">
            <Mail size={16} />
            <span>Get in Touch</span>
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            <Github size={16} />
            <span>GitHub Profile</span>
          </a>
        </div>

        {/* Stats Ribbon */}
        <div className="stats-ribbon">
          {personalInfo.stats.map((stat, idx) => (
            <div key={idx} className="stat-item">
              <div className="stat-number">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
