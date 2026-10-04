import React, { useState, useEffect } from 'react';
import { Menu, X, Flame, Shield, Sparkles, Dumbbell, PhoneCall } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Programs', href: '#programs' },
  { label: 'Trainers', href: '#trainers' },
  { label: 'Membership', href: '#membership' },
  { label: 'Schedule', href: '#schedule' },
  { label: 'BMI Calc', href: '#calculator' },
  { label: 'Transformations', href: '#transformations' },
  { label: 'Supplements', href: '#supplements' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href, label) => {
    setActiveTab(label);
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav py-3 shadow-lg shadow-black/40'
          : 'bg-gradient-to-b from-[#08090C]/90 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* 3D Glowing Metallic Logo */}
          <a href="#hero" className="flex items-center space-x-3 group">
            <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-slate-900 to-black border border-[#FF5500]/50 shadow-neon-orange-sm group-hover:shadow-neon-orange transition-all duration-300">
              <Dumbbell className="w-6 h-6 text-[#FF5500] transform -rotate-12 group-hover:rotate-0 transition-transform duration-300" />
              <div className="absolute inset-0 rounded-xl bg-[#FF5500]/10 blur-sm group-hover:blur-md transition-all" />
            </div>
            <div className="flex flex-col">
              <span className="logo-3d-text text-2xl font-black tracking-wider">
                ABS GYM
              </span>
              <span className="text-[9px] font-subheading tracking-widest text-[#FF5500] uppercase -mt-1 font-bold">
                Fitness Operating System
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center space-x-1 glass-panel px-4 py-1.5 rounded-full border border-white/10">
            {navItems.map((item) => {
              const isActive = activeTab === item.label;
              return (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href, item.label)}
                  className={`px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-[#FF5500] to-[#FF7700] text-white shadow-neon-orange-sm'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Header Action CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <a
              href="tel:+919175519757"
              className="flex items-center space-x-2 px-3 py-2 rounded-xl text-xs font-bold text-slate-300 hover:text-white bg-slate-900/60 border border-slate-700/60 hover:border-[#FF5500]/50 transition-all"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#FF5500]" />
              <span>+91 9175519757</span>
            </a>
            <button
              onClick={onOpenBooking}
              className="relative group overflow-hidden rounded-xl p-[1px] font-bold text-xs"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#FF5500] via-[#FF8800] to-[#FF3300] animate-pulse-glow" />
              <span className="relative flex items-center space-x-2 px-4 py-2.5 rounded-[11px] bg-[#090A0E] text-white group-hover:bg-transparent transition-all duration-300">
                <Sparkles className="w-4 h-4 text-[#FF5500] group-hover:text-white" />
                <span className="tracking-wider uppercase">Book Free Trial</span>
              </span>
            </button>
          </div>

          {/* Mobile Hamburger Menu Toggle */}
          <div className="flex items-center xl:hidden space-x-3">
            <button
              onClick={onOpenBooking}
              className="px-3 py-2 text-xs font-bold bg-[#FF5500] text-white rounded-lg shadow-neon-orange-sm flex items-center space-x-1"
            >
              <Flame className="w-3.5 h-3.5" />
              <span>Join</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl glass-panel text-slate-200 hover:text-[#FF5500] transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden glass-nav border-t border-[#FF5500]/20 px-4 pt-4 pb-6 mt-3 max-h-[80vh] overflow-y-auto">
          <div className="grid grid-cols-2 gap-2 mb-4">
            {navItems.map((item) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href, item.label)}
                className="flex items-center space-x-2 px-3 py-2.5 rounded-lg text-xs font-semibold text-slate-200 bg-slate-900/60 hover:bg-[#FF5500]/20 hover:text-[#FF5500] border border-slate-800 text-left transition-all"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#FF5500]" />
                <span>{item.label}</span>
              </button>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-800 flex flex-col space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#FF5500] to-[#FF8800] text-white font-bold text-sm tracking-wider uppercase shadow-neon-orange flex items-center justify-center space-x-2"
            >
              <Shield className="w-4 h-4" />
              <span>Join ABS GYM Now</span>
            </button>
            <a
              href="tel:+919175519757"
              className="w-full py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-300 text-center font-semibold text-xs flex items-center justify-center space-x-2"
            >
              <PhoneCall className="w-4 h-4 text-[#FF5500]" />
              <span>Call: +91 9175519757</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
