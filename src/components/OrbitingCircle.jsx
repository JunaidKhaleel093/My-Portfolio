import { motion } from 'framer-motion';

const OrbitingCircle = () => {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
      <motion.div
        className="absolute w-4 h-4 bg-cyan-900 rounded-full blur-sm"
        animate={{
          x: [0, 100, 0, -100, 0],
          y: [0, 100, 0, -100, 0],
          scale: [1, 1.2, 1, 1.2, 1],
          opacity: [0.5, 0.7, 0.5, 0.7, 0.5],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  );
};

export default OrbitingCircle;
