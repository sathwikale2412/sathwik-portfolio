import React from 'react';
import { Code2, Server, Database, Shield, Smartphone } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export default function Skills() {
  const getCategoryIcon = (name) => {
    switch (name) {
      case 'Frontend Engineering':
        return <Code2 size={18} color="var(--cyan)" />;
      case 'Backend & Microservices':
        return <Server size={18} color="var(--blue)" />;
      case 'Databases & Cloud Architecture':
        return <Database size={18} color="var(--indigo)" />;
      case 'Security & Zero-Trust':
        return <Shield size={18} color="var(--emerald)" />;
      case 'Mobile & Tooling':
        return <Smartphone size={18} color="var(--purple)" />;
      default:
        return <Code2 size={18} />;
    }
  };

  return (
    <section id="skills" className="section" style={{ background: 'rgba(8, 12, 20, 0.4)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">// Core Competencies</span>
          <h2 className="section-title">Technical Skill Matrix</h2>
          <p className="section-desc">
            Technologies and engineering disciplines leveraged to design, develop, secure, and deploy high-availability software.
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="skill-category-card">
              <h3 className="category-name">
                {getCategoryIcon(cat.name)}
                <span>{cat.name}</span>
              </h3>
              <div className="category-items">
                {cat.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-pill">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
