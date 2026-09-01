import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const interval = 20;
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const currentProgress = Math.min(Math.round((currentStep / steps) * 100), 100);
      setProgress(currentProgress);
      if (currentStep >= steps) {
        clearInterval(timer);
        setTimeout(onComplete, 100);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div className="preloader" exit={{ opacity: 0 }} transition={{ duration: 1.2 }}>
      <motion.div className="curtain-left" exit={{ x: '-100%' }} transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }} />
      <motion.div className="curtain-right" exit={{ x: '100%' }} transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }} />
      <motion.div className="preloader-content" exit={{ opacity: 0, scale: 0.8 }} transition={{ duration: 0.5 }}>
        <div className="preloader-text">ADARSH KUMAR</div>
        <div className="preloader-counter">{progress}%</div>
      </motion.div>
    </motion.div>
  );
};

export default Preloader;
