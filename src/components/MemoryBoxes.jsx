import React, { useState } from 'react';
import '../assets/css/Memory.css';
import image1 from '../assets/images/cake.jpg'

// Example memories (replace with your own content)
const memories = [
  { 
    title: "Football Chaos", 
    content: "Remember the time we played football in the rain and you slipped into the mud 😂",
    media: image1
  },
  { 
    title: "Travel Laughs", 
    content: "Our impromptu trip to Sargodha was full of hilarious moments!",
    media: "https://via.placeholder.com/300x200?text=Travel"
  },
  { 
    title: "Pottery Fun", 
    content: "That pottery class where you made that 'unique' vase 😆",
    media: "https://via.placeholder.com/300x200?text=Pottery"
  },
  { 
    title: "Photography Day", 
    content: "You capturing every random street with your artistic eye 📸",
    media: "https://via.placeholder.com/300x200?text=Photography"
  },
];

const MemoryBoxes = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleBox = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="memory-section">
      <h2>Zain's Chronicles</h2>
      <div className="memory-grid">
        {memories.map((memory, index) => (
          <div
            key={index}
            className={`memory-box ${openIndex === index ? 'open' : ''}`}
            onClick={() => toggleBox(index)}
          >
            <h3>{memory.title}</h3>
            {openIndex === index && (
              <div className="memory-content">
                {memory.media && (
                  memory.media.endsWith(".mp4") ? 
                    <video src={memory.media} controls /> :
                    <img src={memory.media} alt={memory.title} />
                )}
                <p>{memory.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default MemoryBoxes;
