import React, { useState } from 'react';
import { Dumbbell, Phone, Mail, Instagram, MapPin, ArrowUp, Send, Heart, Shield } from 'lucide-react';

const Footer = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setNewsletterEmail('');
    }, 4000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 bg-[#060709] border-t border-white/10 pt-20 pb-12 overflow-hidden">
      
      {/* Glow Backdrop Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-[#FF5500] to-transparent" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FF5500]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-white/5">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-5">
            <a href="#hero" className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-[#FF5500]/20 border border-[#FF5500] flex items-center justify-center text-[#FF5500]">
                <Dumbbell className="w-6 h-6" />
              </div>
              <span className="logo-3d-text text-2xl font-black">ABS GYM</span>
            </a>

            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              “Build Strength. Unlock Power.” ABS GYM is Maharashtra's premier high-tech fitness club dedicated to physical transformation, powerlifting, and athletic performance.
            </p>

            <div className="flex items-center space-x-3">
              <a
                href="tel:+919175519757"
                className="p-2.5 rounded-xl glass-panel text-slate-300 hover:text-white hover:border-[#FF5500] transition-colors"
                aria-label="Phone"
              >
                <Phone className="w-4 h-4 text-[#FF5500]" />
              </a>
              <a
                href="mailto:bytea630@gmail.com"
                className="p-2.5 rounded-xl glass-panel text-slate-300 hover:text-white hover:border-[#FF5500] transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4 text-[#FF5500]" />
              </a>
              <a
                href="https://www.instagram.com/abs_gym7591/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl glass-panel text-slate-300 hover:text-white hover:border-[#FF5500] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 text-[#FF5500]" />
              </a>
              <a
                href="https://maps.app.goo.gl/8VEaHFPCujMmph479"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl glass-panel text-slate-300 hover:text-white hover:border-[#FF5500] transition-colors"
                aria-label="Location"
              >
                <MapPin className="w-4 h-4 text-[#FF5500]" />
              </a>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-heading">
              QUICK MODULES
            </h4>
            <ul className="space-y-2 text-xs font-semibold text-slate-400">
              <li><a href="#hero" className="hover:text-[#FF5500] transition-colors">Home OS</a></li>
              <li><a href="#about" className="hover:text-[#FF5500] transition-colors">About ABS GYM</a></li>
              <li><a href="#programs" className="hover:text-[#FF5500] transition-colors">Training Programs</a></li>
              <li><a href="#trainers" className="hover:text-[#FF5500] transition-colors">Master Coaches</a></li>
              <li><a href="#membership" className="hover:text-[#FF5500] transition-colors">Membership Pass</a></li>
            </ul>
          </div>

          {/* Features Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-heading">
              FITNESS TOOLS
            </h4>
            <ul className="space-y-2 text-xs font-semibold text-slate-400">
              <li><a href="#calculator" className="hover:text-[#FF5500] transition-colors">BMI & Calorie Calc</a></li>
              <li><a href="#schedule" className="hover:text-[#FF5500] transition-colors">Batch Timings</a></li>
              <li><a href="#transformations" className="hover:text-[#FF5500] transition-colors">Client Transformations</a></li>
              <li><a href="#supplements" className="hover:text-[#FF5500] transition-colors">Supplement Store</a></li>
              <li><a href="#gallery" className="hover:text-[#FF5500] transition-colors">Gym Atmosphere</a></li>
            </ul>
          </div>

          {/* Newsletter Box */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-heading">
              JOIN ATHLETE INTEL
            </h4>
            <p className="text-xs text-slate-400">
              Subscribe for weekly workout tips, diet blueprints, and member discounts.
            </p>

            {subscribed ? (
              <div className="p-3 rounded-xl bg-[#FF5500]/20 border border-[#FF5500] text-[#FF5500] text-xs font-bold text-center">
                ✅ Subscribed to ABS Intel!
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email..."
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#FF5500]"
                />
                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl bg-[#FF5500] hover:bg-[#FF7700] text-white text-xs font-bold uppercase tracking-wider shadow-neon-orange-sm transition-all"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Bottom copyright bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} <strong className="text-slate-300">ABS GYM</strong>. All Rights Reserved. Build Strength. Unlock Power.
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl glass-panel text-slate-300 hover:text-white hover:border-[#FF5500] transition-colors flex items-center space-x-1"
          >
            <span className="text-[10px] font-bold uppercase font-subheading">Back To Top</span>
            <ArrowUp className="w-4 h-4 text-[#FF5500]" />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
