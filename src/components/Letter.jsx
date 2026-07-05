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
            brother — the one who stays calm when I'm not, who listens all the way through
            before saying anything back.
            <br /><br />
            There's an entire country between us now, and most days that just means a bad
            connection and a late reply. It has never once meant distance where it actually
            matters.
            <br /><br />
            I've watched you build a whole life out there — sales by day, a Master's on the
            side, and somehow still a camera, a sketchbook, or a lump of clay in your hands
            whenever you get a quiet hour. You've always noticed things the rest of us walk
            past. I think that's the artist in you, and I think it's also just{' '}
            <em>you</em>.
            <br /><br />
            So this year, instead of one message that says "happy birthday" and disappears
            into your notifications by Tuesday, I built you this. A few chapters. Take your
            time with them — you always do everything else that way, and it's one of my
            favourite things about you.
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
