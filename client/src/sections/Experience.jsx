import React, { useState } from 'react';
import { Briefcase, Building2, Calendar, MapPin, CheckCircle2, ChevronDown, ChevronUp, Layers, Sparkles, ExternalLink } from 'lucide-react';
import { experienceData } from '../data/experienceData';
import { playClick } from '../utils/soundEffects';

export default function Experience() {
  const [expandedSystem, setExpandedSystem] = useState(0); // System index

  const exp = experienceData[0]; // Invicto Labs

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Career Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-bold text-white tracking-tight">
            Where I've <span className="text-gradient-cyan">Worked</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-sans">
            Enterprise backend architecture, browser automation, and high-throughput real estate legal-tech pipelines.
          </p>
        </div>

        {/* Experience Timeline Item */}
        <div className="max-w-4xl mx-auto">
          <div className="relative pl-6 sm:pl-10 border-l-2 border-cyan-500/30">
            
            {/* Animated Timeline Node */}
            <div className="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-dark-950 border-2 border-cyan-400 flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            </div>

            {/* Experience Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-dark-900/90 border border-white/10 backdrop-blur-xl shadow-xl shadow-black/40 space-y-6 text-left">
              
              {/* Header Info */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="font-heading font-bold text-xl sm:text-2xl text-white">
                      {exp.role}
                    </h3>
                    <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/15 border border-cyan-500/30 text-cyan-300 text-xs font-semibold">
                      {exp.type}
                    </span>
                  </div>

                  <div className="flex items-center gap-4 mt-2 text-xs text-slate-400 flex-wrap">
                    <span className="flex items-center gap-1.5 font-medium text-slate-200">
                      <Building2 className="w-3.5 h-3.5 text-cyan-400" />
                      {exp.company}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                <div className="text-right hidden sm:block">
                  <span className="text-xs text-slate-400 font-mono block">Status</span>
                  <span className="text-sm font-bold text-emerald-400 flex items-center gap-1 justify-end">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Currently Contributing
                  </span>
                </div>
              </div>

              {/* Summary Description */}
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {exp.summary}
              </p>

              {/* Key Impact Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-2">
                {exp.keyMetrics.map((m, idx) => (
                  <div key={idx} className="p-3 rounded-2xl bg-white/[0.03] border border-white/5 text-center">
                    <span className="text-base sm:text-lg font-heading font-bold text-cyan-400 block">
                      {m.value}
                    </span>
                    <span className="text-[11px] text-slate-400 mt-0.5 block leading-tight">
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Core Responsibilities */}
              <div className="space-y-3">
                <h4 className="text-xs uppercase font-mono tracking-wider font-bold text-slate-400">
                  Key Responsibilities & Deliverables
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {exp.responsibilities.map((resp, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Interactive Deep-Dive Architecture Systems Tabs */}
              <div className="pt-4 border-t border-white/10 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase font-mono tracking-wider font-bold text-cyan-400">
                    Engineered Production Systems Breakdown
                  </span>
                  <span className="text-[11px] text-slate-500 font-mono">Click to toggle architecture</span>
                </div>

                <div className="space-y-3">
                  {exp.systems.map((sys, idx) => {
                    const isExpanded = expandedSystem === idx;
                    return (
                      <div
                        key={idx}
                        className={`rounded-2xl border transition-all ${
                          isExpanded
                            ? 'bg-dark-850/80 border-cyan-500/40 shadow-lg'
                            : 'bg-dark-950/40 border-white/5 hover:border-white/15'
                        }`}
                      >
                        <button
                          onClick={() => {
                            playClick();
                            setExpandedSystem(isExpanded ? -1 : idx);
                          }}
                          className="w-full p-4 flex items-center justify-between text-left focus:outline-none"
                        >
                          <div className="flex items-center gap-3">
                            <Layers className="w-4 h-4 text-cyan-400" />
                            <div>
                              <div className="flex items-center gap-2">
                                <span className="font-heading font-bold text-sm text-slate-100">
                                  {sys.name}
                                </span>
                                <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 font-mono">
                                  {sys.badge}
                                </span>
                              </div>
                              <p className="text-xs text-slate-400 mt-0.5 line-clamp-1">{sys.description}</p>
                            </div>
                          </div>
                          {isExpanded ? (
                            <ChevronUp className="w-4 h-4 text-cyan-400 shrink-0" />
                          ) : (
                            <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                          )}
                        </button>

                        {isExpanded && (
                          <div className="px-4 pb-4 pt-1 space-y-3 border-t border-white/5 animate-fadeIn text-xs">
                            <p className="text-slate-300 leading-relaxed">{sys.description}</p>
                            <ul className="space-y-1.5 list-disc list-inside text-slate-400">
                              {sys.bullets.map((b, bIdx) => (
                                <li key={bIdx} className="text-slate-300">
                                  {b}
                                </li>
                              ))}
                            </ul>
                            <div className="flex flex-wrap gap-1.5 pt-2">
                              {sys.technologies.map((t, tIdx) => (
                                <span
                                  key={tIdx}
                                  className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-cyan-300"
                                >
                                  {t}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Technologies Badges Footer */}
              <div className="pt-2 flex flex-wrap gap-1.5">
                {exp.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-xs font-mono text-slate-300 hover:text-cyan-300 hover:border-cyan-500/30 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
