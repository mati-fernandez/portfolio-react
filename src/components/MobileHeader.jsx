import hamburguer from '../assets/hamburguer.svg';

const MobileHeader = ({ setShowMenu, showMenu }) => {
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header id="header-mobile">
      <p id="name">Matias</p>
      <button id="menu-btn" onClick={toggleMenu}>
        <img src={hamburguer} alt="Menu button" />
      </button>
    </header>
  );
};

export default MobileHeader;
