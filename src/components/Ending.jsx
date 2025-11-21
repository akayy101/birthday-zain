// src/components/Ending.jsx
import React from 'react';
import '../assets/css/Ending.css';

const Ending = () => {
  return (
    <section id="ending-section">
      <div className="ending-content">
        <h2>Happy Birthday, Zain! 🎉</h2>
        <p>
          Thank you for being the amazing friend, elder-brother figure, and goofy soul that you are.  
          Here's to more laughter, adventures, and golden memories together!  
          <br /><br />
          Wishing you endless joy, creativity, and all the things you love.  
        </p>
        <p className="signature">— With love, Ariba ❤️</p>
      </div>
      <div className="confetti">
        <span></span><span></span><span></span><span></span><span></span>
        <span></span><span></span><span></span><span></span><span></span>
      </div>
    </section>
  );
};

export default Ending;
