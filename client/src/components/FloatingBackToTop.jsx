import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { playClick } from '../utils/soundEffects';

export default function FloatingBackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-40 p-3 rounded-2xl bg-dark-900/90 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 hover:text-cyan-200 backdrop-blur-xl shadow-xl shadow-cyan-950/40 transition-all duration-300 hover:scale-110 active:scale-95 group"
      title="Back to Top"
      aria-label="Back to Top"
    >
      <ArrowUp className="w-5 h-5 transition-transform group-hover:-translate-y-0.5" />
    </button>
  );
}
