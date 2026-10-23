import React from 'react';
import { ArrowRight, Github, Mail, Cpu, Terminal, Sparkles, Compass } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import ThreeGalaxyNavigator from './ThreeGalaxyNavigator';
import { playClickSound } from '../utils/audio';

export default function Hero({ onSelectProject }) {
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
            <span className="hero-reticle-tag">OPERATIONAL ARCHITECTURE // NODE: VBIT-CSE-2028</span>
          </div>

          <h1 className="hero-title">{personalInfo.name}</h1>
          <p className="hero-subtitle">{personalInfo.title}</p>
          <p className="hero-desc">{personalInfo.bio}</p>

          {/* Action CTAs */}
          <div className="hero-buttons">
            <a
              href="#projects"
              className="btn-primary"
              onClick={() => playClickSound()}
            >
              <span>Explore 8 Deployed Systems</span>
              <ArrowRight size={16} />
            </a>
            <a
              href="#benchmark"
              className="btn-secondary"
              onClick={() => playClickSound()}
            >
              <Compass size={16} color="var(--mint)" />
              <span>Test Reaction Benchmark</span>
            </a>
            <a
              href="#terminal"
              className="btn-secondary"
              onClick={() => playClickSound()}
            >
              <Terminal size={16} />
              <span>Interactive CLI</span>
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

        {/* Right Column: Functional 3D Spatial System Navigator */}
        <div className="hero-3d-col">
          <div className="hero-3d-card">
            <div className="hero-3d-header">
              <div className="dot-cluster">
                <span className="h-dot"></span>
                <span className="h-dot"></span>
                <span className="h-dot"></span>
              </div>
              <span className="h-title">3D SPATIAL ORBITAL NAVIGATOR</span>
              <span className="h-badge">CLICK NODE TO INSPECT</span>
            </div>

            {/* Functional 3D Galaxy Navigator */}
            <ThreeGalaxyNavigator onSelectProject={onSelectProject} />

            <div className="hero-3d-footer">
              <Sparkles size={13} color="var(--mint)" />
              <span>Interactive: Drag to rotate space • Click any glowing project satellite to inspect</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
