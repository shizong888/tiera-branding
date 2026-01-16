"use client";

import React, { useState, useEffect, useRef } from "react";

const AnimatedLogo = ({ width = 28, height = 28, className = "" }) => {
  const [currentFrame, setCurrentFrame] = useState(1);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const totalFrames = 144;
  const frameRate = 30; // 30 fps

  // Preload all images
  useEffect(() => {
    const loadImages = async () => {
      const imagePromises = [];

      for (let i = 1; i <= totalFrames; i++) {
        const img = new Image();
        const frameNumber = String(i).padStart(3, "0");
        img.src = `/animated-logo/ezgif-frame-${frameNumber}.jpg`;
        imagesRef.current[i - 1] = img;

        imagePromises.push(
          new Promise((resolve) => {
            img.onload = resolve;
            img.onerror = resolve; // Continue even if an image fails to load
          })
        );
      }

      await Promise.all(imagePromises);
      setImagesLoaded(true);
    };

    loadImages();
  }, []);

  // Start animation only after images are loaded
  useEffect(() => {
    if (!imagesLoaded) return;

    const interval = setInterval(() => {
      setCurrentFrame((prev) => (prev % totalFrames) + 1);
    }, 1000 / frameRate);

    return () => clearInterval(interval);
  }, [imagesLoaded]);

  const frameNumber = String(currentFrame).padStart(3, "0");
  const framePath = `/animated-logo/ezgif-frame-${frameNumber}.jpg`;

  return (
    <img
      src={framePath}
      alt="Tiera Logo"
      width={width}
      height={height}
      className={className}
      style={{ display: 'block' }}
    />
  );
};

export default AnimatedLogo;
