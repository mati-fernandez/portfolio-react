/* eslint-disable react/prop-types */
import { useContext, useEffect } from 'react';
import { TranslationContext } from '../i18n/TranslationContext';
import imgrwd from '../assets/certificado-responsive-web-design.jpg';
import imgjs from '../assets/certificado-javascript-algorithms-and-data-structures.jpg';
import imgfdl from '../assets/front-end-development-libraries.jpg';

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
        onClick={() =>
          handleOpenModal('certifications.item1', imgrwd, links[0])
        }
      >
        {translate('certifications.item1.title')}
      </a>
      <a
        className="long-text button link"
        onClick={() => handleOpenModal('certifications.item2', imgjs, links[1])}
      >
        {translate('certifications.item2.title')}
      </a>
      <a
        className="long-text button link"
        onClick={() =>
          handleOpenModal('certifications.item3', imgfdl, links[2])
        }
      >
        {translate('certifications.item3.title')}
      </a>
    </div>
  );
};

export default Certifications;
