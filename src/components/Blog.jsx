import React, { useState } from 'react';
import { BookOpen, Flame, Dumbbell, HeartPulse, Sparkles, ArrowRight, X } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: '5 Progressive Overload Rules For Maximum Muscle Mass',
    category: 'Muscle Building',
    author: 'Gaurav Ghodake',
    readTime: '4 Min Read',
    desc: 'Discover why lifting the same weight every week plateaued your growth and how to program weight, reps, and tempo.',
    content: 'Progressive overload is the fundamental law of muscular hypertrophy. To force your body to adapt, you must consistently increase the mechanical tension placed on your muscle fibers over time...'
  },
  {
    id: 2,
    title: 'HIIT vs Steady State Cardio: The Ultimate Fat Loss Protocol',
    category: 'Fat Loss',
    author: 'Mohsin Shaikh',
    readTime: '5 Min Read',
    desc: 'Which cardio method burns more visceral fat while preserving your hard-earned muscle mass during caloric deficits?',
    content: 'HIIT elevates EPOC (Excess Post-exercise Oxygen Consumption), keeping your metabolic rate elevated for up to 24 hours post-workout. Meanwhile, steady-state cardio builds VO2 max...'
  },
  {
    id: 3,
    title: 'High Protein Diet Matrix: Macros Simplified For Gym Goers',
    category: 'Diet Plans',
    author: 'Aniket',
    readTime: '6 Min Read',
    desc: 'How to calculate your optimal daily protein multiplier (1.8g - 2.2g per kg of bodyweight) for rapid recovery.',
    content: 'Protein synthesizes new muscle tissue post-teardown. Consuming lean chicken, eggs, paneer, and whey protein isolate distributed evenly across 4 meals maximizes MPS...'
  },
  {
    id: 4,
    title: 'Active Recovery & Sleep OS: Repair Muscle Fibers Faster',
    category: 'Recovery Techniques',
    author: 'ABS Fitness Team',
    readTime: '4 Min Read',
    desc: 'Why growth hormone spikes during deep REM sleep and how foam rolling and hydration accelerate muscle repair.',
    content: 'Muscles grow outside the gym when you rest. Aim for 7-8 hours of uninterrupted sleep to optimize testosterone and growth hormone release...'
  }
];

const Blog = () => {
  const [activeArticle, setActiveArticle] = useState(null);

  return (
    <section id="blog" className="relative py-24 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full glass-panel border border-[#FF5500]/30 text-xs font-bold text-[#FF5500] uppercase tracking-widest">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Fitness OS Intelligence</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white uppercase">
            GYM KNOWLEDGE <span className="neon-orange-text">HUB</span>
          </h2>
          <p className="text-slate-400 text-base">
            Expert workout guides, nutrition hacks, and recovery science authored by ABS GYM master coaches.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="glass-panel rounded-3xl p-8 border border-white/10 hover:border-[#FF5500] transition-all duration-300 glass-panel-hover flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-[#FF5500]/15 border border-[#FF5500]/40 text-xs font-bold text-[#FF5500] uppercase tracking-wider font-subheading">
                    {post.category}
                  </span>
                  <span className="text-xs text-slate-400 font-subheading">
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white uppercase font-heading group-hover:text-[#FF5500] transition-colors leading-tight">
                  {post.title}
                </h3>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {post.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between">
                <span className="text-xs font-bold text-slate-400 font-subheading">
                  By <strong className="text-white">{post.author}</strong>
                </span>

                <button
                  onClick={() => setActiveArticle(post)}
                  className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-[#FF5500] text-slate-200 hover:text-white border border-slate-700 hover:border-transparent text-xs font-bold uppercase transition-all flex items-center space-x-1.5"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Article Detail Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
          <div className="glass-panel w-full max-w-2xl p-8 rounded-3xl border border-[#FF5500] relative max-h-[85vh] overflow-y-auto">
            <button
              onClick={() => setActiveArticle(null)}
              className="absolute top-5 right-5 p-2 rounded-xl glass-panel text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="px-3 py-1 rounded-full bg-[#FF5500]/20 text-[#FF5500] text-xs font-bold uppercase font-subheading tracking-wider">
              {activeArticle.category}
            </span>

            <h3 className="text-2xl font-black text-white uppercase font-heading mt-3 mb-2">
              {activeArticle.title}
            </h3>
            <span className="text-xs text-slate-400 font-subheading block mb-6">
              Written by <strong className="text-[#FF5500]">{activeArticle.author}</strong> • {activeArticle.readTime}
            </span>

            <div className="space-y-4 text-slate-300 text-sm leading-relaxed border-t border-slate-800 pt-6">
              <p>{activeArticle.content}</p>
              <p>For custom workout routines tailored specifically to your body type, visit ABS GYM and consult our master trainers directly!</p>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-800">
              <button
                onClick={() => setActiveArticle(null)}
                className="w-full py-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs font-bold uppercase"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Blog;
