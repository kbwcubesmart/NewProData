import React from "react";
import { motion } from "framer-motion";

const ArrowSnakeBackground = ({ trainCount = 5, arrowsPerTrain = 12 }) => {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  // Generate random start positions and radii
  const trains = Array.from({ length: trainCount }, (_, tIdx) => {
    return {
      id: tIdx,
      radius: 50 + tIdx * 40, // different radius
      speed: 8 + tIdx * 2, // different speed
      startAngle: Math.random() * 360,
      centerX: screenWidth / 2,
      centerY: screenHeight / 2,
    };
  });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {trains.map((train) =>
        Array.from({ length: arrowsPerTrain }).map((_, i) => {
          const angleOffset = (360 / arrowsPerTrain) * i;
          return (
            <motion.div
              key={`${train.id}-${i}`}
              className="absolute"
              style={{
                left: train.centerX,
                top: train.centerY,
              }}
              animate={{
                rotate: [0 + angleOffset, 360 + angleOffset],
              }}
              transition={{
                repeat: Infinity,
                duration: train.speed,
                ease: "linear",
              }}
            >
              <motion.span
                style={{
                  display: "inline-block",
                  position: "absolute",
                  x: train.radius,
                  fontSize: 24,
                  color: "rgba(255,255,255,0.5)",
                }}
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  repeat: Infinity,
                  duration: train.speed,
                  ease: "linear",
                  delay: i * 0.2,
                }}
              >
                ➤
              </motion.span>
            </motion.div>
          );
        })
      )}
    </div>
  );
};

export default ArrowSnakeBackground;
