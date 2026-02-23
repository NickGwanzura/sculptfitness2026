
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
  "https://lh3.googleusercontent.com/d/1BfzcOG1khoqmxPqWIH1Q7nN8Wi3Wjgbn",
  "https://lh3.googleusercontent.com/d/1nHAsy6PBulmdJU3S-iJpUZBj05u6PtZc"
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
      title: "Personal Training",
      desc: "One-on-one sessions prioritizing anatomy, precision, and foundational strength for the decades ahead.",
      img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Nutrition Coaching",
      desc: "Culturally resonant, nutrient-dense planning tailored to the cognitive and physical demands of high-performance living.",
      img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Wellness Programs",
      desc: "Comprehensive longevity protocols designed for the unique hormonal and physical transitions of womanhood.",
      img: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800",
    },
    {
      title: "Mindful Movement",
      desc: "A blend of classical pilates and functional mobility to foster deep coordination and spinal resilience.",
      img: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=800",
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
          <div className="max-w-2xl animate-fade-up text-left">
            <span className="inline-block px-5 py-2 rounded-full bg-copper/10 border border-copper/30 text-copper text-[10px] font-bold uppercase tracking-[0.4em] mb-8 backdrop-blur-md">
              Limited Private Access
            </span>
            <h1 className="text-[clamp(2.5rem,8vw,4.5rem)] md:text-[clamp(4rem,7vw,6.5rem)] font-serif leading-[0.95] text-white tracking-tighter font-normal mb-8">
              Strength & Wellness, <br />
              <span className="font-light text-copper italic">Redefined.</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed font-sans font-light max-w-lg mb-12 drop-shadow-sm">
              A private space where longevity meets lifestyle. Empowering modern women across all seasons of life to move with anatomical precision and radical intention.
            </p>

            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8 w-full sm:w-auto">
              <Link
                to="/contact"
                className="group relative bg-copper w-full sm:w-auto px-12 lg:px-16 py-5 text-[11px] tracking-[0.5em] uppercase font-bold overflow-hidden transition-all duration-700 text-center shadow-2xl shadow-copper/20"
              >
                <span className="relative z-10 text-white transition-colors">Book a Session</span>
                <div className="absolute inset-0 w-0 bg-near-black transition-all duration-700 ease-expo group-hover:w-full"></div>
              </Link>
              <Link
                to="/services"
                className="group relative px-10 py-3 text-[11px] tracking-[0.5em] uppercase font-bold text-white hover:text-copper transition-all duration-500 text-center w-full sm:w-auto"
              >
                <span className="relative z-10">Explore Offerings</span>
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-copper group-hover:w-full transition-all duration-700"></span>
              </Link>
            </div>
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
      <section className="py-32 md:py-60 bg-white border-t border-black/5">
        <div className="max-w-screen-xl mx-auto px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-40 items-center">
            <div className="lg:col-span-7 reveal order-2 lg:order-1 text-center lg:text-left">
              <h4 className="text-copper text-[10px] tracking-[0.25em] uppercase mb-10 font-bold">Our Intent</h4>
              <h2 className="text-4xl md:text-8xl font-serif mb-10 leading-[1.1] tracking-tight text-dark-text">
                Wellness is an <br /><span className="font-light text-copper italic">intentional rhythm.</span>
              </h2>
              <p className="text-dark-secondary/80 leading-relaxed md:leading-[2] text-lg md:text-xl font-light max-w-2xl mx-auto lg:mx-0">
                We believe strength looks different at every stage. We honor the nuances of your body’s unique transition through professional grace and modern movement.
              </p>
            </div>
            <div className="lg:col-span-5 reveal order-1 lg:order-2">
              <div className="aspect-[4/5] bg-stone-100 overflow-hidden relative shadow-2xl shadow-copper/5">
                <img
                  src="https://lh3.googleusercontent.com/d/10sNsej_8yHHaK7QmMletlK0Q293JkgT4"
                  alt="Intentional Rhythm"
                  className="w-full h-full object-cover grayscale transition-all duration-[3s] hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Service Cards Section */}
      <section className="py-32 md:py-52 bg-white">
        <div className="max-w-screen-xl mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8 reveal">
            <div className="max-w-xl text-center md:text-left">
              <h4 className="text-copper text-[10px] tracking-[0.25em] uppercase mb-8 font-bold">Select Offerings</h4>
              <h2 className="text-4xl md:text-6xl font-serif text-dark-text leading-[1.1]">Curated for the art <br />of evolution.</h2>
            </div>
            <Link to="/services" className="text-[10px] tracking-[0.5em] uppercase font-bold border-b border-copper/30 pb-2 hover:border-copper transition-all inline-block w-fit mx-auto md:mx-0">
              View All Services
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="group relative bg-stone-50/50 backdrop-blur-md rounded-2xl border border-black/5 p-8 flex flex-col h-full transition-all duration-700 hover:shadow-2xl hover:-translate-y-2 reveal"
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
      <section className="relative py-32 md:py-80 text-center overflow-hidden">
        {/* Background Image & Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://lh3.googleusercontent.com/d/153OYMxFevmBoyqnd_2JZpe-42L4Ersg_"
            alt="Evolution Gallery"
            className="w-full h-full object-cover grayscale brightness-[0.35]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-near-black/70 via-copper/15 to-near-black/90"></div>
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
