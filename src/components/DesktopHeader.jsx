import { motion } from "motion/react";
import { useRef } from "react";
import LanguageButton from "./LanguageButton";
import MainMenu from "./MainMenu";

const headerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0 },
};

const DesktopHeader = () => {
  const hasMounted = useRef(false);

  return (
    <motion.header
      variants={headerVariants}
      initial={hasMounted.current ? false : "hidden"}
      animate="visible"
      onAnimationComplete={() => {
        hasMounted.current = true;
      }}
      transition={{ duration: 1, ease: [0, 0.75, 0.37, 0.95] }}
      className="bg-secondary mt-2.5 hidden w-full items-center justify-around landscape:flex"
    >
      <motion.div variants={itemVariants}>
        <MainMenu />
      </motion.div>
      <LanguageButton />
    </motion.header>
  );
};

export default DesktopHeader;
