import React from "react";
import { motion } from "framer-motion";

const ArrowBackground = () => {
  const rows = 5; // number of arrow rows
  const arrowsPerRow = 30;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {[...Array(rows)].map((_, row) => (
        <motion.div
          key={row}
          className="absolute flex whitespace-nowrap"
          style={{
            top: `${row * 20 + 10}%`,
            fontSize: '3rem',
            opacity: 0.1 + row * 0.15,
          }}
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            repeat: Infinity,
            duration: 20 + row * 5, // different speeds
            ease: 'linear',
          }}
        >
          {Array.from({ length: arrowsPerRow }).map((_, i) => (
            <span key={i} className="mx-6 text-white">➤</span>
          ))}
          {/* duplicate for seamless loop */}
          {Array.from({ length: arrowsPerRow }).map((_, i) => (
            <span key={`dup-${i}`} className="mx-6 text-white">➤</span>
          ))}
        </motion.div>
      ))}
    </div>
  );
};

export default ArrowBackground;
