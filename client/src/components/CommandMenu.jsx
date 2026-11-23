import React, { useState, useEffect } from 'react';
import { Search, Compass, FileText, Volume2, VolumeX, Mail, Terminal, Trophy, Briefcase, GraduationCap, Code } from 'lucide-react';
import { Github, Linkedin } from './ui/SocialIcons';
import { personalInfo } from '../data/personalInfo';
import { isSoundEnabled, toggleSound, playClick } from '../utils/soundEffects';

export default function CommandMenu({ isOpen, onClose, onOpenResume }) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [soundActive, setSoundActive] = useState(true);

  useEffect(() => {
    setSoundActive(isSoundEnabled());
  }, [isOpen]);

  const commands = [
    {
      category: 'Navigation',
      items: [
        { id: 'hero', label: 'Go to Home', icon: Compass, action: () => scrollTo('hero') },
        { id: 'about', label: 'About Prateek', icon: Compass, action: () => scrollTo('about') },
        { id: 'skills', label: 'Technical Skills Matrix', icon: Code, action: () => scrollTo('skills') },
        { id: 'experience', label: 'Professional Experience (Invicto Labs)', icon: Briefcase, action: () => scrollTo('experience') },
        { id: 'projects', label: 'Projects & Jnanetra Spotlight', icon: Compass, action: () => scrollTo('projects') },
        { id: 'achievements', label: 'Milestones & KSCST Award', icon: Trophy, action: () => scrollTo('achievements') },
        { id: 'education', label: 'Academic Journey & Degrees', icon: GraduationCap, action: () => scrollTo('education') },
        { id: 'terminal', label: 'Interactive Developer Terminal', icon: Terminal, action: () => scrollTo('terminal') },
        { id: 'contact', label: 'Get in Touch / Contact Form', icon: Mail, action: () => scrollTo('contact') },
      ],
    },
    {
      category: 'Actions & Documents',
      items: [
        {
          id: 'resume-modal',
          label: 'Open Resume Viewer / Download Center',
          icon: FileText,
          action: () => {
            onClose();
            if (onOpenResume) onOpenResume();
          },
        },
        {
          id: 'toggle-sound',
          label: soundActive ? 'Mute Sound Effects' : 'Enable Sound Effects',
          icon: soundActive ? VolumeX : Volume2,
          action: () => {
            const next = toggleSound();
            setSoundActive(next);
            playClick();
          },
        },
        {
          id: 'copy-email',
          label: `Copy Email (${personalInfo.social.email})`,
          icon: Mail,
          action: () => {
            navigator.clipboard.writeText(personalInfo.social.email);
            alert('Email copied to clipboard: ' + personalInfo.social.email);
            onClose();
          },
        },
        {
          id: 'github',
          label: 'Open GitHub Profile',
          icon: Github,
          action: () => {
            window.open(personalInfo.social.github, '_blank', 'noopener,noreferrer');
            onClose();
          },
        },
        {
          id: 'linkedin',
          label: 'Open LinkedIn Profile',
          icon: Linkedin,
          action: () => {
            window.open(personalInfo.social.linkedin, '_blank', 'noopener,noreferrer');
            onClose();
          },
        },
      ],
    },
  ];

  const flatItems = commands.flatMap((c) => c.items);
  const filteredItems = flatItems.filter((item) =>
    item.label.toLowerCase().includes(query.toLowerCase())
  );

  const scrollTo = (id) => {
    onClose();
    playClick();
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % (filteredItems.length || 1));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % (filteredItems.length || 1));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredItems[selectedIndex]) {
          filteredItems[selectedIndex].action();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredItems, selectedIndex, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      {/* Click outside backdrop */}
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-xl bg-dark-900/95 border border-cyan-500/30 rounded-2xl shadow-2xl shadow-cyan-950/50 overflow-hidden z-10">
        {/* Search Input bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-white/10 gap-3">
          <Search className="w-5 h-5 text-cyan-400" />
          <input
            type="text"
            placeholder="Type a command or section name... (e.g., 'resume', 'skills', 'about')"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="w-full bg-transparent text-slate-100 placeholder-slate-400 focus:outline-none text-sm md:text-base font-sans"
          />
          <kbd className="hidden sm:inline-block px-2 py-0.5 text-xs text-slate-400 bg-white/5 border border-white/10 rounded">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2 divide-y divide-white/5">
          {filteredItems.length === 0 ? (
            <div className="p-8 text-center text-sm text-slate-400">
              No matching commands found for <span className="text-cyan-400">"{query}"</span>
            </div>
          ) : (
            filteredItems.map((item, idx) => {
              const Icon = item.icon;
              const isSelected = idx === selectedIndex;
              return (
                <div
                  key={item.id}
                  onClick={() => item.action()}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm cursor-pointer transition-colors ${
                    isSelected
                      ? 'bg-cyan-500/20 text-cyan-200 border border-cyan-500/30'
                      : 'text-slate-300 hover:bg-white/5'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isSelected ? 'text-cyan-400' : 'text-slate-400'}`} />
                  <span className="font-medium">{item.label}</span>
                </div>
              );
            })
          )}
        </div>

        {/* Keyboard hints footer */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-dark-950/80 border-t border-white/5 text-[11px] text-slate-400">
          <div className="flex items-center gap-2">
            <span>Navigate</span>
            <kbd className="px-1.5 py-0.5 bg-white/5 border border-white/10 rounded text-[10px]">↑</kbd>
            <kbd className="px-1.5 py-0.5 bg-white/5 border border-white/10 rounded text-[10px]">↓</kbd>
            <span>Select</span>
            <kbd className="px-1.5 py-0.5 bg-white/5 border border-white/10 rounded text-[10px]">↵</kbd>
          </div>
          <span>Antigravity Quick Command</span>
        </div>
      </div>
    </div>
  );
}
