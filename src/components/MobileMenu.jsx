import linkedin from '../assets/linkedin.svg';
import github from '../assets/github.svg';

const MobileMenu = () => {
  return (
    <nav id="mobile-menu">
      <a>Inicio</a>
      <a>Proyectos</a>
      <a>Certificaciones</a>
      <a>Ejerciciios</a>
      <div id="contacto">
        <img src={linkedin} alt="linkedin" />
        <img src={github} alt="github" />
      </div>
    </nav>
  );
};

export default MobileMenu;
