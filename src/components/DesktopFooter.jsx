import Linkedin from '../assets/Linkedin';
import Github from '../assets/Github';
import ThemeButton from './ThemeButton';

const DesktopFooter = () => {
  return (
    <div
      id="desktop-footer"
      className="w-full h-[11svh] flex justify-around px-[5vw] box-border py-[1vh]"
    >
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
