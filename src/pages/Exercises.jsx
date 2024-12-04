/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { TranslationContext } from '../context/TranslationContext';
import Info from '../assets/Info';

const Exercises = ({ notFirstLoad, handleOpenModal }) => {
  const { translate, getImage } = useContext(TranslationContext);

  const imagesData = getImage('exercises');

  const translationsData = translate('exercises.exercisesList');

  return (
    <div className="page">
      <Info
        notFirstLoad={notFirstLoad}
        handleOpenModal={handleOpenModal}
        itemKey={'exercises.info'}
      />
      {Object.keys(translationsData).map((key) => (
        <button
          key={key}
          className="long-text button link"
          onClick={() =>
            handleOpenModal(
              `exercises.exercisesList.` + key,
              `exercises.` + key
            )
          }
        >
          {translationsData[key].title}
        </button>
      ))}
    </div>
  );
};

export default Exercises;
