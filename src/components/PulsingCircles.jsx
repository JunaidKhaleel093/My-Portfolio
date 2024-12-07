import { motion } from 'framer-motion';

const PulsingCircles = () => {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
      {[1, 2, 3].map((index) => (
        <motion.div
          key={index}
          className="absolute rounded-full border-2 border-cyan-400"
          style={{
            width: '300px',
            height: '300px',
            left: '-150px',
            top: '-150px',
          }}
          initial={{ scale: 0.1, opacity: 0 }}
          animate={{
            scale: [0.1, 2],
            opacity: [0.6, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: index * 1.2,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
};

export default PulsingCircles;
