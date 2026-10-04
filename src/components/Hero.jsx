import React, { useState, useEffect } from 'react';
import { Shield, Sparkles, ChevronRight, Zap, Play, Activity, Users, Award, Flame } from 'lucide-react';

const statsData = [
  { id: 1, label: 'Active Members', value: 1250, suffix: '+', icon: Users },
  { id: 2, label: 'Daily Workouts', value: 450, suffix: '+', icon: Activity },
  { id: 3, label: 'Certified Trainers', value: 15, suffix: '+', icon: Award },
  { id: 4, label: 'Calories Burned', value: 1.8, suffix: 'M+', icon: Flame },
];

const Hero = ({ onOpenBooking }) => {
  const [counts, setCounts] = useState(statsData.map(() => 0));

  useEffect(() => {
    const duration = 2000;
    const steps = 50;
    const interval = duration / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      setCounts(
        statsData.map((stat) => {
          if (stat.suffix.includes('M')) {
            return parseFloat((stat.value * progress).toFixed(1));
          }
          return Math.floor(stat.value * progress);
        })
      );

      if (currentStep >= steps) {
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex flex-col justify-center pt-28 pb-16 overflow-hidden">
      
      {/* Background Visual Layers & Smoke Overlays */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Dynamic Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#08090C] via-[#08090C]/70 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#08090C] via-transparent to-[#08090C] z-10" />
        
        {/* Cyber Grid Lines */}
        <div className="absolute inset-0 cyber-grid opacity-30" />

        {/* Ambient Neon Glowing Blobs */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#FF5500]/15 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />
        <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-[#FF7700]/10 rounded-full blur-[120px] pointer-events-none" />
        
        {/* Abstract Floating Smoke / Energy Particles */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#FF5500_1px,transparent_1px)] [background-size:32px_32px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="text-center max-w-4xl mx-auto space-y-8">
          
          {/* Futuristic Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full glass-panel border border-[#FF5500]/40 shadow-neon-orange-sm animate-float-slow">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF5500] opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#FF5500]" />
            </span>
            <span className="text-xs font-bold uppercase tracking-widest text-[#FF5500] font-subheading">
              ABS GYM • Ultra-High-Tech Fitness Club
            </span>
            <Zap className="w-3.5 h-3.5 text-[#FF5500]" />
          </div>

          {/* Main Hero Headline */}
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-white uppercase leading-[1.05]">
              FORGE YOUR <br />
              <span className="bg-gradient-to-r from-white via-slate-200 to-[#FF5500] bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(255,85,0,0.5)]">
                ULTIMATE BODY
              </span>
            </h1>
            <p className="text-xl sm:text-2xl font-medium text-slate-300 font-subheading tracking-wide max-w-2xl mx-auto">
              Train Hard. Stay Strong. Become Unstoppable.
            </p>
          </div>

          {/* Description Text */}
          <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto leading-relaxed">
            Welcome to <strong className="text-white">ABS GYM</strong>. Step inside Maharashtra’s premier cyberpunk-inspired fitness operating system designed for high performance, strength conditioning, and raw transformation.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            
            {/* Primary CTA */}
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto relative group overflow-hidden rounded-2xl p-[2px] font-bold"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#FF5500] via-[#FF8800] to-[#FF3300] rounded-2xl animate-pulse-glow" />
              <span className="relative flex items-center justify-center space-x-3 px-8 py-4 rounded-[14px] bg-[#090A0E] text-white group-hover:bg-transparent transition-all duration-300">
                <Shield className="w-5 h-5 text-[#FF5500] group-hover:text-white" />
                <span className="text-base uppercase tracking-wider">Join Now</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>

            {/* Secondary CTA */}
            <button
              onClick={onOpenBooking}
              className="w-full sm:w-auto flex items-center justify-center space-x-3 px-8 py-4 rounded-2xl glass-panel border border-slate-700 hover:border-[#FF5500] text-slate-200 hover:text-white transition-all duration-300 font-bold text-base"
            >
              <Sparkles className="w-5 h-5 text-[#FF5500]" />
              <span>Book Free Trial</span>
            </button>

            {/* Explore Programs CTA */}
            <a
              href="#programs"
              className="w-full sm:w-auto flex items-center justify-center space-x-2 px-6 py-4 rounded-2xl bg-slate-900/60 hover:bg-slate-800 border border-slate-800 text-slate-300 text-sm font-semibold transition-all"
            >
              <span>Explore Programs</span>
            </a>
          </div>

          {/* Animated Statistics Banner */}
          <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {statsData.map((stat, idx) => {
              const IconComp = stat.icon;
              return (
                <div
                  key={stat.id}
                  className="glass-panel p-5 rounded-2xl border border-white/10 hover:border-[#FF5500]/50 transition-all duration-300 group text-center"
                >
                  <div className="flex justify-center mb-2">
                    <div className="p-2.5 rounded-xl bg-[#FF5500]/10 border border-[#FF5500]/20 group-hover:scale-110 transition-transform">
                      <IconComp className="w-5 h-5 text-[#FF5500]" />
                    </div>
                  </div>
                  <div className="text-3xl sm:text-4xl font-black text-white font-heading">
                    {counts[idx]}
                    <span className="text-[#FF5500]">{stat.suffix}</span>
                  </div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mt-1">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="relative z-10 text-center mt-12">
        <a href="#about" className="inline-flex flex-col items-center text-xs text-slate-400 hover:text-[#FF5500] transition-colors group">
          <span className="uppercase tracking-widest text-[10px] font-subheading mb-1">Scroll To Experience</span>
          <div className="w-5 h-8 rounded-full border-2 border-slate-700 group-hover:border-[#FF5500] flex justify-center p-1">
            <div className="w-1.5 h-2 rounded-full bg-[#FF5500] animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
