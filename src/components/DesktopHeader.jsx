import LanguageButton from './LanguageButton';
import MainMenu from './MainMenu';

const DesktopHeader = () => {
  return (
    <div id="desktop-header">
      <MainMenu />
      <LanguageButton />
    </div>
  );
};

export default DesktopHeader;
