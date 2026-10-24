import React, { useEffect, useRef } from 'react';

export default function MatrixRain({ mode = 'matrix' }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (mode !== 'matrix') return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Matrix characters (Hex, mathematical symbols, cyber glyphs)
    const chars = '0123456789ABCDEFΣΨΩΞλπθ⚡01SATHWIK0123456789';
    const fontSize = 14;
    const columns = Math.floor(width / fontSize);
    const drops = Array(columns).fill(1);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const draw = () => {
      // Semi-transparent fade to create trails
      ctx.fillStyle = 'rgba(2, 5, 4, 0.08)';
      ctx.fillRect(0, 0, width, height);

      ctx.font = `${fontSize}px 'JetBrains Mono', monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];

        // Random head highlight
        if (Math.random() > 0.95) {
          ctx.fillStyle = '#ffffff'; // White lead glyph
        } else if (Math.random() > 0.7) {
          ctx.fillStyle = '#00f2fe'; // Cyan
        } else {
          ctx.fillStyle = '#00f59b'; // Mint Emerald
        }

        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, [mode]);

  if (mode !== 'matrix') return null;

  return <canvas ref={canvasRef} className="matrix-rain-canvas" />;
}
