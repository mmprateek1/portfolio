import React, { useState } from 'react';
import { Sparkles, Trophy, ExternalLink, ArrowUpRight, Cpu, Eye, Layers, Lock, ShieldCheck } from 'lucide-react';
import { Github } from '../components/ui/SocialIcons';
import { projectsData } from '../data/projectsData';
import ProjectModal from '../components/ProjectModal';
import { playClick } from '../utils/soundEffects';

export default function Projects() {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const categories = ['All', 'AI & Computer Vision', 'Full Stack & Automation', 'Full Stack & Web'];

  const filteredProjects = projectsData.filter((p) => {
    if (selectedFilter === 'All') return true;
    return p.category === selectedFilter;
  });

  const flagshipProject = projectsData.find((p) => p.id === 'jnanetra');
  const otherProjects = filteredProjects.filter((p) => p.id !== 'jnanetra');

  const openProjectDetails = (proj) => {
    playClick();
    setActiveModalProject(proj);
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-dark-950/40">
      {/* Background ambient accents */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Portfolio Highlights</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-bold text-white tracking-tight">
            Things I've <span className="text-gradient-cyan">Built</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-sans">
            Award-winning edge AI frameworks, browser automation platforms, and full-stack web applications.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                playClick();
                setSelectedFilter(cat);
              }}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                selectedFilter === cat
                  ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/30'
                  : 'bg-dark-900 border border-white/10 text-slate-400 hover:text-white hover:border-white/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* FLAGSHIP HERO SPOTLIGHT: JNANETRA */}
        {(selectedFilter === 'All' || selectedFilter === 'AI & Computer Vision') && flagshipProject && (
          <div className="mb-14 relative group text-left">
            {/* Glowing gold/cyan border card */}
            <div className="relative p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-dark-900 via-dark-850 to-dark-900 border-2 border-amber-500/40 hover:border-amber-400/80 shadow-2xl shadow-amber-950/20 backdrop-blur-xl transition-all duration-300">
              
              {/* Award Badge Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-6 border-b border-white/10">
                <div className="flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/40 text-amber-300 text-xs font-bold tracking-wide shadow-sm shadow-amber-500/20">
                  <Trophy className="w-4 h-4 text-amber-400 animate-pulse" />
                  <span>KSCST STATE GRAND CHAMPION — BEST PROJECT AWARD (2025–26)</span>
                </div>
                <span className="text-xs font-mono text-slate-400">
                  Flagship Edge-AI Engineering Showcase
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left Description (7 cols) */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="space-y-1">
                    <span className="text-xs uppercase font-mono text-cyan-400 font-bold tracking-wider">
                      Assistive Vision & Robotics
                    </span>
                    <h3 className="text-2xl sm:text-4xl font-heading font-black text-white">
                      {flagshipProject.title}
                    </h3>
                  </div>

                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans">
                    {flagshipProject.description}
                  </p>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300 py-1">
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      <span>On-Device YOLO11 Nano Detection</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      <span>MiDaS Monocular Depth Estimation</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      <span>Real-time A* Pathfinding Avoidance</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      <span>100% Offline Mobile Processing</span>
                    </div>
                  </div>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {flagshipProject.technologies.slice(0, 7).map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-cyan-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex flex-wrap items-center gap-3 pt-3">
                    <button
                      onClick={() => openProjectDetails(flagshipProject)}
                      className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-400 hover:to-orange-500 text-white font-semibold text-xs shadow-lg shadow-amber-500/25 transition-all"
                    >
                      <Eye className="w-4 h-4" />
                      <span>View Architecture & Metrics</span>
                    </button>

                    {flagshipProject.github && (
                      <a
                        href={flagshipProject.github}
                        target="_blank"
                        rel="noreferrer"
                        onClick={playClick}
                        className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-dark-850 hover:bg-dark-800 border border-white/10 hover:border-cyan-500/40 text-slate-200 text-xs font-semibold transition-all"
                      >
                        <Github className="w-4 h-4 text-cyan-400" />
                        <span>GitHub Repository</span>
                      </a>
                    )}
                  </div>
                </div>

                {/* Right Interactive Mockup / Telemetry Panel (5 cols) */}
                <div className="lg:col-span-5 p-6 rounded-2xl bg-dark-950/80 border border-white/10 space-y-4">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider flex items-center gap-2">
                      <Cpu className="w-4 h-4" />
                      Real-Time Neural Telemetry
                    </span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  </div>

                  <div className="space-y-3 font-mono text-xs">
                    <div className="flex items-center justify-between p-2 rounded-lg bg-white/[0.03]">
                      <span className="text-slate-400">Inference Speed</span>
                      <span className="text-emerald-400 font-bold">&lt; 45 ms / frame</span>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded-lg bg-white/[0.03]">
                      <span className="text-slate-400">Neural Models</span>
                      <span className="text-cyan-400 font-bold">YOLO11 Nano + MiDaS</span>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded-lg bg-white/[0.03]">
                      <span className="text-slate-400">Hardware Layer</span>
                      <span className="text-purple-400 font-bold">Smartphone CameraX</span>
                    </div>
                    <div className="flex items-center justify-between p-2 rounded-lg bg-white/[0.03]">
                      <span className="text-slate-400">Guidance Mode</span>
                      <span className="text-amber-400 font-bold">TTS Audio + Haptics</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-[11px] text-amber-300">
                    🏆 "Grand Champion out of 400+ teams at KSCST 49th Series State-Level Project Exhibition."
                  </div>
                </div>

              </div>

            </div>
          </div>
        )}

        {/* BENTO GRID FOR REMAINING PROJECTS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {otherProjects.map((project) => (
            <div
              key={project.id}
              className="group p-6 rounded-3xl bg-dark-900/80 border border-white/10 hover:border-cyan-500/40 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:shadow-cyan-950/30"
            >
              <div>
                {/* Project Header */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] uppercase font-mono font-bold tracking-wider px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                    {project.category}
                  </span>
                  {project.award && (
                    <span className="text-[10px] font-bold text-amber-400 flex items-center gap-1">
                      <Trophy className="w-3 h-3" />
                      Awarded
                    </span>
                  )}
                </div>

                <h3 className="font-heading font-bold text-lg text-white group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-xs text-slate-400 font-mono mt-1 mb-3">
                  {project.subtitle}
                </p>

                <p className="text-xs text-slate-300 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {project.technologies.slice(0, 4).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[11px] font-mono text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-1.5 py-0.5 text-[10px] font-mono text-slate-500">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <button
                  onClick={() => openProjectDetails(project)}
                  className="flex items-center gap-1.5 text-xs text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Inspect Details</span>
                </button>

                <div className="flex items-center gap-2">
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      onClick={playClick}
                      className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                      title="GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  ) : (
                    <span className="flex items-center gap-1 text-[11px] font-mono text-slate-500" title="Enterprise Confidential">
                      <Lock className="w-3.5 h-3.5" />
                      <span>Internal</span>
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Detail Modal */}
      <ProjectModal
        project={activeModalProject}
        isOpen={!!activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
}
