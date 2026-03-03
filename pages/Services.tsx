
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
      img: "/assets/images/about-squat.jpg",
      options: ["1 on One", "Virtual", "Online", "Small Group"]
    },
    {
      title: "Pilates",
      positioning: "Control. Precision. Sculpted strength.",
      intro: "Pilates complement strength training by improving core stability, muscle control, flexibility, and postural strength. It enhances your overall performance and helps sculpt lean, defined muscle.",
      subheading: "Pilates Benefits",
      bullets: [
        "Core stability & Muscle control",
        "Flexibility & Range of motion",
        "Postural strength & alignment",
        "Injury prevention & recovery",
        "Muscle definition & sculpting"
      ],
      img: "/assets/images/about-lunge.jpg",
      extraSections: [
        {
          title: "Studio-Based Pilates",
          content: "Experience professional studio-based Pilates as part of your strength journey. Reformer Pilates enhances core stability, muscular control, posture, and movement precision, making it a powerful complement to structured strength training.",
          note: "Studio-based sessions are available as an additional investment separate from your primary training package. Studio rates apply accordingly."
        },
        {
          title: "Small Group Reformer Classes",
          content: "Small group sessions offer a focused, supportive environment while maintaining professional structure and progression. Ideal for those who enjoy shared energy while refining technique."
        },
        {
          title: "Private 1:1 Reformer Pilates",
          content: "For clients seeking maximum precision and accelerated results, private sessions provide individualized attention and detailed correction.",
          highlights: [
            "Personalized programming",
            "Deeper postural assessment",
            "Targeted core and sculpt work",
            "Faster technical progression"
          ],
          note: "Private sessions are particularly recommended for beginners, clients working through imbalances, or those wanting a more elevated and focused experience."
        }
      ],
      footerNote: "For optimal results, I recommend incorporating Reformer Pilates at least twice per week alongside your strength training. Consistency in both modalities enhances overall performance, control, and long-term results.",
      footerAlert: "Availability is limited and subject to studio scheduling."
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
    },
    {
      title: "1:1 Personal Training (In-Person)",
      positioning: "Focused. Hands-on. High accountability.",
      intro: "For women who want focused, hands-on coaching and serious accountability. This is my most personalized service, where every session is designed around your goals, your body, and your progression.",
      subheading: "What you can expect",
      bullets: [
        "Fully customized training program",
        "Proper form correction and technique coaching",
        "Structured programming",
        "Progress tracking and goal reviews",
        "High accountability and consistent support"
      ],
      img: "/assets/images/about-squat.jpg"
    },
    {
      title: "Virtual Personal Training",
      positioning: "Live coaching. Anywhere.",
      intro: "You receive real-time, face-to-face coaching without being physically present. This offers structure and accountability while allowing location flexibility, best for women who travel or prefer training at home.",
      subheading: "Includes",
      bullets: [
        "Live 1:1 video sessions",
        "Personalized strength programming",
        "Real-time feedback",
        "Progressive tracking",
        "Scheduled accountability"
      ],
      img: "/assets/images/virtual-training.png"
    },
    {
      title: "Online Coaching",
      positioning: "Structure and results with flexibility.",
      intro: "Online coaching allows you to train on your schedule while still receiving professional guidance and accountability. You train independently, but you are never alone.",
      subheading: "What's included",
      bullets: [
        "Customized training program",
        "Weekly check-ins",
        "Progress tracking",
        "Form review via video submissions",
        "Habit and mindset guidance",
        "Ongoing support and communication"
      ],
      img: "/assets/images/online-coaching.png"
    },
    {
      title: "Small Group Training",
      positioning: "Strength in community. Structure in every session.",
      intro: "Small group training combines the energy of a group environment with the intention of personal programming. Perfect for women who thrive in community but still want results-driven training.",
      subheading: "You can expect",
      bullets: [
        "Structured strength-focused sessions",
        "Limited group sizes for quality coaching",
        "Progressive programming",
        "A motivating, supportive environment",
        "Accountability and consistency"
      ],
      img: "/assets/images/small-group-training.png"
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
      <header className="pt-36 md:pt-48 pb-16 md:pb-24 reveal px-6 md:px-10 max-w-screen-xl mx-auto">
        <h4 className="text-copper text-[10px] tracking-[0.25em] uppercase mb-12 font-bold font-sans">My Offerings</h4>
        <h1 className="text-6xl md:text-9xl font-serif mb-16 leading-[0.9] tracking-tighter text-dark-text font-normal">
          SERVICES
        </h1>
      </header>

      {/* Service Blocks */}
      <div className="space-y-32 md:space-y-72 container mx-auto px-6 md:px-10 max-w-screen-xl">
        {serviceBlocks.map((service, index) => (
          <article key={index} className={`service-block flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-24 items-center`}>
            <div className="w-full lg:w-1/2 reveal">
              <div className="aspect-[4/5] bg-stone-100 border border-black/5 overflow-hidden shadow-2xl group rounded-3xl">
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
              <p className="service-intro text-dark-secondary/80 text-xl mb-12 font-light leading-[1.8] font-sans">
                {service.intro}
              </p>

              {service.options && (
                <div className="mb-12">
                  <h3 className="text-[10px] uppercase tracking-[0.25em] font-bold mb-6 text-black/20 font-sans">
                    Options Available
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {service.options.map((opt, i) => (
                      <span key={i} className="px-4 py-2 border border-copper/20 rounded-full text-[9px] tracking-[0.2em] uppercase font-bold text-copper/80 bg-copper/[0.02]">
                        {opt}
                      </span>
                    ))}
                  </div>
                </div>
              )}

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

              {service.extraSections && (
                <div className="space-y-16 mb-16 border-t border-black/5 pt-16">
                  {service.extraSections.map((section, si) => (
                    <div key={si} className="space-y-6">
                      <h4 className="text-xl font-serif text-dark-text italic font-medium">{section.title}</h4>
                      <p className="text-sm text-dark-secondary/70 leading-relaxed font-light">{section.content}</p>
                      {section.highlights && (
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                          {section.highlights.map((h, hi) => (
                            <li key={hi} className="flex items-center gap-3 text-xs text-dark-secondary/60">
                              <span className="w-1 h-1 bg-copper/30 rounded-full"></span>
                              {h}
                            </li>
                          ))}
                        </ul>
                      )}
                      {section.note && (
                        <p className="text-xs text-copper/60 italic font-light font-sans">{section.note}</p>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {service.footerNote && (
                <div className="mb-12 p-8 bg-stone-50 border-l border-copper/30">
                  <p className="text-sm text-dark-secondary/80 font-light leading-relaxed mb-4 italic">
                    {service.footerNote}
                  </p>
                  {service.footerAlert && (
                    <p className="text-[10px] uppercase tracking-widest font-bold text-copper/40">{service.footerAlert}</p>
                  )}
                </div>
              )}

              <a
                href="https://wa.me/263779261868"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border-b border-copper/30 pb-2 text-copper text-[10px] tracking-[0.5em] uppercase font-bold hover:text-dark-text hover:border-dark-text transition-all font-sans"
              >
                Inquire for Access
              </a>
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
            <a
              href="https://wa.me/263779261868"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full md:w-auto px-16 py-8 border border-copper text-copper text-[10px] tracking-[0.5em] uppercase font-bold hover:bg-copper hover:text-white transition-all text-center"
            >
              Private Inquiry
            </a>
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
