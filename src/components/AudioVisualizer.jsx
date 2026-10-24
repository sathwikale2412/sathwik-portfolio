import React from 'react';

export default function AudioVisualizer({ isActive }) {
  return (
    <div className={`audio-eq-bars ${isActive ? 'eq-active' : ''}`} title={isActive ? 'Audio Frequency Synthesizer Active' : 'Audio Muted'}>
      <span className="eq-bar bar-1"></span>
      <span className="eq-bar bar-2"></span>
      <span className="eq-bar bar-3"></span>
      <span className="eq-bar bar-4"></span>
      <span className="eq-bar bar-5"></span>
    </div>
  );
}
