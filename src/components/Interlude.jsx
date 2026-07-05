// src/components/Interlude.jsx
// A deliberate breath between the quiz and the ending — no eyebrow, no
// heading, nothing to click. Just a line, and room around it.
import React from 'react';
import { motion } from 'framer-motion';
import '../assets/css/Interlude.css';

const Interlude = () => {
  return (
    <section id="interlude-section">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 2.2, ease: 'easeOut' }}
      >
        But the real memories were never a quiz.
      </motion.p>
    </section>
  );
};

export default Interlude;
