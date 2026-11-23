import React from 'react';
import { GraduationCap, Award, BookOpen, Calendar, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';
import { educationData } from '../data/educationData';

export default function Education() {
  return (
    <section id="education" className="py-24 relative overflow-hidden bg-dark-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-mono uppercase tracking-wider">
            <GraduationCap className="w-3.5 h-3.5 text-purple-400" />
            <span>Academic Qualifications</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-bold text-white tracking-tight">
            Academic <span className="text-gradient-violet">Journey</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-sans">
            Rigorous foundations in Computer Science, enterprise software patterns, and applied engineering.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto space-y-8 relative pl-6 sm:pl-10 border-l-2 border-purple-500/30 text-left">
          {educationData.map((item, idx) => (
            <div key={item.id} className="relative group">
              
              {/* Connector dot */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-6 w-4 h-4 rounded-full bg-dark-950 border-2 border-purple-400 flex items-center justify-center group-hover:scale-125 transition-transform">
                <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
              </div>

              {/* Card */}
              <div className="p-6 sm:p-7 rounded-3xl bg-dark-900/80 border border-white/10 group-hover:border-purple-500/40 backdrop-blur-xl transition-all duration-300 space-y-4 shadow-lg shadow-black/20">
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-4">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider font-bold text-purple-400">
                      {item.badge}
                    </span>
                    <h3 className="font-heading font-bold text-lg sm:text-xl text-white mt-0.5">
                      {item.degree}
                    </h3>
                    <p className="text-xs text-slate-400 font-medium mt-0.5">
                      {item.institution}
                    </p>
                  </div>

                  <div className="flex flex-col sm:items-end gap-1 text-xs">
                    <span className="px-2.5 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20 font-mono font-semibold">
                      {item.grade}
                    </span>
                    <span className="text-slate-400 flex items-center gap-1 font-mono text-[11px]">
                      <Calendar className="w-3 h-3 text-slate-500" />
                      {item.period}
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  {item.description}
                </p>

                {/* Coursework chips */}
                {item.coursework && (
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-500 block mb-2">
                      Core Topics Studied:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {item.coursework.map((course, cIdx) => (
                        <span
                          key={cIdx}
                          className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-slate-300"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
