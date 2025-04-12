import { motion } from 'motion/react';

const Loader = () => {
  return (
    <motion.div
      className="w-[10vw] h-[10vw] border-8 border-white border-t-blue-500 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50"
      animate={{
        rotate: [0, 360],
      }}
      transition={{
        duration: 0.5,
        repeat: Infinity,
        ease: 'linear',
      }}
    />
  );
};

export default Loader;
