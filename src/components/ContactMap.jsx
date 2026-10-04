import React, { useState } from 'react';
import { MapPin, Phone, Mail, Instagram, Clock, Send, Sparkles, Navigation, ExternalLink } from 'lucide-react';

const ContactMap = () => {
  const [formSent, setFormSent] = useState(false);
  const [msgData, setMsgData] = useState({ name: '', phone: '', message: '' });

  const handleSendQuery = (e) => {
    e.preventDefault();
    if (!msgData.name || !msgData.phone) return;
    setFormSent(true);
    setTimeout(() => {
      setFormSent(false);
      setMsgData({ name: '', phone: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="relative py-24 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full glass-panel border border-[#FF5500]/30 text-xs font-bold text-[#FF5500] uppercase tracking-widest">
            <MapPin className="w-3.5 h-3.5" />
            <span>Gym Location & Contact</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white uppercase">
            CONNECT WITH <span className="neon-orange-text">ABS GYM</span>
          </h2>
          <p className="text-slate-400 text-base">
            Visit our physical fitness club or contact us directly via phone, email, or Instagram.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          
          {/* Phone Card */}
          <a
            href="tel:+919175519757"
            className="glass-panel p-6 rounded-3xl border border-white/10 hover:border-[#FF5500] transition-all duration-300 group glass-panel-hover flex items-center space-x-5"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#FF5500]/15 border border-[#FF5500]/40 flex items-center justify-center text-[#FF5500] group-hover:scale-110 transition-transform shrink-0">
              <Phone className="w-7 h-7" />
            </div>
            <div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider font-subheading block">
                Call / WhatsApp
              </span>
              <span className="text-lg font-black text-white font-heading group-hover:text-[#FF5500] transition-colors">
                +91 9175519757
              </span>
              <span className="text-[10px] text-emerald-400 font-bold block mt-0.5">
                ● Available 05:00 AM – 10:00 PM
              </span>
            </div>
          </a>

          {/* Email Card */}
          <a
            href="mailto:bytea630@gmail.com"
            className="glass-panel p-6 rounded-3xl border border-white/10 hover:border-[#FF5500] transition-all duration-300 group glass-panel-hover flex items-center space-x-5"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#FF5500]/15 border border-[#FF5500]/40 flex items-center justify-center text-[#FF5500] group-hover:scale-110 transition-transform shrink-0">
              <Mail className="w-7 h-7" />
            </div>
            <div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider font-subheading block">
                Official Email
              </span>
              <span className="text-base font-black text-white font-heading group-hover:text-[#FF5500] transition-colors break-all">
                bytea630@gmail.com
              </span>
              <span className="text-[10px] text-slate-400 block mt-0.5">
                Quick Response Guaranteed
              </span>
            </div>
          </a>

          {/* Instagram Card */}
          <a
            href="https://www.instagram.com/abs_gym7591/"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-panel p-6 rounded-3xl border border-white/10 hover:border-[#FF5500] transition-all duration-300 group glass-panel-hover flex items-center space-x-5"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#FF5500]/15 border border-[#FF5500]/40 flex items-center justify-center text-[#FF5500] group-hover:scale-110 transition-transform shrink-0">
              <Instagram className="w-7 h-7" />
            </div>
            <div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider font-subheading block">
                Instagram Handle
              </span>
              <span className="text-lg font-black text-white font-heading group-hover:text-[#FF5500] transition-colors">
                @abs_gym7591
              </span>
              <span className="text-[10px] text-[#FF5500] font-bold block mt-0.5 flex items-center space-x-1">
                <span>Follow For Workout Reels</span>
                <ExternalLink className="w-3 h-3" />
              </span>
            </div>
          </a>

        </div>

        {/* Map & Query Form Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Interactive Google Map Box */}
          <div className="glass-panel p-6 rounded-3xl border border-white/10 flex flex-col justify-between space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 text-white font-heading font-bold text-sm">
                <Navigation className="w-4 h-4 text-[#FF5500]" />
                <span>GPS COORDINATES: 18.113563, 75.026044</span>
              </div>
              <a
                href="https://maps.app.goo.gl/8VEaHFPCujMmph479"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-[#FF5500] text-white text-xs font-bold uppercase flex items-center space-x-1 shadow-neon-orange-sm"
              >
                <span>Open Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Google Map Embed Iframe */}
            <div className="relative h-80 rounded-2xl overflow-hidden border border-slate-800">
              <iframe
                title="ABS GYM Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.0!2d75.02604413538481!3d18.113563257178427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDA2JzQ4LjgiTiA3NcKwMDEnMzMuOCJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                allowFullScreen=""
                loading="lazy"
              />
            </div>

            <div className="flex items-center justify-between text-xs text-slate-400 font-subheading pt-2">
              <span className="flex items-center space-x-1">
                <Clock className="w-3.5 h-3.5 text-[#FF5500]" />
                <span>Morning 05:00-09:00 AM | Evening 05:00-10:00 PM</span>
              </span>
              <span className="text-[#FF5500] font-bold">ABS GYM Maharashtra</span>
            </div>
          </div>

          {/* Quick Query Glassmorphism Form */}
          <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-6">
            <div>
              <h3 className="text-2xl font-black text-white uppercase font-heading">
                SEND QUICK INQUIRY
              </h3>
              <p className="text-slate-400 text-xs mt-1">
                Have a question about trainer availability or personal coaching? Drop your details below.
              </p>
            </div>

            {formSent ? (
              <div className="p-6 rounded-2xl bg-[#FF5500]/20 border border-[#FF5500] text-center space-y-2">
                <Sparkles className="w-8 h-8 text-[#FF5500] mx-auto animate-bounce" />
                <h4 className="text-lg font-bold text-white uppercase font-heading">MESSAGE SENT!</h4>
                <p className="text-xs text-slate-200">
                  Thank you! Our ABS GYM team will call you back shortly on your provided phone number.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSendQuery} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1 font-subheading">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Amit Kumar"
                    value={msgData.name}
                    onChange={(e) => setMsgData({ ...msgData, name: e.target.value })}
                    className="w-full p-3 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs focus:border-[#FF5500] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1 font-subheading">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 9175519757"
                    value={msgData.phone}
                    onChange={(e) => setMsgData({ ...msgData, phone: e.target.value })}
                    className="w-full p-3 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs focus:border-[#FF5500] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1 font-subheading">
                    Question / Note
                  </label>
                  <textarea
                    rows="3"
                    placeholder="Ask about personal training, batch timings, or equipment..."
                    value={msgData.message}
                    onChange={(e) => setMsgData({ ...msgData, message: e.target.value })}
                    className="w-full p-3 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs focus:border-[#FF5500] outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#FF5500] to-[#FF7700] text-white font-bold text-xs uppercase tracking-widest shadow-neon-orange transition-all flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit Inquiry</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactMap;
