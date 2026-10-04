import React from 'react';
import { Target, ShieldAlert, Award, Zap, Users, Compass, CheckCircle2 } from 'lucide-react';

const timelineEvents = [
  { year: '2021', title: 'Genesis of ABS GYM', desc: 'Started with a core vision to build a high-performance fitness facility.' },
  { year: '2023', title: 'Equipment Revolution', desc: 'Imported biomechanically tuned heavy-duty strength equipment.' },
  { year: '2025', title: 'Next-Gen Fitness OS', desc: 'Upgraded to a futuristic neon-tech atmosphere with custom AI training plans.' },
];

const highlights = [
  'Biomechanical Heavy Machinery',
  'Certified Elite Personal Trainers',
  'High-Energy Cyberpunk Ambience',
  'Customized Nutrition & Macro Plans',
  'Dedicated Morning & Evening Batches',
  'Active Motivational Community',
];

const About = ({ onOpenBooking }) => {
  return (
    <section id="about" className="relative py-24 z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full glass-panel border border-[#FF5500]/30 text-xs font-bold text-[#FF5500] uppercase tracking-widest">
            <Compass className="w-3.5 h-3.5" />
            <span>About ABS GYM</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white uppercase">
            WHERE POWER MEETS <span className="neon-orange-text">PURPOSE</span>
          </h2>
          <p className="text-slate-400 text-base leading-relaxed">
            ABS GYM is not just a place to sweat — it is an elite strength sanctuary engineered to push human boundaries, eliminate excuses, and build unstoppable bodies.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Interactive Story Card */}
          <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 relative group overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#FF5500]/10 rounded-full blur-3xl pointer-events-none group-hover:bg-[#FF5500]/20 transition-all duration-500" />
            
            <div className="space-y-6 relative z-10">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-2xl bg-[#FF5500]/15 border border-[#FF5500]/40 flex items-center justify-center text-[#FF5500]">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white uppercase font-heading">OUR MISSION</h3>
                  <p className="text-xs text-[#FF5500] font-subheading font-bold uppercase tracking-wider">BUILD STRENGTH. UNLOCK POWER.</p>
                </div>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                At ABS GYM, we believe fitness is the ultimate vehicle for personal mastery. We provide world-class strength apparatus, dedicated training protocols, and a electrifying atmosphere so every member achieves their peak physical potential.
              </p>

              {/* Highlight Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {highlights.map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-xs font-semibold text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#FF5500] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex items-center space-x-4">
                <button
                  onClick={onOpenBooking}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#FF5500] to-[#FF7700] text-white font-bold text-xs uppercase tracking-wider shadow-neon-orange hover:shadow-neon-orange-lg transition-all"
                >
                  Start Your Journey
                </button>
                <div className="text-xs text-slate-400 font-subheading">
                  <span className="text-white font-bold block">100% Commitment</span>
                  No fluff, pure results.
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Timeline & Evolution */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white uppercase font-heading flex items-center space-x-3">
              <Zap className="w-6 h-6 text-[#FF5500]" />
              <span>THE ABS EVOLUTION</span>
            </h3>

            <div className="space-y-4">
              {timelineEvents.map((evt, idx) => (
                <div
                  key={idx}
                  className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-[#FF5500]/40 transition-all flex space-x-5 group"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-xl bg-slate-900 border border-[#FF5500]/40 text-[#FF5500] font-black text-sm font-heading flex items-center justify-center group-hover:bg-[#FF5500] group-hover:text-white transition-colors">
                      {evt.year}
                    </div>
                    {idx !== timelineEvents.length - 1 && (
                      <div className="w-0.5 h-full bg-slate-800 my-2" />
                    )}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white uppercase font-heading">{evt.title}</h4>
                    <p className="text-slate-400 text-xs sm:text-sm mt-1">{evt.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Motivational Quote Banner */}
            <div className="glass-panel p-5 rounded-2xl border-l-4 border-l-[#FF5500] border-y border-r border-white/5 bg-gradient-to-r from-[#FF5500]/10 to-transparent">
              <p className="text-xs sm:text-sm italic text-slate-200">
                “Pain is temporary. Pride is forever. Step into ABS GYM and claim the body you were born to build.”
              </p>
              <span className="block text-[11px] font-bold text-[#FF5500] uppercase tracking-wider mt-2 font-subheading">
                — ABS GYM Coaching Team
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;
