/* eslint-disable react/prop-types */
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

  const links = [
    {
      href: "https://www.linkedin.com/in/mati-fernandez/",
      icon: <Linkedin />,
      className: "linkedin-a",
    },
    {
      href: "https://github.com/mati-fernandez",
      icon: <Github />,
    },
    {
      href: "https://drive.google.com/drive/folders/17_6t9pEX7BIkTsfLXCYRqWZuI0Ygty0P?usp=sharing",
      icon: <Cv />,
      id: "cv-mobile-a",
    },
  ];

  return (
    <div className="menu">
      <LanguageButton language={language} setLanguage={setLanguage} />
      <ThemeButton />
      <nav id="mobile-main-menu" className="rounded-none">
        <MainMenu setFromMenuBtn={setFromMenuBtn} />
        <div className="flex h-[100%] items-center justify-center">
          {links.map(
            ({ href, icon, className = "", id, target = "_blank" }, i) => (
              <a
                key={i}
                href={href}
                className={`${className} text-primary mx-[6vw] my-[2vh] flex items-center justify-center border-0 bg-transparent p-[2vh]`}
                id={id}
                target={target}
              >
                {icon}
              </a>
            ),
          )}
        </div>
      </nav>
    </div>
  );
};

export default MobileMenu;
