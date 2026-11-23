import React, { useState, useRef, useEffect } from 'react';
import { Terminal, CornerDownLeft, Sparkles, Copy, Check } from 'lucide-react';
import { handleTerminalCommand } from '../data/terminalCommands';
import { playClick } from '../utils/soundEffects';

export default function TerminalSection() {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState([
    { type: 'info', text: '⚡ Antigravity DevShell v2.4 (x86_64-pc-react19)' },
    { type: 'muted', text: 'Type "help" to view the full command directory, or click the quick command pills below.' },
    { type: 'prompt', text: 'help' },
    ...handleTerminalCommand('help'),
  ]);
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [copied, setCopied] = useState(false);

  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const runCommand = (cmdText) => {
    const trimmed = cmdText.trim();
    if (!trimmed) return;

    playClick();

    if (trimmed.toLowerCase() === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    }

    const output = handleTerminalCommand(trimmed);

    setHistory((prev) => [
      ...prev,
      { type: 'prompt', text: trimmed },
      ...output,
    ]);

    setCommandHistory((prev) => [...prev, trimmed]);
    setHistoryIndex(-1);
    setInputVal('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    runCommand(inputVal);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length === 0) return;
      const nextIdx = historyIndex + 1;
      if (nextIdx < commandHistory.length) {
        setHistoryIndex(nextIdx);
        setInputVal(commandHistory[commandHistory.length - 1 - nextIdx]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const nextIdx = historyIndex - 1;
        setHistoryIndex(nextIdx);
        setInputVal(commandHistory[commandHistory.length - 1 - nextIdx]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInputVal('');
      }
    }
  };

  const quickPills = ['help', 'about', 'skills', 'projects', 'experience', 'awards', 'contact', 'neofetch', 'clear'];

  const copyTerminalOutput = () => {
    const textToCopy = history.map((line) => line.text).join('\n');
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="terminal" className="py-24 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono uppercase tracking-wider">
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            <span>Interactive CLI Environment</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-bold text-white tracking-tight">
            Developer <span className="text-gradient-cyan">DevShell</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-sans">
            Prefer a keyboard-driven interface? Query my background, tech stack, and systems directly from the terminal.
          </p>
        </div>

        {/* Quick Command Pills */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 mb-6">
          <span className="text-xs font-mono text-slate-500 mr-1">Quick Run:</span>
          {quickPills.map((p) => (
            <button
              key={p}
              onClick={() => runCommand(p)}
              className="px-2.5 py-1 rounded-lg bg-dark-900 border border-white/10 hover:border-cyan-500/40 text-[11px] font-mono text-cyan-300 hover:text-white transition-colors"
            >
              ${p}
            </button>
          ))}
        </div>

        {/* Terminal Window Box */}
        <div
          onClick={() => inputRef.current?.focus()}
          className="rounded-3xl bg-dark-950/90 border border-white/15 shadow-2xl shadow-cyan-950/30 overflow-hidden font-mono text-xs text-left"
        >
          {/* Terminal Window Header Bar */}
          <div className="flex items-center justify-between px-4 py-3 bg-dark-900/90 border-b border-white/10 select-none">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
              <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              <span className="text-slate-400 text-[11px] ml-2">prateek@dev-station:~ (zsh)</span>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                copyTerminalOutput();
              }}
              className="flex items-center gap-1 text-[11px] text-slate-400 hover:text-white transition-colors"
              title="Copy terminal session"
            >
              {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
              <span>{copied ? 'Copied' : 'Copy log'}</span>
            </button>
          </div>

          {/* Terminal Output Area */}
          <div className="p-5 max-h-96 overflow-y-auto space-y-1.5 font-mono">
            {history.map((line, idx) => {
              if (line.type === 'prompt') {
                return (
                  <div key={idx} className="flex items-center gap-2 text-cyan-300 font-semibold pt-2">
                    <span className="text-purple-400">prateek@dev-station:~$</span>
                    <span>{line.text}</span>
                  </div>
                );
              }
              if (line.type === 'header') {
                return <div key={idx} className="text-cyan-400 font-bold">{line.text}</div>;
              }
              if (line.type === 'success') {
                return <div key={idx} className="text-emerald-400">{line.text}</div>;
              }
              if (line.type === 'warning') {
                return <div key={idx} className="text-amber-300">{line.text}</div>;
              }
              if (line.type === 'error') {
                return <div key={idx} className="text-rose-400">{line.text}</div>;
              }
              if (line.type === 'info') {
                return <div key={idx} className="text-cyan-300">{line.text}</div>;
              }
              if (line.type === 'muted') {
                return <div key={idx} className="text-slate-500">{line.text}</div>;
              }
              return <div key={idx} className="text-slate-300 whitespace-pre-wrap">{line.text}</div>;
            })}
            <div ref={bottomRef} />
          </div>

          {/* Terminal Input Form */}
          <form onSubmit={handleSubmit} className="flex items-center gap-2 px-5 py-3 border-t border-white/5 bg-dark-900/50">
            <span className="text-purple-400 font-bold shrink-0">prateek@dev-station:~$</span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type command here (e.g. 'skills', 'about')..."
              className="w-full bg-transparent text-slate-100 placeholder-slate-600 focus:outline-none text-xs font-mono"
            />
            <button
              type="submit"
              className="p-1 rounded text-slate-400 hover:text-cyan-400 transition-colors"
              title="Execute command"
            >
              <CornerDownLeft className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}
