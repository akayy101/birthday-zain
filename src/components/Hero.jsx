import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../assets/css/Hero.css';
import cakeImg from '../assets/images/cake.jpg'; // uncomment when you have your image
import birthdaySong from '../assets/audios/birthday.mp3'; // optional

const Hero = () => {
  const [playMusic, setPlayMusic] = useState(false);

  const handleStart = () => {
    setPlayMusic(true);
    // play audio if you have it
    const audio = document.getElementById('birthday-audio');
    audio.play();
    document.getElementById('letter-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero">
     <div className="hero-content">
      {/* Floating Cake */}
      <motion.img
        src=""
        alt="Cake"
        style={{ marginBottom: '30px' }}
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      />

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Happy 26th Birthday, Zain
      </motion.h1>

      {/* Paragraph */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
      >
        A golden year for the golden soul. Scroll to begin your journey.
      </motion.p>

      {/* Start Button */}
      <motion.button
        onClick={handleStart}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        Start
      </motion.button>

      {/* Optional Audio */}
      {playMusic && (
        <audio id="birthday-audio" src="birthdaySong" autoPlay />
        // replace src with birthdaySong if you have it
      )}
      </div>
    </section>
  );
};

export default Hero;
