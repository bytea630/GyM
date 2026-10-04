import React, { useState } from 'react';
import { Star, MessageSquare, Quote, Play, X, CheckCircle } from 'lucide-react';

const testimonialsData = [
  {
    id: 1,
    name: 'Akash Salunkhe',
    role: 'Member since 2023',
    rating: 5,
    quote: 'ABS GYM is by far the best gym in the area. The atmosphere pushes you to lift heavier than you think you can. Gaurav sir corrected my deadlift form on day 1.',
    badge: 'Verified Member'
  },
  {
    id: 2,
    name: 'Pooja Kadam',
    role: 'Member since 2024',
    rating: 5,
    quote: 'Extremely clean environment, supportive trainers, and dedicated ladies batch timing. I lost 11 kg fat and gained so much confidence!',
    badge: 'Fat Loss Champion'
  },
  {
    id: 3,
    name: 'Rohan Bhosale',
    role: 'Member since 2022',
    rating: 5,
    quote: 'The equipment here is top notch biomechanics. Smooth cables, solid squat racks, and zero waiting time. Highly recommended!',
    badge: 'Powerlifting Athlete'
  }
];

const Testimonials = () => {
  const [activeVideoModal, setActiveVideoModal] = useState(false);

  return (
    <section id="testimonials" className="relative py-24 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full glass-panel border border-[#FF5500]/30 text-xs font-bold text-[#FF5500] uppercase tracking-widest">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Community Voice</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white uppercase">
            MEMBER <span className="neon-orange-text">REVIEWS</span>
          </h2>
          <p className="text-slate-400 text-base">
            Read what our active gym members say about their daily workout experience inside ABS GYM.
          </p>
        </div>

        {/* Video Testimonial Spotlight Banner */}
        <div className="glass-panel p-8 rounded-3xl border border-[#FF5500]/40 max-w-4xl mx-auto mb-12 flex flex-col md:flex-row items-center justify-between gap-6 bg-gradient-to-r from-[#FF5500]/15 to-transparent">
          <div className="space-y-2 text-center md:text-left">
            <span className="px-3 py-1 rounded-full bg-[#FF5500] text-white text-[10px] font-black uppercase tracking-widest font-subheading">
              SPOTLIGHT STORY
            </span>
            <h3 className="text-2xl font-black text-white uppercase font-heading">
              WATCH PHYSICAL TRANSFORMATION REELS
            </h3>
            <p className="text-slate-300 text-xs">
              Hear directly from members who transformed their bodies and minds at ABS GYM.
            </p>
          </div>

          <button
            onClick={() => setActiveVideoModal(true)}
            className="px-6 py-3.5 rounded-2xl bg-[#FF5500] hover:bg-[#FF7700] text-white font-bold text-xs uppercase tracking-widest shadow-neon-orange transition-all flex items-center space-x-2 shrink-0"
          >
            <Play className="w-4 h-4 fill-white" />
            <span>Watch Video Story</span>
          </button>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonialsData.map((item) => (
            <div
              key={item.id}
              className="glass-panel rounded-3xl p-7 border border-white/10 hover:border-[#FF5500] transition-all duration-300 glass-panel-hover flex flex-col justify-between relative"
            >
              <Quote className="w-10 h-10 text-[#FF5500]/20 absolute top-6 right-6 pointer-events-none" />

              <div className="space-y-4">
                {/* Star Ratings */}
                <div className="flex items-center space-x-1">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed italic">
                  “{item.quote}”
                </p>
              </div>

              <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                <div>
                  <h4 className="text-base font-bold text-white uppercase font-heading">
                    {item.name}
                  </h4>
                  <span className="text-[11px] text-slate-400 font-subheading block">
                    {item.role}
                  </span>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-slate-900 border border-[#FF5500]/40 text-[9px] font-bold text-[#FF5500] uppercase font-subheading">
                  {item.badge}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Video Modal Demo */}
      {activeVideoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
          <div className="glass-panel w-full max-w-xl p-8 rounded-3xl border border-[#FF5500] relative text-center">
            <button
              onClick={() => setActiveVideoModal(false)}
              className="absolute top-5 right-5 p-2 rounded-xl glass-panel text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="w-20 h-20 rounded-2xl bg-[#FF5500]/20 border border-[#FF5500] flex items-center justify-center text-[#FF5500] mx-auto mb-4">
              <Play className="w-10 h-10 fill-[#FF5500]" />
            </div>

            <h3 className="text-2xl font-black text-white uppercase font-heading mb-2">
              ABS GYM Member Reel Showcase
            </h3>
            <p className="text-slate-300 text-xs mb-6">
              Follow our official Instagram page <strong className="text-[#FF5500]">@abs_gym7591</strong> for daily workout reels, lifting PRs, and live transformation updates!
            </p>

            <a
              href="https://www.instagram.com/abs_gym7591/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#FF5500] to-[#FF7700] text-white font-bold text-xs uppercase tracking-widest shadow-neon-orange"
            >
              Open Instagram Reels
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

export default Testimonials;
