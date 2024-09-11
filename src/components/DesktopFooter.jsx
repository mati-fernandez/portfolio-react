import Linkedin from '../assets/Linkedin';
import Github from '../assets/Github';
import ThemeButton from './ThemeButton';

const DesktopFooter = () => {
  return (
    <div id="desktop-footer">
      <ThemeButton />
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
