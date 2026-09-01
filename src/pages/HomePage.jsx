import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Award, CheckCircle, Code } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Canvas } from '@react-three/fiber';

import SEO from '../components/SEO';
import Navbar from '../components/Navbar';
import Marquee from '../components/Marquee';
import Footer from '../components/Footer';
import ParticleBackground from '../components/ParticleBackground';
import Counter from '../components/Counter';

import { PROJECTS, EXPERTISE } from '../data/constants';
import { fadeUpConfig, staggerContainer, staggerItem } from '../utils/animations';

import heroImg from '../assets/hero.jpg';
import heroHomeImg from '../assets/hero-home.jpg';

const useIsDesktop = () => {
  const [isDesktop, setIsDesktop] = useState(() =>
    typeof window !== 'undefined' ? window.innerWidth > 768 : false
  );
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 769px)');
    const handler = (e) => setIsDesktop(e.matches);
    mq.addEventListener('change', handler);
    setIsDesktop(mq.matches);
    return () => mq.removeEventListener('change', handler);
  }, []);
  return isDesktop;
};

const HomePage = () => {
  const isDesktop = useIsDesktop();
  const { scrollY } = useScroll();
  const yImage = useTransform(scrollY, [0, 1000], [0, isDesktop ? 100 : 0]);
  const yText1 = useTransform(scrollY, [0, 1000], [0, isDesktop ? -50 : 0]);
  const yText2 = useTransform(scrollY, [0, 1000], [0, isDesktop ? -100 : 0]);
  const [isInView, setIsInView] = useState(false);

  const aboutText = "Full Stack Developer with hands-on experience building scalable web applications using React, Node.js, Firebase, and cloud platforms. Passionate about Web3, ML integration, and deploying real-world solutions.";
  const words = aboutText.split(" ");
  const container = useRef();

  useGSAP(() => {
    let mm = gsap.matchMedia();
    let sections = gsap.utils.toArray('.project-item-gsap');

    mm.add("(min-width: 769px)", () => {
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: ".projects-pin-section",
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          end: () => "+=" + document.querySelector(".projects-pin-section").offsetWidth
        }
      });
    });

    return () => mm.revert();
  }, { scope: container });

  return (
    <div className="page-wrapper" ref={container}>
      <SEO title="Home" description="Full Stack Developer specialized in React, Web3, and Cloud deployments." />
      <section className="hero-container theme-dark">
        <div className="webgl-bg" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, opacity: 0.6 }}>
          <Canvas camera={{ position: [0, 0, 1] }}>
            <ParticleBackground />
          </Canvas>
        </div>
        <Navbar showLogo={false} theme="light" />
        <motion.div style={{ y: isDesktop ? yText1 : 0 }} className="hero-title-mark">ADARSH</motion.div>
        <motion.div
          style={{ y: isDesktop ? yImage : 0 }}
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="hero-image-wrap"
        >
          <img
            src={heroHomeImg}
            alt="Adarsh Kumar Portrait"
            className="hero-image"
          />
          <img src="/signature.svg" alt="Adarsh Signature" className="hero-signature" />
        </motion.div>
        <motion.div style={{ y: isDesktop ? yText2 : 0 }} className="hero-title-ashton">KUMAR</motion.div>
      </section>

      <Marquee />

      <section id="about" className="about-section theme-dark container">
        <p className="collab-text about-collab-text">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ color: '#333333' }}
              whileInView={{ color: 'var(--text-white)' }}
              viewport={{ once: false, margin: "-20% 0px -40% 0px" }}
              transition={{ duration: 0.4, delay: i * 0.03, ease: 'linear' }}
              style={{ display: 'inline-block', marginRight: '0.25em' }}
            >
              {word}
            </motion.span>
          ))}
        </p>
      </section>

      <section className="secondary-portrait-section theme-dark">
        <div className="bio-grid">
          <motion.img
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-20%" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            src={heroImg}
            alt="Adarsh Setup"
            className="bio-image"
          />
          <motion.div {...fadeUpConfig}>
            <p className="bio-content">
              I am a quick learner with strong <strong>problem-solving skills</strong>, experienced in hackathons and startup-style development. My technical toolkit spans across <strong>Java, Python, C, and JavaScript</strong>, allowing me to build robust applications from the ground up.
              <br /><br />
              Beyond standard web development, I am deeply interested in modern architectures involving <strong>Web3 paradigms</strong> (Solidity, Ethers.js) and <strong>Machine Learning</strong> microservices.
            </p>
            <div className="bio-footer">
              <p>Based in Bhubaneswar, Odisha 🇮🇳<br /><strong>CGPA: 7.76</strong> <span style={{ color: 'var(--text-gray)' }}>(up to 4th Semester)</span></p>
              <div className="bio-socials">
                <a href="https://github.com/Adarshhspeaks" target="_blank" rel="noreferrer" style={{ color: 'var(--text-white)' }}>GitHub</a>
                <a href="https://www.linkedin.com/in/adarsh1807" target="_blank" rel="noreferrer" style={{ color: 'var(--text-white)' }}>LinkedIn</a>
              </div>
              <a href="/Adarsh_Kumar_Resume.pdf" download="Adarsh_Kumar_Resume.pdf" target="_blank" rel="noreferrer" className="resume-btn">DOWNLOAD RESUMÉ</a>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="theme-light" style={{ width: '100vw' }}>
        <section className="collab-section container">
          <motion.h2 className="collab-text" {...fadeUpConfig}>
            My technology stack encompasses modern frameworks, cloud infrastructure, and core computer science fundamentals.
          </motion.h2>
          <motion.div
            className="brand-logos"
            style={{ fontSize: '20px' }}
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-10%" }}
          >
            <motion.span variants={staggerItem}>React.js</motion.span>
            <motion.span variants={staggerItem}>Node.js</motion.span>
            <motion.span variants={staggerItem}>AWS/GCP</motion.span>
            <motion.span variants={staggerItem}>Docker</motion.span>
            <motion.span variants={staggerItem}>Solidity</motion.span>
          </motion.div>
        </section>

        <section className="projects-pin-section theme-light">
          <motion.div className="section-header gsap-header">SELECTED PROJECTS</motion.div>
          <div className="gsap-horizontal-container" style={{ width: isDesktop ? `${PROJECTS.length * 100}vw` : '100vw' }}>
            {PROJECTS.map((proj, idx) => (
              <div key={idx} className="project-item-gsap">
                <div className="project-gsap-inner">
                  <div className="project-meta gsap-meta">
                    <div className="project-client">{proj.client}</div>
                    <h3 className="project-title">{proj.title}</h3>
                    {proj.link ? (
                      <a href={proj.link} target="_blank" rel="noreferrer" className="explore-link" style={{ marginTop: '2rem', display: 'inline-block' }}>VISIT LIVE APP &rarr;</a>
                    ) : (
                      <Link to="/works" className="explore-link" style={{ marginTop: '2rem', display: 'inline-block' }}>EXPLORE PROJECT &rarr;</Link>
                    )}
                  </div>
                  <div className="project-img-wrap gsap-img-wrap">
                    <img
                      src={proj.img}
                      alt={proj.title}
                      className="project-img"
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="expertise-section container">
          <motion.div className="section-header" {...fadeUpConfig}>TECHNICAL EXPERTISE</motion.div>
          <div className="expertise-list">
            {EXPERTISE.map((exp, idx) => (
              <motion.div
                key={idx}
                className="expertise-item"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="exp-left">
                  <div className="exp-number">{exp.num}</div>
                  <h3 className="exp-title">{exp.title}</h3>
                  <p className="exp-desc">{exp.desc}</p>
                </div>
                <div className="exp-right">
                  {exp.tags.map((tag, i) => (
                    <motion.div
                      key={i}
                      className="exp-tag"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 + (i * 0.1), ease: "easeOut" }}
                    >
                      {tag}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="metrics-section container">
          <motion.div className="section-header" {...fadeUpConfig}>ACADEMIC & TECH METRICS</motion.div>
          <motion.div
            className="metrics-grid"
            onViewportEnter={() => setIsInView(true)}
            viewport={{ once: true, margin: "-10%" }}
          >
            <div className="metrics-col">
              <motion.div className="metric-block" variants={staggerItem} initial="hidden" whileInView="show" viewport={{ once: true }}>
                <div className="metric-label"><Code size={16} /> TECHNOLOGIES MASTERED</div>
                {isInView ? <Counter from={0} to={24} duration={2} symbol="+" /> : <span className="metric-value">0+</span>}
              </motion.div>
              <motion.div className="metric-block" variants={staggerItem} initial="hidden" whileInView="show" viewport={{ once: true }}>
                <div className="metric-label"><CheckCircle size={16} /> PROJECTS BUILT</div>
                {isInView ? <Counter from={0} to={12} duration={2.5} symbol="+" /> : <span className="metric-value">0+</span>}
              </motion.div>
            </div>

            <motion.div
              className="metrics-col"
              style={{ justifyContent: 'center' }}
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <motion.div className="metric-list-item" variants={staggerItem}><span className="metric-list-num">4</span> Programming Languages</motion.div>
              <motion.div className="metric-list-item" variants={staggerItem}><span className="metric-list-num">5</span> Database Systems</motion.div>
              <motion.div className="metric-list-item" variants={staggerItem}><span className="metric-list-num">6</span> Cloud & DevOps Tools</motion.div>
              <motion.div className="metric-list-item" variants={staggerItem}><span className="metric-list-num">3</span> Web3 / ML Frameworks</motion.div>
              <motion.div style={{ marginTop: '4rem' }} variants={staggerItem}>
                <div className="metric-block">
                  <div className="metric-label"><Award size={16} /> CORE CS DEDICATION</div>
                  {isInView ? <Counter from={0} to={100} duration={1} symbol="%" /> : <span className="metric-value">0%</span>}
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;

