// src/components/Playlist.jsx
import React, { useState } from 'react';
import '../assets/css/Playlist.css';

const tracks = [
  {
    title: "Song 1",
    artist: "Artist A",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    cover: "https://via.placeholder.com/150x150?text=Cover+1"
  },
  {
    title: "Song 2",
    artist: "Artist B",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    cover: "https://via.placeholder.com/150x150?text=Cover+2"
  },
  {
    title: "Song 3",
    artist: "Artist C",
    audio: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    cover: "https://via.placeholder.com/150x150?text=Cover+3"
  }
];

const Playlist = () => {
  const [currentTrack, setCurrentTrack] = useState(tracks[0]);

  const handleSelectTrack = (track) => {
    setCurrentTrack(track);
    const audioElement = document.getElementById('audio-player');
    audioElement.load();
    audioElement.play();
  };

  return (
    <section id="playlist-section">
      <h2>Tunes for Zain</h2>
      <div className="vinyl-grid">
        {tracks.map((track, index) => (
          <div
            key={index}
            className={`vinyl ${currentTrack.title === track.title ? 'active' : ''}`}
            onClick={() => handleSelectTrack(track)}
          >
            <img src={track.cover} alt={track.title} />
            <p>{track.title}</p>
          </div>
        ))}
      </div>
      <audio id="audio-player" controls>
        <source src={currentTrack.audio} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </section>
  );
};

export default Playlist;
