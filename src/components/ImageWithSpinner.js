import React, { useState } from 'react';
import styles from '../pages/lcc.module.css'
import Image from "next/image";

const ImageWithSpinner = ({ src, alt }) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div style={{ position: 'relative' }}>
      {isLoading && <Spinner />} {/* Show spinner while loading */}
      <Image
        src={src}
        alt={alt}
        onLoad={handleImageLoad} // Set loading to false once the image is loaded
        style={{
          display: isLoading ? 'hidden' : 'block',
          width: '100%', // Adjust the width as needed
          height: 'auto', // Maintain aspect ratio
        }}
      />
    </div>
  );
};

const Spinner = () => {
  return (
  <div className="loader">
      <span className="loader-text">loading</span>
      <span className="load"></span>
  </div>
  )// Implement your spinner component
};

export default ImageWithSpinner;