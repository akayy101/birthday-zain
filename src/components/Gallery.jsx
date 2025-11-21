// src/components/Gallery.jsx
import React from 'react';
import Masonry from 'react-masonry-css';
import '../assets/css/Gallery.css';
import image1 from '../assets/images/cake.jpg'

// placeholder images (replace with your own images in assets)
const images = [
  image1,
  image1,
  image1,
  image1,
  image1,
  image1,
  image1,

];

const Gallery = () => {
  const breakpointColumnsObj = {
    default: 5,
    1100: 3,
    700: 2,
    500: 1
  };

  return (
    <section id="gallery-section">
      <h2>Memorable Moments</h2>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {images.map((src, index) => (
          <div key={index} className="image-item">
            <img src={src} alt={`Memory ${index + 1}`} />
          </div>
        ))}
      </Masonry>
    </section>
  );
};

export default Gallery;
