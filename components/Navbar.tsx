
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Instagram, Facebook, MapPin, X, Menu } from 'lucide-react';
import Logo from './Logo';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isHeroPage = location.pathname === '/' || location.pathname === '/askana';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Apparel', path: '/askana' },
    { name: 'Contact', path: '/contact' },
  ];

  const isDarkText = isScrolled || !isHeroPage;
  const logoVariant = isDarkText ? 'dark' : 'light';

  return (
    <nav className={`fixed w-full top-0 left-0 z-[1000] transition-all duration-700 ease-out ${isScrolled
      ? 'bg-white/95 backdrop-blur-xl py-4 border-b border-black/[0.05] shadow-sm'
      : 'bg-transparent py-6 lg:py-8'
      }`}>
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link
          to="/"
          className="relative z-[1100] transition-all duration-1000 hover:opacity-70"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <Logo
            variant={isMobileMenuOpen ? 'dark' : logoVariant}
            className={`${isScrolled ? "h-14 lg:h-16" : "h-20 lg:h-24"}`}
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-14">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-[11px] tracking-[0.25em] uppercase font-bold transition-all duration-500 hover:text-copper relative group ${location.pathname === link.path
                ? 'text-copper'
                : isDarkText ? 'text-dark-text' : 'text-white'
                }`}
            >
              {link.name}
              <span className={`absolute -bottom-1.5 left-0 w-0 h-[1px] bg-copper/40 transition-all duration-500 group-hover:w-full ${location.pathname === link.path ? 'w-full' : ''}`}></span>
            </Link>
          ))}

          <Link
            to="/discovery"
            className={`px-8 py-3.5 text-[11px] tracking-[0.25em] uppercase font-bold transition-all duration-700 ${isDarkText
              ? 'bg-near-black text-white hover:bg-copper shadow-xl shadow-black/5'
              : 'bg-white text-near-black hover:bg-copper hover:text-white'
              }`}
          >
            Start Assessment
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden relative z-[1100] w-10 h-10 flex items-center justify-center focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close Menu" : "Open Menu"}
        >
          <div className="w-5 h-4 flex flex-col justify-between items-end">
            <span className={`h-[1px] transition-all duration-500 ${isMobileMenuOpen ? 'bg-dark-text w-5 rotate-45 translate-y-[7.5px]' : `${isDarkText ? 'bg-dark-text' : 'bg-white'} w-5`}`}></span>
            <span className={`h-[1px] transition-all duration-500 ${isMobileMenuOpen ? 'opacity-0' : `${isDarkText ? 'bg-dark-text' : 'bg-white'} w-3`}`}></span>
            <span className={`h-[1px] transition-all duration-500 ${isMobileMenuOpen ? 'bg-dark-text w-5 -rotate-45 -translate-y-[7.5px]' : `${isDarkText ? 'bg-dark-text' : 'bg-white'} w-4`}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white z-[1050] transition-all duration-[800ms] ease-expo ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}>
        <div className="h-full flex flex-col pt-40 pb-12 px-10 md:px-20">
          <div className="flex flex-col items-start space-y-8">
            {navLinks.map((link, idx) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-5xl md:text-7xl font-serif tracking-tight leading-none transition-all duration-1000 ${isMobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                  } ${location.pathname === link.path ? 'text-copper italic' : 'text-dark-text hover:text-copper'}`}
                style={{ transitionDelay: `${idx * 100 + 200}ms` }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className={`mt-12 transition-all duration-1000 ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '600ms' }}>
            <Link
              to="/discovery"
              className="inline-block px-12 py-6 bg-copper text-white text-[11px] tracking-[0.4em] uppercase font-bold shadow-2xl shadow-copper/20"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Begin Assessment
            </Link>
          </div>

          <div className="mt-auto grid grid-cols-2 gap-10 border-t border-black/[0.05] pt-12">
            <div className={`transition-all duration-1000 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '700ms' }}>
              <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-copper block mb-4">Location</span>
              <p className="text-sm text-dark-secondary/60 font-light leading-relaxed">Private Sanctuary<br />Harare, ZW</p>
            </div>
            <div className={`transition-all duration-1000 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '800ms' }}>
              <span className="text-[10px] tracking-[0.2em] uppercase font-bold text-copper block mb-4">Connect</span>
              <div className="flex gap-6">
                <Instagram className="w-5 h-5 text-dark-text" />
                <Facebook className="w-5 h-5 text-dark-text" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
