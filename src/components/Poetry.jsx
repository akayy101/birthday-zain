// src/components/Poetry.jsx
import React from 'react';
import { motion } from 'framer-motion';
import '../assets/css/Poetry.css';

// TODO(ariba): swap either of these for your own words, or his.
const poems = [
  {
    title: 'Still Life',
    lines: [
      'You slow a room down without trying —',
      'a camera settling on the one detail',
      'everyone else already walked past.',
      '',
      'Patience isn’t the absence of wanting.',
      'It’s wanting quietly, and well.',
    ],
  },
  {
    title: 'Yellow',
    lines: [
      'Not the loud kind. Not caution, not warning.',
      'The kind that sits low in a window at 6pm',
      'and asks nothing of the room.',
      '',
      'That’s the colour I’d pick for you too,',
      'if I had to pick just one.',
    ],
  },
];

const Poetry = () => {
  return (
    <section id="poetry-section">
      <div className="container poetry-head">
        <span className="eyebrow">Chapter Five</span>
        <h2 className="chapter-heading">The <em>Journal</em></h2>
        <p className="poetry-sub">Slow down here. This part isn't meant to move fast.</p>
      </div>

      <div className="container poems-container">
        {poems.map((poem, index) => (
          <motion.article
            key={poem.title}
            className="poem-page"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 1.4, delay: index * 0.3, ease: 'easeOut' }}
          >
            <svg className="poem-ink" viewBox="0 0 60 60" aria-hidden="true">
              <path d="M10 45 C 15 20, 35 15, 40 35 C 43 46, 30 50, 25 40" fill="none" stroke="currentColor" strokeWidth="1.2" />
            </svg>
            <h3>{poem.title}</h3>
            <div className="poem-lines">
              {poem.lines.map((line, i) => (
                <p key={i}>{line || ' '}</p>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Poetry;
