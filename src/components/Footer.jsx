import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { fadeUpConfig } from '../utils/animations';
import ContactForm from './ContactForm';

const Footer = () => (
  <footer className="footer theme-dark">
    <div className="footer-grid-bg"></div>
    <div className="footer-content container">
      <motion.div className="footer-top" {...fadeUpConfig}>
        <div>
          <div style={{display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem'}}>
            <span style={{fontFamily: 'var(--font-mono)', fontSize: '14px'}}>ADARSH KUMAR</span>
          </div>
          <h2 className="footer-cta-title">Let's Build Something.</h2>
          <ContactForm />
        </div>
        <div style={{textAlign: 'right'}}>
           <div style={{display: 'flex', gap: '1.5rem', fontFamily: 'var(--font-mono)', fontSize: '14px', justifyContent: 'flex-end'}}>
             <Link to="/works">WORK</Link>
             <Link to="/">ABOUT</Link>
             <Link to="/certifications">CERTS</Link>
           </div>
           <p className="footer-availability">
             Currently studying at<br/>
             <strong>B.Tech CSE (2024-Present)</strong>
           </p>
        </div>
      </motion.div>

      <motion.div className="footer-huge-name" {...fadeUpConfig} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}>
        ADARSH KUMAR
      </motion.div>

      <motion.div className="footer-bottom" {...fadeUpConfig} transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
        <div>
          <p>Current Location</p>
          <p style={{color: 'var(--text-white)'}}>Bhubaneswar <span style={{color: 'var(--text-gray)'}}>Odisha, India</span></p>
        </div>
        <div style={{textAlign: 'left'}}>
          <p>Phone: +91 6207343053</p>
          <p>Email: adarshhgupta336@gmail.com</p>
        </div>
        <div className="footer-socials">
          <a href="https://github.com/Adarshhspeaks" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/adarsh1807" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </motion.div>
    </div>
  </footer>
);

export default Footer;
