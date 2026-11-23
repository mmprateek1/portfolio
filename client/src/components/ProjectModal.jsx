import React from 'react';
import { X, ExternalLink, Award, CheckCircle, ShieldAlert, Cpu, Sparkles, Layers } from 'lucide-react';
import { Github } from './ui/SocialIcons';
import { playClick } from '../utils/soundEffects';

export default function ProjectModal({ project, isOpen, onClose }) {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="fixed inset-0" onClick={onClose} />

      <div className="relative w-full max-w-3xl bg-dark-900 border border-cyan-500/30 rounded-3xl shadow-2xl shadow-cyan-950/60 overflow-hidden z-10 flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-dark-950/80">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-heading font-bold text-white">
                  {project.title}
                </h3>
                {project.award && (
                  <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[10px] font-bold flex items-center gap-1">
                    <Award className="w-3 h-3 text-amber-400" />
                    Award Winner
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-400 font-mono">{project.subtitle}</p>
            </div>
          </div>
          <button
            onClick={() => {
              playClick();
              onClose();
            }}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-left">
          
          {/* Key Metrics Banner */}
          {project.metrics && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="p-3 rounded-2xl bg-white/[0.03] border border-white/10 text-center">
                  <span className="text-base sm:text-lg font-heading font-bold text-cyan-400 block">
                    {m.value}
                  </span>
                  <span className="text-[11px] text-slate-400 mt-0.5 block leading-tight">
                    {m.label}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Problem & Solution Dual Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-red-500/5 border border-red-500/15 space-y-1.5">
              <span className="text-[11px] uppercase font-mono font-bold text-red-400 tracking-wider flex items-center gap-1.5">
                <ShieldAlert className="w-3.5 h-3.5" />
                Problem Statement
              </span>
              <p className="text-xs text-slate-300 leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-500/5 border border-emerald-500/15 space-y-1.5">
              <span className="text-[11px] uppercase font-mono font-bold text-emerald-400 tracking-wider flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5" />
                Engineered Solution
              </span>
              <p className="text-xs text-slate-300 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Architecture Pipeline / Layers */}
          {project.architectureLayers && (
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-cyan-400 flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5" />
                Execution Pipeline & Architecture
              </h4>
              <div className="space-y-2">
                {project.architectureLayers.map((layer, idx) => (
                  <div key={idx} className="p-2.5 rounded-xl bg-white/[0.03] border border-white/5 flex items-start gap-3">
                    <span className="px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-300 font-mono text-[11px] font-bold shrink-0">
                      {layer.step}
                    </span>
                    <span className="text-xs text-slate-300 leading-snug">
                      {layer.detail}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Highlights */}
          <div className="space-y-2.5">
            <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-purple-400">
              Technical Highlights & Innovations
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.highlights.map((h, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                  <CheckCircle className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Confidentiality notice if applicable */}
          {project.confidentialNote && (
            <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-300 flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 shrink-0 text-amber-400" />
              <span>{project.confidentialNote}</span>
            </div>
          )}

          {/* Technologies Stack */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-slate-400">
              Technology Stack
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((t, idx) => (
                <span key={idx} className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-cyan-300">
                  {t}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer with Actions */}
        <div className="px-6 py-4 bg-dark-950/80 border-t border-white/10 flex items-center justify-between">
          <span className="text-xs text-slate-400 font-mono">
            Category: {project.category}
          </span>
          <div className="flex items-center gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                onClick={playClick}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-xs transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>View Source Code</span>
              </a>
            )}
            <button
              onClick={() => {
                playClick();
                onClose();
              }}
              className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-medium transition-colors"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
