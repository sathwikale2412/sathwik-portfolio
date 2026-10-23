import React from 'react';
import { X, ExternalLink, Github, Shield, Cpu, Layers, CheckCircle2 } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        {/* Modal Header */}
        <div className="modal-header">
          <div>
            <div className="modal-badge-row">
              <span className="project-category-badge">{project.category}</span>
              {project.featured && <span className="featured-pill">Featured Production</span>}
            </div>
            <h2 className="modal-title">{project.title}</h2>
            <p className="modal-subtitle">{project.subtitle}</p>
          </div>
          <button onClick={onClose} className="modal-close-btn" aria-label="Close modal">
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          {/* Executive Overview */}
          <div className="modal-section">
            <div className="modal-section-title">
              <Cpu size={16} color="var(--mint)" />
              <span>System Purpose & Problem Statement</span>
            </div>
            <p className="modal-text">{project.description}</p>
          </div>

          {/* Architecture Deep Dive */}
          <div className="modal-section">
            <div className="modal-section-title">
              <Layers size={16} color="var(--teal)" />
              <span>Architectural Topology & Data Lifecycle</span>
            </div>
            <p className="modal-text">{project.systemArchitecture}</p>
          </div>

          {/* Security Hardening */}
          <div className="modal-section">
            <div className="modal-section-title">
              <Shield size={16} color="var(--amethyst)" />
              <span>Security Controls & Defense-in-Depth</span>
            </div>
            <p className="modal-text">{project.securityDetails}</p>
          </div>

          {/* Key Milestones / Highlights */}
          <div className="modal-section">
            <div className="modal-section-title">
              <CheckCircle2 size={16} color="var(--amber)" />
              <span>Core Operational Highlights</span>
            </div>
            <div className="modal-highlights-grid">
              {project.highlights.map((item, idx) => (
                <div key={idx} className="modal-highlight-item">
                  <span className="modal-bullet">›</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Detailed Technology Stack & Component Roles */}
          <div className="modal-section">
            <div className="modal-section-title">
              <Cpu size={16} color="var(--mint)" />
              <span>Full Technology Matrix & Implementation Roles</span>
            </div>
            <div className="modal-tech-table">
              {project.techStack.map((tech, idx) => (
                <div key={idx} className="modal-tech-row">
                  <span className="tech-badge-primary">{tech.name}</span>
                  <span className="tech-role-desc">{tech.role}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="modal-footer">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <ExternalLink size={15} />
              <span>Launch Live System</span>
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <Github size={15} />
              <span>Inspect Source Repository</span>
            </a>
          )}
          <button onClick={onClose} className="btn-ghost">
            Close Inspector
          </button>
        </div>
      </div>
    </div>
  );
}
