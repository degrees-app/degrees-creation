import React, { useEffect, useState } from 'react';

const ImageGallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const response = await fetch('/api/images');
      const data = await response.json();
      setImages(data);
    };

    fetchImages();
  }, []);

  return (
    <div>
      <h1>Галерея изображений</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {images.map((image) => (
          <div key={image.id} style={{ margin: '10px' }}>
            <img src={image.path} alt="Saved" style={{ width: '200px', height: 'auto' }} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
