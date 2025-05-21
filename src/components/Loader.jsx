/* eslint-disable react/prop-types */
import { motion } from "motion/react";

const Loader = ({ size = "10vw", borderSize = "8px", className = "" }) => {
  return (
    <motion.div
      className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-white border-t-blue-500 ${className}`}
      style={{
        width: size,
        height: size,
        borderWidth: borderSize,
        borderStyle: "solid",
      }}
      animate={{
        rotate: [0, 360],
      }}
      transition={{
        duration: 0.5,
        repeat: Infinity,
        ease: "linear",
      }}
    />
  );
};

export default Loader;
