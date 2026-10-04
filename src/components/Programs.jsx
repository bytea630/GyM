import React, { useState } from 'react';
import { Dumbbell, Flame, TrendingUp, Shield, Activity, HeartPulse, UserCheck, Compass, Gauge, Users, ArrowRight, X, Check } from 'lucide-react';

const programsData = [
  {
    id: 'strength',
    title: 'Strength Training',
    desc: 'Heavy progressive overload protocols designed to build maximum muscular force and bone density.',
    icon: Dumbbell,
    level: 'All Levels',
    duration: '60 Mins',
    intensity: 'High',
    benefits: ['Heavy Barbell Work', 'Powerlifting Racks', 'Form Coaching', 'PR Tracking']
  },
  {
    id: 'full-body',
    title: 'Full Body Workouts',
    desc: 'High-yield compound circuit programs targeting all major muscular groups in a single intense session.',
    icon: Activity,
    level: 'Beginner to Advanced',
    duration: '45 Mins',
    intensity: 'Extreme',
    benefits: ['Full Muscle Recruitment', 'Functional Movements', 'Endurance Boost', 'Calorie Torch']
  },
  {
    id: 'weight-gain',
    title: 'Weight Gain Programs',
    desc: 'Hypertrophy focused training paired with clean caloric surplus guidance for lean mass accumulation.',
    icon: TrendingUp,
    level: 'Intermediate',
    duration: '60 Mins',
    intensity: 'Moderate-High',
    benefits: ['Hypertrophy Split', 'Mass Gainer Guidance', 'Weekly Check-ins', 'Progress Metrics']
  },
  {
    id: 'fat-loss',
    title: 'Fat Loss Training',
    desc: 'Metabolic conditioning and High Intensity Interval Training (HIIT) to melt body fat while maintaining muscle.',
    icon: Flame,
    level: 'All Levels',
    duration: '45 Mins',
    intensity: 'Max Intensity',
    benefits: ['HIIT Circuits', 'Fat Oxidation', 'Heart Rate Zones', 'Rapid Sculpting']
  },
  {
    id: 'muscle-building',
    title: 'Muscle Building',
    desc: 'Targeted bodybuilding isolation and volume training engineered for hypertrophy and aesthetic symmetry.',
    icon: Shield,
    level: 'Advanced',
    duration: '75 Mins',
    intensity: 'High',
    benefits: ['Symmetry Focus', 'Time Under Tension', 'Cable & Machine Mastery', 'Pump Protocols']
  },
  {
    id: 'cardio',
    title: 'Cardio Sessions',
    desc: 'Stamina-boosting cardiovascular endurance training using treadmill, rower, and spin bikes.',
    icon: HeartPulse,
    level: 'All Levels',
    duration: '30-45 Mins',
    intensity: 'Variable',
    benefits: ['VO2 Max Increase', 'Heart Health', 'Active Recovery', 'Stamina Boost']
  },
  {
    id: 'personal-training',
    title: 'Personal Training',
    desc: '1-on-1 dedicated coaching with Gaurav Ghodake, Aniket, or Mohsin Shaikh for accelerated results.',
    icon: UserCheck,
    level: 'Customized',
    duration: '60 Mins',
    intensity: 'Tailored',
    benefits: ['Dedicated Trainer', 'Custom Workout Plan', 'Diet & Macro OS', 'Zero Excuses']
  },
  {
    id: 'fitness-guidance',
    title: 'Fitness Guidance',
    desc: 'Comprehensive lifestyle, posture correction, recovery protocols, and injury prevention advice.',
    icon: Compass,
    level: 'All Levels',
    duration: 'Ongoing',
    intensity: 'Educational',
    benefits: ['Posture Correction', 'Supplements Guidance', 'Recovery Hacks', 'Mindset Coaching']
  },
  {
    id: 'equipment-training',
    title: 'Equipment Training',
    desc: 'Mastery over state-of-the-art biomechanical gym equipment, cables, and plate-loaded machines.',
    icon: Gauge,
    level: 'Beginners',
    duration: '45 Mins',
    intensity: 'Moderate',
    benefits: ['Safe Movement Mechanics', 'Machine Adjustments', 'Target Isolation', 'Zero Injury Risk']
  },
  {
    id: 'group-workouts',
    title: 'Group Workouts',
    desc: 'High-energy squad workouts designed to foster competition, camaraderie, and maximum motivation.',
    icon: Users,
    level: 'All Levels',
    duration: '50 Mins',
    intensity: 'High Energy',
    benefits: ['Team Energy', 'Pump Music Beats', 'Partner Drills', 'Community Vibe']
  }
];

