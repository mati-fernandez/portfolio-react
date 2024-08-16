/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { TranslationContext } from '../i18n/TranslationContext';

const Exercises = ({ setActiveModal }) => {
  const { translate } = useContext(TranslationContext);

  return (
    <div className="page">
      <a
        className="long-text button link"
        onClick={() => setActiveModal('exercises.item1')}
      >
        {translate('exercises.item1.title')}
      </a>
      <a
        className="long-text button link"
        onClick={() => setActiveModal('exercises.item2')}
      >
        {translate('exercises.item2.title')}
      </a>
      <a
        className="long-text button link"
        onClick={() => setActiveModal('exercises.item3')}
      >
        {translate('exercises.item3.title')}
      </a>
      <a
        className="long-text button link"
        onClick={() => setActiveModal('exercises.item4')}
      >
        {translate('exercises.item4.title')}
      </a>
    </div>
  );
};

export default Exercises;
