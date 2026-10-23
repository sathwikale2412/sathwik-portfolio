import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Copy, Check, Send, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import TiltCard from './TiltCard';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <TiltCard className="contact-card-wrapper" maxTilt={6}>
          <div className="contact-card">
            <div className="terminal-pill">
              <span className="pill-dot"></span>
              <span>// DISPATCH_COMMUNICATION</span>
            </div>
            <h2 className="contact-headline">Initialize Direct Connection</h2>
            <p className="contact-subtext">
              Looking for a disciplined full-stack engineer who builds with rigorous fail-closed security and architectural precision? Let's connect.
            </p>

            {/* Verification Pills */}
            <div className="contact-channels">
              <a href={`mailto:${personalInfo.email}`} className="contact-pill">
                <Mail size={16} color="var(--mint)" />
                <span className="contact-pill-val">{personalInfo.email}</span>
              </a>

              <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} className="contact-pill">
                <Phone size={16} color="var(--teal)" />
                <span className="contact-pill-val">{personalInfo.phone}</span>
              </a>

              <div className="contact-pill cursor-default">
                <MapPin size={16} color="var(--amber)" />
                <span className="contact-pill-val">{personalInfo.location}</span>
              </div>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-pill"
              >
                <Github size={16} color="var(--amethyst)" />
                <span className="contact-pill-val">github.com/{personalInfo.handle}</span>
              </a>
            </div>

            {/* Quick Actions */}
            <div className="contact-actions-row">
              <a href={`mailto:${personalInfo.email}`} className="btn-primary">
                <Send size={15} />
                <span>Send Direct Email</span>
              </a>
              <button onClick={handleCopyEmail} className="btn-secondary">
                {copied ? <Check size={15} color="var(--mint)" /> : <Copy size={15} />}
                <span>{copied ? 'Copied to Clipboard!' : 'Copy Email Address'}</span>
              </button>
            </div>
          </div>
        </TiltCard>
      </div>
    </section>
  );
}
