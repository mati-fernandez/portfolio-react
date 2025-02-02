/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { TranslationContext } from '../context/TranslationContext';
import Info from '../assets/Info';

const Odyssey = ({ notFirstLoad, handleOpenModal }) => {
  const { translate } = useContext(TranslationContext);

  const translationsData = translate('odyssey.odysseyList');

  return (
    <div className="page">
      <Info
        notFirstLoad={notFirstLoad}
        handleOpenModal={handleOpenModal}
        itemKey={'odyssey.info'}
      />
      {Object.keys(translationsData).map((key) => (
        <button
          key={key}
          className="long-text button link"
          onClick={() =>
            handleOpenModal(`odyssey.odysseyList.` + key, `odyssey.` + key)
          }
        >
          {translationsData[key].title}
        </button>
      ))}
    </div>
  );
};

export default Odyssey;
