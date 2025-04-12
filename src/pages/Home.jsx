/* eslint-disable react/prop-types */
import avatar from '../assets/avatar.png';
import { useContext, useState } from 'react';
import { TranslationContext } from '../context/TranslationContext';
import Info from '../assets/Info';
import Loader from '../components/Loader';

const Home = ({ notFirstLoad, handleOpenModal }) => {
  const { translate } = useContext(TranslationContext);
  const [imgLoading, setImgLoading] = useState(true);

  const handleLoad = () => {
    setImgLoading(false);
  };

  return (
    <div className="page flex-grow overflow-y-hidden">
      <Info
        notFirstLoad={notFirstLoad}
        handleOpenModal={handleOpenModal}
        itemKey={'info'}
      />
      <div className="container flex-grow overflow-y-hidden">
        <img
          id="avatar"
          style={{
            opacity: imgLoading ? 0 : 1,
          }}
          src={avatar}
          alt="avatar"
          onLoad={handleLoad}
        />
        {!imgLoading ? (
          <p
            id="description"
            style={{ opacity: imgLoading && !notFirstLoad ? 0 : 1 }}
          >
            {translate('description')}
          </p>
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default Home;
