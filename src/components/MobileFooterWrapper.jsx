/* eslint-disable react/prop-types */
import Hamburguer from "../assets/Hamburguer";
import MobileMenu from "./MobileMenu";
import { useContext } from "react";
import { TranslationContext } from "../context/contexts";
import { PageContext } from "../context/contexts";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const MobileFooterWrapper = ({ setFromMenuBtn }) => {
  const { translate } = useContext(TranslationContext);
  const { showMenu, setShowMenu } = useContext(PageContext);

  return (
    <div className="pointer-events-none absolute inset-0 h-[100svh] overflow-hidden landscape:hidden">
      {showMenu && (
        <MobileMenu translate={translate} setFromMenuBtn={setFromMenuBtn} />
      )}
      <footer className="bg-background-alpha pointer-events-auto absolute bottom-0 flex h-[10svh] w-screen items-center justify-between px-4 py-0">
        <Link className="link" to="/" onClick={() => setShowMenu(false)}>
          <p className="m-0 p-4 text-2xl font-normal">Matias</p>
        </Link>
        <Hamburguer setFromMenuBtn={setFromMenuBtn} />
      </footer>
    </div>
  );
};

export default MobileFooterWrapper;
