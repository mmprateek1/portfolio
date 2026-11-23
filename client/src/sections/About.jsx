import React from 'react';
import { GraduationCap, Briefcase, MapPin, Award, Terminal, Cpu, Sparkles, Layers } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Biography & Background</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-bold text-white tracking-tight">
            A Little <span className="text-gradient-cyan">About Me</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-sans">
            Crafting scalable systems, intelligent automation, and assistive technology with a commitment to engineering excellence.
          </p>
        </div>

        {/* Bento Grid Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Main Narrative Card (8 cols) */}
          <div className="lg:col-span-8 p-6 sm:p-8 rounded-3xl bg-dark-900/80 border border-white/10 backdrop-blur-xl relative overflow-hidden group hover:border-cyan-500/30 transition-all duration-300">
            <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/5 rounded-bl-full pointer-events-none" />
            
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Terminal className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-lg text-slate-100">
                  Engineering Philosophy & Story
                </h3>
                <p className="text-xs text-slate-400">Prateek’s journey in software development</p>
              </div>
            </div>

            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                I'm <strong className="text-white font-semibold">Prateek</strong>, an Information Science and Engineering graduate from <strong className="text-cyan-300 font-semibold">Sri Siddhartha Institute of Technology (SSIT), Tumakuru</strong>.
              </p>
              <p>
                I enjoy transforming ideas into practical software solutions. My interests include <strong className="text-slate-100">full-stack development</strong>, <strong className="text-slate-100">backend engineering</strong>, <strong className="text-slate-100">automation</strong>, and exploring emerging technologies.
              </p>
              <p>
                During my internship at <strong className="text-purple-300 font-semibold">Invicto Labs</strong>, I gained hands-on experience working with backend development, web automation, APIs, and real-world software workflows — programmatically scaling property tax extraction across 80+ county portals.
              </p>
              <p>
                I also worked on <strong className="text-amber-300 font-semibold">Jnanetra</strong>, an AI-powered assistive navigation project that received the prestigious <strong className="text-amber-400 font-semibold">Best Project Award</strong> at the KSCST state-level student project exhibition out of 400+ collegiate teams.
              </p>
              <p className="italic text-slate-400 border-l-2 border-cyan-400 pl-4 my-2">
                "I believe in continuous learning, building practical solutions, and improving a little every day."
              </p>
            </div>

            {/* Core Values / Strengths pills */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-2 text-xs">
              <span className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-slate-300">
                ⚡ High-Throughput Backends
              </span>
              <span className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-slate-300">
                🤖 Resilient Browser Automation
              </span>
              <span className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-slate-300">
                🧠 On-Device Edge AI
              </span>
              <span className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-slate-300">
                🛡️ Clean Code & System Design
              </span>
            </div>
          </div>

          {/* Right Column Bento Cards (4 cols) */}
          <div className="lg:col-span-4 space-y-6 flex flex-col justify-between">
            
            {/* Card 1: Education Card */}
            <div className="p-6 rounded-3xl bg-dark-900/80 border border-white/10 backdrop-blur-xl hover:border-cyan-500/30 transition-all duration-300 text-left">
              <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-3">
                <GraduationCap className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono uppercase text-cyan-400 font-bold tracking-wider">
                Education
              </span>
              <h4 className="font-heading font-bold text-base text-white mt-1">
                B.E. in Information Science & Engineering
              </h4>
              <p className="text-xs text-slate-400 mt-1">
                {personalInfo.education.institution}
              </p>
              <div className="mt-3 flex items-center justify-between text-xs pt-2 border-t border-white/5">
                <span className="text-slate-400">CGPA</span>
                <span className="text-cyan-300 font-semibold font-mono">8.15 / 10.0</span>
              </div>
            </div>

            {/* Card 2: Current Experience Card */}
            <div className="p-6 rounded-3xl bg-dark-900/80 border border-white/10 backdrop-blur-xl hover:border-purple-500/30 transition-all duration-300 text-left">
              <div className="w-9 h-9 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-3">
                <Briefcase className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono uppercase text-purple-400 font-bold tracking-wider">
                Current Role
              </span>
              <h4 className="font-heading font-bold text-base text-white mt-1">
                {personalInfo.currentExperience.role}
              </h4>
              <p className="text-xs text-slate-400 mt-1">
                {personalInfo.currentExperience.company} • {personalInfo.currentExperience.period}
              </p>
              <div className="mt-3 flex items-center justify-between text-xs pt-2 border-t border-white/5">
                <span className="text-slate-400">Focus</span>
                <span className="text-purple-300 font-semibold">Backend & Automation</span>
              </div>
            </div>

            {/* Card 3: Location Card */}
            <div className="p-6 rounded-3xl bg-dark-900/80 border border-white/10 backdrop-blur-xl hover:border-emerald-500/30 transition-all duration-300 text-left">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-3">
                <MapPin className="w-5 h-5" />
              </div>
              <span className="text-[10px] font-mono uppercase text-emerald-400 font-bold tracking-wider">
                Location & Base
              </span>
              <h4 className="font-heading font-bold text-base text-white mt-1">
                {personalInfo.location.city}, Karnataka, India
              </h4>
              <p className="text-xs text-slate-400 mt-1">
                Active in Bangalore & Tumakuru Tech Corridor
              </p>
              <div className="mt-3 flex items-center justify-between text-xs pt-2 border-t border-white/5">
                <span className="text-slate-400">Timezone</span>
                <span className="text-emerald-300 font-semibold font-mono">IST (GMT+5:30)</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
