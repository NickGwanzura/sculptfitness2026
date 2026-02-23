
import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="bg-white pt-32 md:pt-48 pb-60 min-h-screen">
      <div className="max-w-screen-xl mx-auto px-10">
        {/* Header */}
        <div className="max-w-4xl mb-48 reveal">
          <h4 className="text-copper text-[10px] tracking-[0.25em] uppercase mb-12 font-bold font-sans">The Architect</h4>
          <h1 className="text-7xl md:text-[110px] font-serif mb-16 leading-[0.95] tracking-tight text-dark-text font-normal">
            ABOUT <span className="font-light text-dark-secondary italic">TSITSI MAPOSA.</span>
          </h1>
          <p className="text-2xl text-dark-secondary/80 font-sans font-light leading-relaxed max-w-3xl">
            Helping Women Build Strength, Confidence & Sustainable Results.
          </p>
        </div>

        {/* Introduction Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start mb-72">
          <div className="lg:col-span-7 space-y-20">
            <div className="reveal overflow-hidden aspect-[16/9] bg-stone-100 border border-black/5 shadow-2xl">
              <img
                src="/assets/images/about-squat.jpg"
                className="w-full h-full object-cover opacity-60 grayscale transition-all duration-[2s]"
                alt="Strength & Resilience"
              />
            </div>
            <div className="reveal max-w-2xl" style={{ transitionDelay: '200ms' }}>
              <h2 className="text-4xl md:text-6xl font-serif mb-12 text-dark-text tracking-tight font-light leading-tight">
                Hi, I’m Tsitsi, a <span className="text-copper italic">certified personal trainer,</span> women’s fitness coach, and proud mom.
              </h2>
              <div className="space-y-10 text-dark-secondary/80 text-lg leading-[1.8] font-sans font-light">
                <p>
                  I don’t just train bodies. I build strong women. Fitness has been part of my life since my college years. What started as a personal passion slowly became a calling. Over time, I realized that strength isn’t just physical—it’s mental, emotional, and deeply personal.
                </p>
                <p>
                  Motherhood deepened that understanding. It showed me that a woman’s body is powerful beyond measure, and that strength isn’t about perfection—it’s about resilience. That’s the foundation of my coaching.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 reveal" style={{ transitionDelay: '400ms' }}>
            <div className="aspect-[3/4] overflow-hidden bg-stone-100 border border-black/5 mb-12 shadow-2xl">
              <img
                src="/assets/images/about-lunge.jpg"
                className="w-full h-full object-cover grayscale opacity-80"
                alt="Tsitsi Maposa"
              />
            </div>
            <div className="border-l border-copper pl-8 mb-16">
              <h3 className="text-dark-text font-serif text-3xl mb-8">My Mission</h3>
              <p className="text-dark-secondary/80 text-lg leading-relaxed font-light mb-8">
                I help women become stronger, leaner, and more confident through intentional, structured training. Not crash programs. Real training. Real discipline. Real results.
              </p>
              <p className="text-dark-secondary/60 text-base leading-relaxed font-light italic">
                "My goal is to create an environment where women feel safe to grow, challenged to improve, and supported every step of the way."
              </p>
            </div>
            <div className="space-y-8 pt-10">
              <h5 className="text-[10px] uppercase tracking-[0.5em] font-bold text-copper">Professional Credentials</h5>
              <div className="grid grid-cols-1 gap-4 text-sm font-light text-dark-secondary/80">
                <div className="flex items-center gap-4 border-b border-black/5 pb-4">
                  <span className="text-copper font-serif italic text-xl">01</span>
                  <span>Certified Personal Trainer</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-copper font-serif italic text-xl">02</span>
                  <span>Reformer Pilates Instructor</span>
                </div>
              </div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-dark-secondary/40 font-bold mt-8">
                I continuously invest in education because my clients deserve the best.
              </p>
            </div>
          </div>
        </div>

        {/* Pillars: What I Stand For */}
        <div className="reveal mb-72">
          <h4 className="text-copper text-[10px] tracking-[0.25em] uppercase mb-20 font-bold font-sans text-center">What I Stand For</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
            {[
              {
                title: "Strength Over Skinny",
                desc: "We build muscle, confidence, and a powerful presence."
              },
              {
                title: "Mindset First",
                desc: "Sustainable transformation begins with discipline and belief."
              },
              {
                title: "Structured Excellence",
                desc: "Every program is designed with purpose, not random workouts."
              },
              {
                title: "Great Experience",
                desc: "Training should feel elevated, focused, and high-value."
              },
              {
                title: "Community & Accountability",
                desc: "You are not doing this alone."
              }
            ].map((value, i) => (
              <div key={i} className="group p-8 border border-black/[0.03] bg-stone-50/50 hover:bg-white hover:shadow-2xl transition-all duration-700">
                <span className="text-copper font-serif text-2xl block mb-8 opacity-40 group-hover:opacity-100 transition-opacity">{(i + 1).toString().padStart(2, '0')}</span>
                <h3 className="text-xl font-serif mb-6 text-dark-text tracking-tight leading-snug">{value.title}</h3>
                <p className="text-dark-secondary/60 font-sans font-light leading-relaxed text-xs tracking-wider">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Pilates Integration Section */}
        <div className="mb-72 reveal">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
            <div className="lg:col-span-12 mb-12">
              <h4 className="text-copper text-[10px] tracking-[0.25em] uppercase mb-8 font-bold font-sans">The Methodology</h4>
              <h2 className="text-5xl md:text-7xl font-serif text-dark-text tracking-tight leading-tight max-w-4xl">
                Where Strength Meets <span className="text-copper italic">Precision.</span>
              </h2>
            </div>
            <div className="lg:col-span-5">
              <div className="space-y-12 text-lg text-dark-secondary font-light font-sans">
                <p className="border-l-2 border-copper/20 pl-8 leading-relaxed">
                  My approach to women’s training combines progressive strength development with precision-based <span className="text-dark-text font-medium">Reformer Pilates</span>.
                </p>
                <div className="grid grid-cols-2 gap-12 pt-8">
                  <div>
                    <h5 className="text-[10px] uppercase tracking-[0.3em] font-bold text-dark-text mb-4">Strength</h5>
                    <p className="text-sm italic text-copper">Builds muscle & increases power.</p>
                  </div>
                  <div>
                    <h5 className="text-[10px] uppercase tracking-[0.3em] font-bold text-dark-text mb-4">Pilates</h5>
                    <p className="text-sm italic text-copper">Refines muscle & improves control.</p>
                  </div>
                </div>
                <p className="text-xl font-serif italic text-dark-text pt-8">
                  Together, they create balance, posture, definition, and long-term resilience.
                </p>
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="bg-near-black p-12 md:p-20 text-white shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-copper/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 transition-all duration-1000 group-hover:bg-copper/20"></div>
                <h3 className="text-3xl font-serif mb-12 relative z-10">Why Pilates is Integral</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
                  <div className="space-y-6">
                    <p className="text-[10px] tracking-[0.2em] uppercase font-bold text-copper/60">Gap Analysis</p>
                    <ul className="space-y-4 text-sm font-light opacity-60">
                      <li>• Core engagement issues</li>
                      <li>• Postural misalignment</li>
                      <li>• Muscle imbalances</li>
                      <li>• Restricted mobility</li>
                    </ul>
                  </div>
                  <div className="space-y-6">
                    <p className="text-[10px] tracking-[0.2em] uppercase font-bold text-copper/60">The Evolution</p>
                    <ul className="space-y-4 text-sm font-light">
                      <li className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 bg-copper rounded-full"></span>
                        Glute Activation
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 bg-copper rounded-full"></span>
                        Core Stability
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 bg-copper rounded-full"></span>
                        Movement Precision
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 bg-copper rounded-full"></span>
                        Injury Prevention
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ideal Partnership */}
        <div className="mb-72 reveal">
          <div className="max-w-4xl mx-auto border-t border-black/5 pt-24">
            <h4 className="text-copper text-[10px] tracking-[0.25em] uppercase mb-16 font-bold font-sans text-center">The Ideal Partnership</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div className="space-y-12">
                <h3 className="text-4xl font-serif text-dark-text tracking-tight">Who I Work Best With</h3>
                <ul className="space-y-6 text-dark-secondary/70 font-light text-lg">
                  <li className="border-b border-black/[0.02] pb-4">Women ready to take their fitness seriously</li>
                  <li className="border-b border-black/[0.02] pb-4">Busy moms reclaiming their strength</li>
                  <li className="border-b border-black/[0.02] pb-4">Beginners who feel intimidated by the gym</li>
                  <li className="border-b border-black/[0.02] pb-4">Seekers of tone, lean muscle & confidence</li>
                  <li>Individuals who value structure & accountability</li>
                </ul>
              </div>
              <div className="bg-stone-50 p-12 border border-black/5 flex flex-col justify-center">
                <p className="text-2xl font-serif italic text-dark-text mb-8 leading-relaxed">
                  "If you’re looking for quick fixes, I may not be your trainer. But if you’re ready for transformation, we’ll work well together."
                </p>
                <Link to="/discovery" className="text-copper text-[10px] tracking-[0.4em] uppercase font-bold border-b border-copper/30 pb-2 w-fit hover:border-copper transition-all">
                  Secure Access to the Sanctuary
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA / Beyond the Gym */}
        <div className="mt-72 text-center reveal">
          <div className="max-w-3xl mx-auto py-32 border-y border-black/5 px-10">
            <h4 className="text-copper text-[10px] tracking-[0.25em] uppercase mb-12 font-bold font-sans">Beyond the Gym</h4>
            <p className="text-2xl font-serif italic text-dark-text mb-16 leading-relaxed">
              When I’m not coaching, I’m a mom first. That role has shaped how I train women—with empathy, strength, and realism. I understand busy schedules, exhaustion, and rebuilding.
            </p>
            <p className="text-dark-secondary/60 font-sans text-sm mb-20 tracking-wide uppercase font-medium">
              Ready to build a body that reflects your discipline?
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link to="/contact" className="px-16 py-8 border border-copper text-copper text-[10px] tracking-[0.5em] uppercase font-bold hover:bg-copper hover:text-white transition-all">
                Inquire Privately
              </Link>
              <Link to="/discovery" className="px-16 py-8 bg-near-black text-white text-[10px] tracking-[0.5em] uppercase font-bold hover:bg-copper transition-all">
                Begin Assessment
              </Link>
            </div>
            <div className="mt-12 text-[9px] tracking-[0.3em] uppercase opacity-30 font-bold font-sans">
              Your evolution begins with an intentional conversation.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
