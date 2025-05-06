import { motion } from "motion/react";
import { useRef } from "react";
import LanguageButton from "./LanguageButton";
import MainMenu from "./MainMenu";

const headerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
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
      className="bg-secondary mt-2.5 hidden w-full items-center justify-around landscape:flex"
    >
      <MainMenu />
      <LanguageButton />
    </motion.header>
  );
};

export default DesktopHeader;
