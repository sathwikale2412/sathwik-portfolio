import React, { useState } from 'react';
import { ExternalLink, Github, Sparkles, ChevronRight, Layers } from 'lucide-react';
import { projects } from '../data/portfolioData';

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Cloud & AI', 'Security & Systems', 'Full Stack', 'Mobile'];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">// Shipped Applications</span>
          <h2 className="section-title">Production & Open Source Work</h2>
          <p className="section-desc">
            A portfolio of production web applications, secure client-server architectures, and cognitive tools built with clean code and zero-trust engineering.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="filter-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <article key={project.id} className="project-card">
              <div className="project-top">
                <span className="project-category-badge">{project.category}</span>
                {project.featured && (
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.25rem',
                      fontSize: '0.72rem',
                      color: 'var(--amber)',
                      background: 'rgba(245, 158, 11, 0.1)',
                      border: '1px solid rgba(245, 158, 11, 0.3)',
                      padding: '0.15rem 0.45rem',
                      borderRadius: '6px',
                    }}
                  >
                    <Sparkles size={11} /> Featured
                  </span>
                )}
              </div>

              <h3 className="project-title">{project.title}</h3>
              <p className="project-subtitle">{project.subtitle}</p>
              <p className="project-desc">{project.description}</p>

              {/* Highlights */}
              <div className="project-highlights">
                {project.highlights.map((item, idx) => (
                  <div key={idx} className="highlight-item">
                    <ChevronRight size={13} className="highlight-bullet" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Tech Stack Tags */}
              <div className="tech-tags">
                {project.techStack.map((tech, idx) => (
                  <span key={idx} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Links */}
              <div className="project-links">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-link card-link-live"
                  >
                    <ExternalLink size={14} />
                    <span>Live App</span>
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-link card-link-repo"
                  >
                    <Github size={14} />
                    <span>GitHub</span>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
