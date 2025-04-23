import LanguageButton from "./LanguageButton";
import MainMenu from "./MainMenu";

const DesktopHeader = () => {
  return (
    <div
      id="desktop-header"
      className="hidden w-full items-center justify-around bg-gray-400 landscape:flex"
    >
      <MainMenu />
      <LanguageButton />
    </div>
  );
};

export default DesktopHeader;
