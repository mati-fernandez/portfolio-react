import hamburguer from '../assets/hamburguer.svg';

const MobileHeader = () => {
  return (
    <header id="header-mobile">
      <p id="name">Matias</p>
      <img src={hamburguer} alt="Menu button" />
    </header>
  );
};

export default MobileHeader;
