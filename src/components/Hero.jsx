import React from 'react';
import { ArrowRight, Github, Mail, ShieldCheck, Cpu, Terminal, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import ThreeCanvas from './ThreeCanvas';

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="container hero-layout">
        {/* Left Column: Intellectual Dossier */}
        <div className="hero-content-col">
          {/* Status Badge */}
          <div className="status-badge">
            <span className="status-dot"></span>
            <span>{personalInfo.status}</span>
          </div>

          {/* Holographic Pixel Title Header */}
          <div className="hero-brand-reticle">
            <img
              src="/sathwik-logo.png"
              alt="Sathwik Reticle"
              className="hero-logo-badge"
            />
            <span className="hero-reticle-tag">ENGINEER DOSSIER // NODE: VBIT-CSE-2028</span>
          </div>

          <h1 className="hero-title">{personalInfo.name}</h1>
          <p className="hero-subtitle">{personalInfo.title}</p>
          <p className="hero-desc">{personalInfo.bio}</p>

          {/* Action CTAs */}
          <div className="hero-buttons">
            <a href="#projects" className="btn-primary">
              <span>Inspect Systems</span>
              <ArrowRight size={16} />
            </a>
            <a href="#terminal" className="btn-secondary">
              <Terminal size={16} />
              <span>Launch Terminal CLI</span>
            </a>
            <a href="#education" className="btn-secondary">
              <Cpu size={16} />
              <span>Education Log</span>
            </a>
          </div>

          {/* Quantitative Metrics Ribbon */}
          <div className="stats-ribbon">
            {personalInfo.stats.map((stat, idx) => (
              <div key={idx} className="stat-item">
                <div className="stat-number">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
                <div className="stat-detail-sub">{stat.detail}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Interactive 3D Holographic Model */}
        <div className="hero-3d-col">
          <div className="hero-3d-card">
            <div className="hero-3d-header">
              <div className="dot-cluster">
                <span className="h-dot"></span>
                <span className="h-dot"></span>
                <span className="h-dot"></span>
              </div>
              <span className="h-title">QUANTUM 3D SIMULATION ENGINE</span>
              <span className="h-badge">WEBGL // THREE.JS</span>
            </div>

            <ThreeCanvas />

            <div className="hero-3d-footer">
              <Sparkles size={13} color="var(--mint)" />
              <span>Click & Drag or Move Cursor to Manipulate 3D Spatial Vector Field</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
