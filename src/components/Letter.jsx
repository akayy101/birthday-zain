// src/components/Letter.jsx
import React from 'react';
import { motion } from 'framer-motion';
import '../assets/css/Letter.css';

const Letter = () => {
  return (
    <section id="letter-section">
      <div className="letter-backdrop" aria-hidden="true" />
      <motion.div
        className="letter-container"
        initial={{ opacity: 0, y: 34 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="eyebrow letter-eyebrow">Chapter One</span>
        <h2 className="letter-title">The Letter</h2>

        <div className="letter-page">
          <p className="letter-body">
            Dear Zain,
            <br /><br />
            Six years ago you were just a friend. Somewhere along the way, without either
            of us really deciding it, you became the closest thing I have to an elder
            brother — the one who has always had my back.
            <br /><br />
            Sometimes I cant believe how far have we come despite all the challenges and problems we have had.
            Thanks to me for having such a big heart. So much has changed since then, and yet, in some ways, nothing has changed at all. You are still the person I confide in, the one I can be honest with, and the one who has always been there for me. Thankyou for always being my safe space.
            There's an entire country between us now, and most days that just means a bad
            connection and a late reply. It has never once meant distance where it actually
            matters.
            <br /><br />
            So this year, instead of one message that says "happy birthday" and disappears, I built you this. A few chapters. Take your
            time with them.
            <br /><br />
            Here's to twenty-six.
          </p>
          <p className="signature">With all of it — Ariba</p>
        </div>
      </motion.div>
    </section>
  );
};

export default Letter;
