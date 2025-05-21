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
      className="bg-secondary mx-10 mt-10 hidden items-center justify-around rounded-full landscape:flex"
    >
      <MainMenu />
      <LanguageButton />
    </motion.header>
  );
};

export default DesktopHeader;