const Programs = ({ onOpenBooking }) => {
  const [selectedProgram, setSelectedProgram] = useState(null);

  return (
    <section id="programs" className="relative py-24 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full glass-panel border border-[#FF5500]/30 text-xs font-bold text-[#FF5500] uppercase tracking-widest">
            <Dumbbell className="w-3.5 h-3.5" />
            <span>High-Tech Training Programs</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white uppercase">
            CHOOSE YOUR <span className="neon-orange-text">BATTLEFIELD</span>
          </h2>
          <p className="text-slate-400 text-base">
            From heavy powerlifting to explosive fat burning, explore 10 specialized fitness programs engineered for maximum physical transformation.
          </p>
        </div>

        {/* 10 Program Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programsData.map((prog) => {
            const IconComponent = prog.icon;
            return (
              <div
                key={prog.id}
                className="glass-panel p-7 rounded-3xl border border-white/10 hover:border-[#FF5500]/60 transition-all duration-300 group flex flex-col justify-between relative overflow-hidden glass-panel-hover"
              >
                {/* Neon Orange Corner Glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#FF5500]/10 rounded-full blur-2xl group-hover:bg-[#FF5500]/25 transition-all duration-500 pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-slate-900 to-[#10121A] border border-[#FF5500]/30 flex items-center justify-center text-[#FF5500] group-hover:scale-110 group-hover:border-[#FF5500] transition-all shadow-neon-orange-sm">
                      <IconComponent className="w-7 h-7" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-[#FF5500] font-subheading">
                      {prog.intensity}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white uppercase font-heading group-hover:text-[#FF5500] transition-colors mb-3">
                    {prog.title}
                  </h3>

                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                    {prog.desc}
                  </p>

                  <div className="flex items-center space-x-4 text-xs font-semibold text-slate-400 border-t border-white/5 pt-4 mb-6">
                    <div>
                      <span className="block text-[10px] text-slate-500 uppercase">Level</span>
                      <span className="text-white">{prog.level}</span>
                    </div>
                    <div className="w-px h-6 bg-slate-800" />
                    <div>
                      <span className="block text-[10px] text-slate-500 uppercase">Duration</span>
                      <span className="text-white">{prog.duration}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-3 pt-2">
                  <button
                    onClick={() => setSelectedProgram(prog)}
                    className="flex-1 py-2.5 rounded-xl bg-slate-900 hover:bg-[#FF5500]/20 border border-slate-800 hover:border-[#FF5500] text-slate-200 hover:text-white text-xs font-bold transition-all flex items-center justify-center space-x-2"
                  >
                    <span>Program Details</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#FF5500]" />
                  </button>
                  <button
                    onClick={onOpenBooking}
                    className="px-4 py-2.5 rounded-xl bg-[#FF5500] hover:bg-[#FF7700] text-white text-xs font-bold tracking-wider uppercase shadow-neon-orange-sm transition-all"
                  >
                    Join
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Program Details Modal */}
      {selectedProgram && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="glass-panel w-full max-w-lg p-8 rounded-3xl border border-[#FF5500]/50 relative shadow-2xl animate-float-slow">
            <button
              onClick={() => setSelectedProgram(null)}
              className="absolute top-5 right-5 p-2 rounded-xl glass-panel text-slate-400 hover:text-white hover:border-[#FF5500] transition-all"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center space-x-4 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-[#FF5500]/20 border border-[#FF5500] flex items-center justify-center text-[#FF5500]">
                {React.createElement(selectedProgram.icon, { className: 'w-7 h-7' })}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white uppercase font-heading">
                  {selectedProgram.title}
                </h3>
                <span className="text-xs text-[#FF5500] font-subheading font-bold uppercase tracking-widest">
                  ABS GYM SPECIFICATION
                </span>
              </div>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              {selectedProgram.desc}
            </p>

            <div className="space-y-3 mb-6">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider font-subheading">
                Program Key Benefits:
              </h4>
              {selectedProgram.benefits.map((benefit, i) => (
                <div key={i} className="flex items-center space-x-2 text-xs font-semibold text-white">
                  <Check className="w-4 h-4 text-[#FF5500]" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-800">
              <button
                onClick={() => setSelectedProgram(null)}
                className="py-3 rounded-xl bg-slate-900 border border-slate-700 text-slate-300 text-xs font-bold uppercase"
              >
                Close
              </button>
              <button
                onClick={() => {
                  setSelectedProgram(null);
                  onOpenBooking();
                }}
                className="py-3 rounded-xl bg-gradient-to-r from-[#FF5500] to-[#FF7700] text-white text-xs font-bold uppercase tracking-wider shadow-neon-orange"
              >
                Enroll In Program
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Programs;
