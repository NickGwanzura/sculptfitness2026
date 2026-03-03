
import React from 'react';

const Askana: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Apparel Hero */}
      <section
        className="h-[80vh] relative flex flex-col items-center justify-center text-center overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/images/hero-plank.jpg')" }}
      >
        <div className="absolute inset-0 bg-near-black/60"></div>
        <div className="relative z-10 w-full max-w-4xl px-8 animate-fade-up flex flex-col items-center">
          <img
            src="/assets/logos/askana-logo-raw.png"
            alt="ASKANA Logo"
            className="w-48 md:w-64 h-auto object-contain mb-12 drop-shadow-2xl brightness-0 invert"
          />
          <h1 className="text-4xl md:text-7xl font-serif text-white mb-6 tracking-tight">
            Strength in Motion
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-sans font-light max-w-2xl mb-12 leading-relaxed">
            Athleisure for women who move with intention, purpose, and carry confidence beyond the gym.
          </p>
          <div className="flex flex-col items-center gap-6">
            <span className="text-copper font-bold tracking-[0.3em] uppercase text-sm">Launching May 2026</span>
            <button
              onClick={() => document.getElementById('waitlist-form')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-12 py-5 bg-copper text-white text-[10px] tracking-[0.5em] uppercase font-bold hover:bg-white hover:text-near-black transition-all shadow-xl shadow-copper/20"
            >
              Join the Waitlist
            </button>
          </div>
        </div>
      </section>

      {/* About Askana */}
      <section className="py-32 md:py-52 bg-white text-dark-text border-t border-black/5">
        <div className="container mx-auto px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center max-w-6xl mx-auto">
            <div className="reveal">
              <h4 className="text-copper text-[10px] tracking-[0.25em] uppercase mb-8 font-bold font-sans">The Brand Story</h4>
              <h2 className="text-5xl md:text-7xl font-serif mb-12 tracking-tight leading-tight">
                About <span className="italic text-copper">Askana.</span>
              </h2>
              <h3 className="text-2xl md:text-3xl font-serif mb-10 text-dark-secondary italic">
                Strength. Intention. Presence.
              </h3>
              <div className="space-y-8 text-dark-secondary/80 text-lg leading-[1.8] font-sans font-light">
                <p>
                  Askana, drawn from the word <span className="text-dark-text font-medium italic">“vasikana”</span> (girls), represents a generation of women who move with purpose. It is a tribute to women who train with discipline, live intentionally, and embody strength.
                </p>
                <p>
                  Askana represents more than clothing. Wearing Askana is a reminder that strength is visible not just in your body, but in your posture, presence, and attitude.
                </p>
              </div>
            </div>
            <div className="reveal">
              <div className="aspect-[4/5] bg-stone-100 rounded-3xl overflow-hidden shadow-2xl border border-black/5">
                <img
                  src="/assets/images/apparel-identity-2.jpg"
                  alt="Askana philosophy"
                  className="w-full h-full object-cover grayscale opacity-90"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Askana is For You */}
      <section className="py-32 md:py-52 bg-stone-50 border-y border-black/5">
        <div className="container mx-auto px-10 text-center max-w-4xl">
          <div className="reveal">
            <h4 className="text-copper text-[10px] tracking-[0.25em] uppercase mb-12 font-bold font-sans">Our Purpose</h4>
            <h2 className="text-4xl md:text-6xl font-serif mb-12 tracking-tight text-dark-text">Askana is For You</h2>
            <p className="text-xl md:text-2xl text-dark-secondary/70 font-sans font-light leading-relaxed mb-16">
              Whether you’re moving through a Pilates session, lifting in the gym, or stepping into your daily life, Askana is designed to move with you. It’s not just athleisure, it’s <span className="text-copper italic">strength in motion</span>, translated into style.
            </p>
          </div>
        </div>
      </section>

      {/* Waitlist Form Section */}
      <section id="waitlist-form" className="py-40 bg-white text-dark-text">
        <div className="container mx-auto px-10">
          <div className="max-w-4xl mx-auto text-center reveal">
            <div className="bg-stone-50 text-dark-text p-12 md:p-24 relative group overflow-hidden border border-black/5 rounded-3xl shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-copper/5 rounded-full blur-3xl"></div>

              <h4 className="text-copper text-[10px] tracking-[0.25em] uppercase mb-8 font-bold font-sans">Be Part of the Launch</h4>
              <h2 className="text-4xl md:text-7xl font-serif mb-10 tracking-tight font-light">Secure Early Access</h2>
              <p className="mb-16 text-dark-secondary/60 font-sans font-light text-xl leading-relaxed max-w-2xl mx-auto">
                We are opening limited access for the May 2026 launch. Enter your details below to secure your spot. <span className="text-copper italic font-medium">Limited quantities available.</span>
              </p>

              <form className="flex flex-col gap-8 max-w-2xl mx-auto" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <input
                    type="text"
                    placeholder="FULL NAME"
                    className="bg-white border-b border-black/10 px-8 py-6 text-[10px] tracking-[0.3em] font-bold focus:outline-none focus:border-copper transition-colors text-dark-text uppercase"
                  />
                  <input
                    type="email"
                    placeholder="NAME@EMAIL.COM"
                    className="bg-white border-b border-black/10 px-8 py-6 text-[10px] tracking-[0.3em] font-bold focus:outline-none focus:border-copper transition-colors text-dark-text uppercase"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <select
                    className="bg-white border-b border-black/10 px-8 py-6 text-[10px] tracking-[0.3em] font-bold focus:outline-none focus:border-copper transition-colors text-dark-text uppercase appearance-none"
                    defaultValue=""
                  >
                    <option value="" disabled>PREFERRED SIZE</option>
                    <option value="xs">Extra Small (XS)</option>
                    <option value="s">Small (S)</option>
                    <option value="m">Medium (M)</option>
                    <option value="l">Large (L)</option>
                    <option value="xl">Extra Large (XL)</option>
                  </select>

                  <button className="bg-copper text-white px-16 py-6 text-[10px] tracking-[0.5em] uppercase font-bold hover:bg-near-black hover:text-white transition-all shadow-lg shadow-copper/10">
                    Secure My Access
                  </button>
                </div>

                <p className="text-[9px] tracking-[0.2em] uppercase text-dark-secondary/40 font-bold mt-4">
                  By joining, you agree to receive early access notifications.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Askana;
