
import React, { useState } from 'react';
import { Instagram, Mail, Phone, MessageCircle } from 'lucide-react';

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
            <h4 className="text-copper text-[9px] md:text-[10px] tracking-[0.25em] uppercase mb-12 md:mb-16 font-bold">Inquiry</h4>
            <h1 className="text-5xl md:text-[100px] font-serif mb-12 md:mb-20 leading-[1] md:leading-[0.9] tracking-tighter text-dark-text font-normal">Begin your <br />evolution.</h1>
            <p className="text-lg md:text-2xl text-dark-secondary/80 mb-16 md:mb-32 font-light leading-[1.8] max-w-md">
              Book your consultation.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-12 md:gap-24">
              <div>
                <p className="text-lg md:text-xl font-light text-dark-secondary leading-relaxed">Harare, Zimbabwe</p>
              </div>

              <div>
                <h5 className="text-[9px] md:text-[10px] uppercase tracking-[0.25em] font-bold mb-6 md:mb-10 text-black/60">Direct Contact</h5>
                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-4">
                    <Mail className="w-5 h-5 text-copper" />
                    <p className="text-lg md:text-xl font-light text-dark-text leading-relaxed lowercase border-b border-copper/10 inline-block w-fit">tsitsiwashe@sculpt263.com</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <MessageCircle className="w-5 h-5 text-copper" />
                    <a href="https://wa.me/263777000000" target="_blank" rel="noopener noreferrer" className="text-lg md:text-xl font-light text-copper leading-relaxed border-b border-copper/20 inline-block w-fit hover:opacity-70 transition-opacity">WhatsApp & Calls</a>
                  </div>
                  <div className="flex items-center gap-4">
                    <Instagram className="w-5 h-5 text-copper" />
                    <a href="https://instagram.com/sculpt263" target="_blank" rel="noopener noreferrer" className="text-lg md:text-xl font-light text-dark-text leading-relaxed border-b border-copper/10 inline-block w-fit hover:opacity-70 transition-opacity">@sculpt263</a>
                  </div>
                </div>
              </div>

              <div>
                <h5 className="text-[9px] md:text-[10px] uppercase tracking-[0.25em] font-bold mb-6 md:mb-10 text-black/60">Hours</h5>
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
                    I will personally contact you within 24 hours to schedule your consultation.
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
                        className="w-full bg-transparent border-b border-black/20 focus:border-copper py-6 text-lg focus:outline-none transition-all placeholder:text-black/30 font-light text-dark-text"
                        placeholder="Your Full Name"
                      />
                    </div>
                    <div className="relative group">
                      <input
                        required
                        type="email"
                        className="w-full bg-transparent border-b border-black/20 focus:border-copper py-6 text-lg focus:outline-none transition-all placeholder:text-black/30 font-light text-dark-text"
                        placeholder="Email Address"
                      />
                    </div>
                    <div className="relative group">
                      <select className="w-full bg-transparent border-b border-black/20 focus:border-copper py-6 text-lg focus:outline-none transition-all font-light text-dark-text appearance-none cursor-pointer">
                        <option value="">Interested In</option>
                        <option value="strength">Strength Training</option>
                        <option value="pilates">Pilates</option>
                        <option value="nutrition">Nutrition Planning</option>
                        <option value="apparel">Askana Inquiry</option>
                      </select>
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none opacity-30">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                    <div className="relative group">
                      <textarea
                        rows={3}
                        className="w-full bg-transparent border-b border-black/20 focus:border-copper py-6 text-lg focus:outline-none transition-all placeholder:text-black/30 font-light resize-none text-dark-text"
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
                    By submitting, you agree to my private privacy protocol.
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
