import Linkedin from '../assets/Linkedin';
import Github from '../assets/Github';
import ThemeButton from './ThemeButton';
import { TranslationContext } from '../context/TranslationContext';
import { useContext } from 'react';

const DesktopFooter = () => {
  const { translations } = useContext(TranslationContext);
  // Si translations aún no está cargado
  if (!translations || Object.keys(translations).length === 0) {
    return;
  }
  return (
    <div id="desktop-footer">
      <ThemeButton />
      <a
        id="linkedin-a"
        className="button"
        href="https://www.linkedin.com/in/mati-fernandez/"
        target="blank"
      >
        <Linkedin />
      </a>
      <a
        id="github-a"
        className="button"
        href="https://github.com/mati-fernandez"
        target="_blank"
      >
        <Github />
      </a>
      <a
        id="cv-desktop"
        className="link button"
        href="https://drive.google.com/drive/folders/17_6t9pEX7BIkTsfLXCYRqWZuI0Ygty0P?usp=sharing"
        target="_blank"
      >
        CV
      </a>
    </div>
  );
};

export default DesktopFooter;
