import hamburguer from '../assets/hamburguer.svg';
import MobileMenu from './MobileMenu';
import { useContext } from 'react';
import { TranslationContext } from '../i18n/TranslationContext';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const MobileHeader = ({ showMenu, setShowMenu }) => {
  const { translate } = useContext(TranslationContext);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div id="wrapper">
      {showMenu && <MobileMenu translate={translate} />}
      <header id="mobile-header">
        <Link className="link" to="/">
          <p id="name">Matias</p>
        </Link>
        <a id="hamburguer-btn" onClick={toggleMenu}>
          <img src={hamburguer} alt="Menu button" />
        </a>
      </header>
    </div>
  );
};

export default MobileHeader;