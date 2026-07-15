// src/components/LifeObjects.jsx
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../assets/css/LifeObjects.css';

// TODO(ariba): swap `icon` for a real icon/illustration/photo path and `media`
// for an image/video/audio file whenever you have one — the component adapts
// automatically. `type` is one of 'image' | 'video' | 'audio' | 'song' | 'text'.
// Leave `media` empty for a text-only popup.
const objects = [
  { id: 1, icon: null, title: 'Camera', media: null, type: 'text', description: 'Every street becomes a photograph the second this is in his hands.' },
  { id: 2, icon: null, title: 'Film Roll', media: null, type: 'text', description: 'Before the phone, this is how he actually learned to see.' },
  { id: 3, icon: null, title: 'Passport', media: null, type: 'text', description: 'More stamps than stability, and he wouldn’t have it any other way.' },
  { id: 4, icon: null, title: 'Plane Ticket', media: null, type: 'text', description: 'Germany was never the plan. It just became the address.' },
  { id: 5, icon: null, title: 'Compass', media: null, type: 'text', description: 'Mostly decorative — he’s the one who actually knows the way.' },
  { id: 6, icon: null, title: 'Map', media: null, type: 'text', description: 'Bought for one trip, kept for all of them.' },
  { id: 7, icon: null, title: 'Postcard', media: null, type: 'text', description: 'The kind you write when the distance is worth mentioning.' },
  { id: 8, icon: null, title: 'Sketchbook', media: null, type: 'text', description: 'Half-finished on purpose. He says it’s about the line, not the ending.' },
  { id: 9, icon: null, title: 'Pencil', media: null, type: 'text', description: 'Worn down on one side from how he holds it.' },
  { id: 10, icon: null, title: 'Pottery Vase', media: null, type: 'text', description: 'Not symmetrical. Somehow still his favourite piece.' },
  { id: 11, icon: null, title: 'Wet Clay', media: null, type: 'text', description: 'Patience you can literally hold in your hands.' },
  { id: 12, icon: null, title: 'Football', media: null, type: 'text', description: 'Still competitive about it at twenty-six.' },
  { id: 13, icon: null, title: 'Gym Glove', media: null, type: 'text', description: 'The discipline nobody has to remind him about.' },
  { id: 14, icon: null, title: 'Water Bottle', media: null, type: 'text', description: 'Always full. Always within reach.' },
  { id: 15, icon: null, title: 'Coffee Mug', media: null, type: 'text', description: 'The one constant before every long day.' },
  { id: 16, icon: null, title: 'Notebook', media: null, type: 'text', description: 'Half planning, half poetry — he never separates the two.' },
  { id: 17, icon: null, title: 'Fountain Pen', media: null, type: 'text', description: 'For the words he’d never actually say out loud.' },
  { id: 18, icon: null, title: 'Headphones', media: null, type: 'text', description: 'How he disappears into a room full of people.' },
  { id: 19, icon: null, title: 'Vinyl Record', media: null, type: 'text', description: 'Because some things shouldn’t be played on shuffle.' },
  { id: 20, icon: null, title: 'Potted Plant', media: null, type: 'text', description: 'Grows slowly. So does everything he cares about.' },
  { id: 21, icon: null, title: 'Candle', media: null, type: 'text', description: 'Yellow, obviously. Lit for no particular occasion.' },
  { id: 22, icon: null, title: 'Wristwatch', media: null, type: 'text', description: 'He’s never once been the one running late.' },
  { id: 23, icon: null, title: 'Briefcase', media: null, type: 'text', description: 'Sales by day. Somehow still has hours left for everything else.' },
  { id: 24, icon: null, title: 'Graduation Cap', media: null, type: 'text', description: 'A Master’s, chased on the side, never as the main character.' },
  { id: 25, icon: null, title: 'Yellow Scarf', media: null, type: 'text', description: 'His colour, worn without ever announcing it.' },
  { id: 26, icon: null, title: 'Old Photograph', media: null, type: 'text', description: 'Six years, and this is the one we keep coming back to.' },
];

// Deterministic pseudo-random so layout stays put across re-renders/HMR.
const seededRandom = (seed) => {
  const x = Math.sin(seed * 9301 + 49297) * 233280;
  return x - Math.floor(x);
};

const getTileStyle = (id) => {
  const rotate = (seededRandom(id) - 0.5) * 14;
  const jitterY = (seededRandom(id + 100) - 0.5) * 26;
  const floatDuration = 4 + seededRandom(id + 200) * 3;
  const floatDelay = seededRandom(id + 300) * 2;
  const featured = id % 6 === 0;
  const overlap = id % 5 === 0 ? -18 : 0;
  return { rotate, jitterY, floatDuration, floatDelay, featured, overlap };
};

const ObjectMedia = ({ item }) => {
  if (!item.media) {
    return <div className="object-media object-media--placeholder" aria-hidden="true" />;
  }
  if (item.type === 'video') {
    return <video src={item.media} controls className="object-media" />;
  }
  if (item.type === 'audio' || item.type === 'song') {
    return <audio src={item.media} controls className="object-media object-media--audio" />;
  }
  return <img src={item.media} alt={item.title} className="object-media" />;
};

const LifeObjects = () => {
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    document.body.style.overflow = selectedId ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedId]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setSelectedId(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const selected = objects.find((o) => o.id === selectedId);

  return (
    <section id="objects-section">
      <div className="container objects-head">
        <span className="eyebrow">Chapter Three</span>
        <h2 className="chapter-heading">A Life in <em>26 Objects</em></h2>
        <p className="objects-sub">Everything he is, emptied out onto a table. Tap anything.</p>
      </div>

      <div className="objects-desk">
        {objects.map((item) => {
          const { rotate, jitterY, floatDuration, floatDelay, featured, overlap } = getTileStyle(item.id);
          const isOpen = selectedId === item.id;
          return (
            <motion.button
              key={item.id}
              layoutId={`object-${item.id}`}
              className={`object-tile ${featured ? 'is-featured' : ''}`}
              style={{
                visibility: isOpen ? 'hidden' : 'visible',
                marginTop: overlap,
              }}
              initial={{ opacity: 0, scale: 0.85, rotate }}
              whileInView={{ opacity: 1, scale: 1, rotate }}
              viewport={{ once: true, amount: 0.4 }}
              whileHover={{ scale: 1.07, y: jitterY - 8, zIndex: 5, rotate: 0 }}
              whileTap={{ scale: 0.96 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => setSelectedId(item.id)}
            >
              <motion.div
                className="object-tile-inner"
                animate={{ y: [jitterY, jitterY + 6, jitterY] }}
                transition={{ repeat: Infinity, duration: floatDuration, delay: floatDelay, ease: 'easeInOut' }}
              >
                <span className="object-icon">
                  {item.icon || item.title.slice(0, 1)}
                </span>
                <span className="object-title">{item.title}</span>
              </motion.div>
            </motion.button>
          );
        })}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="object-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            onClick={() => setSelectedId(null)}
          >
            <motion.div
              layoutId={`object-${selected.id}`}
              className="object-tile object-tile--expanded"
              onClick={(e) => e.stopPropagation()}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <button className="object-close" onClick={() => setSelectedId(null)} aria-label="Close">
                ×
              </button>
              <ObjectMedia item={selected} />
              <span className="object-icon object-icon--expanded">
                {selected.icon || selected.title.slice(0, 1)}
              </span>
              <h3>{selected.title}</h3>
              <motion.p
                className="object-description"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.15, duration: 0.4 }}
              >
                {selected.description}
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default LifeObjects;
