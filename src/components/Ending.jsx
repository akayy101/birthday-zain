// src/components/Ending.jsx
import React from 'react';
import { motion } from 'framer-motion';
import '../assets/css/Ending.css';

const noteVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.35 },
  },
};

const lineVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } },
};

const Ending = () => {
  return (
    <section id="ending-section">
      <motion.div
        className="ending-note"
        variants={noteVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        <motion.p className="ending-line" variants={lineVariants}>
          If you've read this far, you already know this was never really about
          turning twenty-six.
        </motion.p>
        <motion.p className="ending-line" variants={lineVariants}>
          It's about the fact that you've quietly made my life better for six
          years, without ever once asking for anything back.
        </motion.p>
        <motion.p className="ending-line ending-line--small" variants={lineVariants}>
          Germany, Pakistan — it was never going to be the distance that decided this.
        </motion.p>
        <motion.p className="signature ending-signature" variants={lineVariants}>
          — Ariba
        </motion.p>
      </motion.div>

      <motion.div
        className="ending-blackout"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 2.4, ease: 'easeOut' }}
      >
        <p>Thank you for existing.</p>
      </motion.div>
    </section>
  );
};

export default Ending;
