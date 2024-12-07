import { motion } from 'framer-motion';

const AnimatedLines = () => {
  const horizontalLines = 3; 
  const verticalLines = 3;   

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(horizontalLines)].map((_, i) => (
        <motion.div
          key={`h-${i}`}
          className="absolute h-[2px] bg-gradient-to-r from-transparent via-blue-700/60 to-transparent"
          style={{
            top: `${10 + i * 30}%`,
            filter: 'blur(0px)',
            boxShadow: '0 0 6px rgba(59, 130, 246, 0.8)',
          }}
          initial={{ width: 0, left: "0%", opacity: 0 }}
          animate={{
            width: ["0%", "100%", "0%"],
            left: ["0%", "0%", "100%"],
            opacity: [0, 1, 0], 
            scale: [0.8, 1.2, 0.8], 
            rotate: [0, 5, 0], 
          }}
          transition={{
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity,
            delay: i * 1.2,
          }}
        />
      ))}

      {[...Array(verticalLines)].map((_, i) => (
        <motion.div
          key={`v-${i}`}
          className="absolute w-[2px] bg-gradient-to-b from-transparent via-blue-400/50 to-transparent"
          style={{
            left: `${10 + i * 30}%`,
            filter: 'blur(0px)',
            boxShadow: '0 0 6px rgba(59, 130, 246, 0.8)',
          }}
          initial={{ height: 0, top: "0%", opacity: 0 }}
          animate={{
            height: ["0%", "100%", "0%"],
            top: ["0%", "0%", "100%"],
            opacity: [0, 1, 0], 
            scale: [0.8, 1.2, 0.8], 
            rotate: [0, -5, 0], 
          }}
          transition={{
            duration: 4,
            ease: "easeInOut",
            repeat: Infinity,
            delay: i * 1.2,
          }}
        />
      ))}

      {[...Array(2)].map((_, i) => (
        <motion.div
          key={`d-${i}`}
          className="absolute h-[2px] origin-left bg-gradient-to-r from-transparent via-yellow-200/50 to-transparent"
          style={{
            top: '50%',
            left: '50%',
            width: '150%',
            filter: 'blur(0px)',
            boxShadow: '0 0 6px rgba(59, 130, 246, 0.8)',
            transform: `rotate(${30 + i * 60}deg)`,
          }}
          initial={{ opacity: 0, scale: 0, skewX: -15 }}
          animate={{
            opacity: [0, 0.8, 0],
            scale: [0.6, 1.3, 0.6], 
            skewX: [-15, 0, 15], 
            rotate: [30 + i * 60, 0, 30 + i * 60], 
          }}
          transition={{
            duration: 5,
            ease: "easeInOut",
            repeat: Infinity,
            delay: i * 1.5,
          }}
        />
      ))}

      {[...Array(2)].map((_, i) => (
        <motion.div
          key={`n-${i}`}
          className="absolute w-4 h-4 rounded-full bg-yellow-100/50"
          style={{
            top: `${20 + i * 40}%`,
            left: `${20 + i * 40}%`,
            filter: 'blur(0px)',
            boxShadow: '0 0 10px rgba(59, 130, 246, 0.8)',
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            scale: [0.8, 1.5, 0.8], 
            opacity: [0.2, 0.6, 0.2],
            x: [0, 10, 0], 
            y: [0, -10, 0], 
          }}
          transition={{
            duration: 3,
            ease: "easeInOut",
            repeat: Infinity,
            delay: i * 0.8,
          }}
        />
      ))}

      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-yellow-300/70"
        style={{
          filter: 'blur(0px)',
          boxShadow: '0 0 10px rgba(59, 130, 246, 0.8)',
        }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{
          scale: [0.8, 1.5, 0.8],
          opacity: [0.4, 0.8, 0.4],
          rotate: [0, 180, 0], 
          x: [0, 5, 0], 
        }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />
    </div>
  );
};

export default AnimatedLines;
