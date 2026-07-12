import React from 'react';
import Hero from './components/Hero';
import Letter from './components/Letter';
import Gallery from './components/Gallery';
import MemoryBoxes from './components/MemoryBoxes';
import Poetry from './components/Poetry';
import Playlist from './components/Playlist';
import Game from './components/Game';
import Interlude from './components/Interlude';
import Ending from './components/Ending';

function App() {
  return (
    <div>
      <Hero />
      <Letter />
      <Gallery />
      <Playlist />
      <Game />
      <Interlude />
      <Ending />
    </div>
  );
}

export default App;
