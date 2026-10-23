import React, { useState } from 'react';
import { ExternalLink, Github, Sparkles, ChevronRight, Info } from 'lucide-react';
import { projects } from '../data/portfolioData';
import TiltCard from './TiltCard';
import { playClickSound, playModalSound } from '../utils/audio';

export default function Projects({ activeModalProject, setActiveModalProject }) {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Cloud & AI', 'Security & Systems', 'Full Stack', 'Mobile'];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter((p) => p.category === filter);

  const handleFilterClick = (cat) => {
    playClickSound();
    setFilter(cat);
  };

  const handleInspectClick = (proj) => {
    playModalSound();
    if (setActiveModalProject) {
      setActiveModalProject(proj);
    }
  };

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header">
          <div className="terminal-pill">
            <span className="pill-dot"></span>
            <span>// ARCHITECTED_SYSTEMS (8 PRODUCTION PLATFORMS)</span>
          </div>
          <h2 className="section-title">Production & Open-Source Systems</h2>
          <p className="section-desc">
            Hardened web platforms, zero-knowledge encryption vaults, AI diagnostic utilities, and cognitive drill simulators.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="filter-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => handleFilterClick(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 3D Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <TiltCard key={project.id} className="project-card">
              <div className="project-card-inner">
                {/* Top Badge Row */}
                <div className="project-top">
                  <span className="project-category-badge">{project.category}</span>
                  {project.featured && (
                    <span className="featured-pill">
                      <Sparkles size={11} /> Featured
                    </span>
                  )}
                </div>

                {/* Header */}
                <h3 className="project-title">{project.title}</h3>
                <p className="project-subtitle">{project.subtitle}</p>
                <p className="project-desc">{project.description}</p>

                {/* Key Highlights */}
                <div className="project-highlights">
                  {project.highlights.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="highlight-item">
                      <ChevronRight size={13} className="highlight-bullet" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Chips */}
                <div className="tech-tags">
                  {project.techStack.map((tech, idx) => (
                    <span key={idx} className="tech-tag" title={tech.role}>
                      {tech.name}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="project-links">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card-link card-link-live"
                      onClick={() => playClickSound()}
                    >
                      <ExternalLink size={13} />
                      <span>Live App</span>
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="card-link card-link-repo"
                      onClick={() => playClickSound()}
                    >
                      <Github size={13} />
                      <span>Code</span>
                    </a>
                  )}
                  <button
                    onClick={() => handleInspectClick(project)}
                    className="card-link card-link-inspect"
                    title="Deep System Architecture & Technology Matrix"
                  >
                    <Info size={13} />
                    <span>Deep Specs</span>
                  </button>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
