/* eslint-disable react/prop-types */
import { useContext, useEffect } from 'react';
import { TranslationContext } from '../i18n/TranslationContext';
import imgrwd from '../assets/cert-resp.png';
import imgjs from '../assets/cert-js.png';
import imgfdl from '../assets/cert-front.png';

const links = [
  'https://www.freecodecamp.org/certification/matifer/responsive-web-design',
  'https://www.freecodecamp.org/certification/matifer/javascript-algorithms-and-data-structures',
  'https://www.freecodecamp.org/certification/matifer/front-end-development-libraries',
];

const Certifications = ({ handleOpenModal, imagePreLoad }) => {
  const { translate } = useContext(TranslationContext);

  useEffect(() => {
    const urls = [imgrwd, imgjs, imgfdl];
    imagePreLoad(urls);
  }, []);

  return (
    <div className="page">
      <a
        className="long-text button link"
        onClick={() => handleOpenModal('certifications.rwd', imgrwd, links[0])}
      >
        {translate('certifications.rwd.title')}
      </a>
      <a
        className="long-text button link"
        onClick={() =>
          handleOpenModal('certifications.javascript', imgjs, links[1])
        }
      >
        {translate('certifications.javascript.title')}
      </a>
      <a
        className="long-text button link"
        onClick={() => handleOpenModal('certifications.fdl', imgfdl, links[2])}
      >
        {translate('certifications.fdl.title')}
      </a>
    </div>
  );
};

export default Certifications;
