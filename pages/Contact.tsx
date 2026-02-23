
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-32 md:pt-48 pb-32 md:pb-60 bg-white min-h-screen text-dark-text">
      <div className="max-w-screen-xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 md:gap-32">
          <div className="reveal">
            <h4 className="text-copper text-[9px] md:text-[10px] tracking-[0.25em] uppercase mb-12 md:mb-16 font-bold">Concierge</h4>
            <h1 className="text-5xl md:text-[100px] font-serif mb-12 md:mb-20 leading-[1] md:leading-[0.9] tracking-tighter text-dark-text font-normal">Begin your <br />evolution.</h1>
            <p className="text-lg md:text-2xl text-dark-secondary/80 mb-16 md:mb-32 font-light leading-[1.8] max-w-md">
              Private consultations are held in our studio space. We look forward to welcoming you.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-12 md:gap-24">
              <div>
                <h5 className="text-[9px] md:text-[10px] uppercase tracking-[0.25em] font-bold mb-6 md:mb-10 text-black/40">Our Harare Studio</h5>
                <p className="text-lg md:text-xl font-light text-dark-secondary leading-relaxed">Harare, Zimbabwe</p>
              </div>

              <div>
                <h5 className="text-[9px] md:text-[10px] uppercase tracking-[0.25em] font-bold mb-6 md:mb-10 text-black/40">Inquiries</h5>
                <p className="text-lg md:text-xl font-light text-dark-secondary leading-relaxed lowercase border-b border-copper/20 inline-block">tsitsiwashe@sculpt263.com</p>
              </div>

              <div>
                <h5 className="text-[9px] md:text-[10px] uppercase tracking-[0.25em] font-bold mb-6 md:mb-10 text-black/40">Hours</h5>
                <p className="text-lg md:text-xl font-light text-dark-secondary leading-relaxed">By appointment only.</p>
              </div>
            </div>
          </div>

          <div className="reveal mt-16 md:mt-0" style={{ transitionDelay: '300ms' }}>
            <div className="bg-stone-50 p-8 md:p-20 border border-black/5 shadow-2xl backdrop-blur-sm rounded-[1px]">
              {submitted ? (
                <div className="text-center py-16 md:py-24 animate-fade-up">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-black/5 rounded-full flex items-center justify-center mx-auto mb-12 md:mb-16 border border-copper/30">
                    <svg className="w-6 h-6 md:w-8 md:h-8 text-copper" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-serif mb-8 md:mb-10 text-dark-text font-light">Your inquiry is received.</h2>
                  <p className="text-dark-secondary/50 font-light leading-relaxed text-base md:text-lg mb-12 md:mb-16">
                    Our Concierge will contact you personally within 24 hours to schedule your private assessment.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-copper text-[10px] font-bold tracking-[0.5em] uppercase border-b border-copper/30 pb-2"
                  >
                    Back to Form
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-12 md:space-y-16">
                  <div className="space-y-12 md:space-y-16">
                    <div className="relative group">
                      <input
                        required
                        type="text"
                        className="w-full bg-transparent border-b border-black/10 py-4 text-base focus:outline-none focus:border-copper transition-all placeholder:text-black/20 font-light text-dark-text"
                        placeholder="Your Full Name"
                      />
                    </div>
                    <div className="relative group">
                      <input
                        required
                        type="email"
                        className="w-full bg-transparent border-b border-black/10 py-4 text-base focus:outline-none focus:border-copper transition-all placeholder:text-black/20 font-light text-dark-text"
                        placeholder="Email Address"
                      />
                    </div>
                    <div className="relative group">
                      <select className="w-full bg-transparent border-b border-black/10 py-4 text-base focus:outline-none focus:border-copper transition-all font-light text-dark-text appearance-none">
                        <option value="">Interested In</option>
                        <option value="strength">Strength Training</option>
                        <option value="pilates">Classical Pilates</option>
                        <option value="nutrition">Nutrition Planning</option>
                        <option value="apparel">Apparel Inquiry</option>
                      </select>
                    </div>
                    <div className="relative group">
                      <textarea
                        rows={3}
                        className="w-full bg-transparent border-b border-black/10 py-4 text-base focus:outline-none focus:border-copper transition-all placeholder:text-black/20 font-light resize-none text-dark-text"
                        placeholder="Briefly share your wellness intentions..."
                      ></textarea>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-copper text-white py-6 md:py-8 text-[10px] md:text-[11px] tracking-[0.3em] uppercase font-bold hover:bg-dark-text hover:text-white transition-all shadow-lg mt-12 md:mt-16"
                  >
                    Request Access
                  </button>
                  <p className="text-[8px] md:text-[9px] text-center opacity-30 tracking-[0.2em] font-medium uppercase px-4 md:px-12 leading-relaxed mt-8">
                    By submitting, you agree to our private concierge protocol.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
