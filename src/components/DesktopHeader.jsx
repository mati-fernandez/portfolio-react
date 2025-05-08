/* eslint-disable react-hooks/exhaustive-deps */
import LanguageButton from "./LanguageButton";
import MainMenu from "./MainMenu";

const DesktopHeader = () => {
  console.log("Header render");
  return (
    <header className="bg-secondary mt-2.5 hidden w-full items-center justify-around landscape:flex">
      <MainMenu />
      <LanguageButton />
    </header>
  );
};

export default DesktopHeader;
