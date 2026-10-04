import React, { useState } from 'react';
import { Calculator, Activity, Flame, Scale, ChevronRight, Zap } from 'lucide-react';

const CalculatorSuite = () => {
  const [activeTab, setActiveTab] = useState('bmi'); // 'bmi', 'weight', 'calorie'

  // Form State
  const [height, setHeight] = useState(175); // cm
  const [weight, setWeight] = useState(72); // kg
  const [age, setAge] = useState(25);
  const [gender, setGender] = useState('male');
  const [activity, setActivity] = useState(1.55); // 1.2, 1.375, 1.55, 1.725
  const [goal, setGoal] = useState('maintain'); // 'lose', 'maintain', 'gain'

  // BMI Calculation
  const heightM = height / 100;
  const bmi = (weight / (heightM * heightM)).toFixed(1);

  let bmiCategory = 'Normal Weight';
  let bmiColor = '#00FF66'; // Green
  let bmiMessage = 'Great job! You are in a healthy body composition range.';

  if (bmi < 18.5) {
    bmiCategory = 'Underweight';
    bmiColor = '#3B82F6'; // Blue
    bmiMessage = 'Focus on ABS GYM Weight Gain & Hypertrophy programs with calorie surplus.';
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    bmiCategory = 'Optimal Fit';
    bmiColor = '#00FF66';
    bmiMessage = 'Maintain your strength with progressive overload at ABS GYM!';
  } else if (bmi >= 25 && bmi <= 29.9) {
    bmiCategory = 'Overweight';
    bmiColor = '#FFAA00'; // Amber
    bmiMessage = 'Combine ABS GYM HIIT Fat Loss circuits with strength training.';
  } else {
    bmiCategory = 'Obese Range';
    bmiColor = '#FF3300'; // Red
    bmiMessage = 'Dedicated personal training guidance recommended to lower body fat safely.';
  }

  // Ideal Weight Range Calculation (Devine Formula & Hamwi approximation)
  const idealWeightMin = Math.round(18.5 * (heightM * heightM));
  const idealWeightMax = Math.round(24.9 * (heightM * heightM));

  // BMR & TDEE Calculation (Mifflin-St Jeor)
  let bmr = 10 * weight + 6.25 * height - 5 * age + (gender === 'male' ? 5 : -161);
  const tdee = Math.round(bmr * activity);

  let targetCalories = tdee;
  if (goal === 'lose') targetCalories = tdee - 450;
  if (goal === 'gain') targetCalories = tdee + 450;

  return (
    <section id="calculator" className="relative py-24 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full glass-panel border border-[#FF5500]/30 text-xs font-bold text-[#FF5500] uppercase tracking-widest">
            <Calculator className="w-3.5 h-3.5" />
            <span>Futuristic Fitness OS Dashboard</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white uppercase">
            BIOMETRIC <span className="neon-orange-text">CALCULATOR</span>
          </h2>
          <p className="text-slate-400 text-base">
            Get instant real-time diagnostics on your Body Mass Index (BMI), Ideal Weight Target, and Daily Calorie OS requirements.
          </p>
        </div>

        {/* Dashboard Frame */}
        <div className="max-w-4xl mx-auto glass-panel rounded-3xl border border-[#FF5500]/40 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          
          {/* Top Tab Switches */}
          <div className="flex flex-wrap justify-center gap-3 mb-10 pb-6 border-b border-white/10">
            <button
              onClick={() => setActiveTab('bmi')}
              className={`px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center space-x-2 ${
                activeTab === 'bmi'
                  ? 'bg-[#FF5500] text-white shadow-neon-orange'
                  : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-800'
              }`}
            >
              <Activity className="w-4 h-4" />
              <span>BMI Diagnostics</span>
            </button>

            <button
              onClick={() => setActiveTab('weight')}
              className={`px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center space-x-2 ${
                activeTab === 'weight'
                  ? 'bg-[#FF5500] text-white shadow-neon-orange'
                  : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-800'
              }`}
            >
              <Scale className="w-4 h-4" />
              <span>Ideal Weight Target</span>
            </button>

            <button
              onClick={() => setActiveTab('calorie')}
              className={`px-5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center space-x-2 ${
                activeTab === 'calorie'
                  ? 'bg-[#FF5500] text-white shadow-neon-orange'
                  : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-800'
              }`}
            >
              <Flame className="w-4 h-4" />
              <span>Calorie & TDEE OS</span>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            
            {/* Input Controls Column */}
            <div className="space-y-6">
              
              {/* Gender Selection */}
              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 font-subheading">
                  Gender Selection
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setGender('male')}
                    className={`py-2.5 rounded-xl text-xs font-bold uppercase border transition-all ${
                      gender === 'male'
                        ? 'bg-slate-800 text-[#FF5500] border-[#FF5500]'
                        : 'bg-slate-900/60 text-slate-400 border-slate-800'
                    }`}
                  >
                    Male
                  </button>
                  <button
                    onClick={() => setGender('female')}
                    className={`py-2.5 rounded-xl text-xs font-bold uppercase border transition-all ${
                      gender === 'female'
                        ? 'bg-slate-800 text-[#FF5500] border-[#FF5500]'
                        : 'bg-slate-900/60 text-slate-400 border-slate-800'
                    }`}
                  >
                    Female
                  </button>
                </div>
              </div>

              {/* Height Slider */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold font-subheading">
                  <span className="text-slate-300 uppercase">Height (cm)</span>
                  <span className="text-[#FF5500] font-heading text-base">{height} cm</span>
                </div>
                <input
                  type="range"
                  min="120"
                  max="220"
                  value={height}
                  onChange={(e) => setHeight(Number(e.target.value))}
                  className="w-full h-2 bg-slate-900 rounded-lg appearance-none cursor-pointer accent-[#FF5500]"
                />
              </div>

              {/* Weight Slider */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold font-subheading">
                  <span className="text-slate-300 uppercase">Current Weight (kg)</span>
                  <span className="text-[#FF5500] font-heading text-base">{weight} kg</span>
                </div>
                <input
                  type="range"
                  min="40"
                  max="160"
                  value={weight}
                  onChange={(e) => setWeight(Number(e.target.value))}
                  className="w-full h-2 bg-slate-900 rounded-lg appearance-none cursor-pointer accent-[#FF5500]"
                />
              </div>

              {/* Age Slider */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-bold font-subheading">
                  <span className="text-slate-300 uppercase">Age</span>
                  <span className="text-[#FF5500] font-heading text-base">{age} Yrs</span>
                </div>
                <input
                  type="range"
                  min="14"
                  max="80"
                  value={age}
                  onChange={(e) => setAge(Number(e.target.value))}
                  className="w-full h-2 bg-slate-900 rounded-lg appearance-none cursor-pointer accent-[#FF5500]"
                />
              </div>

              {/* Additional Inputs for Calorie Mode */}
              {activeTab === 'calorie' && (
                <div className="space-y-4 pt-2 border-t border-white/5">
                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 font-subheading">
                      Activity Level
                    </label>
                    <select
                      value={activity}
                      onChange={(e) => setActivity(Number(e.target.value))}
                      className="w-full p-3 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs font-semibold focus:border-[#FF5500] outline-none"
                    >
                      <option value={1.2}>Sedentary (Little or no exercise)</option>
                      <option value={1.375}>Lightly Active (1-3 days gym/week)</option>
                      <option value={1.55}>Moderately Active (3-5 days heavy gym)</option>
                      <option value={1.725}>Very Active (6-7 days intense strength)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2 font-subheading">
                      Fitness Goal
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      <button
                        onClick={() => setGoal('lose')}
                        className={`py-2 rounded-xl text-[11px] font-bold uppercase border ${
                          goal === 'lose' ? 'bg-[#FF5500] text-white border-[#FF5500]' : 'bg-slate-900 text-slate-400 border-slate-800'
                        }`}
                      >
                        Fat Loss
                      </button>
                      <button
                        onClick={() => setGoal('maintain')}
                        className={`py-2 rounded-xl text-[11px] font-bold uppercase border ${
                          goal === 'maintain' ? 'bg-[#FF5500] text-white border-[#FF5500]' : 'bg-slate-900 text-slate-400 border-slate-800'
                        }`}
                      >
                        Maintain
                      </button>
                      <button
                        onClick={() => setGoal('gain')}
                        className={`py-2 rounded-xl text-[11px] font-bold uppercase border ${
                          goal === 'gain' ? 'bg-[#FF5500] text-white border-[#FF5500]' : 'bg-slate-900 text-slate-400 border-slate-800'
                        }`}
                      >
                        Muscle Gain
                      </button>
                    </div>
                  </div>
                </div>
              )}

            </div>

            {/* Display / Output Visual Gauge Column */}
            <div className="glass-panel p-8 rounded-3xl border border-white/10 text-center flex flex-col items-center justify-center space-y-6 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-b from-[#FF5500]/10 to-transparent pointer-events-none" />

              {/* BMI Mode Output */}
              {activeTab === 'bmi' && (
                <>
                  <div className="relative flex items-center justify-center w-44 h-44 rounded-full border-4 border-slate-800 shadow-neon-orange">
                    <div className="text-center">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block font-subheading">
                        YOUR BMI
                      </span>
                      <span className="text-5xl font-black text-white font-heading my-1 block" style={{ color: bmiColor }}>
                        {bmi}
                      </span>
                      <span className="text-xs font-bold uppercase tracking-wider px-3 py-0.5 rounded-full bg-slate-900 border border-slate-700" style={{ color: bmiColor }}>
                        {bmiCategory}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-300 max-w-xs leading-relaxed">
                    {bmiMessage}
                  </p>
                </>
              )}

              {/* Ideal Weight Output */}
              {activeTab === 'weight' && (
                <>
                  <div className="w-20 h-20 rounded-2xl bg-[#FF5500]/15 border border-[#FF5500] flex items-center justify-center text-[#FF5500] shadow-neon-orange">
                    <Scale className="w-10 h-10" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block font-subheading mb-1">
                      IDEAL HEALTHY WEIGHT RANGE
                    </span>
                    <div className="text-4xl font-black text-white font-heading">
                      {idealWeightMin} - {idealWeightMax} <span className="text-[#FF5500] text-2xl">KG</span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-300 max-w-xs">
                    Based on your height of {height} cm, this target maintains optimal joint health and peak athletic force output.
                  </p>
                </>
              )}

              {/* Calorie OS Output */}
              {activeTab === 'calorie' && (
                <>
                  <div className="w-20 h-20 rounded-2xl bg-[#FF5500]/15 border border-[#FF5500] flex items-center justify-center text-[#FF5500] shadow-neon-orange">
                    <Flame className="w-10 h-10" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block font-subheading mb-1">
                      TARGET DAILY CALORIC OS
                    </span>
                    <div className="text-4xl font-black text-white font-heading">
                      {targetCalories} <span className="text-[#FF5500] text-xl">KCAL/DAY</span>
                    </div>
                  </div>
                  <div className="text-xs text-slate-400 space-y-1">
                    <div>BMR (Basal Rate): <strong className="text-white">{Math.round(bmr)} kcal</strong></div>
                    <div>Maintenance (TDEE): <strong className="text-white">{tdee} kcal</strong></div>
                  </div>
                </>
              )}

              <a
                href="#membership"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#FF5500] to-[#FF7700] text-white font-bold text-xs uppercase tracking-wider shadow-neon-orange transition-all"
              >
                Claim Personalized Gym Plan
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default CalculatorSuite;
