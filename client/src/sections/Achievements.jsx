import React from 'react';
import { Trophy, Anchor, Gamepad2, Cloud, ShieldCheck, Sparkles, Award, CheckCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { achievementsData } from '../data/achievementsData';
import { playSuccess, playClick } from '../utils/soundEffects';

export default function Achievements() {
  const iconMap = {
    Trophy: Trophy,
    Anchor: Anchor,
    Gamepad2: Gamepad2,
    Cloud: Cloud,
    ShieldCheck: ShieldCheck,
    Sparkles: Sparkles,
  };

  const triggerConfetti = () => {
    playSuccess();
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#00F0FF', '#F59E0B', '#8B5CF6', '#10B981'],
      });
    } catch (e) {
      // Confetti fallback
    }
  };

  return (
    <section id="achievements" className="py-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono uppercase tracking-wider">
            <Trophy className="w-3.5 h-3.5 text-amber-400" />
            <span>Honors & Validation</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-bold text-white tracking-tight">
            Milestones & <span className="text-gradient-gold">Recognition</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base font-sans">
            Competitive technical awards, university state championships, and verified engineering credentials.
          </p>
        </div>

        {/* Featured State Championship Hero Card */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-amber-500/15 via-dark-900 to-amber-500/10 border-2 border-amber-400/50 shadow-2xl shadow-amber-950/30 backdrop-blur-xl text-left">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shadow-md shadow-amber-500/20">
                  <Trophy className="w-6 h-6 animate-pulse" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase font-bold tracking-wider text-amber-400 block">
                    State Level Grand Champion (2025–26)
                  </span>
                  <h3 className="text-xl sm:text-2xl font-heading font-black text-white">
                    KSCST Best Project Award — Jnanetra
                  </h3>
                </div>
              </div>

              <button
                onClick={triggerConfetti}
                className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-dark-950 font-bold text-xs shadow-lg shadow-amber-500/30 transition-all flex items-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Celebrate Win 🎉</span>
              </button>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed font-sans mb-4">
              Awarded Best Project Award (Information Science & Engineering) at the 49th Series Student Project Programme (SPP) exhibition conducted by the Karnataka State Council for Science and Technology (KSCST). Ranked #1 across 400+ student finalist teams from leading engineering institutions.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-amber-500/20 text-xs text-amber-200 font-mono">
              <div>🏆 Recognized by State Panel</div>
              <div>⚡ Edge-AI & Monocular Depth</div>
              <div>🎯 400+ Competitor Teams</div>
            </div>
          </div>
        </div>

        {/* Milestone Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          {achievementsData.slice(1).map((ach) => {
            const Icon = iconMap[ach.icon] || Award;
            return (
              <div
                key={ach.id}
                className="p-6 rounded-3xl bg-dark-900/80 border border-white/10 hover:border-cyan-500/40 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:shadow-cyan-950/20"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400">
                      {ach.year}
                    </span>
                  </div>

                  <span className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 font-bold block mb-1">
                    {ach.organization}
                  </span>

                  <h3 className="font-heading font-bold text-base text-white mb-2">
                    {ach.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {ach.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 space-y-1.5 text-xs text-slate-400">
                  <div className="flex items-start gap-1.5 text-slate-300 text-[11px]">
                    <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{ach.highlight}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
