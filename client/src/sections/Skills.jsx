import React, { useState } from 'react';
import { Code2, Layout, Server, Database, Wrench, Cpu, Check, Search, Sparkles } from 'lucide-react';
import { skillCategories } from '../data/skillsData';
import { playClick } from '../utils/soundEffects';

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const iconMap = {
    Code2: Code2,
    Layout: Layout,
    Server: Server,
    Database: Database,
    Wrench: Wrench,
    Cpu: Cpu,
  };

  const filteredCategories = skillCategories.filter((cat) => {
    if (selectedCategory !== 'all' && cat.id !== selectedCategory) return false;
    if (!searchQuery) return true;
    const matchCat = cat.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchSkills = cat.skills.some((s) =>
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.note.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return matchCat || matchSkills;
  });

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-dark-950/60">
      {/* Background ambient glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-purple-400" />
            <span>Technologies & Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-bold text-white tracking-tight">
            My Technical <span className="text-gradient-violet">Arsenal</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-sans">
            A comprehensive, verified toolset across systems engineering, high-scale backends, modern frontend, and on-device edge AI.
          </p>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 p-1 rounded-2xl bg-dark-900 border border-white/10 max-w-full overflow-x-auto">
            <button
              onClick={() => {
                playClick();
                setSelectedCategory('all');
              }}
              className={`px-4 py-2 rounded-xl text-xs font-medium transition-all ${
                selectedCategory === 'all'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/25'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              All Domains
            </button>
            {skillCategories.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    playClick();
                    setSelectedCategory(cat.id);
                  }}
                  className={`px-3.5 py-2 rounded-xl text-xs font-medium transition-all whitespace-nowrap ${
                    isSelected
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/25'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {cat.title}
                </button>
              );
            })}
          </div>

          {/* Quick Search */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skill (e.g. Node, YOLO)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-dark-900 border border-white/10 rounded-xl pl-10 pr-4 py-2 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500/50"
            />
          </div>

        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat) => {
            const IconComponent = iconMap[cat.icon] || Code2;
            return (
              <div
                key={cat.id}
                className="group p-6 rounded-3xl bg-dark-900/80 border border-white/10 hover:border-cyan-500/40 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:shadow-cyan-950/30"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-heading font-bold text-base text-white group-hover:text-cyan-300 transition-colors">
                        {cat.title}
                      </h3>
                      <p className="text-[11px] text-slate-400 line-clamp-1">{cat.description}</p>
                    </div>
                  </div>

                  {/* Skills List in Category */}
                  <div className="space-y-2.5 mt-4">
                    {cat.skills.map((skill, idx) => (
                      <div
                        key={idx}
                        className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/5 hover:border-cyan-500/30 transition-all flex items-start justify-between gap-3 text-left"
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-semibold text-slate-100 text-xs">
                              {skill.name}
                            </span>
                            <span className="text-[10px] px-1.5 py-0.5 rounded bg-cyan-500/10 text-cyan-300 font-mono">
                              {skill.level}
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-400 mt-0.5 leading-snug">
                            {skill.note}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                  <span>Category ID: {cat.id}</span>
                  <span>{cat.skills.length} core tools</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Professional Note */}
        <div className="mt-12 text-center">
          <p className="text-xs text-slate-500 font-mono">
            * Skills presented honestly reflecting actual hands-on project and enterprise internship application. No inflated percentage meters.
          </p>
        </div>

      </div>
    </section>
  );
}
