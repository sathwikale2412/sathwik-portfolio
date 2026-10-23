import React, { useState } from 'react';
import { Code2, Server, Database, Shield, Smartphone, Layers, CheckCircle2 } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';
import TiltCard from './TiltCard';

export default function Skills() {
  const [activeTab, setActiveTab] = useState(0);

  const getCategoryIcon = (name) => {
    switch (name) {
      case 'Frontend Engineering':
        return <Code2 size={18} color="var(--mint)" />;
      case 'Backend & Microservices':
        return <Server size={18} color="var(--teal)" />;
      case 'Databases & Cloud Architecture':
        return <Database size={18} color="var(--amber)" />;
      case 'Security & Zero-Trust':
        return <Shield size={18} color="var(--amethyst)" />;
      case 'Mobile & Tooling':
        return <Smartphone size={18} color="var(--mint)" />;
      default:
        return <Code2 size={18} />;
    }
  };

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className="section-header">
          <div className="terminal-pill">
            <span className="pill-dot"></span>
            <span>// VERIFIED_STACK_CAPABILITIES</span>
          </div>
          <h2 className="section-title">Technical Skill Matrix</h2>
          <p className="section-desc">
            Granular breakdown of production frameworks, distributed backend runtimes, database isolation systems, and cryptographic protocols.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="filter-tabs">
          {skillCategories.map((cat, idx) => (
            <button
              key={idx}
              className={`filter-btn ${activeTab === idx ? 'active' : ''}`}
              onClick={() => setActiveTab(idx)}
            >
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Active Category Display */}
        <div className="skills-detailed-container">
          <TiltCard className="skills-active-card">
            <div className="skills-active-header">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div className="category-icon-orb">
                  {getCategoryIcon(skillCategories[activeTab].name)}
                </div>
                <div>
                  <h3 className="category-title-text">{skillCategories[activeTab].name}</h3>
                  <span className="category-count-badge">
                    {skillCategories[activeTab].skills.length} Specialized Disciplines
                  </span>
                </div>
              </div>
            </div>

            <div className="skills-table-grid">
              {skillCategories[activeTab].skills.map((item, idx) => (
                <div key={idx} className="skill-detailed-row">
                  <div className="skill-row-top">
                    <span className="skill-item-name">{item.name}</span>
                    <span
                      className={`skill-level-badge level-${item.level.toLowerCase()}`}
                    >
                      {item.level}
                    </span>
                  </div>
                  <p className="skill-item-desc">{item.desc}</p>
                </div>
              ))}
            </div>
          </TiltCard>
        </div>

        {/* All Skill Quick Pills */}
        <div className="all-skills-overview">
          <div className="skills-grid">
            {skillCategories.map((cat, idx) => (
              <div key={idx} className="skill-category-card" onClick={() => setActiveTab(idx)}>
                <h4 className="category-name">
                  {getCategoryIcon(cat.name)}
                  <span>{cat.name}</span>
                </h4>
                <div className="category-items">
                  {cat.skills.map((s, sIdx) => (
                    <div key={sIdx} className="skill-pill">
                      <span>{s.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
