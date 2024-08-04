import { useContext } from 'react';
import { TranslationContext } from '../i18n/TranslationContext';

const Certifications = () => {
  const { translate } = useContext(TranslationContext);

  return (
    <div className="page menu">
      <a
        className="long-text button link"
        href="https://www.freecodecamp.org/certification/matifer/responsive-web-design"
        target="_blank"
      >
        {translate('certifications.item1')}
      </a>
      <a
        className="long-text button link"
        href="https://www.freecodecamp.org/certification/matifer/javascript-algorithms-and-data-structures"
        target="_blank"
      >
        {translate('certifications.item2')}
      </a>
      <a
        className="long-text button link"
        href="https://www.freecodecamp.org/certification/matifer/front-end-development-libraries"
        target="_blank"
      >
        {translate('certifications.item3')}
      </a>
    </div>
  );
};

export default Certifications;
