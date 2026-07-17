// src/components/Playlist.jsx
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import '../assets/css/Playlist.css';
import friendsTheme from '../assets/audios/I ll Be There For You (Friends Theme Song).mp3';
import tereJaisa from '../assets/audios/Tere Jaisa Yaar Kahan (Lyrical Video) Kishore Kumar Amitabh Bachchan Yaarana.mp3';
import dosti from '../assets/audios/Dosti (Cover) Jawad Ahmad [qcP-7SbYA0U].mp3';

const tracks = [
  { title: "I'll Be There for You", artist: 'The Rembrandts', audio: friendsTheme },
  { title: 'Tere Jaisa Yaar Kahan', artist: 'Kishore Kumar', audio: tereJaisa },
  { title: 'Dosti', artist: 'Jawad Ahmad (cover)', audio: dosti },
];

const Playlist = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const current = tracks[currentIndex];
  const hasAudio = Boolean(current.audio);

  useEffect(() => {
    if (isPlaying && hasAudio) {
      audioRef.current?.play().catch(() => {});
    }
  }, [currentIndex, isPlaying, hasAudio]);

  const selectTrack = (index) => {
    if (index === currentIndex) {
      togglePlay();
      return;
    }
    setCurrentIndex(index);
    setIsPlaying(Boolean(tracks[index].audio));
  };

  const togglePlay = () => {
    if (!hasAudio) return;
    if (isPlaying) {
      audioRef.current?.pause();
      setIsPlaying(false);
    } else {
      audioRef.current?.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  return (
    <section id="playlist-section">
      <div className="container playlist-head">
        <span className="eyebrow">Chapter Three</span>
        <h2 className="chapter-heading">Songs, <em>chosen for him</em></h2>
        <p className="playlist-sub">Pick a record. Only one plays at a time.</p>
      </div>

      <div className="container player-layout">
        <div className="turntable">
          <div className="turntable-base">
            <motion.div
              className="vinyl-disc"
              animate={isPlaying ? { rotate: 360 } : {}}
              transition={isPlaying ? { repeat: Infinity, duration: 3.2, ease: 'linear' } : {}}
            >
              <div className="vinyl-grooves" />
              <div className="vinyl-label">{current.title.slice(0, 1)}</div>
            </motion.div>
            <motion.div
              className="tonearm"
              animate={{ rotate: isPlaying ? -18 : -34 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="tonearm-head" />
            </motion.div>
          </div>

          <div className="now-playing">
            <p className="now-playing-title">{current.title}</p>
            <p className="now-playing-artist">{current.artist}</p>
            <button className="btn-gold play-btn" onClick={togglePlay} disabled={!hasAudio}>
              {!hasAudio ? 'Audio coming soon' : isPlaying ? 'Pause' : 'Play'}
            </button>
          </div>
        </div>

        <div className="record-shelf">
          {tracks.map((track, index) => (
            <button
              key={track.title}
              className={`record-sleeve ${index === currentIndex ? 'is-active' : ''}`}
              onClick={() => selectTrack(index)}
            >
              <span className="record-sleeve-disc" />
              <span className="record-sleeve-title">{track.title}</span>
            </button>
          ))}
        </div>
      </div>

      {hasAudio && (
        <audio
          ref={audioRef}
          src={current.audio}
          onEnded={() => setIsPlaying(false)}
        />
      )}
    </section>
  );
};

export default Playlist;
