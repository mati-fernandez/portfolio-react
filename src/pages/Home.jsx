/* eslint-disable react/prop-types */
import avatar from '../assets/avatar.png';
import { useContext, useState } from 'react';
import { TranslationContext } from '../context/TranslationContext';
import Info from '../assets/Info';

const Home = ({ notFirstLoad, handleOpenModal }) => {
  const { translate, translations } = useContext(TranslationContext);
  const [imgLoading, setImgLoading] = useState(true);

  const handleLoad = () => {
    setImgLoading(false);
  };

  // Si translations aún no está cargado, mostramos el loading
  if (!translations || Object.keys(translations).length === 0) {
    return <div className="loader"></div>;
  }
  return (
    <>
      <Info
        notFirstLoad={notFirstLoad}
        handleOpenModal={handleOpenModal}
        itemKey={'info'}
      />
      <div className="container">
        <img id="avatar" src={avatar} alt="avatar" onLoad={handleLoad} />
        {!imgLoading && <p id="description">{translate('description')}</p>}
      </div>
    </>
  );
};

export default Home;
