import './App.css';
import LanguageButton from './components/LanguageButton';
import avatar from './assets/avatar.svg';
import MobileHeader from './components/MobileHeader';
import { useTranslation } from './i18n/TranslationContext';

function App() {
  const { translate, setLanguage, language } = useTranslation();

  return (
    <div id="container">
      <LanguageButton language={language} setLanguage={setLanguage} />
      <img id="avatar" src={avatar} alt="avatar" />
      <p id="presentacion">{translate('description')}</p>
      <MobileHeader />
    </div>
  );
}

export default App;
