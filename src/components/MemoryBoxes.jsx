import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import '../assets/css/Memory.css';

// TODO(ariba): add `media` (image/video path) per card once you have one —
// the gradient tone is just a stand-in until then. Add more entries any time;
// the grid and the expand animation both adapt automatically.
const memories = [
  { id: 'm1', title: 'Football, in the Rain', tone: 1, content: 'We played until the pitch gave up first. You went down in the mud before the ball did.' },
  { id: 'm2', title: 'The Pottery Incident', tone: 2, content: 'One class, one vase that came out looking nothing like a vase. It’s probably still on a shelf somewhere.' },
  { id: 'm3', title: 'That Trip to Sargodha', tone: 3, content: 'The most impromptu trip either of us has ever agreed to. Ask him — he still tells it better than I do.' },
  { id: 'm4', title: 'Behind the Camera', tone: 4, content: 'Every street becomes a photograph the second he’s holding a camera. Everyone else just walks past.' },
  { id: 'm5', title: 'More to come', tone: 1, content: 'This is where the next one goes, whenever we make it.', isPrompt: true },
];

const MemoryBoxes = () => {
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

  const selected = memories.find((m) => m.id === selectedId);

  return (
    <section id="memory-section">
      <div className="container memory-head">
        <span className="eyebrow">Chapter Three</span>
        <h2 className="chapter-heading">Zain's <em>Chronicles</em></h2>
        <p className="memory-sub">The funny ones. Click one open — the rest will hold still.</p>
      </div>

      <div className="container memory-grid">
        {memories.map((memory) => (
          <motion.div
            key={memory.id}
            layoutId={memory.id}
            className={`memory-card tone-${memory.tone} ${memory.isPrompt ? 'is-prompt' : ''} ${selectedId === memory.id ? 'is-active-source' : ''}`}
            onClick={() => setSelectedId(memory.id)}
            style={{ visibility: selectedId === memory.id ? 'hidden' : 'visible' }}
            whileHover={{ y: -5 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.h3 layoutId={`title-${memory.id}`}>{memory.title}</motion.h3>
            <span className="memory-hint">tap to open</span>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="memory-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            onClick={() => setSelectedId(null)}
          >
            <motion.div
              layoutId={selected.id}
              className={`memory-card memory-card--expanded tone-${selected.tone}`}
              onClick={(e) => e.stopPropagation()}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <button className="memory-close" onClick={() => setSelectedId(null)} aria-label="Close memory">
                ×
              </button>
              {selected.media ? (
                selected.media.endsWith('.mp4') ? (
                  <video src={selected.media} controls className="memory-media" />
                ) : (
                  <img src={selected.media} alt={selected.title} className="memory-media" />
                )
              ) : (
                <div className="memory-media memory-media--placeholder" aria-hidden="true" />
              )}
              <motion.h3 layoutId={`title-${selected.id}`}>{selected.title}</motion.h3>
              <motion.p
                className="memory-content"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.15, duration: 0.4 }}
              >
                {selected.content}
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default MemoryBoxes;
