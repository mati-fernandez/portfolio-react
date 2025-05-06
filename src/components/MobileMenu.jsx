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
    },
    {
      href: "https://github.com/mati-fernandez",
      icon: <Github />,
    },
    {
      href: "https://drive.google.com/drive/folders/17_6t9pEX7BIkTsfLXCYRqWZuI0Ygty0P?usp=sharing",
      icon: <Cv />,
    },
  ];

  return (
    <div className="bg-background-alpha pointer-events-auto absolute top-0 z-10 h-[90svh] w-screen">
      <LanguageButton language={language} setLanguage={setLanguage} />
      <ThemeButton />
      <nav className="mobile-menu-instance pointer-events-auto absolute top-[50%] left-[50%] flex h-[85svh] w-full -translate-1/2 transform flex-col rounded-none pt-[8vh] text-[1.8rem]">
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
