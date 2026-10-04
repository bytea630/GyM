import React from 'react';
import { Shield, Award, Instagram, Flame, Sparkles, CheckCircle } from 'lucide-react';

const trainersData = [
  {
    name: 'Gaurav Ghodake',
    role: 'Head Strength & Powerlifting Coach',
    exp: '7+ Years Experience',
    specialty: 'Heavy Compound Overload, Powerlifting, Form Perfection',
    skills: [
      { label: 'Strength & Powerlifting', value: 98 },
      { label: 'Form & Biomechanics', value: 96 },
      { label: 'Diet & Macro OS', value: 92 },
    ],
    bio: 'Pioneer coach at ABS GYM. Specializes in building raw compound strength, squat/bench/deadlift maxes, and unbreakable mental fortitude.',
    instagram: 'https://www.instagram.com/abs_gym7591/'
  },
  {
    name: 'Aniket',
    role: 'Hypertrophy & Physique Master',
    exp: '5+ Years Experience',
    specialty: 'Bodybuilding Isolation, Muscle Symmetry, Fat Loss',
    skills: [
      { label: 'Hypertrophy & Sculpting', value: 95 },
      { label: 'Body Fat Reduction', value: 94 },
      { label: 'Contest Conditioning', value: 90 },
    ],
    bio: 'Dedicated master of hypertrophy split programming. Focuses on time under tension, symmetry isolation, and rapid body transformations.',
    instagram: 'https://www.instagram.com/abs_gym7591/'
  },
  {
    name: 'Mohsin Shaikh',
    role: 'Functional & HIIT Performance Specialist',
    exp: '6+ Years Experience',
    specialty: 'Metabolic Conditioning, Cardio Endurance, Weight Loss',
    skills: [
      { label: 'High Intensity HIIT', value: 97 },
      { label: 'Stamina & VO2 Max', value: 93 },
      { label: 'Client Transformation', value: 95 },
    ],
    bio: 'High-energy transformation specialist. Known for intense group circuits, athletic conditioning, and keeping motivation peak every single session.',
    instagram: 'https://www.instagram.com/abs_gym7591/'
  }
];

const Trainers = ({ onOpenBooking }) => {
  return (
    <section id="trainers" className="relative py-24 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full glass-panel border border-[#FF5500]/30 text-xs font-bold text-[#FF5500] uppercase tracking-widest">
            <Award className="w-3.5 h-3.5" />
            <span>Master Coaches</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white uppercase">
            MEET THE <span className="neon-orange-text">ARCHITECTS</span>
          </h2>
          <p className="text-slate-400 text-base">
            Train alongside certified elite coaches who dedicate themselves to unlocking your maximum physical potential.
          </p>
        </div>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trainersData.map((trainer, idx) => (
            <div
              key={idx}
              className="glass-panel rounded-3xl border border-white/10 hover:border-[#FF5500] transition-all duration-500 overflow-hidden group glass-panel-hover flex flex-col justify-between"
            >
              {/* Top Banner Avatar Visualization */}
              <div className="relative h-64 bg-gradient-to-b from-[#181C28] via-[#10121A] to-[#08090C] overflow-hidden flex items-center justify-center p-6 border-b border-white/5">
                {/* Background Neon Grid Accent */}
                <div className="absolute inset-0 cyber-grid opacity-40" />
                <div className="absolute -bottom-10 w-48 h-48 bg-[#FF5500]/20 rounded-full blur-3xl group-hover:scale-150 transition-all duration-700 pointer-events-none" />

                {/* Cyber Silhouette Avatar */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-28 h-28 rounded-2xl bg-slate-900 border-2 border-[#FF5500] flex items-center justify-center shadow-neon-orange text-[#FF5500] group-hover:rotate-3 transition-transform duration-300">
                    <Shield className="w-14 h-14" />
                  </div>
                  <span className="mt-3 px-3 py-1 rounded-full bg-slate-900/90 border border-[#FF5500]/40 text-[10px] font-bold text-[#FF5500] uppercase tracking-widest font-subheading">
                    {trainer.exp}
                  </span>
                </div>

                {/* Social Floating Badge */}
                <a
                  href={trainer.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-4 right-4 p-2.5 rounded-xl glass-panel text-slate-300 hover:text-white hover:border-[#FF5500] transition-colors"
                >
                  <Instagram className="w-4 h-4 text-[#FF5500]" />
                </a>
              </div>

              {/* Trainer Details */}
              <div className="p-7 space-y-6 flex-1">
                <div>
                  <h3 className="text-2xl font-black text-white uppercase font-heading group-hover:text-[#FF5500] transition-colors">
                    {trainer.name}
                  </h3>
                  <span className="text-xs font-bold text-[#FF5500] uppercase tracking-wider font-subheading block mt-0.5">
                    {trainer.role}
                  </span>
                </div>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {trainer.bio}
                </p>

                {/* Skill Progress Bars */}
                <div className="space-y-3 pt-2">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest font-subheading block">
                    Specialized Competencies:
                  </span>
                  {trainer.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-1">
                      <div className="flex justify-between text-xs font-semibold">
                        <span className="text-slate-300">{skill.label}</span>
                        <span className="text-[#FF5500]">{skill.value}%</span>
                      </div>
                      <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-[#FF5500] to-[#FF8800] rounded-full"
                          style={{ width: `${skill.value}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Action */}
              <div className="p-7 pt-0">
                <button
                  onClick={onOpenBooking}
                  className="w-full py-3 rounded-xl bg-slate-900 hover:bg-gradient-to-r hover:from-[#FF5500] hover:to-[#FF7700] text-slate-200 hover:text-white border border-slate-800 hover:border-transparent text-xs font-bold tracking-wider uppercase transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Sparkles className="w-4 h-4 text-[#FF5500]" />
                  <span>Book 1-on-1 With {trainer.name.split(' ')[0]}</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Trainers;
