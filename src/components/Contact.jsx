import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Copy, Check, Send } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

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
        <div className="contact-card">
          <span className="section-tag">// Get In Touch</span>
          <h2 className="section-title" style={{ marginTop: '0.5rem' }}>
            Let's Build Something Exceptional
          </h2>
          <p className="section-desc" style={{ maxWidth: '580px', marginTop: '0.75rem' }}>
            Whether you are looking to hire a full-stack engineer, collaborate on a secure open-source system, or discuss architecture challenges, my inbox is always open.
          </p>

          <div className="contact-channels">
            <a href={`mailto:${personalInfo.email}`} className="contact-pill">
              <Mail size={16} color="var(--cyan)" />
              <span>{personalInfo.email}</span>
            </a>

            <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} className="contact-pill">
              <Phone size={16} color="var(--emerald)" />
              <span>{personalInfo.phone}</span>
            </a>

            <div className="contact-pill" style={{ cursor: 'default' }}>
              <MapPin size={16} color="var(--amber)" />
              <span>{personalInfo.location}</span>
            </div>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-pill"
            >
              <Github size={16} color="var(--purple)" />
              <span>github.com/{personalInfo.handle}</span>
            </a>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
            <a href={`mailto:${personalInfo.email}`} className="btn-primary">
              <Send size={15} />
              <span>Send Email Directly</span>
            </a>
            <button onClick={handleCopyEmail} className="btn-secondary">
              {copied ? <Check size={15} color="var(--emerald)" /> : <Copy size={15} />}
              <span>{copied ? 'Copied to Clipboard!' : 'Copy Email Address'}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
