import avatar from '../assets/avatar.svg';
import { useContext } from 'react';
import { TranslationContext } from '../i18n/TranslationContext';

const Home = () => {
  const { translate } = useContext(TranslationContext);

  return (
    <div id="container">
      <img id="avatar" src={avatar} alt="avatar" />
      <p id="presentacion">{translate('description')}</p>
    </div>
  );
};

export default Home;
