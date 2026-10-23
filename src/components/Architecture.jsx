import React from 'react';
import { Lock, ShieldCheck, Key, WifiOff } from 'lucide-react';
import { architecturePrinciples } from '../data/portfolioData';

export default function Architecture() {
  const getPrincipleIcon = (idx) => {
    switch (idx) {
      case 0:
        return <Lock size={20} color="var(--cyan)" />;
      case 1:
        return <ShieldCheck size={20} color="var(--emerald)" />;
      case 2:
        return <Key size={20} color="var(--purple)" />;
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
          <span className="section-tag">// Engineering Philosophy</span>
          <h2 className="section-title">Architectural Standards</h2>
          <p className="section-desc">
            Foundational design patterns implemented across all applications to ensure data integrity, resilience, and user privacy.
          </p>
        </div>

        <div className="principles-grid">
          {architecturePrinciples.map((principle, idx) => (
            <div key={idx} className="principle-card">
              <h3 className="principle-title">
                {getPrincipleIcon(idx)}
                <span>{principle.title}</span>
              </h3>
              <p className="principle-desc">{principle.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
