import React, { useState, useEffect } from 'react';
import { ArrowUp, Terminal, Clock, RefreshCw } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { playClickSound } from '../utils/audio';

export default function Footer({ onReplayBoot }) {
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
    playClickSound();
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
            borderBottom: '1px solid var(--border-subtle)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <div className="brand-logo-container" style={{ width: '32px', height: '32px' }}>
              <img src="/sathwik-logo.png" alt="Sathwik" className="brand-logo-img" />
            </div>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, color: '#fff' }}>
              {personalInfo.name}
            </span>
          </div>

          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.78rem',
              color: 'var(--text-muted)',
              background: 'rgba(0, 245, 155, 0.05)',
              padding: '0.35rem 0.85rem',
              borderRadius: '9999px',
              border: '1px solid var(--border-subtle)',
            }}
          >
            <Clock size={13} color="var(--mint)" />
            <span>HYDERABAD, IST: {istTime || 'LIVE'}</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            {onReplayBoot && (
              <button
                onClick={() => {
                  playClickSound();
                  onReplayBoot();
                }}
                className="btn-secondary"
                style={{ padding: '0.4rem 0.8rem', fontSize: '0.75rem' }}
                title="Replay Cybernetic Logo Bootloader"
              >
                <RefreshCw size={12} />
                <span>REPLAY BOOT</span>
              </button>
            )}

            <button
              onClick={scrollToTop}
              className="btn-secondary"
              style={{ padding: '0.4rem 0.8rem', fontSize: '0.75rem' }}
            >
              <ArrowUp size={13} />
              <span>TOP</span>
            </button>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
          <p>© {new Date().getFullYear()} Ale Sathwik. All rights reserved.</p>
          <p style={{ color: 'var(--text-dim)', fontFamily: 'var(--font-mono)', fontSize: '0.75rem' }}>
            B.Tech Computer Science and Engineering @ Vignana Bharathi Institute of Technology
          </p>
        </div>
      </div>
    </footer>
  );
}
