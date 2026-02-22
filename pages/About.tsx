
import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="bg-white pt-56 md:pt-[420px] pb-60 min-h-screen">
      <div className="max-w-screen-xl mx-auto px-10">
        {/* Header */}
        <div className="max-w-4xl mb-48 reveal">
          <h4 className="text-copper text-[10px] tracking-[0.6em] uppercase mb-12 font-bold font-sans">The Architect</h4>
          <h1 className="text-7xl md:text-[110px] font-serif mb-16 leading-[0.95] tracking-tight text-dark-text font-normal">
            TSITSI <span className="font-light text-dark-secondary italic">MAPOSA.</span>
          </h1>
          <p className="text-2xl text-dark-secondary/60 font-sans font-light leading-relaxed max-w-2xl">
            I don’t just train bodies; I architect resilience. Helping high-performing women reclaim their power through foundational strength and intentional movement.
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-start mb-72">
          <div className="lg:col-span-7 space-y-24">
            <div className="reveal overflow-hidden aspect-[16/9] bg-stone-100 border border-black/5 shadow-2xl">
               <img 
                 src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1400" 
                 className="w-full h-full object-cover opacity-60 grayscale transition-all duration-[2s]" 
                 alt="Foundational Strength" 
               />
            </div>
            <div className="reveal max-w-2xl" style={{ transitionDelay: '200ms' }}>
              <h2 className="text-4xl md:text-6xl font-serif mb-12 text-dark-text tracking-tight font-light">
                Dismantling the <br/><span className="text-copper">"smaller is better"</span> narrative.
              </h2>
              <div className="space-y-10 text-dark-secondary/70 text-lg leading-relaxed font-sans font-light">
                <p>
                  I am here to help you build a body that isn't just aesthetic, but capable—a body that serves as the cornerstone of your most confident life. My approach is rooted in the master of mechanics, ensuring that your evolution is as safe as it is transformative.
                </p>
                <p>
                  As a certified specialist with over a decade in the field, I understand the weight of balancing professional ambitions with personal wellness. We build protocols, not restrictions, designed to fuel your cognitive and physical performance.
                </p>
              </div>
              <div className="mt-16 pt-10 border-t border-black/5">
                <Link to="/discovery" className="px-12 py-6 bg-copper text-white text-[10px] tracking-[0.5em] uppercase font-bold hover:bg-near-black transition-all shadow-xl shadow-copper/20">
                  Begin Your Discovery
                </Link>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 reveal" style={{ transitionDelay: '400ms' }}>
             <div className="aspect-[3/4] overflow-hidden bg-stone-100 border border-black/5 mb-12 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1000" 
                  className="w-full h-full object-cover grayscale opacity-80" 
                  alt="Tsitsi Maposa - Founder" 
                />
             </div>
             <div className="border-l border-copper pl-8 mb-12">
               <p className="text-dark-text font-serif text-2xl italic mb-4">"Expect a coach who respects your time as much as your potential."</p>
               <p className="text-dark-secondary/40 text-[10px] tracking-[0.4em] uppercase font-bold font-sans">
                 Certified CPT • Harare
               </p>
             </div>
             <div className="space-y-8 pt-10">
               <h5 className="text-[10px] uppercase tracking-[0.5em] font-bold text-copper">Qualifications</h5>
               <ul className="space-y-4 text-sm font-light text-dark-secondary/60">
                 <li>• National Academy of Sports Medicine (NASM) CPT</li>
                 <li>• Women's Fitness Specialist (WFS)</li>
                 <li>• Pre- & Postnatal Performance Protocol</li>
                 <li>• 10+ Years Performance Coaching</li>
               </ul>
             </div>
          </div>
        </div>

        {/* Pillars Gallery */}
        <div className="reveal">
          <h4 className="text-copper text-[10px] tracking-[0.8em] uppercase mb-20 font-bold font-sans text-center">The Ledger of Intent</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {[
              { 
                idx: "01", 
                title: "Longevity", 
                desc: "We train for the woman you will be in twenty years, not just twenty days.", 
                img: "https://images.unsplash.com/photo-1552196564-972b49916d42?auto=format&fit=crop&q=80&w=800"
              },
              { 
                idx: "02", 
                title: "Precision", 
                desc: "Movement is a skill. We master the mechanics before we add the load.", 
                img: "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?auto=format&fit=crop&q=80&w=800"
              },
              { 
                idx: "03", 
                title: "Power", 
                desc: "Strength is a feeling that starts in the gym and ends in how you lead.", 
                img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800"
              },
              { 
                idx: "04", 
                title: "Permanence", 
                desc: "Building results that stay through radical sustainability.", 
                img: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=800"
              }
            ].map((value, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="aspect-[4/5] overflow-hidden bg-stone-100 mb-10 border border-black/5 shadow-lg group-hover:shadow-2xl transition-all duration-700">
                   <img 
                     src={value.img} 
                     className="w-full h-full object-cover grayscale opacity-50 transition-all duration-[1.5s] group-hover:opacity-80 group-hover:scale-110" 
                     alt={value.title} 
                   />
                </div>
                <span className="text-copper font-serif text-3xl block mb-6 font-light">{value.idx}</span>
                <h3 className="text-2xl font-serif mb-4 text-dark-text tracking-tight font-normal">{value.title}</h3>
                <p className="text-dark-secondary/50 font-sans font-light leading-relaxed text-sm">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-72 text-center reveal">
          <div className="max-w-3xl mx-auto py-32 border-y border-black/5 px-10">
            <h4 className="text-copper text-[10px] tracking-[0.8em] uppercase mb-12 font-bold">Beyond the Gym</h4>
            <p className="text-2xl font-serif italic text-dark-text mb-16 leading-relaxed">
              Outside the studio, I am a mother of one, a seeker of quiet luxury, and a firm believer that strength is the fuel for your family’s legacy.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
               <Link to="/contact" className="px-16 py-8 border border-copper text-copper text-[10px] tracking-[0.5em] uppercase font-bold hover:bg-copper hover:text-white transition-all">
                  Inquire Privately
               </Link>
               <Link to="/discovery" className="px-16 py-8 bg-near-black text-white text-[10px] tracking-[0.5em] uppercase font-bold hover:bg-copper transition-all">
                  Secure Access
               </Link>
            </div>
            <div className="mt-12 text-[9px] tracking-[0.3em] uppercase opacity-30 font-bold">Your evolution begins with an intentional conversation.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
