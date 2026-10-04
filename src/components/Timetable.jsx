import React, { useState } from 'react';
import { Clock, Sun, Moon, Dumbbell, Shield, Activity, Users, Flame } from 'lucide-react';

const scheduleData = {
  morning: [
    { time: '05:00 AM - 06:00 AM', program: 'Early Power Lifting & Compound Heavy', trainer: 'Gaurav Ghodake', slot: 'Batch 1' },
    { time: '06:00 AM - 07:00 AM', program: 'Hypertrophy Mass Split', trainer: 'Aniket', slot: 'Batch 2' },
    { time: '07:00 AM - 08:00 AM', program: 'Metabolic Fat Loss Circuit & HIIT', trainer: 'Mohsin Shaikh', slot: 'Batch 3' },
    { time: '08:00 AM - 09:00 AM', program: 'Open Strength & Personal Guidance', trainer: 'All Master Coaches', slot: 'Batch 4' },
  ],
  evening: [
    { time: '05:00 PM - 06:00 PM', program: 'Evening Warmup & Compound Strength', trainer: 'Gaurav Ghodake', slot: 'Batch 1' },
    { time: '06:00 PM - 07:30 PM', program: 'Bodybuilding Isolation & Symmetry', trainer: 'Aniket', slot: 'Batch 2' },
    { time: '07:30 PM - 08:45 PM', program: 'High Intensity Group Conditioning', trainer: 'Mohsin Shaikh', slot: 'Batch 3' },
    { time: '08:45 PM - 10:00 PM', program: 'Late Night Heavy Iron & PR Club', trainer: 'Master Coaches', slot: 'Batch 4' },
  ]
};

const Timetable = ({ onOpenBooking }) => {
  const [activeBatch, setActiveBatch] = useState('morning'); // 'morning' or 'evening'

  return (
    <section id="schedule" className="relative py-24 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full glass-panel border border-[#FF5500]/30 text-xs font-bold text-[#FF5500] uppercase tracking-widest">
            <Clock className="w-3.5 h-3.5" />
            <span>Master Timetable OS</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white uppercase">
            GYM BATCH <span className="neon-orange-text">TIMINGS</span>
          </h2>
          <p className="text-slate-400 text-base">
            Structured morning and evening batches designed to fit your busy schedule.
          </p>
        </div>

        {/* Batch Toggle Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveBatch('morning')}
            className={`px-8 py-4 rounded-2xl font-bold text-xs uppercase tracking-widest transition-all flex items-center space-x-3 ${
              activeBatch === 'morning'
                ? 'bg-gradient-to-r from-[#FF5500] to-[#FF7700] text-white shadow-neon-orange'
                : 'glass-panel text-slate-300 hover:text-white border border-white/10'
            }`}
          >
            <Sun className="w-5 h-5 text-amber-300" />
            <span>MORNING BATCH (05:00 AM – 09:00 AM)</span>
          </button>

          <button
            onClick={() => setActiveBatch('evening')}
            className={`px-8 py-4 rounded-2xl font-bold text-xs uppercase tracking-widest transition-all flex items-center space-x-3 ${
              activeBatch === 'evening'
                ? 'bg-gradient-to-r from-[#FF5500] to-[#FF7700] text-white shadow-neon-orange'
                : 'glass-panel text-slate-300 hover:text-white border border-white/10'
            }`}
          >
            <Moon className="w-5 h-5 text-blue-400" />
            <span>EVENING BATCH (05:00 PM – 10:00 PM)</span>
          </button>
        </div>

        {/* Schedule List */}
        <div className="max-w-4xl mx-auto space-y-4">
          {scheduleData[activeBatch].map((item, idx) => (
            <div
              key={idx}
              className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-[#FF5500] transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-4 group glass-panel-hover"
            >
              <div className="flex items-center space-x-5">
                <div className="p-3.5 rounded-xl bg-slate-900 border border-[#FF5500]/40 text-[#FF5500] group-hover:scale-110 transition-transform">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#FF5500] uppercase tracking-wider font-subheading block">
                    {item.time} • {item.slot}
                  </span>
                  <h3 className="text-xl font-bold text-white uppercase font-heading">
                    {item.program}
                  </h3>
                  <span className="text-xs text-slate-400 block mt-0.5">
                    Lead Coach: <strong className="text-slate-200">{item.trainer}</strong>
                  </span>
                </div>
              </div>

              <button
                onClick={onOpenBooking}
                className="w-full md:w-auto px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-[#FF5500] text-white border border-slate-700 hover:border-transparent text-xs font-bold uppercase tracking-wider transition-all"
              >
                Reserve Slot
              </button>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center text-xs text-slate-400">
          * Note: ABS GYM remains open 6 days a week with special Sunday endurance workshops.
        </div>

      </div>
    </section>
  );
};

export default Timetable;
