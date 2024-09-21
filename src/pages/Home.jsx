import avatar from '../assets/avatar.png';
import { useContext, useState } from 'react';
import { TranslationContext } from '../i18n/TranslationContext';

const Home = () => {
  const { translate } = useContext(TranslationContext);
  const [imgLoading, setImgLoading] = useState(true);

  // Evita el document flicker
  const handleLoad = () => {
    setImgLoading(false);
  };

  return (
    <div className="container">
      <img id="avatar" src={avatar} alt="avatar" onLoad={handleLoad} />
      {!imgLoading && (
        <>
          <p id="presentacion">{translate('description')}</p>
        </>
      )}
    </div>
  );
};

export default Home;
