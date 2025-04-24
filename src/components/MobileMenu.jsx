/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import Linkedin from "../assets/Linkedin";
import Github from "../assets/Github";
import Cv from "../assets/Cv";
import LanguageButton from "../components/LanguageButton";
import { useContext } from "react";
import { TranslationContext } from "../context/contexts";
import MainMenu from "./MainMenu";
import ThemeButton from "./ThemeButton";

const MobileMenu = ({ setFromMenuBtn }) => {
  const { language, setLanguage } = useContext(TranslationContext);

  return (
    <div className="menu">
      <LanguageButton language={language} setLanguage={setLanguage} />
      <ThemeButton />
      <nav id="mobile-main-menu" className="rounded-none">
        <MainMenu setFromMenuBtn={setFromMenuBtn} />
        <div id="contact-wrapper">
          <a
            className="button linkedin-a"
            href="https://www.linkedin.com/in/mati-fernandez/"
            target="blank"
          >
            <Linkedin />
          </a>
          <a
            className="button"
            href="https://github.com/mati-fernandez"
            target="_blank"
          >
            <Github />
          </a>
          <a
            id="cv-mobile-a"
            className="button"
            href="https://drive.google.com/drive/folders/17_6t9pEX7BIkTsfLXCYRqWZuI0Ygty0P?usp=sharing"
            target="_blank"
          >
            <Cv />
          </a>
        </div>
      </nav>
    </div>
  );
};

MobileMenu.propTypes = {
  translate: PropTypes.func.isRequired,
};

export default MobileMenu;
