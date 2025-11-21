import React from 'react';
import Hero from './components/hero';
import Letter from './components/Letter';
import Gallery from './components/Gallery';
import MemoryBoxes from './components/MemoryBoxes';
import Poetry from './components/Poetry';
import Playlist from './components/Playlist';
import Game from './components/Game';
import Ending from './components/Ending';

function App() {
  return (
    <div>
      <Hero />
      <Letter />
      <Gallery />
      <MemoryBoxes />
      <Poetry />
      <Playlist />
      <Game />
      <Ending />
    </div>
  );
}

export default App;
