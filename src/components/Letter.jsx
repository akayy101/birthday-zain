// src/components/Letter.jsx
import React from 'react';
import { motion } from 'framer-motion';
import '../assets/css/Letter.css';

const Letter = () => {
  return (
    <section id="letter-section">
      <motion.div
        className="letter-container"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2>A Letter For You</h2>
        <p>
          Dear Zain,
          <br /><br />
          This is where your emotional and funny birthday letter goes. You can write about your memories together, his goofy personality, travels, and all the things that make him special.
          <br /><br />
          I hope this letter reminds you how much you mean to me and how amazing your 26th year will be. Keep being the calm, patient, artistic soul we all love!
          <br /><br />
          With love,
          <br />
          Ariba
        </p>
        <p className="signature">— Ariba</p>
      </motion.div>
    </section>
  );
};

export default Letter;
