/* eslint-disable react-hooks/exhaustive-deps */
import LanguageButton from "./LanguageButton";
import MainMenu from "./MainMenu";
import { motion } from "motion/react";

const DesktopHeader = () => {
  console.log("Header render");
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="bg-secondary mt-2.5 hidden w-full items-center justify-around landscape:flex"
    >
      <MainMenu />
      <LanguageButton />
    </motion.header>
  );
};

export default DesktopHeader;
