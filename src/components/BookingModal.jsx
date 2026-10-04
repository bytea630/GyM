import React, { useState } from 'react';
import { X, ShieldCheck, Sparkles, CheckCircle2, Phone, User, Calendar, Target, Clock, Dumbbell } from 'lucide-react';

const BookingModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    age: '',
    goal: 'Muscle Building',
    timing: 'Morning Batch (05:00 AM - 09:00 AM)',
    membership: 'Free 1-Day Pass Trial'
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="glass-panel w-full max-w-lg p-6 sm:p-8 rounded-3xl border border-[#FF5500] relative shadow-2xl animate-float-slow max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl glass-panel text-slate-400 hover:text-white hover:border-[#FF5500] transition-all"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-[#FF5500]/20 border border-[#FF5500] flex items-center justify-center text-[#FF5500] shadow-neon-orange-sm">
                <Dumbbell className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-black text-white uppercase font-heading">
                  JOIN ABS GYM
                </h3>
                <p className="text-xs text-[#FF5500] font-subheading font-bold uppercase tracking-wider">
                  NO ONLINE PAYMENT REQUIRED • RESERVE YOUR PASS
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5 font-subheading flex items-center space-x-1.5">
                  <User className="w-3.5 h-3.5 text-[#FF5500]" />
                  <span>Full Name *</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full p-3 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm focus:border-[#FF5500] outline-none"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5 font-subheading flex items-center space-x-1.5">
                  <Phone className="w-3.5 h-3.5 text-[#FF5500]" />
                  <span>Phone Number *</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full p-3 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm focus:border-[#FF5500] outline-none"
                />
              </div>

              {/* Age */}
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5 font-subheading flex items-center space-x-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#FF5500]" />
                  <span>Your Age</span>
                </label>
                <input
                  type="number"
                  placeholder="e.g. 24"
                  value={formData.age}
                  onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                  className="w-full p-3 rounded-xl bg-slate-900 border border-slate-800 text-white text-sm focus:border-[#FF5500] outline-none"
                />
              </div>

              {/* Fitness Goal */}
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5 font-subheading flex items-center space-x-1.5">
                  <Target className="w-3.5 h-3.5 text-[#FF5500]" />
                  <span>Primary Fitness Goal</span>
                </label>
                <select
                  value={formData.goal}
                  onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                  className="w-full p-3 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs font-semibold focus:border-[#FF5500] outline-none"
                >
                  <option>Muscle Building & Hypertrophy</option>
                  <option>Fat Loss & Toning</option>
                  <option>Powerlifting & Strength</option>
                  <option>General Fitness & Stamina</option>
                  <option>Weight Gain Program</option>
                </select>
              </div>

              {/* Preferred Timing */}
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5 font-subheading flex items-center space-x-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#FF5500]" />
                  <span>Preferred Batch Timing</span>
                </label>
                <select
                  value={formData.timing}
                  onChange={(e) => setFormData({ ...formData, timing: e.target.value })}
                  className="w-full p-3 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs font-semibold focus:border-[#FF5500] outline-none"
                >
                  <option>Morning Batch (05:00 AM - 09:00 AM)</option>
                  <option>Evening Batch (05:00 PM - 10:00 PM)</option>
                </select>
              </div>

              {/* Membership Plan Selection */}
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-1.5 font-subheading">
                  Select Membership Pass
                </label>
                <select
                  value={formData.membership}
                  onChange={(e) => setFormData({ ...formData, membership: e.target.value })}
                  className="w-full p-3 rounded-xl bg-slate-900 border border-[#FF5500] text-white text-xs font-bold focus:border-[#FF5500] outline-none"
                >
                  <option>Free 1-Day Trial Pass (₹0)</option>
                  <option>1 Month Membership (₹1,000)</option>
                  <option>3 Months Membership (₹2,000 - BEST VALUE)</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#FF5500] to-[#FF7700] text-white font-bold text-xs uppercase tracking-widest shadow-neon-orange hover:shadow-neon-orange-lg transition-all flex items-center justify-center space-x-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>CONFIRM RESERVATION NOW</span>
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Success Popup Display */
          <div className="text-center py-6 space-y-4">
            <div className="w-20 h-20 rounded-full bg-emerald-500/20 border-2 border-emerald-400 text-emerald-400 flex items-center justify-center mx-auto shadow-lg animate-bounce">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <h3 className="text-3xl font-black text-white uppercase font-heading">
              PASS RESERVED SUCCESSFULLY!
            </h3>

            <p className="text-slate-300 text-xs leading-relaxed max-w-sm mx-auto">
              Welcome, <strong className="text-[#FF5500]">{formData.name}</strong>! Your pass for <strong className="text-white">{formData.membership}</strong> has been registered.
            </p>

            <div className="glass-panel p-4 rounded-xl text-xs space-y-1.5 text-left border border-white/10 bg-slate-900/60">
              <div className="flex justify-between">
                <span className="text-slate-400 font-subheading">Registered Phone:</span>
                <span className="text-white font-bold">{formData.phone}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400 font-subheading">Selected Batch:</span>
                <span className="text-[#FF5500] font-bold">{formData.timing}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400 font-subheading">Payment Due:</span>
                <span className="text-emerald-400 font-bold">Pay At Gym Desk</span>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="w-full py-3.5 rounded-xl bg-slate-900 hover:bg-[#FF5500] text-white border border-slate-700 text-xs font-bold uppercase transition-all"
            >
              Done & Return To Website
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default BookingModal;
