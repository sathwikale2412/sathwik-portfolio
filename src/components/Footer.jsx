import React, { useState, useEffect } from 'react';
import { ArrowUp, Terminal, Clock } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const [istTime, setIstTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const options = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setIstTime(new Intl.DateTimeFormat('en-IN', options).format(new Date()));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            paddingBottom: '1.5rem',
            marginBottom: '1.5rem',
            borderBottom: '1px solid var(--border-color)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <div className="brand-icon" style={{ width: '28px', height: '28px' }}>
              <Terminal size={14} />
            </div>
            <span style={{ fontWeight: 700, color: '#fff' }}>{personalInfo.name}</span>
          </div>

          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.78rem',
              color: 'var(--text-muted)',
              background: 'rgba(255, 255, 255, 0.03)',
              padding: '0.35rem 0.75rem',
              borderRadius: '9999px',
              border: '1px solid var(--border-color)',
            }}
          >
            <Clock size={13} color="var(--cyan)" />
            <span>Hyderabad, IST: {istTime || 'Live'}</span>
          </div>

          <button
            onClick={scrollToTop}
            className="btn-secondary"
            style={{ padding: '0.4rem 0.8rem', fontSize: '0.78rem' }}
          >
            <ArrowUp size={13} />
            <span>Back to top</span>
          </button>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
          <p>© {new Date().getFullYear()} Ale Sathwik Netha. All rights reserved.</p>
          <p style={{ color: 'var(--text-dim)' }}>
            Engineered with React 19, Vite & CSS3 • High-Performance Static Deployment
          </p>
        </div>
      </div>
    </footer>
  );
}
