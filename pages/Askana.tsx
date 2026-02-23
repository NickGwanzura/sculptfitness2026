
import React from 'react';

const Askana: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Apparel Hero */}
      <section className="h-screen relative flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/assets/images/apparel-hero.jpg"
            alt="ASKANA Aesthetic"
            className="w-full h-full object-cover grayscale opacity-40 brightness-75"
          />
          <div className="absolute inset-0 bg-near-black/60"></div>
        </div>
        <div className="relative z-10 text-white px-8 pt-56 md:pt-[420px] animate-fade-up">
          <h1 className="text-8xl md:text-[220px] font-serif mb-8 leading-none tracking-tighter opacity-90 font-normal">ASKANA</h1>
          <p className="text-sm md:text-lg tracking-[0.8em] uppercase font-bold font-sans text-copper">The Apparel Capsule</p>
        </div>
      </section>

      {/* Philosophy Editorial */}
      <section className="py-60 container mx-auto px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
          <div className="lg:col-span-5 reveal">
            <h4 className="text-copper text-[10px] tracking-[0.6em] uppercase mb-12 font-bold font-sans">The Ethos</h4>
            <h2 className="text-5xl md:text-8xl font-serif mb-12 leading-tight text-dark-text tracking-tight font-normal">Clothing as <span>Identity</span>.</h2>
            <p className="text-dark-secondary/60 text-xl font-sans font-light leading-relaxed mb-12">
              No loud logos. No temporary trends. Just minimal, high-performance pieces designed to support the modern woman from her morning meditation to her evening creative flow.
            </p>
            <div className="h-[1px] w-20 bg-copper mb-12 opacity-30"></div>
            <p className="text-dark-text text-sm tracking-[0.4em] uppercase font-bold font-sans">Est. Harare • 2025</p>
          </div>
          <div className="lg:col-span-7 grid grid-cols-2 gap-10">
            <div className="reveal overflow-hidden aspect-[3/4] mt-24 bg-stone-100 border border-black/5">
              <img src="/assets/images/apparel-identity-1.jpg" className="w-full h-full object-cover grayscale opacity-50 hover:opacity-80 transition-all duration-[2s]" alt="Detail" />
            </div>
            <div className="reveal overflow-hidden aspect-[3/4] mb-24 bg-stone-100 border border-black/5" style={{ transitionDelay: '300ms' }}>
              <img src="/assets/images/apparel-identity-2.jpg" className="w-full h-full object-cover grayscale opacity-50 hover:opacity-80 transition-all duration-[2s]" alt="Aesthetic" />
            </div>
          </div>
        </div>
      </section>

      {/* Collection Showroom */}
      <section className="py-60 bg-white text-dark-text overflow-hidden border-t border-black/5">
        <div className="container mx-auto px-10">
          <div className="text-center mb-32 reveal">
            <h4 className="text-copper text-[10px] tracking-[0.8em] uppercase mb-16 font-bold font-sans">Inaugural Release</h4>
            <h3 className="text-5xl md:text-9xl font-serif mb-12 tracking-tighter opacity-80 text-dark-text font-normal">The Archive Collection</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
            {[
              { price: "$120", img: "/assets/images/apparel-leggings.jpg" },
              { price: "$85", img: "/assets/images/apparel-bra.jpg" },
              { price: "$145", img: "/assets/images/apparel-wrapper.jpg" }
            ].map((item, idx) => (
              <div key={idx} className="group cursor-pointer reveal" style={{ transitionDelay: `${idx * 200}ms` }}>
                <div className="aspect-[2/3] bg-stone-100 border border-black/5 overflow-hidden mb-10">
                  <img src={item.img} className="w-full h-full object-cover grayscale opacity-40 group-hover:scale-110 group-hover:opacity-80 transition-all duration-[2s]" alt="Apparel Item" />
                </div>
                <div className="flex justify-end items-baseline">
                  <span className="text-[10px] opacity-30 font-sans">{item.price}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-40 max-w-3xl mx-auto text-center reveal">
            <div className="bg-stone-50 text-dark-text p-16 md:p-24 relative group overflow-hidden border border-black/5">
              <div className="absolute top-0 right-0 w-40 h-40 bg-copper/5 rounded-full blur-3xl"></div>
              <h4 className="text-4xl md:text-7xl font-serif mb-12 tracking-tight font-light">Private Waiting List</h4>
              <p className="mb-16 text-dark-secondary/50 font-sans font-light text-lg leading-relaxed">Join our private ledger to receive exclusive early access to the upcoming release.</p>
              <form className="flex flex-col sm:flex-row gap-6" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="NAME@EMAIL.COM"
                  className="flex-grow bg-white border-b border-black/10 px-8 py-6 text-[9px] tracking-[0.5em] font-bold focus:outline-none focus:border-copper transition-colors text-dark-text"
                />
                <button className="bg-copper text-white px-16 py-6 text-[9px] tracking-[0.5em] uppercase font-bold hover:bg-dark-text hover:text-white transition-all">
                  Secure Access
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Askana;
