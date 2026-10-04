import React, { useState } from 'react';
import { Sparkles, Trophy, ArrowRight, ShieldCheck, Flame } from 'lucide-react';

const transformations = [
  {
    id: 1,
    name: 'Vikram Shinde',
    achievement: '-18 KG Body Fat in 16 Weeks',
    program: 'Fat Loss HIIT & Strength',
    trainer: 'Gaurav Ghodake',
    beforeTag: 'Starting Weight: 94 KG',
    afterTag: 'Current Weight: 76 KG',
    quote: 'ABS GYM changed my entire posture and energy. The trainers don’t let you quit.',
    stats: { fatLost: '18kg', muscleGain: '+4kg', bodyFat: '14%' }
  },
  {
    id: 2,
    name: 'Rahul Deshmukh',
    achievement: '+12 KG Lean Muscle Gain',
    program: 'Hypertrophy Mass OS',
    trainer: 'Aniket',
    beforeTag: 'Starting Weight: 58 KG',
    afterTag: 'Current Weight: 70 KG',
    quote: 'I used to struggle gaining mass. With Aniket sir’s guidance and heavy lifting, I built my dream physique.',
    stats: { fatLost: '-2%', muscleGain: '12kg', bodyFat: '11%' }
  },
  {
    id: 3,
    name: 'Sameer Patel',
    achievement: 'Powerlifting PR + Recomp',
    program: 'Strength & Powerlifting',
    trainer: 'Mohsin Shaikh',
    beforeTag: 'Bench PR: 60 KG',
    afterTag: 'Bench PR: 125 KG',
    quote: 'The equipment quality at ABS GYM is insane. Best atmosphere for heavy lifting in the city.',
    stats: { squat: '170kg', bench: '125kg', deadlift: '210kg' }
  }
];

const Transformations = ({ onOpenBooking }) => {
  const [activeItem, setActiveItem] = useState(0);
  const current = transformations[activeItem];

  return (
    <section id="transformations" className="relative py-24 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full glass-panel border border-[#FF5500]/30 text-xs font-bold text-[#FF5500] uppercase tracking-widest">
            <Trophy className="w-3.5 h-3.5" />
            <span>Proven Physical Masters</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white uppercase">
            REAL PEOPLE. <span className="neon-orange-text">REAL RESULTS.</span>
          </h2>
          <p className="text-slate-400 text-base">
            Explore authentic transformation journeys carved inside ABS GYM through iron discipline and expert coaching.
          </p>
        </div>

        {/* Transformation Showcase Box */}
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-[#FF5500]/40 max-w-5xl mx-auto relative overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            
            {/* Visual Transformation Card */}
            <div className="space-y-4">
              <div className="relative h-80 rounded-2xl bg-slate-900 border border-slate-700 overflow-hidden flex items-center justify-center p-6 text-center group">
                <div className="absolute inset-0 cyber-grid opacity-30" />
                <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-[#10121A] to-[#181C28]" />

                {/* Abstract Before / After Split Visualization */}
                <div className="relative z-10 grid grid-cols-2 gap-4 w-full h-full">
                  
                  {/* BEFORE Split Box */}
                  <div className="glass-panel p-4 rounded-xl border border-red-500/30 flex flex-col justify-between bg-slate-950/80">
                    <span className="px-2 py-1 rounded bg-red-500/20 text-red-400 text-[10px] font-black uppercase tracking-widest self-start font-subheading">
                      BEFORE
                    </span>
                    <div className="my-auto">
                      <div className="text-3xl font-black text-slate-400 font-heading">START</div>
                      <span className="text-xs font-bold text-slate-400 block mt-1">{current.beforeTag}</span>
                    </div>
                    <div className="text-[10px] text-slate-500 uppercase">Phase 01</div>
                  </div>

                  {/* AFTER Split Box */}
                  <div className="glass-panel p-4 rounded-xl border border-[#FF5500] flex flex-col justify-between bg-slate-950/90 shadow-neon-orange-sm">
                    <span className="px-2 py-1 rounded bg-[#FF5500]/20 text-[#FF5500] text-[10px] font-black uppercase tracking-widest self-start font-subheading flex items-center space-x-1">
                      <Flame className="w-3 h-3" />
                      <span>AFTER</span>
                    </span>
                    <div className="my-auto">
                      <div className="text-3xl font-black text-white font-heading neon-orange-text">TRANSFORMED</div>
                      <span className="text-xs font-bold text-[#FF5500] block mt-1">{current.afterTag}</span>
                    </div>
                    <div className="text-[10px] text-[#FF5500] font-bold uppercase">ABS GYM RESULT</div>
                  </div>

                </div>
              </div>

              {/* Selector Tabs */}
              <div className="flex gap-2">
                {transformations.map((item, idx) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveItem(idx)}
                    className={`flex-1 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                      activeItem === idx
                        ? 'bg-[#FF5500] text-white shadow-neon-orange-sm'
                        : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white'
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Details & Quote Column */}
            <div className="space-y-6">
              <div>
                <span className="px-3 py-1 rounded-full bg-[#FF5500]/15 border border-[#FF5500]/40 text-xs font-bold text-[#FF5500] uppercase tracking-widest font-subheading">
                  {current.program}
                </span>
                <h3 className="text-3xl font-black text-white uppercase font-heading mt-3">
                  {current.name}
                </h3>
                <p className="text-lg font-bold text-[#FF5500] font-subheading mt-1">
                  {current.achievement}
                </p>
              </div>

              <blockquote className="italic text-slate-300 text-sm glass-panel p-4 rounded-xl border-l-2 border-l-[#FF5500]">
                “{current.quote}”
              </blockquote>

              <div className="grid grid-cols-3 gap-3">
                {Object.entries(current.stats).map(([key, val], i) => (
                  <div key={i} className="glass-panel p-3 rounded-xl border border-white/5 text-center">
                    <span className="text-lg font-black text-white font-heading block">{val}</span>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider font-subheading">{key}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenBooking}
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#FF5500] to-[#FF7700] text-white font-bold text-xs uppercase tracking-widest shadow-neon-orange hover:shadow-neon-orange-lg transition-all flex items-center justify-center space-x-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Start Your Own Transformation</span>
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Transformations;
