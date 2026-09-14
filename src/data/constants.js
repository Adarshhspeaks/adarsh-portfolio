import cosmicWatchImg from '../assets/cosmic-watch.jpg';
import bricsClimatyImg from '../assets/brics-climaty.jpg';
import metaDatabasesImg from '../assets/meta-database.jpg';
import googleGenAiImg from '../assets/cert-google-genai.jpg';
import n8nDeepseekImg from '../assets/cert-n8n-deepseek.jpg';
import ibmDevopsImg from '../assets/cert-ibm-devops.jpg';
import msExcelImg from '../assets/cert-ms-excel.jpg';
import cloudComputingImg from '../assets/cert-cloud-computing.jpg';
import genaiArchitectureImg from '../assets/cert-genai-architecture.jpg';

export const PROJECTS = [
  {
    client: 'CLIMATE INTELLIGENCE & SUSTAINABILITY',
    title: 'BRICS-CLIMATY',
    desc: 'Climate intelligence & sustainability platform for BRICS+ nations featuring real-time airshed telemetry, multi-currency solar ROI & carbon offset calculator, and clean air restoration frameworks. Built with React 18, Vite, Leaflet, and Supabase.',
    link: 'https://brics-climaty.vercel.app/',
    img: bricsClimatyImg
  },
  {
    client: 'NASA 3D SIMULATION & WEBGL',
    title: 'COSMIC WATCH',
    desc: 'Real-time 3D heliocentric Solar System & Near-Earth Asteroid (NEO) radar powered by NASA JPL live telemetry, Keplerian orbital mechanics, and Three.js/React.',
    link: 'https://cosmic-watch-nine.vercel.app/',
    img: cosmicWatchImg
  },
  {
    client: 'AI & FULL-STACK PLATFORM',
    title: 'DARSHYA',
    desc: 'Premium AI-powered resume builder and analyzer built with Python, Flask, Google Gemini, and Firebase.',
    link: 'https://darshya.onrender.com/',
    img: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=2000&auto=format&fit=crop'
  },
  {
    client: 'WEB3 & ML FULL-STACK',
    title: 'PRITHVILOK',
    desc: 'Decentralized Sustainability Platform featuring an Ethers.js reward system, Python ML waste classification, and a 3D interactive Earth UI.',
    img: 'https://images.unsplash.com/photo-1614729939124-032f0b56c9ce?q=80&w=2000&auto=format&fit=crop'
  },
  {
    client: 'JAVA DESKTOP APP',
    title: 'Employee Shift Manager',
    desc: 'GUI-based scheduling system with role-based access, swap request workflows, and persistent storage via Java Serialization.',
    img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000&auto=format&fit=crop'
  },
  {
    client: 'CLOUD & DEVOPS',
    title: 'Multi-Cloud Architecture',
    desc: 'Containerized applications using Docker and Kubernetes, demonstrating end-to-end DevOps workflows across AWS, GCP, and Azure.',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop'
  },
  {
    client: 'FRONTEND DESIGN',
    title: 'Interactive Web Interfaces',
    desc: 'Responsive web pages built with React, Framer Motion, and Tailwind CSS, prioritizing dynamic user experiences.',
    img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000&auto=format&fit=crop'
  }
];

export const EXPERTISE = [
  {
    num: '01 —',
    title: 'Full Stack Development',
    desc: 'Building scalable web applications from end-to-end. Architecting secure backends with JWT/Google OAuth and deploying responsive frontends for seamless user experiences.',
    tags: ['REACT.JS', 'NODE.JS', 'EXPRESS.JS', 'MONGODB', 'POSTGRESQL']
  },
  {
    num: '02 —',
    title: 'Web3 & ML Integration',
    desc: 'Bridging the gap between blockchain technology and artificial intelligence. Integrating Solidity smart contracts with Python-based ML microservices for real-world applications.',
    tags: ['SOLIDITY', 'ETHERS.JS', 'PYTHON ML', 'FLASK']
  },
  {
    num: '03 —',
    title: 'Cloud & DevOps',
    desc: 'Deploying and managing containerized applications across multi-cloud environments, ensuring high availability and scalable infrastructure.',
    tags: ['AWS / GCP / AZURE', 'DOCKER', 'KUBERNETES', 'VERCEL / RENDER']
  },
  {
    num: '04 —',
    title: 'Interactive 3D UI',
    desc: 'Creating engaging, immersive landing pages and user interfaces using advanced frontend libraries to elevate the standard web experience.',
    tags: ['FRAMER MOTION', 'REACT THREE FIBER', 'TAILWIND CSS']
  }
];

export const CERTIFICATIONS = [
  {
    title: "Introduction to Databases",
    issuer: "Meta (Coursera)",
    date: "Jun 2024",
    link: "https://coursera.org/verify/YT01TTKGQA6K",
    img: metaDatabasesImg
  },
  {
    title: "Gen AI: Beyond the Chatbot",
    issuer: "Google Cloud (Coursera)",
    date: "Jan 2026",
    link: "https://coursera.org/verify/KVAF4OZC47GJ",
    img: googleGenAiImg
  },
  {
    title: "Build Intelligent Agents Using DeepSeek & N8N",
    issuer: "Board Infinity (Coursera)",
    date: "Jan 2026",
    link: "https://coursera.org/verify/J99YO2X61UWZ",
    img: n8nDeepseekImg
  },
  {
    title: "Cybersecurity Architecture",
    issuer: "IBM (Coursera)",
    date: "May 2026",
    link: "https://coursera.org/verify/MLHE8E1GP02H",
    img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Introduction to Cloud Computing",
    issuer: "IBM (Coursera)",
    date: "May 2026",
    link: "https://coursera.org/verify/9PAXEM9BL1HJ",
    img: cloudComputingImg
  },
  {
    title: "Generative AI: Advancing Systems Analysis & Architecture",
    issuer: "SkillUp (Coursera)",
    date: "May 2026",
    link: "https://coursera.org/verify/TD3MXOXGTEXP",
    img: genaiArchitectureImg
  },
  {
    title: "Introduction to DevOps",
    issuer: "IBM (Coursera)",
    date: "Jan 2026",
    link: "https://coursera.org/verify/CU064DEGMJZJ",
    img: ibmDevopsImg
  },
  {
    title: "Introduction to Microsoft Excel",
    issuer: "Coursera Project Network",
    date: "Dec 2025",
    link: "https://coursera.org/verify/7SDRJSZLZTK9",
    img: msExcelImg
  },
  {
    title: "Getting Started with Microsoft PowerPoint",
    issuer: "Coursera Project Network",
    date: "Dec 2025",
    link: "https://coursera.org/verify/3820BFCC6HYJ",
    img: "https://images.unsplash.com/photo-1542744094-3a31f272c490?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Alpha - DSA with Java",
    issuer: "Apna College",
    date: "Completed",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop"
  }
];
