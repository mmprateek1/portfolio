import React, { useState, useEffect } from 'react';

export default function LoadingScreen({ onFinish }) {
  const [percent, setPercent] = useState(15);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setPercent(55), 250);
    const timer2 = setTimeout(() => setPercent(88), 600);
    const timer3 = setTimeout(() => {
      setPercent(100);
      setFading(true);
      setTimeout(() => {
        onFinish();
      }, 450);
    }, 950);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-dark-950 transition-opacity duration-500 ${
        fading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="relative flex flex-col items-center">
        {/* Animated Cyber Ring */}
        <div className="relative w-24 h-24 mb-6 flex items-center justify-center">
          <div className="absolute inset-0 rounded-3xl border-2 border-cyan-500/20 animate-spin-slow" />
          <div className="absolute inset-2 rounded-2xl border-2 border-purple-500/40 animate-reverse-spin" />
          
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-cyan-500/20 via-blue-600/30 to-purple-600/20 border border-cyan-400/50 flex items-center justify-center shadow-lg shadow-cyan-500/30">
            <span className="font-heading font-black text-2xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
              MP.
            </span>
          </div>
        </div>

        {/* Name and Title */}
        <div className="text-center space-y-1 mb-6">
          <span className="font-heading font-bold text-lg text-white tracking-tight">
            M M PRATEEK
          </span>
          <p className="text-xs font-mono text-cyan-400">
            Initializing Dev Environment...
          </p>
        </div>

        {/* Loading Progress Bar */}
        <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 transition-all duration-300 rounded-full"
            style={{ width: `${percent}%` }}
          />
        </div>
        <span className="text-[10px] font-mono text-slate-500 mt-2">{percent}%</span>
      </div>
    </div>
  );
}
