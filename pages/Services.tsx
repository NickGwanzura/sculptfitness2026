
import React from 'react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  const serviceBlocks = [
    {
      title: "Strength Training",
      positioning: "Foundational. Longevity-focused.",
      intro: "An intentional approach to resistance training designed for bone density, metabolic vitality, and a confidently sculpted physique.",
      subheading: "What you can expect",
      bullets: [
        "Structural Integrity and skeletal support",
        "Hormonal health and metabolic optimization",
        "Joint resilience for life-long mobility",
        "Compound movements mastered with precision"
      ],
      img: "/assets/images/about-squat.jpg"
    },
    {
      title: "Pilates",
      positioning: "The art of anatomical precision.",
      intro: "Connect to your core through the lens of modern science. My sessions focus on alignment, breathwork, and deep functional control.",
      subheading: "Includes",
      bullets: [
        "Spinal health and postural alignment",
        "Deep core fluidity and abdominal strength",
        "Mindful coordination and breath mastery",
        "Low-impact, high-intensity functional control"
      ],
      img: "/assets/images/about-lunge.jpg"
    },
    {
      title: "Wellness Nutrition",
      positioning: "Sustainable habits without noise.",
      intro: "Ditch the restriction. I offer culturally resonant, nutrient-dense planning tailored to the demands of a high-performance lifestyle.",
      subheading: "Best for",
      bullets: [
        "Cognitive clarity and mental performance",
        "Sustained energy without midday crashes",
        "Gut vitality and inflammation reduction",
        "Seamless integration into busy professional routines"
      ],
      img: "/assets/images/healthy-meal.png"
    },
    {
      title: "Corporate Wellness",
      positioning: "Performance for Professionals.",
      intro: "I offer structured corporate wellness experiences designed to improve posture, reduce workplace fatigue, and enhance physical performance for professionals balancing demanding careers and full lives.",
      subheading: "Key Focus Areas",
      bullets: [
        "Mobility and posture refinement",
        "Workplace fatigue reduction",
        "Injury prevention and sustainable movement habits",
        "Customised packages for team wellness objectives"
      ],
      img: "/assets/images/corporate-wellness.jpg"
    },
    {
      title: "Wellness Programs",
      positioning: "Longevity. Hormonal Health.",
      intro: "Comprehensive longevity protocols designed for the unique hormonal and physical transitions of womanhood. We focus on long-term vitality through evidence-based movement.",
      subheading: "Focus Areas",
      bullets: [
        "Hormonal balance support",
        "Menopausal transition mobility",
        "Bone density and metabolic health",
        "Life-stage specific programming"
      ],
      img: "/assets/images/apparel-identity-1.jpg"
    }
  ];

  const steps = [
    { num: "01", title: "Discovery", desc: "Complete the Ledger to align our vision for your evolution." },
    { num: "02", title: "Assessment", desc: "A personal movement and biomechanical analysis held in our studio space." },
    { num: "03", title: "Programming", desc: "Drafting your bespoke strength and longevity protocol." },
    { num: "04", title: "Implementation", desc: "Guided sessions prioritizing anatomical integrity and precision." },
    { num: "05", title: "Longevity", desc: "Ongoing refinement to support your evolving seasons of life." }
  ];

  return (
    <div className="services-section bg-white min-h-screen pb-60">
      {/* Section Wrapper */}
      <header className="pt-24 md:pt-48 pb-16 md:pb-24 reveal px-6 md:px-10 max-w-screen-xl mx-auto">
        <h4 className="text-copper text-[10px] tracking-[0.25em] uppercase mb-12 font-bold font-sans">My Offerings</h4>
        <h1 className="text-6xl md:text-9xl font-serif mb-16 leading-[0.9] tracking-tighter text-dark-text font-normal">
          SERVICES
        </h1>
        <p className="text-2xl text-dark-secondary/80 font-light leading-[1.8] max-w-2xl font-sans">
          Training designed for real results. My private sessions are rituals of transformation, tailored for the unique seasons of a woman’s life.
        </p>
      </header>

      {/* Service Blocks */}
      <div className="space-y-32 md:space-y-72 container mx-auto px-6 md:px-10 max-w-screen-xl">
        {serviceBlocks.map((service, index) => (
          <article key={index} className={`service-block flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-24 items-center`}>
            <div className="w-full lg:w-1/2 reveal">
              <div className="aspect-[4/5] bg-stone-100 border border-black/5 overflow-hidden shadow-2xl group">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover transition-all duration-[3s] group-hover:scale-105 opacity-60 grayscale group-hover:opacity-90 group-hover:grayscale-0"
                />
              </div>
            </div>

            <div className="w-full lg:w-1/2 reveal" style={{ transitionDelay: '300ms' }}>
              <h2 className="service-title text-5xl md:text-7xl font-serif mb-6 tracking-tighter text-dark-text font-normal">
                {service.title}
              </h2>
              <p className="text-copper text-2xl mb-12 font-light font-serif italic">
                <strong>{service.positioning}</strong>
              </p>
              <p className="service-intro text-dark-secondary/80 text-xl mb-16 font-light leading-[1.8] font-sans">
                {service.intro}
              </p>

              <div className="service-list mb-16">
                <h3 className="text-[10px] uppercase tracking-[0.25em] font-bold mb-10 text-black/20 font-sans">
                  {service.subheading}
                </h3>
                <ul className="space-y-6">
                  {service.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start text-sm tracking-[0.05em] font-light text-dark-secondary font-sans">
                      <span className="w-1.5 h-1.5 bg-copper rounded-full mr-6 mt-1.5 shrink-0"></span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                to="/contact"
                className="inline-block border-b border-copper/30 pb-2 text-copper text-[10px] tracking-[0.5em] uppercase font-bold hover:text-dark-text hover:border-dark-text transition-all font-sans"
              >
                Inquire for Access
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* Transformation Process */}
      <section className="transformation-steps mt-40 md:mt-80 py-40 bg-stone-50 border-y border-black/5">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10">
          <div className="text-center mb-32 reveal">
            <h4 className="text-copper text-[10px] tracking-[0.25em] uppercase mb-8 font-bold font-sans">The Process</h4>
            <h2 className="text-4xl md:text-6xl font-serif text-dark-text tracking-tight font-light">The Path to Evolution</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 lg:gap-8">
            {steps.map((step, i) => (
              <div key={i} className="reveal relative group" style={{ transitionDelay: `${i * 150}ms` }}>
                <div className="mb-8 flex items-end gap-4">
                  <span className="text-5xl font-serif text-copper/20 group-hover:text-copper transition-colors duration-700">{step.num}</span>
                  <div className="h-[1px] flex-grow bg-black/5 mb-2 hidden md:block"></div>
                </div>
                <h3 className="text-2xl font-serif mb-6 text-dark-text font-normal">{step.title}</h3>
                <p className="text-dark-secondary/50 text-sm leading-relaxed font-light font-sans">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services CTA Section */}
      <section className="services-cta mt-40 md:mt-80 text-center reveal px-6">
        <div className="max-w-4xl mx-auto py-32 border border-black/5 bg-stone-50/50 backdrop-blur-sm rounded-3xl px-10 shadow-2xl shadow-copper/5">
          <h4 className="text-copper text-[10px] tracking-[0.25em] uppercase mb-12 font-bold font-sans">Your evolution begins now.</h4>
          <p className="text-3xl md:text-5xl font-serif text-dark-text mb-16 leading-tight tracking-tight">
            Ready to reclaim your strength <br />and move with intention?
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-6">
            <Link
              to="/discovery"
              className="w-full md:w-auto px-16 py-8 bg-copper text-white text-[10px] tracking-[0.5em] uppercase font-bold hover:bg-near-black transition-all shadow-xl shadow-copper/20"
            >
              Start Discovery Session
            </Link>
            <Link
              to="/contact"
              className="w-full md:w-auto px-16 py-8 border border-copper text-copper text-[10px] tracking-[0.5em] uppercase font-bold hover:bg-copper hover:text-white transition-all"
            >
              Private Inquiry
            </Link>
            <Link
              to="/askana"
              className="w-full md:w-auto px-16 py-8 bg-near-black text-white text-[10px] tracking-[0.5em] uppercase font-bold hover:bg-copper transition-all"
            >
              Askana Waiting List
            </Link>
          </div>
          <p className="mt-12 text-[9px] tracking-[0.4em] uppercase opacity-30 font-bold font-sans">
            Limited private sessions available in my studio.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Services;
