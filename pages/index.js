import React, { useState, useEffect } from "react";
import SwipeableImage from "../components/SwipeableImage";
import "styles/SwipeableGallery.module.css"; // import CSS file for styling

const images = ["/images/image1.jpg", "/images/image2.jpg", "/images/image3.jpg"];
const audioFiles = ["/audio/dinos.mp3", "/audio/takola.mp3","/audio/asofiane.mp3"];

const SwipeableGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentAudio, setCurrentAudio] = useState(null);

  useEffect(() => {
    const audio = new Audio(audioFiles[0]);
    audio.play();
    setCurrentAudio(audio);
  }, []);

  const handleSwipeLeft = () => {
    if (currentIndex < images.length - 1) {
      const audioIndex = currentIndex + 1;
      const audio = new Audio(audioFiles[audioIndex]);
      audio.play();
      if (currentAudio) {
        currentAudio.pause();
      }
      setCurrentAudio(audio);
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleSwipeRight = () => {
    if (currentIndex > 0) {
      const audioIndex = currentIndex - 1;
      const audio = new Audio(audioFiles[audioIndex]);
      audio.play();
      if (currentAudio) {
        currentAudio.pause();
      }
      setCurrentAudio(audio);
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="swipeable-gallery">
      <SwipeableImage
        images={images}
        currentIndex={currentIndex}
        onSwipeLeft={handleSwipeLeft}
        onSwipeRight={handleSwipeRight}
      />
    </div>
  );
};

export default SwipeableGallery;
