import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import Navbar from '../components/Navbar';

const NotFoundPage = () => {
  return (
    <div className="notfound-page">
      <Navbar showLogo={true} theme="light" />
      <div className="notfound-bg-text">LOST IN SPACE</div>
      
      <div className="notfound-giant-404">
        <span>4</span>
        <span>4</span>
      </div>
      
      <motion.img 
        src="https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=80&w=1000&auto=format&fit=crop" 
        alt="Astronaut" 
        className="notfound-astronaut"
        animate={{ y: [-15, 15, -15], rotate: [-2, 2, -2] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        style={{ mixBlendMode: 'screen', borderRadius: '50%' }}
      />

      <div className="notfound-content">
        <p className="notfound-msg">
          Warp speed to nowhere!<br />
          Let's navigate back to base.
        </p>
        <Link to="/" className="notfound-home">HOME</Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
