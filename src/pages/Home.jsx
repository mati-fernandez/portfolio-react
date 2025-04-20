/* eslint-disable react/prop-types */
import avatar from '../assets/avatar.png';
import { useContext, useState } from 'react';
import { TranslationContext } from '../context/contexts';
import Info from '../assets/Info';
import Loader from '../components/Loader';

const Home = ({ notFirstLoad, handleOpenModal }) => {
  const { translate } = useContext(TranslationContext);
  const [imgLoading, setImgLoading] = useState(true);

  const handleLoad = () => {
    setImgLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center flex-grow p-4 overflow-y-hidden">
      {imgLoading && (
        <Loader className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20" />
      )}
      <Info
        notFirstLoad={notFirstLoad}
        handleOpenModal={handleOpenModal}
        itemKey={'info'}
      />
      <div className="fixed top-[46%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[75vmin] lg:top-[51%] lg:w-[100vmin] flex flex-col justify-center items-center flex-grow overflow-y-hidden">
        <img
          id="avatar"
          className={`${imgLoading ? 'opacity-0' : 'opacity-100'}`}
          src={avatar}
          alt="avatar"
          onLoad={handleLoad}
        />
        {!imgLoading ? (
          <p id="description">{translate('description')}</p>
        ) : null}
      </div>
    </div>
  );
};

export default Home;
