
import React, { lazy, Suspense, useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';
import SmoothScroll from './components/ui/SmoothScroll';
import CustomCursor from './components/ui/CustomCursor';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Askana = lazy(() => import('./pages/Askana'));
const Contact = lazy(() => import('./pages/Contact'));
const Discovery = lazy(() => import('./pages/Discovery'));
const AdminDashboard = lazy(() => import('./pages/AdminDashboard'));

const ScrollEffects = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.reveal');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollEffects />
      <SmoothScroll>
        <div className="flex flex-col min-h-screen bg-white transition-colors duration-700">
          <a href="#main-content" className="skip-link">Skip to main content</a>
          <CustomCursor />
          <Navbar />
          <main id="main-content" className="flex-grow" tabIndex={-1}>
            <Suspense fallback={<div className="min-h-screen bg-white" aria-label="Loading" />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/askana" element={<Askana />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/discovery" element={<Discovery />} />
                <Route path="/admin" element={<AdminDashboard />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
          <WhatsAppWidget />
        </div>
      </SmoothScroll>
    </HashRouter>
  );
};

export default App;
