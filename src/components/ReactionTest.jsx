import React, { useState, useRef } from 'react';
import { Gauge, Zap, Play, RotateCcw, Award } from 'lucide-react';
import { playClickSound, playSuccessSound } from '../utils/audio';

export default function ReactionTest() {
  const [gameState, setGameState] = useState('idle'); // 'idle' | 'waiting' | 'ready' | 'result'
  const [reactionTime, setReactionTime] = useState(null);
  const [bestTime, setBestTime] = useState(null);
  const [message, setMessage] = useState('Test your sub-millisecond psychomotor reaction latency (CADAT Standard)');
  const timerRef = useRef(null);
  const startTimeRef = useRef(null);

  const startTest = () => {
    playClickSound();
    setGameState('waiting');
    setMessage('WAIT FOR THE SCREEN TO FLASH NEON MINT...');
    setReactionTime(null);

    // Random delay between 1.5s and 4.2s
    const randomDelay = Math.floor(Math.random() * 2700) + 1500;

    timerRef.current = setTimeout(() => {
      setGameState('ready');
      setMessage('CLICK NOW!! CLICK ANYWHERE IN THIS BOX!');
      startTimeRef.current = performance.now();
    }, randomDelay);
  };

  const handleClickBox = () => {
    if (gameState === 'idle' || gameState === 'result') {
      startTest();
    } else if (gameState === 'waiting') {
      // Clicked too early (fault)
      clearTimeout(timerRef.current);
      setGameState('result');
      setMessage('FAULT: Triggered too early! Wait for the screen to turn NEON MINT.');
      setReactionTime(null);
      playClickSound();
    } else if (gameState === 'ready') {
      // Valid reaction!
      const elapsed = Math.round(performance.now() - startTimeRef.current);
      setReactionTime(elapsed);
      setGameState('result');
      playSuccessSound();

      if (!bestTime || elapsed < bestTime) {
        setBestTime(elapsed);
      }

      if (elapsed < 200) {
        setMessage('⚡ CADAT Grade A+: Pro-Athlete / High-Speed Locomotive Cognitive Class!');
      } else if (elapsed < 260) {
        setMessage('🚀 CADAT Grade A: Exceptional Psychomotor Reflex & Alertness!');
      } else if (elapsed < 340) {
        setMessage('✓ CADAT Grade B: Good Reaction Latency (Human Average: ~280ms).');
      } else {
        setMessage('Cadat Grade C: Above average latency. Try again to sharpen your reflex!');
      }
    }
  };

  return (
    <div className="reaction-widget">
      <div className="reaction-header">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <Gauge size={16} color="var(--mint)" />
          <span className="reaction-title">CADAT LIVE PSYCHOMOTOR BENCHMARK</span>
        </div>
        {bestTime && (
          <div className="best-score-badge">
            <Award size={13} color="var(--amber)" />
            <span>Best: {bestTime} ms</span>
          </div>
        )}
      </div>

      <div
        className={`reaction-interactive-surface state-${gameState}`}
        onClick={handleClickBox}
      >
        <div className="reaction-icon-zone">
          {gameState === 'idle' && <Zap size={32} className="pulse-icon" />}
          {gameState === 'waiting' && <span className="warning-dot"></span>}
          {gameState === 'ready' && <Zap size={44} color="#020504" />}
          {gameState === 'result' && reactionTime && (
            <div className="reaction-score-huge">{reactionTime} <span className="unit">ms</span></div>
          )}
        </div>

        <div className="reaction-prompt-text">{message}</div>

        <div className="reaction-action-hint">
          {gameState === 'idle' && 'CLICK BOX TO INITIATE DRILL'}
          {gameState === 'waiting' && 'KEEP YOUR FINGER READY...'}
          {gameState === 'ready' && 'TRIGGER NOW!'}
          {gameState === 'result' && 'CLICK TO RETRY BENCHMARK'}
        </div>
      </div>
    </div>
  );
}
