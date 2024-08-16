/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { TranslationContext } from '../i18n/TranslationContext';

const Certifications = ({ setActiveModal }) => {
  const { translate } = useContext(TranslationContext);

  return (
    <div className="page">
      <a
        className="long-text button link"
        onClick={() => setActiveModal('certifications.item1')}
      >
        {translate('certifications.item1.title')}
      </a>
      <a
        className="long-text button link"
        onClick={() => setActiveModal('certifications.item2')}
      >
        {translate('certifications.item2.title')}
      </a>
      <a
        className="long-text button link"
        onClick={() => setActiveModal('certifications.item3')}
      >
        {translate('certifications.item3.title')}
      </a>
    </div>
  );
};

export default Certifications;
