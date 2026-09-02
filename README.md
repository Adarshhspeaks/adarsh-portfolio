<div align="center">

#  ADARSH KUMAR — 3D DEVELOPER PORTFOLIO
**Modern, Awwwards-Inspired Portfolio featuring 3D WebGL, GSAP ScrollTrigger, and Full-Stack Project Showcases.**

[![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Three.js](https://img.shields.io/badge/Three.js-black?style=for-the-badge&logo=three.js&logoColor=white)](https://threejs.org/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=white)](https://greensock.com/gsap/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![EmailJS](https://img.shields.io/badge/EmailJS-FF6C37?style=for-the-badge&logo=mailgun&logoColor=white)](https://www.emailjs.com/)

[Live Demo](https://adarsh-portfolio-sigma.vercel.app/) • [Report Bug](https://github.com/Adarshhspeaks/adarsh-portfolio/issues) • [LinkedIn](https://www.linkedin.com/in/adarsh1807) • [GitHub](https://github.com/Adarshhspeaks)

</div>

---

## ✨ Overview

A high-performance personal portfolio engineered for **Adarsh Kumar** (Full-Stack, 3D WebGL & AI Developer). Built with an editorial design language inspired by modern Awwwards winners, combining smooth inertial scrolling, immersive Three.js particle backgrounds, and real-time backend integrations.

---

## 🚀 Key Features

* **🌌 3D WebGL Particle Canvas:** Real-time floating particle network built with `@react-three/fiber` and `@react-three/drei`.
* **🎡 GSAP Pin & Horizontal Carousel:** Smooth pin-scrolling horizontal project carousel powered by GSAP `ScrollTrigger` and `@studio-freight/lenis`.
* **✨ Fluid Animations & Transitions:** Staggered viewport reveals, magnetic buttons, custom cursor follower, and page transitions via `framer-motion`.
* **🪐 Featured Projects Hub:**
  * **[Cosmic Watch](https://cosmic-watch-nine.vercel.app/):** NASA 3D Heliocentric Solar System & Near-Earth Asteroid (NEO) radar simulation.
  * **[Darshya](https://darshya.onrender.com/):** AI-powered resume builder and ATS analyzer built with Python, Flask, Google Gemini AI, and Firebase.
  * **Prithvilok:** Decentralized sustainability platform with Web3 Ethers.js reward systems and Python ML microservices.
* **🎓 Verified Credentials Showcase:** Dedicated certifications page featuring 9 industry credentials (Meta, Google Cloud, IBM, Board Infinity, SkillUp) with direct official verification badges.
* **📄 Automated ATS Resumé Integration:** Generates an ATS-compliant PDF resumé directly downloadable from the site.
* **📬 Real-Time Contact Engine:** Working contact form linked to **EmailJS** for instant message delivery directly to Gmail.

---

## 🛠️ Tech Stack

### **Frontend & 3D WebGL**
* **React 19** & **Vite**
* **Three.js** & **React Three Fiber (R3F)**
* **GSAP 3** & **ScrollTrigger**
* **Framer Motion**
* **Lenis Smooth Scroll**
* **Lucide React Icons**

### **Backend & Services**
* **EmailJS** (Live Contact Dispatch)
* **Python ReportLab** (Automated ATS PDF Resumé Engine)

---

## 📁 Project Structure

```bash
adarsh-portfolio/
├── public/                     # Static assets & generated ATS PDF resume
│   ├── Adarsh_Kumar_Resume.pdf
│   ├── favicon.svg
│   └── signature.svg
├── src/
│   ├── assets/                 # 3D visuals, hero portrait & project artwork
│   ├── components/             # Reusable UI components
│   │   ├── ContactForm.jsx     # EmailJS contact integration
│   │   ├── Cursor.jsx          # Custom interactive cursor
│   │   ├── Footer.jsx          # Dynamic footer with location & socials
│   │   ├── Magnetic.jsx        # Physics-based magnetic hover effect
│   │   ├── Marquee.jsx         # Infinite text ticker
│   │   ├── Navbar.jsx          # Responsive desktop/mobile nav with smooth scroll
│   │   ├── ParticleBackground.jsx # 3D WebGL background
│   │   └── Preloader.jsx       # Initial load counter animation
│   ├── data/
│   │   └── constants.js        # Centralized projects & credentials database
│   ├── pages/
│   │   ├── HomePage.jsx        # Hero, About, GSAP Showcase & Expertise
│   │   ├── WorksPage.jsx       # Interactive hover-modal project directory
│   │   ├── CertificationsPage.jsx # Verified credentials gallery
│   │   └── NotFoundPage.jsx    # Custom 404 page
│   ├── index.css               # Global responsive design tokens & media queries
│   └── App.jsx                 # Route manager with Lenis smooth scroll
├── .env.example                # Environment variables template
├── generate_resume.py          # Python resume generator
└── package.json
```

---

## ⚡ Getting Started Locally

### 1. Clone the repository
```bash
git clone https://github.com/Adarshhspeaks/adarsh-portfolio.git
cd adarsh-portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Setup Environment Variables
Create a `.env` file in the root directory (optional, defaults provided in code):
```env
VITE_EMAILJS_SERVICE_ID=service_ccbekz7
VITE_EMAILJS_TEMPLATE_ID=template_8kbgtmw
VITE_EMAILJS_PUBLIC_KEY=FI9DZAtIvNM5MhavI
```

### 4. Start the development server
```bash
npm run dev
```

### 5. Build for production
```bash
npm run build
```

---

## 👤 Author

**Adarsh Kumar**
* **GitHub:** [@Adarshhspeaks](https://github.com/Adarshhspeaks)
* **LinkedIn:** [in/adarsh1807](https://www.linkedin.com/in/adarsh1807)
* **Email:** [adarshhgupta336@gmail.com](mailto:adarshhgupta336@gmail.com)
* **Location:** Bhubaneswar, Odisha, India 🇮🇳

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
