import React from 'react';
import { Lock, ShieldCheck, Key, WifiOff, Terminal, ArrowUpRight } from 'lucide-react';
import { architecturePrinciples } from '../data/portfolioData';
import TiltCard from './TiltCard';

export default function Architecture() {
  const getPrincipleIcon = (idx) => {
    switch (idx) {
      case 0:
        return <Lock size={20} color="var(--mint)" />;
      case 1:
        return <ShieldCheck size={20} color="var(--teal)" />;
      case 2:
        return <Key size={20} color="var(--amethyst)" />;
      case 3:
        return <WifiOff size={20} color="var(--amber)" />;
      default:
        return <ShieldCheck size={20} />;
    }
  };

  return (
    <section id="architecture" className="section">
      <div className="container">
        <div className="section-header">
          <div className="terminal-pill">
            <span className="pill-dot"></span>
            <span>// SYSTEM_INTEGRITY_SPECS</span>
          </div>
          <h2 className="section-title">Architectural Standards & Security Principles</h2>
          <p className="section-desc">
            Foundational design patterns implemented across all applications to ensure data isolation, zero-knowledge privacy, and fail-closed resilience.
          </p>
        </div>

        <div className="principles-grid">
          {architecturePrinciples.map((principle, idx) => (
            <TiltCard key={principle.id} className="principle-card">
              <div className="principle-card-inner">
                <div className="principle-top-row">
                  <div className="principle-icon-wrap">{getPrincipleIcon(idx)}</div>
                  <span className="principle-spec-tag">{principle.tag}</span>
                </div>

                <h3 className="principle-title">{principle.title}</h3>
                <p className="principle-desc">{principle.description}</p>

                <div className="principle-detail-box">
                  <span className="detail-prefix">IMPLEMENTATION:</span>
                  <p className="principle-detail-text">{principle.detail}</p>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
