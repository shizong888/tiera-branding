"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const AnimatedLogo = ({ width = 28, height = 28, className = "" }) => {
  const [currentFrame, setCurrentFrame] = useState(1);
  const totalFrames = 144;
  const frameRate = 30; // 30 fps

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFrame((prev) => (prev % totalFrames) + 1);
    }, 1000 / frameRate);

    return () => clearInterval(interval);
  }, []);

  const frameNumber = String(currentFrame).padStart(3, "0");
  const framePath = `/animated-logo/ezgif-frame-${frameNumber}.jpg`;

  return (
    <Image
      src={framePath}
      alt="Tiera Logo"
      width={width}
      height={height}
      className={className}
      priority
      unoptimized // Since we're rapidly cycling through images
    />
  );
};

export default AnimatedLogo;
