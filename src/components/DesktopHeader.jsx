import { motion } from "motion/react";
import LanguageButton from "./LanguageButton";
import MainMenu from "./MainMenu";

const DesktopHeader = () => {
  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={{
        visible: { transition: { staggerChildren: 0.1 } },
      }}
      className="bg-secondary mt-2.5 hidden w-full items-center justify-around landscape:flex"
    >
      <MainMenu />
      <LanguageButton />
    </motion.header>
  );
};

export default DesktopHeader;
