// src/components/Slideshow.jsx
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../assets/css/Slideshow.css';
import pic1 from '../assets/images/pic1.jpg';
import pic2 from '../assets/images/pic2.jpg';
import pic3 from '../assets/images/pic3.jpg';
import pic4 from '../assets/images/pic4.jpg';
import pic5 from '../assets/images/pic5.jpg';
import pic6 from '../assets/images/pic6.jpg';
import pic7 from '../assets/images/pic7.jpg';
import pic8 from '../assets/images/pic8.jpg';
import pic9 from '../assets/images/pic9.jpg';
import pic10 from '../assets/images/pic10.jpg';
import pic11 from '../assets/images/pic11.jpg';
import pic12 from '../assets/images/pic12.jpg';
import pic13 from '../assets/images/pic13.jpg';
import pic14 from '../assets/images/pic14.jpg';
import pic15 from '../assets/images/pic15.jpg';
import pic16 from '../assets/images/pic16.jpg';
import pic17 from '../assets/images/pic17.jpg';
import pic18 from '../assets/images/pic18.jpg';
import pic19 from '../assets/images/pic19.jpg';
import pic20 from '../assets/images/pic20.jpg';
import pic21 from '../assets/images/pic21.jpg';

// TODO(ariba): each slide is already one of your real photos — just edit the
// caption to match what's actually in the picture. Add or remove slides
// freely, portrait or landscape both display fully now.
const slides = [
  { id: 1, image: pic1, caption: 'Always a mischievous energy' },
  { id: 2, image: pic2, caption: 'Big supporter of Communication since 00' },
  { id: 3, image: pic3, caption: 'Who is this cutie patootie?' },
  { id: 4, image: pic4, caption: 'Butterfly effect' },
  
  { id: 6, image: pic6, caption: 'Most eligible Cadet!' },
  { id: 7, image: pic7, caption: 'Glasses actually suit you' },
  { id: 8, image: pic8, caption: 'The only cute picture we have' },
  { id: 9, image: pic9, caption: 'Nvm I like this too' },
  { id: 10, image: pic10, caption: 'Just another girl dying for you' },
  { id: 5, image: pic5, caption: 'Achievement NO. 1' },
  { id: 11, image: pic11, caption: 'Achievement No. 2' },
  { id: 13, image: pic13, caption: 'Achievement No. 3' },
  
  { id: 13, image: pic13, caption: 'Achievement No. 3' },
  { id: 14, image: pic14, caption: 'Cute cap' },
  { id: 12, image: pic12, caption: 'Salesman pf the year pt1' },
  { id: 15, image: pic15, caption: 'Salesman pf the year pt2' },
  { id: 18, image: pic18, caption: 'Salesman pf the year pt3' },
  { id: 16, image: pic16, caption: 'E memory from your favorite trip' },
  { id: 17, image: pic17, caption: 'Tch Tch, presenting someone else\'s flowers' },
  
  { id: 19, image: pic19, caption: 'Calm before the storm (iykyk)' },
  { id: 20, image: pic20, caption: 'Sleepy head' },
  { id: 21, image: pic21, caption: 'One with catto' },
];

const SLIDE_DURATION = 7500;

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
        <p className="slideshow-sub">A handful of pictures, worth sitting with for a moment.</p>
      </div>

      <div
        className="slideshow-frame-wrap"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="slideshow-frame">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              className="slide"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
            >
              {current.image ? (
                <motion.img
                  src={current.image}
                  alt={current.caption}
                  className="slide-image"
                  initial={{ scale: 1 }}
                  animate={{ scale: 1.06 }}
                  transition={{ duration: (SLIDE_DURATION + 1800) / 1000, ease: 'linear' }}
                />
              ) : (
                <div className="slide-image slide-image--placeholder" aria-hidden="true" />
              )}
            </motion.div>
          </AnimatePresence>

          <button className="slide-arrow slide-arrow--prev" onClick={goPrev} aria-label="Previous picture">
            ‹
          </button>
          <button className="slide-arrow slide-arrow--next" onClick={goNext} aria-label="Next picture">
            ›
          </button>
        </div>
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
