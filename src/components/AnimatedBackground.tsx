import React from 'react';
import { motion } from 'framer-motion';

export const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Diagonal divider */}
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(155deg, transparent 50%, #fff5f5 50%)',
      }} />

      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'linear-gradient(155deg, #FF3366 0%, #FF9933 15%, #FFCC33 30%, #9933FF 50%, #FF3366 65%, #33CCFF 80%, #FF3366 95%)',
            'linear-gradient(155deg, #33CCFF 0%, #FF3366 15%, #FF9933 30%, #FFCC33 50%, #9933FF 65%, #FF3366 80%, #33CCFF 95%)',
            'linear-gradient(155deg, #9933FF 0%, #33CCFF 15%, #FF3366 30%, #FF9933 50%, #FFCC33 65%, #9933FF 80%, #33CCFF 95%)',
            'linear-gradient(155deg, #FFCC33 0%, #9933FF 15%, #33CCFF 30%, #FF3366 50%, #FF9933 65%, #FFCC33 80%, #FF3366 95%)',
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
        style={{
          maskImage: 'linear-gradient(155deg, white 49%, transparent 50%)',
          WebkitMaskImage: 'linear-gradient(155deg, white 49%, transparent 50%)',
        }}
      />

      {/* Subtle overlay for better text contrast */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(155deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)',
          maskImage: 'linear-gradient(155deg, white 49%, transparent 50%)',
          WebkitMaskImage: 'linear-gradient(155deg, white 49%, transparent 50%)',
        }}
      />

      {/* Bottom part with light color */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-[#fff5f5] to-[#fff0e6]"
        style={{
          maskImage: 'linear-gradient(155deg, transparent 49%, white 50%)',
          WebkitMaskImage: 'linear-gradient(155deg, transparent 49%, white 50%)',
        }}
      />

      {/* Floating elements with vibrant colors */}
      <motion.div
        className="absolute w-[700px] h-[700px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255,51,102,0.15) 0%, rgba(255,51,102,0) 70%)',
          top: '10%',
          left: '30%',
        }}
        animate={{
          y: [0, -40, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255,204,51,0.15) 0%, rgba(255,204,51,0) 70%)',
          top: '30%',
          right: '10%',
        }}
        animate={{
          y: [0, 30, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: 1,
        }}
      />
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(153,51,255,0.1) 0%, rgba(153,51,255,0) 70%)',
          top: '20%',
          left: '40%',
        }}
        animate={{
          y: [0, -25, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: 2,
        }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(51,204,255,0.12) 0%, rgba(51,204,255,0) 70%)',
          top: '35%',
          left: '30%',
        }}
        animate={{
          y: [0, 20, 0],
          scale: [1, 1.25, 1],
        }}
        transition={{
          duration: 13,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: 3,
        }}
      />
    </div>
  );
};