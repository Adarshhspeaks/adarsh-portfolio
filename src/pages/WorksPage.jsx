import React, { useState } from 'react';
import { motion } from 'framer-motion';

import SEO from '../components/SEO';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectModal from '../components/ProjectModal';

import { PROJECTS } from '../data/constants';
import { fadeUpConfig } from '../utils/animations';

const WorksPage = () => {
  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <div className="page-wrapper theme-light" style={{ width: '100vw' }}>
      <SEO title="Works" description="Selected projects spanning Web3, Desktop Apps, and Cloud Architectures." />
      <Navbar showLogo={true} theme="dark" />
      <section className="works-page" style={{ paddingTop: '15rem' }}>
        <motion.div className="section-header" {...fadeUpConfig}>PROJECTS</motion.div>
        
        <div className="awwwards-project-list">
          {PROJECTS.map((proj, index) => (
            <a 
              key={index}
              href={proj.link || '#'}
              target={proj.link ? "_blank" : "_self"}
              rel="noreferrer"
              className="awwwards-project-item"
              onMouseEnter={() => setModal({ active: true, index })}
              onMouseLeave={() => setModal({ active: false, index })}
              style={{ textDecoration: 'none', color: 'inherit', display: 'flex' }}
            >
              <h2>{proj.title}</h2>
              <p>{proj.client}</p>
            </a>
          ))}
        </div>

        <ProjectModal modal={modal} projects={PROJECTS} />
      </section>
      <Footer />
    </div>
  );
};

export default WorksPage;
