
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
          <p className="text-sm md:text-lg tracking-[0.8em] uppercase font-bold font-sans text-copper italic">Move Boldly</p>
        </div>
      </section>

      {/* Simplified Content */}
      <section className="py-40 bg-white text-dark-text border-t border-black/5">
        <div className="container mx-auto px-10">
          <div className="max-w-3xl mx-auto text-center reveal">
            <div className="bg-stone-50 text-dark-text p-16 md:p-24 relative group overflow-hidden border border-black/5">
              <div className="absolute top-0 right-0 w-40 h-40 bg-copper/5 rounded-full blur-3xl"></div>
              <h4 className="text-4xl md:text-7xl font-serif mb-12 tracking-tight font-light">Waiting List</h4>
              <p className="mb-16 text-dark-secondary/50 font-sans font-light text-lg leading-relaxed">Join the ledger to receive exclusive early access to the upcoming release.</p>
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
