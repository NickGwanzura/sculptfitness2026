
import React from 'react';

const Askana: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Apparel Hero */}
      <section className="h-screen relative flex items-center justify-center text-center overflow-hidden bg-white">
        <div className="relative z-10 w-full max-w-4xl px-8 animate-fade-up">
          <img
            src="/assets/logos/askana-logo.svg"
            alt="ASKANA Logo"
            className="w-full h-auto max-h-[60vh] object-contain mx-auto"
          />
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
