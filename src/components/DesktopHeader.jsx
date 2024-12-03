import LanguageButton from './LanguageButton';
import MainMenu from './MainMenu';
import { TranslationContext } from '../context/TranslationContext';
import { useContext } from 'react';

const DesktopHeader = () => {
  //   const { translations } = useContext(TranslationContext);
  //   // Si translations aún no está cargado
  //   if (!translations || Object.keys(translations).length === 0) {
  //     return;
  //   }
  return (
    <div id="desktop-header">
      <MainMenu />
      <LanguageButton />
    </div>
  );
};

export default DesktopHeader;
