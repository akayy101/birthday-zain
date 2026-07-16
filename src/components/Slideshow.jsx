// src/components/Slideshow.jsx
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../assets/css/Slideshow.css';

// TODO(ariba): replace `image` with a real photo path per slide (import it at
// the top of this file), and swap the caption for the real one. Add or remove
// slides freely — everything below adapts to however many there are.
const slides = [
  { id: 1, image: null, caption: 'Somewhere in Germany, mid-frame, unaware he’s the subject.' },
  { id: 2, image: null, caption: 'The kind of quiet he’s always been good at.' },
  { id: 3, image: null, caption: 'Six years in, and still the same steady presence.' },
  { id: 4, image: null, caption: 'Yellow, without even trying.' },
  { id: 5, image: null, caption: 'This one’s just a placeholder — swap it whenever you like.' },
];

const SLIDE_DURATION = 6000;

const Slideshow = () => {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const total = slides.length;

  useEffect(() => {
    if (isPaused) return;
    const timer = setTimeout(() => {
      setIndex((i) => (i + 1) % total);
    }, SLIDE_DURATION);
    return () => clearTimeout(timer);
  }, [index, isPaused, total]);

  const goTo = (i) => setIndex((i + total) % total);
  const goNext = () => goTo(index + 1);
  const goPrev = () => goTo(index - 1);

  const current = slides[index];

  return (
    <section id="slideshow-section">
      <div className="container slideshow-head">
        <span className="eyebrow">Chapter Two</span>
        <h2 className="chapter-heading">A Few <em>Frames</em></h2>
        <p className="slideshow-sub">A handful of pictures, waiting for the real ones.</p>
      </div>

      <div
        className="slideshow-frame-wrap"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <button className="slide-arrow slide-arrow--prev" onClick={goPrev} aria-label="Previous picture">
          ‹
        </button>

        <div className="slideshow-frame">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              className="slide"
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              {current.image ? (
                <img src={current.image} alt={current.caption} className="slide-image" />
              ) : (
                <div className="slide-image slide-image--placeholder" aria-hidden="true" />
              )}
            </motion.div>
          </AnimatePresence>

          <div className="slide-progress" key={`progress-${current.id}`}>
            <div
              className={`slide-progress-fill ${isPaused ? 'is-paused' : ''}`}
              style={{ '--slide-duration': `${SLIDE_DURATION}ms` }}
            />
          </div>
        </div>

        <button className="slide-arrow slide-arrow--next" onClick={goNext} aria-label="Next picture">
          ›
        </button>
      </div>

      <AnimatePresence mode="wait">
        <motion.p
          key={`caption-${current.id}`}
          className="slide-caption"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {current.caption}
        </motion.p>
      </AnimatePresence>

      <div className="slide-dots">
        {slides.map((slide, i) => (
          <button
            key={slide.id}
            className={`slide-dot ${i === index ? 'is-active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Go to picture ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Slideshow;
