import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Lenis from '@studio-freight/lenis';
import { HelmetProvider } from 'react-helmet-async';
import './index.css';

import Preloader from './components/Preloader';
import PageTransition from './components/PageTransition';

import HomePage from './pages/HomePage';
import WorksPage from './pages/WorksPage';
import CertificationsPage from './pages/CertificationsPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <HelmetProvider>
      <AnimatePresence mode="wait">
        {loading ? (
          <Preloader key="preloader" onComplete={() => setLoading(false)} />
        ) : (
          <motion.div key="main-content" className="main-content-wrapper">
            <AnimatePresence mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<PageTransition><HomePage /></PageTransition>} />
                <Route path="/works" element={<PageTransition><WorksPage /></PageTransition>} />
                <Route path="/certifications" element={<PageTransition><CertificationsPage /></PageTransition>} />
                <Route path="*" element={<PageTransition><NotFoundPage /></PageTransition>} />
              </Routes>
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </HelmetProvider>
  );
}

export default App;
