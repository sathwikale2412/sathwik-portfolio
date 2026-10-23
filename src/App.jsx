import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Architecture from './components/Architecture';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="app-container">
      {/* Background Decor */}
      <div className="ambient-glow" />
      <div className="ambient-grid" />

      {/* Main Layout */}
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <Architecture />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
