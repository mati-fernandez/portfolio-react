/* eslint-disable react/prop-types */
import Hamburguer from "../assets/Hamburguer";
import MobileMenu from "./MobileMenu";
import { useContext } from "react";
import { TranslationContext } from "../context/contexts";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const MobileFooterWrapper = ({ showMenu, setShowMenu, setFromMenuBtn }) => {
  const { translate } = useContext(TranslationContext);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    showMenu ? setFromMenuBtn(true) : setFromMenuBtn(false);
  };

  return (
    <div className="pointer-events-none absolute inset-0 h-[100svh] overflow-hidden landscape:hidden">
      {showMenu && (
        <MobileMenu translate={translate} setFromMenuBtn={setFromMenuBtn} />
      )}
      <footer className="bg-background-alpha pointer-events-auto absolute bottom-0 flex h-[10vh] w-screen items-center justify-between px-[4vw] py-0">
        <Link className="link" to="/" onClick={() => setShowMenu(false)}>
          <p className="m-0 p-[2vw] text-[1.8rem] font-normal">Matias</p>
        </Link>
        <a className="cursor-pointer p-[2vh]" onClick={toggleMenu}>
          <Hamburguer showMenu={showMenu} />
        </a>
      </footer>
    </div>
  );
};

export default MobileFooterWrapper;
