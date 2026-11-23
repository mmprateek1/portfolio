import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, Mail, Clock, Sparkles, ChevronDown } from 'lucide-react';
import { Github, Linkedin } from '../components/ui/SocialIcons';
import { personalInfo } from '../data/personalInfo';
import HeroScene3D from '../components/HeroScene3D';
import { playClick, playSuccess } from '../utils/soundEffects';

export default function Hero({ onOpenResume }) {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [istTime, setIstTime] = useState('');

  // Live IST Time update
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatted = new Intl.DateTimeFormat('en-IN', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      }).format(now);
      setIstTime(formatted);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Typewriter effect for rotating roles
  useEffect(() => {
    const roles = personalInfo.rotatingRoles;
    const fullRole = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 40 : 85;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(fullRole.substring(0, displayText.length + 1));
        if (displayText.length + 1 === fullRole.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setDisplayText(fullRole.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex]);

  const scrollTo = (id) => {
    playClick();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background glowing grid and ambient radiant orbs */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[128px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[128px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Narrative & CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Top pill badges: Greeting + Live IST Time */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-cyan-500/30 text-cyan-300 text-xs font-mono font-medium shadow-sm shadow-cyan-500/10">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-spin-slow" />
                <span>HELLO, WORLD! I'M</span>
              </div>

              {/* Live IST clock */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-slate-400 text-xs font-mono">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                <span>India (IST):</span>
                <span className="text-slate-200 font-semibold">{istTime || '10:00 AM'}</span>
              </div>
            </div>

            {/* Large Animated Name */}
            <div className="space-y-1">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-heading font-black tracking-tight text-white leading-tight">
                M M <span className="text-gradient-cyan">PRATEEK</span>
              </h1>
              
              {/* Professional Headline */}
              <p className="text-xl sm:text-2xl lg:text-3xl font-heading font-semibold text-slate-200 tracking-tight">
                {personalInfo.headline}
              </p>
            </div>

            {/* Dynamic Rotating Role Underneath */}
            <div className="h-10 flex items-center">
              <div className="flex items-center gap-2 text-lg sm:text-xl font-mono text-cyan-400 font-medium">
                <span className="text-purple-400">&gt;</span>
                <span className="text-gradient-violet">{displayText}</span>
                <span className="w-2.5 h-5 bg-cyan-400 animate-pulse ml-0.5" />
              </div>
            </div>

            {/* Short Introduction */}
            <p className="text-sm sm:text-base text-slate-300/90 max-w-2xl leading-relaxed font-sans">
              {personalInfo.shortBio}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => scrollTo('projects')}
                className="group flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-semibold text-sm shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => {
                  playSuccess();
                  onOpenResume();
                }}
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-dark-850 hover:bg-dark-800 border border-white/10 hover:border-cyan-500/40 text-slate-200 hover:text-white font-semibold text-sm transition-all duration-200"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Social Links & Trust Badges */}
            <div className="pt-4 flex flex-wrap items-center gap-4 text-xs text-slate-400">
              <span className="font-mono text-slate-500">CONNECT &gt;</span>
              
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noreferrer"
                onClick={playClick}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/10 border border-white/10 hover:border-cyan-500/30 text-slate-300 hover:text-cyan-300 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>

              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noreferrer"
                onClick={playClick}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/10 border border-white/10 hover:border-blue-500/30 text-slate-300 hover:text-blue-300 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>

              <a
                href={`mailto:${personalInfo.social.email}`}
                onClick={playClick}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/10 border border-white/10 hover:border-purple-500/30 text-slate-300 hover:text-purple-300 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Email</span>
              </a>
            </div>

          </div>

          {/* Right Column: 3D Developer Visual Composition (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            <HeroScene3D />
            
            {/* Quick floating stat chips overlay */}
            <div className="w-full grid grid-cols-2 gap-3 -mt-4 relative z-20">
              <div className="p-3 rounded-xl bg-dark-900/90 border border-cyan-500/20 backdrop-blur-md text-left">
                <span className="text-[10px] uppercase font-mono text-cyan-400 font-semibold tracking-wider block">
                  KSCST Grand Champion
                </span>
                <span className="text-sm font-bold text-slate-100 font-heading">
                  1st Place (400+ Teams)
                </span>
              </div>

              <div className="p-3 rounded-xl bg-dark-900/90 border border-purple-500/20 backdrop-blur-md text-left">
                <span className="text-[10px] uppercase font-mono text-purple-400 font-semibold tracking-wider block">
                  Active Experience
                </span>
                <span className="text-sm font-bold text-slate-100 font-heading">
                  Invicto Labs SDE Intern
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Animated Scroll Down Indicator */}
        <div className="mt-16 flex flex-col items-center justify-center gap-2">
          <button
            onClick={() => scrollTo('about')}
            className="group flex flex-col items-center gap-1.5 text-xs text-slate-500 hover:text-cyan-400 transition-colors"
            aria-label="Scroll down to About section"
          >
            <span className="font-mono text-[11px] tracking-widest uppercase">Scroll to explore</span>
            <ChevronDown className="w-4 h-4 animate-bounce text-cyan-400" />
          </button>
        </div>
      </div>
    </section>
  );
}
