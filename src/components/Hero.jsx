import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import '../assets/css/Hero.css';
import birthdaySong from '../assets/audios/birthday.mp3';

const Hero = () => {
  const audioRef = useRef(null);
  const [started, setStarted] = useState(false);

  const handleStart = () => {
    setStarted(true);
    audioRef.current?.play().catch(() => {});
    document.getElementById('letter-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero">
      <div className="hero-glow" aria-hidden="true" />
      <div className="hero-vignette" aria-hidden="true" />


      <div className="hero-content">
        <motion.span
          className="eyebrow hero-eyebrow"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          For Zain — Twenty-Six
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          A year, <em>gathered</em><br />and given back to you.
        </motion.h1>

        <motion.p
          className="hero-sub"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.9 }}
        >
          Not a birthday page. A few things I never said out loud, kept for the day you'd actually sit still and read them.
        </motion.p>

        <motion.button
          className="btn-gold hero-btn"
          onClick={handleStart}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.3 }}
          whileHover={{ letterSpacing: '0.22em' }}
        >
          Begin
        </motion.button>
      </div>

      <motion.div
        className="hero-scrollcue"
        animate={{ opacity: [0.35, 1, 0.35] }}
        transition={{ repeat: Infinity, duration: 2.4, ease: 'easeInOut' }}
        aria-hidden="true"
      />

      {started && (
        <audio ref={audioRef} src={birthdaySong} loop />
      )}
    </section>
  );
};

export default Hero;
