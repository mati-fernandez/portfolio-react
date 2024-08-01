import { useContext } from 'react';
import { TranslationContext } from '../i18n/TranslationContext';

const Certifications = () => {
  const { translate } = useContext(TranslationContext);

  return (
    <div>
      <h1>{translate('certifications.title')}</h1>
    </div>
  );
};

export default Certifications;
