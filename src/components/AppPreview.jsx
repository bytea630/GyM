import React from 'react';
import { Smartphone, Activity, Flame, Shield, Calendar, Sparkles, CheckCircle2 } from 'lucide-react';

const appFeatures = [
  'Digital Membership QR Check-in',
  'Real-time Workout & Set Tracker',
  'Macro & Calorie Diet Monitor',
  '1-Click Personal Training Slot Booking',
  'Progress Photos & Weight Analytics',
  'Live Gym Capacity Meter'
];

const AppPreview = ({ onOpenBooking }) => {
  return (
    <section className="relative py-24 z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="glass-panel p-8 sm:p-14 rounded-3xl border border-[#FF5500]/40 relative overflow-hidden bg-gradient-to-r from-[#141724] via-[#10121A] to-[#08090C]">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF5500]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* App Mockup Column */}
            <div className="relative flex justify-center">
              {/* Smartphone Frame */}
              <div className="w-72 sm:w-80 h-[520px] rounded-[45px] bg-[#090A0E] border-4 border-slate-800 p-4 relative shadow-2xl shadow-black/80 flex flex-col justify-between overflow-hidden group">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-5 bg-slate-900 rounded-b-xl z-20" />
                
                {/* Simulated Screen UI */}
                <div className="relative z-10 space-y-4 pt-6">
                  
                  {/* Top Bar */}
                  <div className="flex items-center justify-between text-xs font-bold font-subheading">
                    <span className="text-white">ABS GYM OS</span>
                    <span className="text-[#FF5500]">LIVE CONNECTED</span>
                  </div>

                  {/* User Badge Card */}
                  <div className="glass-panel p-3 rounded-2xl border border-white/10 bg-slate-900/90 flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-xl bg-[#FF5500] text-white font-black font-heading flex items-center justify-center text-sm">
                      ABS
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white uppercase font-heading">VIP ATHLETE PASS</h4>
                      <span className="text-[10px] text-emerald-400 font-bold font-subheading">ACTIVE • 90 DAYS LEFT</span>
                    </div>
                  </div>

                  {/* Workout Progress Card */}
                  <div className="glass-panel p-4 rounded-2xl border border-[#FF5500]/30 bg-slate-900/60 space-y-2">
                    <div className="flex justify-between text-xs font-bold">
                      <span className="text-slate-300">TODAY'S WORKOUT</span>
                      <span className="text-[#FF5500]">85%</span>
                    </div>
                    <div className="text-sm font-black text-white font-heading">HEAVY BENCH & TRICEPS</div>
                    <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-[#FF5500] to-[#FF8800] w-[85%]" />
                    </div>
                  </div>

                  {/* Calorie Stats */}
                  <div className="grid grid-cols-2 gap-2">
                    <div className="glass-panel p-3 rounded-xl text-center border border-white/5">
                      <span className="text-[10px] text-slate-400 font-bold block">BURNED</span>
                      <span className="text-lg font-black text-white font-heading">780 KCAL</span>
                    </div>
                    <div className="glass-panel p-3 rounded-xl text-center border border-white/5">
                      <span className="text-[10px] text-slate-400 font-bold block">HEART RATE</span>
                      <span className="text-lg font-black text-[#FF5500] font-heading">142 BPM</span>
                    </div>
                  </div>

                </div>

                {/* Bottom App Navigation */}
                <div className="pt-3 border-t border-slate-800 flex justify-around text-slate-500 text-xs font-bold">
                  <span className="text-[#FF5500]">Home</span>
                  <span>Workout</span>
                  <span>Diet</span>
                  <span>Profile</span>
                </div>
              </div>
            </div>

            {/* Description Details */}
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full glass-panel border border-[#FF5500]/30 text-xs font-bold text-[#FF5500] uppercase tracking-widest">
                <Smartphone className="w-3.5 h-3.5" />
                <span>Next-Gen Mobile App</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white uppercase leading-tight">
                YOUR GYM PASS IN THE <span className="neon-orange-text">PALM OF YOUR HAND</span>
              </h2>

              <p className="text-slate-300 text-sm leading-relaxed">
                Track your sets, monitor your body composition, check batch timings, and access your digital QR gate key with the upcoming ABS GYM mobile application.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {appFeatures.map((feat, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-xs font-semibold text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#FF5500] shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                <button
                  onClick={onOpenBooking}
                  className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-[#FF5500] to-[#FF7700] text-white font-bold text-xs uppercase tracking-widest shadow-neon-orange"
                >
                  Get Early App Access
                </button>
                <span className="text-xs text-slate-400 font-subheading">
                  iOS & Android • Powered by ABS OS
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AppPreview;
