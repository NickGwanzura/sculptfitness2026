
import React, { useState } from 'react';

const Askana: React.FC = () => {
  const [waitlistName, setWaitlistName] = useState('');
  const [waitlistEmail, setWaitlistEmail] = useState('');
  const [waitlistSize, setWaitlistSize] = useState('');
  const [waitlistSubmitted, setWaitlistSubmitted] = useState(false);

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setWaitlistSubmitted(true);

    const sizeLabel = waitlistSize || 'Not specified';
    const text = `Hi! 👋 I'd love to join the Askana waitlist.\n\n👤 Name: ${waitlistName}\n📧 Email: ${waitlistEmail}\n👕 Size: ${sizeLabel}\n\nCan't wait for the May 2026 launch! 🔥`;
    const url = `https://wa.me/263779261868?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Apparel Hero */}
      <section
        className="h-[80vh] min-h-[600px] relative flex flex-col items-center justify-center text-center overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/assets/images/hero-plank.jpg')" }}
      >
        <div className="absolute inset-0 bg-near-black/60"></div>
        <div className="relative z-10 w-full max-w-4xl px-8 animate-fade-up flex flex-col items-center">
          <img
            src="/assets/logos/askana-logo-raw.png"
            alt="ASKANA Logo"
            className="w-48 md:w-64 h-auto object-contain mt-32 md:mt-24 mb-10 md:mb-20 drop-shadow-2xl brightness-0 invert"
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

                <div className="pt-8">
                  <a
                    href="https://www.instagram.com/tsitsi_washe?igsh=cW8wbWUybWsybTNn&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-full border border-copper/30 flex items-center justify-center group-hover:bg-copper group-hover:border-copper transition-all duration-500">
                      <svg className="w-5 h-5 text-copper group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.166.054 1.8.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.427.359 1.061.415 2.227.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.056 1.166-.251 1.8-.415 2.23-.217.561-.477.96-.896 1.382-.42.419-.819.679-1.381.896-.427.164-1.061.359-2.227.415-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.166-.056-1.8-.251-2.23-.415-.561-.217-.96-.477-1.382-.896-.419-.42-.679-.819-.896-1.381-.164-.427-.359-1.061-.415-2.227-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.056-1.166.251-1.8.415-2.23.217-.561.477-.96.896-1.382.42-.419.819-.679 1.381-.896.427-.164 1.061-.359 2.227-.415 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-1.277.057-2.148.258-2.911.553-.788.307-1.457.718-2.122 1.382-.664.665-1.075 1.334-1.382 2.122-.295.763-.496 1.634-.553 2.911-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.057 1.277.258 2.148.553 2.911.307.788.718 1.457 1.382 2.122.665.664 1.334 1.075 2.122 1.382.763.295 1.634.496 2.911.553 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.277-.057 2.148-.258 2.911-.553.788-.307 1.457-.718 2.122-1.382.664-.665 1.075-1.334 1.382-2.122.295-.763.496-1.634.553-2.911.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.057-1.277-.258-2.148-.553-2.911-.307-.788-.718-1.457-1.382-2.122-.665-.664-1.334-1.075-2.122-1.382-.763-.295-1.634-.496-2.911-.553-1.28-.058-1.688-.072-4.947-.072z" />
                        <path d="M12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </div>
                    <span className="text-[10px] tracking-[0.3em] font-bold text-dark-text/60 group-hover:text-copper transition-colors uppercase">Follow the Journey</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="reveal">
              <div className="aspect-[4/5] bg-stone-100 rounded-3xl overflow-hidden shadow-2xl border border-black/5">
                <img
                  src="/assets/images/apparel-identity-2.jpg"
                  alt="Askana philosophy"
                  loading="lazy"
                  className="w-full h-full object-cover object-top grayscale opacity-90"
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

              {waitlistSubmitted ? (
                <div className="flex flex-col items-center py-12 animate-fade-up">
                  <div className="w-16 h-16 bg-black/5 rounded-full flex items-center justify-center mx-auto mb-10 border border-copper/30">
                    <svg className="w-7 h-7 text-copper" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-serif font-light mb-4">You're on the list.</h3>
                  <p className="text-dark-secondary/50 font-light text-base mb-10">WhatsApp has opened — send your message to confirm your spot.</p>
                  <button
                    onClick={() => setWaitlistSubmitted(false)}
                    className="text-copper text-[10px] font-bold tracking-[0.5em] uppercase border-b border-copper/30 pb-2"
                  >
                    Back
                  </button>
                </div>
              ) : (
              <form className="flex flex-col gap-8 max-w-2xl mx-auto" onSubmit={handleWaitlistSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <input
                    required
                    type="text"
                    value={waitlistName}
                    onChange={(e) => setWaitlistName(e.target.value)}
                    placeholder="FULL NAME"
                    className="bg-white border-b border-black/10 px-8 py-6 text-[10px] tracking-[0.3em] font-bold focus:outline-none focus:border-copper transition-colors text-dark-text uppercase"
                  />
                  <input
                    required
                    type="email"
                    value={waitlistEmail}
                    onChange={(e) => setWaitlistEmail(e.target.value)}
                    placeholder="NAME@EMAIL.COM"
                    className="bg-white border-b border-black/10 px-8 py-6 text-[10px] tracking-[0.3em] font-bold focus:outline-none focus:border-copper transition-colors text-dark-text uppercase"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <select
                    value={waitlistSize}
                    onChange={(e) => setWaitlistSize(e.target.value)}
                    className="bg-white border-b border-black/10 px-8 py-6 text-[10px] tracking-[0.3em] font-bold focus:outline-none focus:border-copper transition-colors text-dark-text uppercase appearance-none"
                  >
                    <option value="" disabled>PREFERRED SIZE</option>
                    <option value="Extra Small (XS)">Extra Small (XS)</option>
                    <option value="Small (S)">Small (S)</option>
                    <option value="Medium (M)">Medium (M)</option>
                    <option value="Large (L)">Large (L)</option>
                    <option value="Extra Large (XL)">Extra Large (XL)</option>
                  </select>

                  <button type="submit" className="bg-copper text-white px-16 py-6 text-[10px] tracking-[0.5em] uppercase font-bold hover:bg-near-black hover:text-white transition-all shadow-lg shadow-copper/10">
                    Secure My Access
                  </button>
                </div>

                <p className="text-[9px] tracking-[0.2em] uppercase text-dark-secondary/40 font-bold mt-4">
                  By joining, you agree to receive early access notifications.
                </p>
              </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Askana;
