/* eslint-disable react-hooks/exhaustive-deps */
import { motion } from "motion/react";
import LanguageButton from "./LanguageButton";
import MainMenu from "./MainMenu";
import { useContext } from "react";
import { ThemeContext } from "../context/contexts";

const headerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const DesktopHeader = () => {
  const { hasAnimatedHeader, setHasAnimatedHeader } = useContext(ThemeContext);
  console.log("Header render");
  return (
    <motion.header
      variants={headerVariants}
      initial={!hasAnimatedHeader ? "hidden" : false}
      animate="visible"
      onAnimationComplete={() => {
        if (!hasAnimatedHeader) setHasAnimatedHeader(true);
      }}
      className="bg-secondary mt-2.5 hidden w-full items-center justify-around landscape:flex"
    >
      <MainMenu />
      <LanguageButton />
    </motion.header>
  );
};

export default DesktopHeader;
