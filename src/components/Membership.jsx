import React from 'react';
import { ShieldCheck, Check, Sparkles, Zap, Flame, Award } from 'lucide-react';

const plans = [
  {
    id: 'monthly',
    name: 'STARTER PASS',
    price: '₹1,000',
    duration: '1 Month Membership',
    popular: false,
    badge: 'Standard Access',
    description: 'Perfect for individuals testing their discipline and seeking high-tech gym facilities.',
    features: [
      'Full Access to Heavy Strength Machines',
      'Morning & Evening Batch Access',
      'Free Fitness Guidance Session',
      'Locker & Shower Facility',
      'Cardio & Free Weight Zone',
    ]
  },
  {
    id: 'quarterly',
    name: 'POWER PACK (BEST VALUE)',
    price: '₹2,000',
    duration: '3 Months Membership',
    popular: true,
    badge: 'MOST POPULAR • SAVE ₹1000',
    description: 'Our flagship 90-day transformation pass. Maximum savings for committed fitness enthusiasts.',
    features: [
      'Full Access to Heavy Strength Machines',
      'Morning & Evening Batch Access',
      '1-on-1 Personal Fitness Assessment',
      'Custom Diet & Nutrition Guidance OS',
      'Priority Trainer Assistance (Gaurav/Aniket/Mohsin)',
      'Locker & Shower Facility',
      'Free ABS GYM Shaker / Merchandise Trial'
    ]
  }
];

const Membership = ({ onOpenBooking }) => {
  return (
    <section id="membership" className="relative py-24 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full glass-panel border border-[#FF5500]/30 text-xs font-bold text-[#FF5500] uppercase tracking-widest">
            <Zap className="w-3.5 h-3.5" />
            <span>Membership Pass Plans</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white uppercase">
            INVEST IN YOUR <span className="neon-orange-text">ARMOR</span>
          </h2>
          <p className="text-slate-400 text-base">
            Transparent pricing with zero hidden fees. Choose your duration and claim your spot at ABS GYM. No online payment required.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`glass-panel rounded-3xl p-8 border relative transition-all duration-500 flex flex-col justify-between ${
                plan.popular
                  ? 'border-[#FF5500] shadow-neon-orange bg-gradient-to-b from-[#141724] via-[#10121A] to-[#08090C] scale-105 z-10'
                  : 'border-white/10 hover:border-[#FF5500]/50 bg-slate-900/40'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#FF5500] to-[#FF8800] text-white text-[11px] font-black uppercase tracking-widest shadow-neon-orange flex items-center space-x-1 font-subheading">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{plan.badge}</span>
                </div>
              )}

              <div>
                <div className="text-center pb-6 border-b border-white/10">
                  <h3 className="text-xl font-bold text-white uppercase font-heading tracking-wider mb-2">
                    {plan.name}
                  </h3>
                  <div className="text-5xl font-black text-white font-heading tracking-tight my-4">
                    {plan.price}
                    <span className="text-xs text-slate-400 font-sans font-semibold block mt-1">
                      {plan.duration}
                    </span>
                  </div>
                  <p className="text-slate-400 text-xs leading-relaxed max-w-xs mx-auto">
                    {plan.description}
                  </p>
                </div>

                {/* Features List */}
                <div className="py-6 space-y-3">
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider font-subheading block mb-2">
                    Included Pass Privileges:
                  </span>
                  {plan.features.map((feat, i) => (
                    <div key={i} className="flex items-start space-x-3 text-xs text-slate-200">
                      <div className="p-0.5 rounded bg-[#FF5500]/20 text-[#FF5500] mt-0.5 shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4">
                <button
                  onClick={onOpenBooking}
                  className={`w-full py-4 rounded-2xl font-bold text-xs uppercase tracking-widest transition-all duration-300 flex items-center justify-center space-x-2 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-[#FF5500] to-[#FF7700] text-white shadow-neon-orange hover:shadow-neon-orange-lg'
                      : 'bg-slate-900 hover:bg-[#FF5500] text-white border border-slate-700 hover:border-transparent'
                  }`}
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>Claim {plan.duration} Now</span>
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Note Banner */}
        <div className="mt-12 text-center text-xs text-slate-400 max-w-lg mx-auto glass-panel p-4 rounded-xl border border-white/5">
          💡 <strong className="text-white">Zero Online Risk:</strong> Submit your details online to reserve your membership or book a free trial session. Pay at gym front desk upon your first visit!
        </div>

      </div>
    </section>
  );
};

export default Membership;
