import React, { useState } from 'react';
import { ShoppingBag, Zap, Check, Star, Sparkles, X } from 'lucide-react';

const products = [
  {
    id: 1,
    name: 'ABS Ultra Whey Isolate',
    category: 'Protein Powder',
    price: '₹3,499',
    rating: 4.9,
    tag: 'Top Seller',
    desc: '27g pure whey isolate per scoop. Fast absorbing formula with zero added sugar for rapid muscle repair.',
    specs: ['27g Protein', '5.5g BCAAs', 'Zero Sugar', 'Ultra Pure']
  },
  {
    id: 2,
    name: 'Cyber Mass Gainer 3000',
    category: 'Mass Gainer',
    price: '₹2,899',
    rating: 4.8,
    tag: 'Bulking OS',
    desc: '1250 high-yield clean calories with complex carbs and digestive enzymes for hardgainers seeking solid mass.',
    specs: ['1250 Calories', '50g Protein', 'Complex Carbs', 'Digestive Blend']
  },
  {
    id: 3,
    name: 'Micronized Creatine Power',
    category: 'Creatine',
    price: '₹1,199',
    rating: 5.0,
    tag: 'Pure Force',
    desc: '100% pure micronized creatine monohydrate to saturate ATP reserves for explosive strength & muscle volume.',
    specs: ['5g Pure Creatine', 'Unflavored', '200 Mesh Micronized', 'Rapid Load']
  },
  {
    id: 4,
    name: 'Nitro Igniter Pre-Workout',
    category: 'Pre Workout',
    price: '₹1,799',
    rating: 4.9,
    tag: 'High Stimulant',
    desc: 'Extreme focus, laser drive, and massive nitric oxide muscle pump formulation for intense gym sessions.',
    specs: ['350mg Caffeine', '6g L-Citrulline', 'Beta-Alanine', 'Laser Drive']
  },
  {
    id: 5,
    name: 'Metallic Neon Shaker 750ml',
    category: 'Shakers',
    price: '₹499',
    rating: 4.7,
    tag: 'Durability',
    desc: 'Leak-proof stainless steel design with dual mixing mesh and insulated thermal layer.',
    specs: ['BPA Free', '750ml Capacity', 'Leak Proof', 'Stainless Steel']
  },
  {
    id: 6,
    name: 'Heavy Powerlifting Belt & Straps',
    category: 'Gym Accessories',
    price: '₹1,499',
    rating: 4.9,
    tag: 'Protection',
    desc: 'Genuine thick leather lever belt with padded neoprene wrist straps for heavy squatting and deadlifting.',
    specs: ['10mm Genuine Leather', 'Lever Buckle', 'Neoprene Padded', 'Max Support']
  }
];

