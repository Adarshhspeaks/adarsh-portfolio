import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Marquee = () => {
  const marqueeRef = useRef(null);
  
  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add("(min-width: 320px)", () => {
      let direction = 1;
      const marqueeElement = marqueeRef.current;
      
      const tl = gsap.to(marqueeElement, {
        xPercent: -50,
        repeat: -1,
        duration: 20,
        ease: "none"
      }).totalProgress(0.5);

      ScrollTrigger.create({
        trigger: document.body,
        start: 0,
        end: "max",
        onUpdate: (self) => {
          if (self.direction !== direction) {
            direction = self.direction;
            gsap.to(tl, { timeScale: direction, overwrite: true });
          }
        }
      });
    });
  }, { scope: marqueeRef });

  return (
    <div className="marquee-container theme-dark">
      <div className="marquee-content" ref={marqueeRef}>
        <span>AVAILABLE FOR FREELANCE • FULL STACK DEVELOPER • WEB3 ENTHUSIAST • </span>
        <span>AVAILABLE FOR FREELANCE • FULL STACK DEVELOPER • WEB3 ENTHUSIAST • </span>
        <span>AVAILABLE FOR FREELANCE • FULL STACK DEVELOPER • WEB3 ENTHUSIAST • </span>
        <span>AVAILABLE FOR FREELANCE • FULL STACK DEVELOPER • WEB3 ENTHUSIAST • </span>
      </div>
    </div>
  );
};

export default Marquee;
