// src/components/Gallery.jsx
import React from 'react';
import Masonry from 'react-masonry-css';
import { motion } from 'framer-motion';
import '../assets/css/Gallery.css';

// TODO(ariba): replace with real photos/videos. Give each item a `src`
// (image or video path) and it will render in place of the placeholder tone.
// `tall` controls masonry rhythm — leave the mix of tall/short for variety.
const items = [
  { label: 'Photography', caption: 'the eye behind the camera', tall: true, tone: 1 },
  { label: 'Pottery', caption: 'hands in the clay', tall: false, tone: 2 },
  { label: 'Sketching', caption: 'margins full of lines', tall: false, tone: 3 },
  { label: 'Football', caption: 'still competitive at 26', tall: true, tone: 4 },
  { label: 'Travelling', caption: 'anywhere, camera first', tall: false, tone: 2 },
  { label: 'Gym', caption: 'the disciplined one', tall: false, tone: 1 },
  { label: 'Poetry', caption: 'written, rarely shown', tall: true, tone: 3 },
];

const Gallery = () => {
  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <section id="gallery-section">
      <div className="container gallery-head">
        <span className="eyebrow">Chapter Two</span>
        <h2 className="chapter-heading">Things scattered <em>on the table</em></h2>
        <p className="gallery-sub">A handful of moments, waiting to be replaced with the real ones.</p>
      </div>

      <div className="container">
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {items.map((item, index) => (
            <motion.div
              key={index}
              className={`image-item tone-${item.tone} ${item.tall ? 'is-tall' : ''}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: (index % 4) * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
            >
              {item.src ? (
                item.src.endsWith('.mp4') ? (
                  <video src={item.src} muted loop playsInline />
                ) : (
                  <img src={item.src} alt={item.label} />
                )
              ) : (
                <div className="image-placeholder" aria-hidden="true" />
              )}
              <div className="image-caption">
                <span className="image-label">{item.label}</span>
                <span className="image-note">{item.caption}</span>
              </div>
            </motion.div>
          ))}
        </Masonry>
      </div>
    </section>
  );
};

export default Gallery;
