import LanguageButton from './LanguageButton';
import linkedin from '../assets/linkedin.svg';
import github from '../assets/github.svg';

const DesktopHeader = () => {
  return (
    <div id="desktop-header">
      <LanguageButton />
      <a
        className="button linkedin-a"
        href="https://www.linkedin.com/in/mati-fernandez/"
        target="blank"
      >
        <img className="contact-img linkedin" src={linkedin} alt="linkedin" />
      </a>
      <a
        className="button"
        href="https://github.com/mati-fernandez"
        target="_blank"
      >
        <img className="contact-img" src={github} alt="github" />
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

export default DesktopHeader;
