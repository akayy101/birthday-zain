// src/components/Poetry.jsx
import React from 'react';
import '../assets/css/Poetry.css';

const poems = [
  {
    title: "Ode to Zain",
    content: `In every frame, a story you tell,
With patience and calm, you do it so well.
Art flows through your every line,
Happy 26th! You continue to shine.`
  },
  {
    title: "Golden Memories",
    content: `Laughter echoes in every place,
Adventures together, moments we chase.
Through skies and streets, we roam and play,
Wishing you joy on this special day.`
  }
];

const Poetry = () => {
  return (
    <section id="poetry-section">
      <h2>Poetry for Zain</h2>
      <div className="poems-container">
        {poems.map((poem, index) => (
          <div key={index} className="poem-card">
            <h3>{poem.title}</h3>
            <pre>{poem.content}</pre>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Poetry;
