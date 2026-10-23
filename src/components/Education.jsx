import React, { useState } from 'react';
import { GraduationCap, Award, BookOpen, Sparkles, Calendar, ChevronRight, Check } from 'lucide-react';
import { educationHistory } from '../data/portfolioData';
import TiltCard from './TiltCard';

export default function Education() {
  const [selectedIdx, setSelectedIdx] = useState(0);

  return (
    <section id="education" className="section">
      <div className="container">
        <div className="section-header">
          <div className="terminal-pill">
            <span className="pill-dot"></span>
            <span>// ACADEMIC_DISCIPLINE_LOGS</span>
          </div>
          <h2 className="section-title">Academic & Technical Foundations</h2>
          <p className="section-desc">
            Rigorous foundations in Computer Science & Engineering, Advanced Mathematics, and Computational Logic.
          </p>
        </div>

        {/* 3D Education Grid */}
        <div className="education-grid">
          {educationHistory.map((item, idx) => (
            <TiltCard key={idx} className="education-card">
              <div className="education-card-inner">
                {/* Header Row */}
                <div className="edu-top-row">
                  <div className="edu-badge-cluster">
                    <span className="edu-period">
                      <Calendar size={12} />
                      <span>{item.period}</span>
                    </span>
                    <span className="edu-status-tag">{item.status}</span>
                  </div>
                  <div className="edu-grade-pill">
                    <Award size={13} color="var(--mint)" />
                    <span>{item.highlightBadge}</span>
                  </div>
                </div>

                {/* Degree & Institution */}
                <h3 className="edu-degree">{item.degree}</h3>
                <h4 className="edu-dept">{item.department}</h4>
                <div className="edu-inst-name">
                  <GraduationCap size={15} color="var(--teal)" />
                  <span>{item.institution}</span>
                </div>

                <p className="edu-summary">{item.summary}</p>

                {/* Core Subject Modules */}
                <div className="edu-sub-box">
                  <div className="edu-sub-title">
                    <BookOpen size={13} color="var(--amber)" />
                    <span>Core Academic Modules:</span>
                  </div>
                  <div className="edu-tags">
                    {item.coreSubjects.map((sub, sIdx) => (
                      <span key={sIdx} className="edu-tag">
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Highlights */}
                <div className="edu-highlights">
                  {item.technicalHighlights.map((hl, hIdx) => (
                    <div key={hIdx} className="edu-hl-item">
                      <ChevronRight size={13} className="edu-bullet" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>

                {/* Tooling / Disciplines */}
                <div className="edu-tech-row">
                  {item.technologies.map((tech, tIdx) => (
                    <span key={tIdx} className="mini-tech-pill">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
