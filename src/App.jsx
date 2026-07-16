import React from 'react';
import Hero from './components/Hero';
import Letter from './components/Letter';
import Slideshow from './components/Slideshow';
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
      <Slideshow />
      <Playlist />
      <Game />
      <Interlude />
      <Ending />
    </div>
  );
}

export default App;
