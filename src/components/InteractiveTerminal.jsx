import React, { useState, useRef, useEffect } from 'react';
import { Terminal, Send, CornerDownLeft, Maximize2, Minimize2 } from 'lucide-react';
import { personalInfo, projects, educationHistory, skillCategories } from '../data/portfolioData';

export default function InteractiveTerminal() {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState([
    {
      type: 'system',
      text: 'SATHWIK_OS [Version 2.4.0-RELEASE] (x86_64-quantum-arch)',
    },
    {
      type: 'system',
      text: 'Type "help" to display operational directives, or click command pills below.',
    },
  ]);
  const [cmdIndex, setCmdIndex] = useState(-1);
  const [cmdHistoryList, setCmdHistoryList] = useState([]);
  const outputEndRef = useRef(null);

  useEffect(() => {
    outputEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (rawCmd) => {
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;

    setCmdHistoryList((prev) => [...prev, cmd]);
    setCmdIndex(-1);

    const newHistory = [...history, { type: 'prompt', text: `guest@sathwik-node:~$ ${rawCmd}` }];

    switch (cmd) {
      case 'help':
        newHistory.push({
          type: 'response',
          text: `AVAILABLE SYSTEM DIRECTIVES:
  • help       : Display this command manual
  • whoami     : Display engineer dossier & bio
  • projects   : Enumerate all 8 deployed systems
  • education  : Output academic qualifications & CGPA records
  • skills     : List verified core competencies & stacks
  • vsrms      : Query Vehicle Service Record Management System specs
  • contact    : Output verified communication endpoints
  • clear      : Flush current terminal buffer`,
        });
        break;

      case 'whoami':
        newHistory.push({
          type: 'response',
          text: `NAME     : ${personalInfo.name}
TITLE    : ${personalInfo.title}
LOCATION : ${personalInfo.location}
STATUS   : ${personalInfo.status}
BIO      : ${personalInfo.bio}`,
        });
        break;

      case 'projects':
        newHistory.push({
          type: 'response',
          text: projects
            .map(
              (p, i) =>
                `[${i + 1}] ${p.title} (${p.category})\n    • Live: ${p.liveUrl || 'N/A'}\n    • Tech: ${p.techStack.map((t) => t.name).join(', ')}`
            )
            .join('\n\n'),
        });
        break;

      case 'education':
        newHistory.push({
          type: 'response',
          text: educationHistory
            .map(
              (e) =>
                `▸ ${e.institution}\n  ${e.degree} - ${e.department}\n  Period: ${e.period} | Score: ${e.grade}`
            )
            .join('\n\n'),
        });
        break;

      case 'skills':
        newHistory.push({
          type: 'response',
          text: skillCategories
            .map((cat) => `[${cat.name}]\n  ${cat.skills.map((s) => s.name).join(' • ')}`)
            .join('\n\n'),
        });
        break;

      case 'vsrms':
        const vsrms = projects.find((p) => p.id === 'vsrms');
        newHistory.push({
          type: 'response',
          text: `VEHICLE SERVICE RECORD MANAGEMENT SYSTEM (VSRMS)
URL      : ${vsrms.liveUrl}
REPO     : ${vsrms.githubUrl}
SUMMARY  : ${vsrms.description}
STACK    : ${vsrms.techStack.map((t) => `${t.name} (${t.role})`).join('\n           ')}`,
        });
        break;

      case 'contact':
        newHistory.push({
          type: 'response',
          text: `EMAIL    : ${personalInfo.email}
PHONE    : ${personalInfo.phone}
LINKEDIN : ${personalInfo.linkedin}
GITHUB   : ${personalInfo.github}
LOC      : ${personalInfo.location}`,
        });
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      default:
        newHistory.push({
          type: 'error',
          text: `Command not recognized: "${cmd}". Type "help" for a list of valid commands.`,
        });
        break;
    }

    setHistory(newHistory);
    setInputVal('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand(inputVal);
    } else if (e.key === 'ArrowUp') {
      if (cmdHistoryList.length > 0) {
        const nextIdx = cmdIndex === -1 ? cmdHistoryList.length - 1 : Math.max(0, cmdIndex - 1);
        setCmdIndex(nextIdx);
        setInputVal(cmdHistoryList[nextIdx]);
      }
    } else if (e.key === 'ArrowDown') {
      if (cmdHistoryList.length > 0 && cmdIndex !== -1) {
        const nextIdx = cmdIndex + 1;
        if (nextIdx < cmdHistoryList.length) {
          setCmdIndex(nextIdx);
          setInputVal(cmdHistoryList[nextIdx]);
        } else {
          setCmdIndex(-1);
          setInputVal('');
        }
      }
    }
  };

  const quickPills = ['help', 'whoami', 'projects', 'education', 'skills', 'vsrms', 'contact', 'clear'];

  return (
    <section id="terminal" className="section">
      <div className="container">
        <div className="section-header">
          <div className="terminal-pill">
            <span className="pill-dot"></span>
            <span>// INTERACTIVE_CLI_SESSION</span>
          </div>
          <h2 className="section-title">Developer Command Interface</h2>
          <p className="section-desc">
            Direct real-time query console for querying repositories, architectures, metrics, and academic records.
          </p>
        </div>

        <div className="terminal-shell">
          {/* Top Bar */}
          <div className="terminal-topbar">
            <div className="terminal-window-dots">
              <span className="dot dot-red"></span>
              <span className="dot dot-yellow"></span>
              <span className="dot dot-green"></span>
            </div>
            <div className="terminal-title-text">
              <Terminal size={14} color="var(--mint)" />
              <span>guest@sathwik-node: ~/portfolio (sh)</span>
            </div>
            <div className="terminal-status-tag">SECURE_SANDBOX</div>
          </div>

          {/* Console History */}
          <div className="terminal-body">
            {history.map((item, idx) => (
              <div key={idx} className={`terminal-line terminal-${item.type}`}>
                <pre>{item.text}</pre>
              </div>
            ))}
            <div ref={outputEndRef} />
          </div>

          {/* Quick Command Buttons */}
          <div className="terminal-quick-row">
            <span className="quick-label">QUICK MACROS:</span>
            {quickPills.map((pill) => (
              <button
                key={pill}
                onClick={() => handleCommand(pill)}
                className="terminal-quick-pill"
              >
                ${pill}
              </button>
            ))}
          </div>

          {/* Interactive Prompt Input */}
          <div className="terminal-input-row">
            <span className="terminal-prompt-symbol">guest@sathwik-node:~$</span>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="type a command (e.g., 'projects', 'education', 'vsrms') and hit Enter..."
              className="terminal-input"
              autoComplete="off"
              spellCheck="false"
            />
            <button
              onClick={() => handleCommand(inputVal)}
              className="terminal-send-btn"
              title="Run Command"
            >
              <CornerDownLeft size={14} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
