import React from "react";
import { motion } from "framer-motion";

const CircularArrowTrain = () => {
  const arrowCount = 20; // number of arrows
  const sectionHeight = 500; // height of section
  const sectionWidth = window.innerWidth; // full width
  const duration = 10; // time to cross the screen

  // Random vertical position for each arrow
  const arrows = Array.from({ length: arrowCount }).map(() => ({
    y: Math.random() * sectionHeight * 0.8 + sectionHeight * 0.1,
    delay: Math.random() * duration,
    size: 16 + Math.random() * 10, // font size variation
    opacity: 0.3 + Math.random() * 0.7, // opacity variation
  }));

  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      width="100%"
      height={sectionHeight}
    >
      {arrows.map((arrow, idx) => (
        <motion.text
          key={idx}
          y={arrow.y}
          fontSize={arrow.size}
          fill={`rgba(255,255,255,${arrow.opacity})`}
          textAnchor="middle"
          alignmentBaseline="middle"
          initial={{ x: -50 }} // start slightly off screen left
          animate={{ x: [ -50, sectionWidth + 50 ] }} // move across the screen
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
            duration,
            delay: arrow.delay,
          }}
        >
          ➤
        </motion.text>
      ))}
    </svg>
  );
};

export default CircularArrowTrain;