import LanguageButton from "./LanguageButton";
import MainMenu from "./MainMenu";

const DesktopHeader = () => {
  return (
    <div
      id="desktop-header"
      className="bg-secondary mt-2.5 hidden w-full items-center justify-around landscape:flex"
    >
      <MainMenu />
      <LanguageButton />
    </div>
  );
};

export default DesktopHeader;
