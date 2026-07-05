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
          It's about six years of you being annoyingly consistent — showing up,
          listening all the way through, never turning any of it into a bigger
          deal than it needed to be. Someone should probably mention that.
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
