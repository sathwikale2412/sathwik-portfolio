import React, { useState, useEffect } from 'react';
import { Terminal, Shield, Check, FastForward } from 'lucide-react';
import { playSuccessSound } from '../utils/audio';

export default function BootLoader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [logIndex, setLogIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const bootLogs = [
    'INITIALIZING QUANTUM RUNTIME MATRIX...',
    'CALIBRATING 3D SPATIAL GALAXY ENGINE...',
    'DERIVING CLIENT-SIDE WEB CRYPTO POLICIES...',
    'FETCHING VBIT CSE REPOSITORIES (NODE: 2028)...',
    'VERIFYING FAIL-CLOSED ROW LEVEL SECURITY...',
    'SYSTEM READY // ACCESS GRANTED',
  ];

  useEffect(() => {
    // Progress interval
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const step = Math.floor(Math.random() * 8) + 4;
        const next = Math.min(100, prev + step);

        // Update log message depending on progress
        const targetLog = Math.min(
          bootLogs.length - 1,
          Math.floor((next / 100) * bootLogs.length)
        );
        setLogIndex(targetLog);

        return next;
      });
    }, 70);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      playSuccessSound();
      const fadeTimer = setTimeout(() => {
        setIsFading(true);
        setTimeout(() => {
          if (onComplete) onComplete();
        }, 600);
      }, 400);

      return () => clearTimeout(fadeTimer);
    }
  }, [progress, onComplete]);

  const handleSkip = () => {
    setIsFading(true);
    setTimeout(() => {
      if (onComplete) onComplete();
    }, 250);
  };

  return (
    <div className={`bootloader-overlay ${isFading ? 'boot-fade-out' : ''}`}>
      {/* Background Ambience */}
      <div className="boot-grid" />
      <div className="boot-laser-line" />

      {/* Skip Button */}
      <button onClick={handleSkip} className="boot-skip-btn">
        <FastForward size={13} />
        <span>SKIP BOOT</span>
      </button>

      {/* Center Console */}
      <div className="boot-console">
        {/* Pulsing Cyber Reticle Logo */}
        <div className="boot-logo-wrapper">
          <div className="boot-reticle-ring" />
          <img
            src="/sathwik-logo.png"
            alt="Sathwik Logo"
            className="boot-logo-img"
          />
          <div className="boot-scan-line" />
        </div>

        {/* Brand Monogram */}
        <div className="boot-brand-name">ALE SATHWIK</div>
        <div className="boot-brand-sub">FULL STACK SOFTWARE ENGINEER // VBIT CSE</div>

        {/* Progress Display */}
        <div className="boot-progress-zone">
          <div className="boot-percent-row">
            <span className="boot-status-text">{bootLogs[logIndex]}</span>
            <span className="boot-percent-number">{progress}%</span>
          </div>

          <div className="boot-progress-track">
            <div
              className="boot-progress-bar"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* System Telemetry Chips */}
        <div className="boot-chips-row">
          <span className="boot-chip">RLS: HARDENED</span>
          <span className="boot-chip">WEBGL: THREE.JS</span>
          <span className="boot-chip">AES-256: ENABLED</span>
          <span className="boot-chip">STATUS: ONLINE</span>
        </div>
      </div>
    </div>
  );
}
