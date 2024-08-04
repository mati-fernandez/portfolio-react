import { Link } from 'react-router-dom';
import LanguageButton from './LanguageButton';
import linkedin from '../assets/linkedin.svg';
import github from '../assets/github.svg';

const DesktopHeader = () => {
  return (
    <div id="desktop-header">
      <Link className="button" to="/">
        <img id="logo" src="favicon.svg " alt="Matias" />
      </Link>
      <a
        className="button"
        href="https://www.linkedin.com/in/mati-fernandez/"
        target="blank"
      >
        <img className="contact-img" src={linkedin} alt="linkedin" />
      </a>
      <a
        className="button"
        href="https://github.com/mati-fernandez"
        target="_blank"
      >
        <img className="contact-img" src={github} alt="github" />
      </a>
      <LanguageButton />
    </div>
  );
};

export default DesktopHeader;
