/* eslint-disable react/prop-types */
import { useContext, useEffect } from 'react';
import { TranslationContext } from '../i18n/TranslationContext';
import imgdom from '../assets/dom-ejercicios.png';
import imgcan from '../assets/dibujo-canvas.png';
import imgtet from '../assets/tetris-vanilla.png';
import imgmon from '../assets/monkeytype.png';
import imgexc from '../assets/excel.png';

const links = [
  'https://mati-fernandez.github.io/portfolio-vanilla-js/dom-ejercicios/index.html',
  'https://mati-fernandez.github.io/portfolio-vanilla-js/mis-proyectos/dibujo-canvas/index.html',
  'https://mati-fernandez.github.io/portfolio-vanilla-js/mis-proyectos/tetris-vanilla/index.html',
  'https://mati-fernandez.github.io/portfolio-vanilla-js/mis-proyectos/monkeytype/index.html',
  'https://mati-fernandez.github.io/portfolio-vanilla-js/mis-proyectos/excel/index.html',
];

const Exercises = ({ handleOpenModal, imagePreLoad }) => {
  const { translate } = useContext(TranslationContext);

  useEffect(() => {
    const urls = [imgdom, imgcan, imgtet, imgmon];
    imagePreLoad(urls);
  }, []);

  return (
    <div className="page">
      <a
        className="long-text button link"
        onClick={() => handleOpenModal('exercises.item1', imgdom, links[0])}
      >
        {translate('exercises.item1.title')}
      </a>
      <a
        className="long-text button link"
        onClick={() => handleOpenModal('exercises.item2', imgcan, links[1])}
      >
        {translate('exercises.item2.title')}
      </a>
      <a
        className="long-text button link"
        onClick={() => handleOpenModal('exercises.item3', imgtet, links[2])}
      >
        {translate('exercises.item3.title')}
      </a>
      <a
        className="long-text button link"
        onClick={() => handleOpenModal('exercises.item4', imgmon, links[3])}
      >
        {translate('exercises.item4.title')}
      </a>
      <a
        className="long-text button link"
        onClick={() => handleOpenModal('exercises.item5', imgexc, links[4])}
      >
        {translate('exercises.item5.title')}
      </a>
    </div>
  );
};

export default Exercises;
