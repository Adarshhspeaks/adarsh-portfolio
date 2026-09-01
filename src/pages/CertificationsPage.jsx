import React from 'react';
import { motion } from 'framer-motion';

import SEO from '../components/SEO';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import { CERTIFICATIONS } from '../data/constants';
import { fadeUpConfig } from '../utils/animations';

const CertificationsPage = () => {
  return (
    <div className="page-wrapper theme-light" style={{ width: '100vw' }}>
      <SEO title="Certifications" description="My professional certifications and achievements." />
      <Navbar showLogo={true} theme="dark" />
      <section className="thoughts-page">
        <motion.div className="section-header" {...fadeUpConfig}>CERTIFICATIONS ⌕</motion.div>
        <div className="thoughts-list">
          {CERTIFICATIONS.map((cert, idx) => (
            <motion.div 
              key={idx} 
              className="thought-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div style={{overflow: 'hidden'}}>
                <motion.img 
                  src={cert.img} 
                  alt={cert.title} 
                  className="thought-img" 
                  style={{height: '40vh'}}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                />
              </div>
              <div className="thought-content">
                <h2 className="thought-title" style={{fontSize: '28px'}}>{cert.title}</h2>
                <div className="thought-meta" style={{display: 'flex', flexDirection: 'column', gap: '0.25rem'}}>
                  <span>ISSUED BY {cert.issuer}</span>
                  <span>DATE {cert.date}</span>
                  {cert.link && (
                    <a 
                      href={cert.link} 
                      target="_blank" 
                      rel="noreferrer" 
                      style={{
                        marginTop: '0.5rem',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '13px',
                        color: 'var(--text-black)',
                        fontWeight: 700,
                        textDecoration: 'underline',
                        letterSpacing: '0.5px'
                      }}
                    >
                      VERIFY CREDENTIAL &rarr;
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default CertificationsPage;
