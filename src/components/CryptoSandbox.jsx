import React, { useState } from 'react';
import { Lock, Unlock, Key, ShieldCheck, Copy, Check, RefreshCw, Zap } from 'lucide-react';
import { playClickSound, playSuccessSound } from '../utils/audio';

export default function CryptoSandbox() {
  const [plaintext, setPlaintext] = useState('Top-Secret Architecture Blueprint: Fail-closed zero-knowledge vault derived on device.');
  const [passphrase, setPassphrase] = useState('sathwik-vault-2028');
  const [ciphertext, setCiphertext] = useState('');
  const [ivHex, setIvHex] = useState('');
  const [saltHex, setSaltHex] = useState('');
  const [decryptedText, setDecryptedText] = useState('');
  const [execTime, setExecTime] = useState(null);
  const [copied, setCopied] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Helper: buffer to hex
  const bufferToHex = (buf) => {
    return Array.from(new Uint8Array(buf))
      .map((b) => b.toString(16).padStart(2, '0'))
      .join('');
  };

  // Helper: hex to buffer
  const hexToBuffer = (hexStr) => {
    const bytes = new Uint8Array(Math.ceil(hexStr.length / 2));
    for (let i = 0; i < bytes.length; i++) {
      bytes[i] = parseInt(hexStr.substr(i * 2, 2), 16);
    }
    return bytes.buffer;
  };

  // Encrypt with Web Crypto API
  const handleEncrypt = async () => {
    if (!plaintext || !passphrase) return;
    playClickSound();
    setIsProcessing(true);
    setErrorMsg('');
    setDecryptedText('');

    try {
      const start = performance.now();
      const enc = new TextEncoder();

      // 1. Generate 16-byte random salt
      const salt = window.crypto.getRandomValues(new Uint8Array(16));

      // 2. Derive key via PBKDF2 with 100,000 iterations
      const keyMaterial = await window.crypto.subtle.importKey(
        'raw',
        enc.encode(passphrase),
        'PBKDF2',
        false,
        ['deriveKey']
      );

      const aesKey = await window.crypto.subtle.deriveKey(
        {
          name: 'PBKDF2',
          salt: salt,
          iterations: 100000,
          hash: 'SHA-256',
        },
        keyMaterial,
        { name: 'AES-GCM', length: 256 },
        false,
        ['encrypt', 'decrypt']
      );

      // 3. Generate 12-byte random IV
      const iv = window.crypto.getRandomValues(new Uint8Array(12));

      // 4. Encrypt with AES-GCM
      const encryptedBuffer = await window.crypto.subtle.encrypt(
        {
          name: 'AES-GCM',
          iv: iv,
        },
        aesKey,
        enc.encode(plaintext)
      );

      const elapsed = (performance.now() - start).toFixed(2);
      setExecTime(elapsed);
      setSaltHex(bufferToHex(salt));
      setIvHex(bufferToHex(iv));
      setCiphertext(bufferToHex(encryptedBuffer));
      playSuccessSound();
    } catch (err) {
      setErrorMsg('Encryption fault: ' + err.message);
    } finally {
      setIsProcessing(false);
    }
  };

  // Decrypt with Web Crypto API
  const handleDecrypt = async () => {
    if (!ciphertext || !passphrase || !saltHex || !ivHex) return;
    playClickSound();
    setIsProcessing(true);
    setErrorMsg('');

    try {
      const enc = new TextEncoder();
      const dec = new TextDecoder();

      const salt = hexToBuffer(saltHex);
      const iv = hexToBuffer(ivHex);
      const data = hexToBuffer(ciphertext);

      const keyMaterial = await window.crypto.subtle.importKey(
        'raw',
        enc.encode(passphrase),
        'PBKDF2',
        false,
        ['deriveKey']
      );

      const aesKey = await window.crypto.subtle.deriveKey(
        {
          name: 'PBKDF2',
          salt: salt,
          iterations: 100000,
          hash: 'SHA-256',
        },
        keyMaterial,
        { name: 'AES-GCM', length: 256 },
        false,
        ['decrypt']
      );

      const decryptedBuffer = await window.crypto.subtle.decrypt(
        {
          name: 'AES-GCM',
          iv: iv,
        },
        aesKey,
        data
      );

      setDecryptedText(dec.decode(decryptedBuffer));
      playSuccessSound();
    } catch (err) {
      setErrorMsg('Authentication Tag Verification Failed! Incorrect passphrase or corrupted ciphertext.');
    } finally {
      setIsProcessing(false);
    }
  };

  const copyCiphertext = () => {
    if (!ciphertext) return;
    navigator.clipboard.writeText(ciphertext);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="crypto-sandbox-card">
      <div className="crypto-card-header">
        <div className="crypto-title-cluster">
          <ShieldCheck size={18} color="var(--mint)" />
          <span className="crypto-header-title">CYPHERCORE LIVE CRYPTOGRAPHIC ENGINE</span>
        </div>
        <div className="crypto-spec-badge">
          <span>AES-GCM-256 • PBKDF2 (100k ITERATIONS)</span>
        </div>
      </div>

      <div className="crypto-grid-layout">
        {/* Input Column */}
        <div className="crypto-input-col">
          <label className="crypto-field-label">1. PLAINTEXT PAYLOAD (IN-MEMORY)</label>
          <textarea
            value={plaintext}
            onChange={(e) => setPlaintext(e.target.value)}
            className="crypto-textarea"
            rows="3"
            placeholder="Type confidential payload here..."
          />

          <label className="crypto-field-label">2. MASTER PASSPHRASE</label>
          <div className="crypto-passphrase-wrap">
            <Key size={14} color="var(--teal)" className="crypto-key-icon" />
            <input
              type="text"
              value={passphrase}
              onChange={(e) => setPassphrase(e.target.value)}
              className="crypto-input"
              placeholder="Enter master encryption passphrase..."
            />
          </div>

          <div className="crypto-actions">
            <button
              onClick={handleEncrypt}
              disabled={isProcessing}
              className="btn-primary"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <Lock size={15} />
              <span>{isProcessing ? 'DERIVING KEYS...' : 'EXECUTE ON-DEVICE AES-GCM ENCRYPTION'}</span>
            </button>
          </div>
        </div>

        {/* Output Telemetry Column */}
        <div className="crypto-output-col">
          <div className="crypto-telemetry-header">
            <span className="crypto-field-label">3. DERIVED CRYPTOGRAPHIC OUTPUT</span>
            {execTime && (
              <span className="exec-time-pill">
                <Zap size={12} color="var(--amber)" />
                <span>{execTime} ms</span>
              </span>
            )}
          </div>

          <div className="crypto-meta-boxes">
            <div className="crypto-meta-item">
              <span className="meta-lbl">PBKDF2 SALT (16-BYTE):</span>
              <span className="meta-val">{saltHex || '00000000000000000000000000000000'}</span>
            </div>
            <div className="crypto-meta-item">
              <span className="meta-lbl">AES INITIALIZATION VECTOR (12-BYTE):</span>
              <span className="meta-val">{ivHex || '000000000000000000000000'}</span>
            </div>
          </div>

          <div className="ciphertext-box">
            <div className="ciphertext-box-top">
              <span className="meta-lbl">CIPHERTEXT (ENCRYPTED BYTES):</span>
              {ciphertext && (
                <button onClick={copyCiphertext} className="crypto-copy-btn">
                  {copied ? <Check size={12} color="var(--mint)" /> : <Copy size={12} />}
                  <span>{copied ? 'COPIED' : 'COPY'}</span>
                </button>
              )}
            </div>
            <div className="ciphertext-content">
              {ciphertext || '// Click execute above to run client-side encryption...'}
            </div>
          </div>

          {ciphertext && (
            <div style={{ marginTop: '0.75rem' }}>
              <button
                onClick={handleDecrypt}
                disabled={isProcessing}
                className="btn-secondary"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <Unlock size={15} color="var(--mint)" />
                <span>VERIFY & DECRYPT BACK WITH PASSPHRASE</span>
              </button>
            </div>
          )}

          {decryptedText && (
            <div className="decrypted-result-box">
              <span className="meta-lbl" style={{ color: 'var(--mint)' }}>
                ✓ AUTHENTICATED DECRYPTION SUCCESSFUL:
              </span>
              <p className="decrypted-text">{decryptedText}</p>
            </div>
          )}

          {errorMsg && (
            <div className="crypto-error-box">
              <span>{errorMsg}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
