import React, { useState } from 'react';
import { Image, Maximize2, X, Dumbbell, Shield, Sparkles } from 'lucide-react';

const galleryItems = [
  { id: 1, title: 'Powerlifting Squat Rack Rigs', category: 'Heavy Equipment', desc: 'Heavy-duty steel rigs calibrated for heavy squats and overhead presses.' },
  { id: 2, title: 'Dumbbell Matrix 2.5kg - 50kg', category: 'Dumbbell Racks', desc: 'Full rubber hex dumbbell set with ergonomic knurled steel grips.' },
  { id: 3, title: 'High-Tech Cardio Treadmills', category: 'Cardio Zone', desc: 'Interactive touchscreen cardio suite with heart rate monitor sync.' },
  { id: 4, title: 'Biomechanical Cable Crossover', category: 'Heavy Equipment', desc: 'Smooth cable pulleys with multi-grip pullup bars for chest and back.' },
  { id: 5, title: 'Cyber Neon Gym Atmosphere', category: 'Environment', desc: 'High-energy lighting ambiance engineered to elevate focus and output.' },
  { id: 6, title: 'Plate Loaded Leg Press', category: 'Heavy Equipment', desc: 'Heavy 45-degree leg press machine for explosive quad development.' },
];

const categories = ['All', 'Heavy Equipment', 'Dumbbell Racks', 'Cardio Zone', 'Environment'];

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredItems = activeFilter === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <section id="gallery" className="relative py-24 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full glass-panel border border-[#FF5500]/30 text-xs font-bold text-[#FF5500] uppercase tracking-widest">
            <Image className="w-3.5 h-3.5" />
            <span>Visual Atmosphere Showcase</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white uppercase">
            INSIDE <span className="neon-orange-text">ABS GYM</span>
          </h2>
          <p className="text-slate-400 text-base">
            Take a look inside our futuristic fitness sanctuary built with high-grade iron and neon aesthetics.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all ${
                activeFilter === cat
                  ? 'bg-[#FF5500] text-white shadow-neon-orange-sm'
                  : 'glass-panel text-slate-300 hover:text-white border border-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="glass-panel rounded-3xl p-5 border border-white/10 hover:border-[#FF5500] transition-all duration-300 cursor-pointer group glass-panel-hover"
            >
              <div className="relative h-64 rounded-2xl bg-slate-900 border border-white/5 overflow-hidden flex items-center justify-center p-6 text-center">
                <div className="absolute inset-0 cyber-grid opacity-40" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-[#10121A]/80 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                <div className="relative z-10 space-y-3">
                  <div className="w-16 h-16 rounded-2xl bg-[#FF5500]/15 border border-[#FF5500]/40 flex items-center justify-center text-[#FF5500] mx-auto group-hover:scale-110 transition-transform">
                    <Dumbbell className="w-8 h-8" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-[#FF5500] uppercase tracking-widest font-subheading block">
                      {item.category}
                    </span>
                    <h3 className="text-lg font-bold text-white uppercase font-heading group-hover:text-[#FF5500] transition-colors">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <div className="absolute top-4 right-4 p-2 rounded-xl glass-panel text-slate-300 group-hover:text-white group-hover:bg-[#FF5500] transition-all">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>

              <div className="pt-4">
                <p className="text-slate-400 text-xs line-clamp-2">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
          <div className="glass-panel w-full max-w-2xl p-8 rounded-3xl border border-[#FF5500] relative shadow-2xl">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-5 right-5 p-2 rounded-xl glass-panel text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="h-72 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col items-center justify-center p-8 text-center relative overflow-hidden mb-6">
              <div className="absolute inset-0 cyber-grid opacity-30" />
              <div className="w-20 h-20 rounded-2xl bg-[#FF5500]/20 border border-[#FF5500] flex items-center justify-center text-[#FF5500] mb-4">
                <Dumbbell className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-black text-white uppercase font-heading relative z-10">
                {selectedImage.title}
              </h3>
              <span className="text-xs text-[#FF5500] font-subheading font-bold uppercase tracking-widest relative z-10 mt-1">
                CATEGORY: {selectedImage.category}
              </span>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed mb-6">
              {selectedImage.desc}
            </p>

            <button
              onClick={() => setSelectedImage(null)}
              className="w-full py-3 rounded-xl bg-slate-900 border border-slate-700 text-slate-200 text-xs font-bold uppercase"
            >
              Close Showcase
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
