import React from 'react';
import { Mail, ArrowUp, Heart } from 'lucide-react';
import { Github, Linkedin } from './ui/SocialIcons';
import { personalInfo } from '../data/personalInfo';
import { playClick } from '../utils/soundEffects';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-dark-950 pt-16 pb-12 border-t border-white/5 overflow-hidden">
      
      {/* Subtle animated glowing gradient accent line */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-60 animate-gradient-x" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-10 border-b border-white/5">
          
          {/* Logo & Philosophy */}
          <div className="space-y-1.5 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="font-heading font-black text-xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                MP.
              </span>
              <span className="text-white font-bold text-sm tracking-tight">
                M M Prateek
              </span>
            </div>
            <p className="text-xs text-slate-400 font-sans italic">
              "Building, Learning, and Improving Every Day."
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.social.github}
              target="_blank"
              rel="noreferrer"
              onClick={playClick}
              className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/10 text-slate-300 hover:text-cyan-400 transition-colors"
              title="GitHub Profile"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noreferrer"
              onClick={playClick}
              className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/10 text-slate-300 hover:text-blue-400 transition-colors"
              title="LinkedIn Profile"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personalInfo.social.email}`}
              onClick={playClick}
              className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/10 text-slate-300 hover:text-purple-400 transition-colors"
              title="Send Direct Email"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 hover:text-cyan-300 transition-colors flex items-center gap-1.5 text-xs font-mono"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
              <span className="hidden sm:inline">Top</span>
            </button>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-mono gap-2">
          <div>
            © {currentYear} M M Prateek. Designed & Developed with precision.
          </div>
          <div className="flex items-center gap-1">
            <span>Engineered in</span>
            <span className="text-slate-300 font-medium">Karnataka, India</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
