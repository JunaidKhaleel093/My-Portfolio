import { motion } from 'framer-motion';

const AnimatedSquares = () => {
  const cornerSquares = [
    // Top left squares
    { x: 25, y: 15, targetX: 0, targetY: 0 },
    { x: 15, y: 10, targetX: -5, targetY: -5 },
    // Top right squares
    { x: 85, y: 5, targetX: 95, targetY: 0 },
    { x: 80, y: 15, targetX: 100, targetY: -5 },
    // Bottom left squares
    { x: 10, y: 85, targetX: 0, targetY: 95 },
    { x: 5, y: 80, targetX: -5, targetY: 100 },
    // Bottom right squares
    { x: 85, y: 85, targetX: 95, targetY: 95 },
    { x: 90, y: 80, targetX: 100, targetY: 100 },
  ].map((pos, i) => ({
    ...pos,
    id: i,
    size: Math.random() * 20 + 15,
    rotation: Math.random() * 360,
    duration: Math.random() * 15 + 20,
    delay: Math.random() * 2,
  }));

  const colors = [
    'bg-white/30', 

    'bg-yellow-100/30',

    'bg-pink-100/90',

    'bg-blue-950/80',
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {cornerSquares.map((square) => (
        <motion.div
          key={square.id}
          className={`absolute ${colors[square.id % colors.length]} backdrop-blur-sm border border-slate-100/50`}
          style={{
            width: square.size,
            height: square.size,
            left: `${square.x}%`,
            top: `${square.y}%`,
            rotate: `${square.rotation}deg`,
          }}
          animate={{
            x: [`${0}%`, `${square.targetX - square.x}%`],
            y: [`${0}%`, `${square.targetY - square.y}%`],
            rotate: [square.rotation, square.rotation + 360],
            scale: [1, 0.8, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: square.duration,
            repeat: Infinity,
            delay: square.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedSquares;