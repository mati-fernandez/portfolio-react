/* eslint-disable react/prop-types */
import { useContext, useEffect } from 'react';
import { TranslationContext } from '../i18n/TranslationContext';
import imgdom from '../assets/dom-ejercicios.jpg';
import imgcan from '../assets/dibujo-canvas.png';
import imgtet from '../assets/tetris-vanilla.jpg';
import imgmon from '../assets/monkeytype.jpg';

const links = [
  'https://mati-fernandez.github.io/portfolio/dom-ejercicios/index.html',
  'https://mati-fernandez.github.io/portfolio/mis-proyectos/dibujo-canvas/index.html',
  'https://mati-fernandez.github.io/portfolio/mis-proyectos/tetris-vanilla/index.html',
  'https://mati-fernandez.github.io/portfolio/mis-proyectos/monkeytype/index.html',
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
    </div>
  );
};

export default Exercises;