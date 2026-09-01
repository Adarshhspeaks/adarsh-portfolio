import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

const ProjectModal = ({ modal, projects }) => {
  const { active, index } = modal;
  const modalContainer = useRef(null);

  useEffect(() => {
    let xMove = gsap.quickTo(modalContainer.current, "x", { duration: 0.8, ease: "power3" });
    let yMove = gsap.quickTo(modalContainer.current, "y", { duration: 0.8, ease: "power3" });

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      xMove(clientX - 200); 
      yMove(clientY - 150); 
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={modalContainer} className="project-modal-wrapper" style={{ position: 'fixed', top: 0, left: 0, pointerEvents: 'none', zIndex: 100 }}>
      <motion.div
        variants={{
          initial: { scale: 0 },
          enter: { scale: 1, transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] } },
          closed: { scale: 0, transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] } }
        }}
        initial="initial"
        animate={active ? "enter" : "closed"}
        className="project-modal-container"
      >
        <div className="project-modal-slider" style={{ top: index * -100 + "%", position: 'relative', height: '100%', width: '100%', transition: 'top 0.5s cubic-bezier(0.76, 0, 0.24, 1)' }}>
          {projects.map((proj, idx) => (
            <div className="project-modal-item" key={idx} style={{ height: '100%', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <img src={proj.img} alt={proj.title} style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectModal;
