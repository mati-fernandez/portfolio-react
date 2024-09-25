/* eslint-disable react/prop-types */
import LanguageButton from './LanguageButton';
import MainMenu from './MainMenu';

const DesktopHeader = ({ aspectRatio }) => {
  return (
    <div id="desktop-header">
      <MainMenu aspectRatio={aspectRatio} />
      <LanguageButton />
    </div>
  );
};

export default DesktopHeader;
