import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Copy, Check, Send, ArrowUp, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { playClickSound, playSuccessSound } from '../utils/audio';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleCopyEmail = () => {
    playClickSound();
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const scrollToTop = () => {
    playClickSound();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    playSuccessSound();
    setSubmitted(true);

    // Open direct prefilled mailto as seamless backup
    const mailtoSubject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.open(`mailto:${personalInfo.email}?subject=${mailtoSubject}&body=${mailtoBody}`, '_blank');
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className="section-header">
          <div className="terminal-pill">
            <span className="pill-dot"></span>
            <span>// TRANSMISSION_GATEWAY</span>
          </div>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-desc">
            Direct communication channels for engineering internships, technical collaborations, and full-stack software development.
          </p>
        </div>

        {/* Two-Column Layout from Reference Image */}
        <div className="contact-twocol-grid">
          {/* Left Column: DIRECT CHANNELS */}
          <div className="contact-card-direct">
            <div className="direct-header-row">
              <span className="direct-title">DIRECT CHANNELS</span>
              <span className="direct-location">HYDERABAD, IN</span>
            </div>

            {/* Primary Inbox Box */}
            <div className="primary-inbox-card">
              <div className="inbox-label-row">
                <span className="inbox-sub-label">PRIMARY INBOX</span>
                <button
                  onClick={handleCopyEmail}
                  className="inbox-copy-icon-btn"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copied ? <Check size={16} color="var(--mint)" /> : <Copy size={16} />}
                </button>
              </div>
              <div className="inbox-email-val">{personalInfo.email}</div>
            </div>

            {/* Compose Email Directly Button */}
            <a
              href={`mailto:${personalInfo.email}`}
              className="btn-compose-direct"
              onClick={() => playClickSound()}
            >
              <Mail size={16} />
              <span>COMPOSE EMAIL DIRECTLY</span>
              <ArrowUpRight size={15} />
            </a>

            {/* Social Buttons: LINKEDIN & GITHUB */}
            <div className="direct-social-row">
              <a
                href="https://linkedin.com/in/sathwik-ale"
                target="_blank"
                rel="noopener noreferrer"
                className="direct-social-btn"
                onClick={() => playClickSound()}
              >
                <Linkedin size={16} color="#0077b5" />
                <span>LINKEDIN</span>
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="direct-social-btn"
                onClick={() => playClickSound()}
              >
                <Github size={16} />
                <span>GITHUB</span>
              </a>
            </div>

            {/* Opportunities Status Box */}
            <div className="opportunities-status-box">
              <div className="opp-status-header">
                <span className="opp-dot"></span>
                <span>INTERNSHIP OPPORTUNITIES</span>
              </div>
              <p className="opp-status-text">
                Currently open for software engineering, full-stack, and applied AI developer internships for 2026/2028.
              </p>
            </div>

            {/* Back to Top Button */}
            <div style={{ marginTop: 'auto', paddingTop: '1.5rem', textAlign: 'center' }}>
              <button onClick={scrollToTop} className="btn-back-to-top">
                <ArrowUp size={14} />
                <span>BACK TO TOP</span>
              </button>
            </div>
          </div>

          {/* Right Column: SEND A DIRECT MESSAGE */}
          <div className="contact-card-form">
            <div className="form-header-title">SEND A DIRECT MESSAGE</div>

            {submitted ? (
              <div className="form-success-banner">
                <CheckCircle2 size={36} color="var(--mint)" />
                <h3 className="success-heading">TRANSMISSION DISPATCHED</h3>
                <p className="success-desc">
                  Thank you, <strong>{formData.name}</strong>! Your inquiry draft has been routed to <strong>{personalInfo.email}</strong>. I will review and reply directly to your inbox shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', subject: '', message: '' });
                  }}
                  className="btn-secondary"
                  style={{ marginTop: '1rem' }}
                >
                  Send Another Transmission
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="direct-contact-form">
                {/* Row: Name and Email */}
                <div className="form-fields-row">
                  <div className="form-field-group">
                    <label className="field-label">YOUR NAME *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Chen"
                      className="form-text-input"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="form-field-group">
                    <label className="field-label">YOUR EMAIL *</label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      className="form-text-input"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                {/* Subject / Opportunity Type */}
                <div className="form-field-group">
                  <label className="field-label">SUBJECT / OPPORTUNITY TYPE</label>
                  <input
                    type="text"
                    placeholder="e.g. Software Engineering Internship / Technical Collaboration"
                    className="form-text-input"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  />
                </div>

                {/* Message */}
                <div className="form-field-group">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.45rem' }}>
                    <label className="field-label" style={{ marginBottom: 0 }}>MESSAGE *</label>
                    <span className="dot-active-mini"></span>
                  </div>
                  <textarea
                    required
                    rows="5"
                    placeholder="Hi Sathwik, I came across your portfolio and would like to discuss an engineering opportunity..."
                    className="form-textarea-input"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                {/* Submit Action */}
                <button type="submit" className="btn-transmit-inquiry">
                  <Send size={15} />
                  <span>TRANSMIT INQUIRY</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
