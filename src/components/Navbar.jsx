import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Magnetic from './Magnetic';
import { Menu, X } from 'lucide-react';

const Navbar = ({ showLogo = false, theme = "light" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const NavLinks = () => (
    <>
      <div className="nav-link-group">
        <Magnetic><Link to="/works" className="nav-link">WORK</Link></Magnetic>
        <Magnetic><Link to="/" className="nav-link">ABOUT</Link></Magnetic>
        <Magnetic><Link to="/certifications" className="nav-link">CERTS</Link></Magnetic>
      </div>
      <div className="nav-link-group">
        <Magnetic><a href="mailto:adarshhgupta336@gmail.com" className="nav-link">MAIL</a></Magnetic>
        <Magnetic><a href="https://github.com/Adarshhspeaks" target="_blank" rel="noreferrer" className="nav-link">GH</a></Magnetic>
        <Magnetic><a href="https://www.linkedin.com/in/adarsh1807" target="_blank" rel="noreferrer" className="nav-link">LI</a></Magnetic>
      </div>
    </>
  );

  return (
    <>
      <motion.nav
        className={`navbar ${theme === "dark" && !isOpen ? "dark-theme" : ""}`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        {isMobile ? (
          <div className="mobile-nav-header">
            <Link to="/" className="nav-logo" style={{ zIndex: 10000, position: 'relative' }}>ADARSH&nbsp;&nbsp;&nbsp;KUMAR</Link>
            <button className="menu-toggle-btn" onClick={toggleMenu} style={{ zIndex: 10001, position: 'relative' }}>
              <Menu size={20} /> MENU
            </button>
          </div>
        ) : (
          showLogo ? (
            <>
              <Magnetic><Link to="/" className="nav-logo">ADARSH KUMAR</Link></Magnetic>
              <div className="nav-logo-right">
                <NavLinks />
              </div>
            </>
          ) : (
            <>
              <div className="nav-left">
                <Magnetic><Link to="/works" className="nav-link">WORK</Link></Magnetic>
                <Magnetic><Link to="/" className="nav-link">ABOUT</Link></Magnetic>
                <Magnetic><Link to="/certifications" className="nav-link">CERTS</Link></Magnetic>
              </div>
              <div className="nav-right">
                <Magnetic><a href="mailto:adarshhgupta336@gmail.com" className="nav-link">MAIL</a></Magnetic>
                <Magnetic><a href="https://github.com/Adarshhspeaks" target="_blank" rel="noreferrer" className="nav-link">GH</a></Magnetic>
                <Magnetic><a href="https://www.linkedin.com/in/adarsh1807" target="_blank" rel="noreferrer" className="nav-link">LI</a></Magnetic>
              </div>
            </>
          )
        )}
      </motion.nav>

      <AnimatePresence>
        {isOpen && isMobile && (
          <motion.div
            className="mobile-menu-overlay"
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mobile-menu-header">
              {showLogo ? (
                <Link to="/" className="nav-logo" onClick={() => setIsOpen(false)}>ADARSH KUMAR</Link>
              ) : (
                <div></div>
              )}
              <button className="menu-close-btn" onClick={toggleMenu}>
                <X size={20} /> CLOSE
              </button>
            </div>
            <div className="mobile-menu-content">
              <Link to="/works" className="mobile-nav-link" onClick={() => setIsOpen(false)}>WORK</Link>
              <Link to="/" className="mobile-nav-link" onClick={() => setIsOpen(false)}>ABOUT</Link>
              <Link to="/certifications" className="mobile-nav-link" onClick={() => setIsOpen(false)}>CERTS</Link>

              <div className="mobile-nav-socials">
                <a href="mailto:adarshhgupta336@gmail.com" className="mobile-nav-link-small">MAIL</a>
                <a href="https://github.com/Adarshhspeaks" target="_blank" rel="noreferrer" className="mobile-nav-link-small">GH</a>
                <a href="https://www.linkedin.com/in/adarsh1807" target="_blank" rel="noreferrer" className="mobile-nav-link-small">LI</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
