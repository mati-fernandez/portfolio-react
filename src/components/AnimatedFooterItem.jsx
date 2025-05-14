/* eslint-disable react/prop-types */
import { motion } from "motion/react";

export const AnimatedFooterItem = ({ children }) => (
  <motion.div
    variants={{
      hidden: { y: 0, rotate: 0 },
      visible: {
        y: [0, 20, -12, 10, -3, 0],
        rotate: [0, 1800, 2880, 3960, 3960, 3960],
      },
    }}
    transition={{ delay: 0.5, duration: 1, ease: [0, 0.75, 0.37, 0.95] }}
  >
    {children}
  </motion.div>
);
