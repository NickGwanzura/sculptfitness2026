
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Logo from '../components/Logo';

const SLIDES = [
  "/images/hero/slide-01.jpg",
  "/images/hero/slide-02.jpg",
  "/images/hero/slide-03.jpg",
  "/images/hero/slide-04.jpg",
  "/images/hero/slide-05.jpg"
];

// High-quality brand assets from Google Drive
const FALLBACK_SLIDES = [
  "/assets/images/hero-plank.jpg",
  "/assets/images/apparel-wrapper.jpg",
  "/assets/images/apparel-identity-2.jpg"
];

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<number | null>(null);

  const slidesToUse = FALLBACK_SLIDES; // Using provided brand assets

  const handleNext = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slidesToUse.length);
  }, [slidesToUse.length]);

  const handlePrev = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slidesToUse.length) % slidesToUse.length);
  }, [slidesToUse.length]);

  // Slideshow Logic: Auto-rotate + Page Visibility + Hover Pause
  useEffect(() => {
    const startTimer = () => {
      if (timerRef.current) clearInterval(timerRef.current);
      timerRef.current = window.setInterval(() => {
        if (!isPaused && document.visibilityState === 'visible') {
          handleNext();
        }
      }, 6000);
    };

    const stopTimer = () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };

    const handleVisibilityChange = () => {
      if (document.hidden) stopTimer();
      else startTimer();
    };

    startTimer();
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      stopTimer();
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [handleNext, isPaused]);

  // Keyboard Support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev]);

  const services = [
    {
      title: "Strength Training",
      desc: "One-on-one sessions prioritizing anatomy, precision, and foundational strength for the decades ahead.",
      img: "/assets/images/about-lunge.jpg",
    },
    {
      title: "Pilates",
      desc: "A blend of mindful movement and functional mobility to foster deep coordination and spinal resilience.",
      img: "/assets/images/about-squat.jpg",
    },
    {
      title: "Wellness Nutrition",
      desc: "Culturally resonant, nutrient-dense planning tailored to the cognitive and physical demands of high-performance living.",
      img: "/assets/images/healthy-meal.png",
    },
    {
      title: "Wellness Programs",
      desc: "Comprehensive longevity protocols designed for the unique hormonal and physical transitions of womanhood.",
      img: "/assets/images/apparel-identity-1.jpg",
    },
    {
      title: "Corporate Wellness",
      desc: "Performance for professionals. Mobility, posture refinement, and sustainable movement habits for the workplace.",
      img: "/assets/images/corporate-wellness.jpg",
    }
  ];

  return (
    <div className="bg-white selection:bg-copper selection:text-white min-h-screen transition-colors duration-700 overflow-x-hidden">
      {/* Premium Hero Section */}
      <section
        className="relative h-screen min-h-[700px] w-full overflow-hidden flex flex-col justify-center"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        aria-roledescription="carousel"
        aria-label="Studio Hero Gallery"
      >
        {/* Full-Width Background Slideshow */}
        <div className="absolute inset-0 z-0">
          {slidesToUse.map((slide, index) => (
            <div
              key={slide}
              className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
            >
              <img
                src={slide}
                alt=""
                className={`h-full w-full object-cover grayscale-[10%] brightness-[0.75] transition-transform duration-[10s] ease-linear ${index === currentSlide ? 'scale-105' : 'scale-100'}`}
              />
              {/* Refined Overlays */}
              <div className="absolute inset-0 bg-near-black/20" />
              <div className="absolute inset-0 bg-gradient-to-r from-near-black/80 via-near-black/20 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-near-black/80 via-transparent to-transparent" />
            </div>
          ))}
        </div>

        {/* Hero Content */}
        <div className="relative z-20 max-w-screen-xl mx-auto px-6 xs:px-10 md:px-12 w-full pt-12 md:pt-20 lg:pt-0">
          <div className="flex flex-col items-center text-center animate-fade-up">
            <Logo className="h-40 md:h-[30rem] mb-12 opacity-100 brightness-[100] invert-0" variant="light" />
            <h1 className="text-[clamp(1.5rem,4vw,2.5rem)] font-serif text-white/90 tracking-[0.4em] uppercase font-light">
              Strength & Wellness Redefined
            </h1>
          </div>
        </div>

        {/* Desktop Controls: Arrows */}
        <div className="hidden lg:flex absolute bottom-24 right-12 z-30 gap-4">
          <button
            onClick={handlePrev}
            className="p-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-white hover:bg-white hover:text-near-black transition-all duration-500"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="p-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-white hover:bg-white hover:text-near-black transition-all duration-500"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Indicators */}
        <div className="absolute bottom-12 left-6 xs:left-10 md:left-12 z-30 flex gap-4 items-center">
          <div className="flex gap-2">
            {slidesToUse.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-0.5 transition-all duration-700 rounded-full ${idx === currentSlide ? 'w-12 bg-copper' : 'w-6 bg-white/30 hover:bg-white/50'
                  }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
          <span className="ml-4 font-sans text-[10px] tracking-[0.4em] text-white/40 font-bold uppercase">
            0{currentSlide + 1} / 0{slidesToUse.length}
          </span>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 md:py-60 bg-white border-t border-black/5">
        <div className="max-w-screen-xl mx-auto px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
            <div className="reveal order-2 lg:order-1 text-center lg:text-left">
              <h4 className="text-copper text-[10px] tracking-[0.25em] uppercase mb-10 font-bold">My Intent</h4>
              <h2 className="text-4xl md:text-8xl font-serif mb-10 leading-[1.1] tracking-tight text-dark-text">
                Empowering women <br /><span className="font-light text-copper italic">across all seasons of life.</span>
              </h2>
              <p className="text-dark-secondary/80 leading-relaxed md:leading-[2] text-lg md:text-xl font-light max-w-2xl mx-auto lg:mx-0">
                I believe strength looks different at every stage. I honor the nuances of your body’s unique transition through professional grace, and intentional movement.
              </p>
            </div>
            <div className="reveal order-1 lg:order-2">
              <div className="aspect-[3/4] md:aspect-square bg-stone-100 overflow-hidden relative shadow-2xl shadow-copper/5">
                <img
                  src="/assets/images/about-squat.jpg"
                  alt="Intentional Rhythm"
                  className="w-full h-full object-cover grayscale transition-all duration-[3s] hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Service Cards Section */}
      <section className="py-20 md:py-52 bg-white relative overflow-hidden">
        {/* Background Watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-serif text-black/[0.02] select-none pointer-events-none tracking-tighter leading-none whitespace-nowrap hidden lg:block uppercase">
          Sculpt Wellness
        </div>
        <div className="max-w-screen-xl mx-auto px-6 md:px-10 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8 reveal">
            <div className="max-w-xl text-center md:text-left">
              <h4 className="text-copper text-[10px] tracking-[0.25em] uppercase mb-8 font-bold">Select Offerings</h4>
              <h2 className="text-4xl md:text-6xl font-serif text-dark-text leading-[1.1]">The art of <br />evolution.</h2>
            </div>
            <Link to="/services" className="text-[10px] tracking-[0.5em] uppercase font-bold border-b border-copper/30 pb-2 hover:border-copper transition-all inline-block w-fit mx-auto md:mx-0">
              View All Services
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="group relative bg-stone-50/50 backdrop-blur-md rounded-2xl border border-black/5 p-8 flex flex-col h-full transition-all duration-700 hover:shadow-2xl hover:-translate-y-2 reveal z-10"
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                <div className="absolute top-0 left-0 w-full h-[2px] bg-copper scale-x-0 transition-transform duration-700 group-hover:scale-x-100 origin-left"></div>

                <div className="aspect-[3/4] mb-10 overflow-hidden rounded-xl bg-stone-100 border border-black/5">
                  <img
                    src={service.img}
                    alt={service.title}
                    className="w-full h-full object-cover grayscale transition-all duration-[2s] group-hover:grayscale-0 group-hover:scale-110"
                  />
                </div>

                <h3 className="text-2xl md:text-3xl font-serif text-dark-text mb-6 group-hover:text-copper transition-colors duration-500 font-normal">
                  {service.title}
                </h3>

                <p className="text-dark-secondary/60 text-sm leading-relaxed font-light mb-8 flex-grow">
                  {service.desc}
                </p>

                <div className="flex items-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <span className="h-[1px] w-8 bg-copper"></span>
                  <span className="text-[9px] tracking-[0.4em] uppercase font-bold text-copper">Learn More</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call */}
      <section className="relative py-20 md:py-80 text-center overflow-hidden bg-stone-100">
        {/* Background Image & Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/private-studio-bg.png"
            alt="Wellness Studio"
            className="w-full h-full object-cover brightness-[0.6] opacity-90 transition-all duration-[3s]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-text/40 via-transparent to-dark-text/80"></div>
        </div>

        <div className="max-w-screen-xl mx-auto px-10 relative z-10 reveal">
          <div className="flex justify-center mb-10 opacity-60 grayscale brightness-[300%]">
            <Logo className="h-20 md:h-52" />
          </div>
          <h2 className="text-4xl md:text-[90px] font-serif mb-16 leading-[1.1] tracking-tight text-white drop-shadow-2xl px-4">
            Your evolution <br />begins in private.
          </h2>
          <Link
            to="/contact"
            className="inline-block border border-copper text-copper px-12 py-5 md:py-8 text-[11px] md:text-[12px] tracking-[0.6em] uppercase font-bold hover:bg-copper hover:text-white transition-all duration-1000 backdrop-blur-md bg-white/5"
          >
            Inquire Privately
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