const Supplements = () => {
  const [cartCount, setCartCount] = useState(0);
  const [activeModalProduct, setActiveModalProduct] = useState(null);
  const [addedNotice, setAddedNotice] = useState('');

  const handleAddToCart = (productName) => {
    setCartCount((prev) => prev + 1);
    setAddedNotice(`Added "${productName}" to gym store reserve!`);
    setTimeout(() => setAddedNotice(''), 3000);
  };

  return (
    <section id="supplements" className="relative py-24 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full glass-panel border border-[#FF5500]/30 text-xs font-bold text-[#FF5500] uppercase tracking-widest mb-3">
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>ABS GYM Fuel Store</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white uppercase">
              PREMIUM <span className="neon-orange-text">SUPPLEMENTS</span>
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              Authentic verified workout nutrition available directly at ABS GYM front desk.
            </p>
          </div>

          {/* Cart Indicator */}
          <div className="glass-panel px-5 py-3 rounded-2xl border border-white/10 flex items-center space-x-3">
            <div className="relative">
              <ShoppingBag className="w-5 h-5 text-[#FF5500]" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-[#FF5500] text-white text-[10px] font-black flex items-center justify-center animate-bounce">
                  {cartCount}
                </span>
              )}
            </div>
            <div className="text-xs">
              <span className="text-slate-400 block font-subheading">Reserved Items</span>
              <strong className="text-white font-heading">{cartCount} Products</strong>
            </div>
          </div>
        </div>

        {addedNotice && (
          <div className="mb-8 p-4 rounded-2xl bg-[#FF5500]/20 border border-[#FF5500] text-white text-xs font-bold text-center animate-pulse">
            ✅ {addedNotice} (Pick up at ABS GYM desk)
          </div>
        )}

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((prod) => (
            <div
              key={prod.id}
              className="glass-panel rounded-3xl p-6 border border-white/10 hover:border-[#FF5500] transition-all duration-300 group glass-panel-hover flex flex-col justify-between"
            >
              <div>
                {/* Image Placeholder Visual Container */}
                <div className="relative h-52 rounded-2xl bg-gradient-to-b from-[#181C28] to-[#0A0C12] border border-white/5 overflow-hidden flex items-center justify-center p-4 mb-5">
                  <div className="absolute inset-0 cyber-grid opacity-30" />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-slate-900/80 border border-[#FF5500]/40 text-[10px] font-bold text-[#FF5500] uppercase font-subheading">
                    {prod.tag}
                  </span>

                  <div className="text-center relative z-10">
                    <div className="w-20 h-20 rounded-2xl bg-[#FF5500]/10 border border-[#FF5500]/40 flex items-center justify-center text-[#FF5500] mx-auto group-hover:scale-110 transition-transform">
                      <Zap className="w-10 h-10" />
                    </div>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest block mt-3 font-subheading">
                      {prod.category}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-bold text-[#FF5500] uppercase tracking-wider font-subheading">
                    {prod.category}
                  </span>
                  <div className="flex items-center space-x-1 text-amber-400 text-xs font-bold">
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <span>{prod.rating}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white uppercase font-heading group-hover:text-[#FF5500] transition-colors mb-2">
                  {prod.name}
                </h3>

                <p className="text-slate-400 text-xs leading-relaxed mb-4">
                  {prod.desc}
                </p>
              </div>

              <div>
                <div className="flex items-center justify-between border-t border-white/5 pt-4 mb-4">
                  <span className="text-2xl font-black text-white font-heading">
                    {prod.price}
                  </span>
                  <button
                    onClick={() => setActiveModalProduct(prod)}
                    className="text-xs text-slate-400 hover:text-white underline font-subheading"
                  >
                    View Specs
                  </button>
                </div>

                <button
                  onClick={() => handleAddToCart(prod.name)}
                  className="w-full py-3 rounded-xl bg-slate-900 hover:bg-[#FF5500] text-slate-200 hover:text-white border border-slate-700 hover:border-transparent text-xs font-bold tracking-wider uppercase transition-all flex items-center justify-center space-x-2"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Reserve Product</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Product Detail Modal */}
      {activeModalProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="glass-panel w-full max-w-md p-8 rounded-3xl border border-[#FF5500] relative shadow-2xl">
            <button
              onClick={() => setActiveModalProduct(null)}
              className="absolute top-5 right-5 p-2 rounded-xl glass-panel text-slate-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>

            <h3 className="text-2xl font-black text-white uppercase font-heading mb-1">
              {activeModalProduct.name}
            </h3>
            <span className="text-xs text-[#FF5500] font-subheading font-bold uppercase tracking-widest block mb-4">
              PRICE: {activeModalProduct.price}
            </span>

            <p className="text-slate-300 text-xs leading-relaxed mb-6">
              {activeModalProduct.desc}
            </p>

            <div className="space-y-2 mb-6">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider font-subheading block">
                Formula Specifications:
              </span>
              {activeModalProduct.specs.map((spec, i) => (
                <div key={i} className="flex items-center space-x-2 text-xs text-white font-semibold">
                  <Check className="w-4 h-4 text-[#FF5500]" />
                  <span>{spec}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => {
                handleAddToCart(activeModalProduct.name);
                setActiveModalProduct(null);
              }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-[#FF5500] to-[#FF7700] text-white text-xs font-bold uppercase tracking-wider shadow-neon-orange"
            >
              Reserve For Pickup At Gym
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Supplements;
