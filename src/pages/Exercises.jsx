/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useContext, useEffect } from 'react';
import { TranslationContext } from '../i18n/TranslationContext';
import imgdom from '../assets/dom-ejercicios.png';
import imgcan from '../assets/dibujo-canvas.png';
import imgtet from '../assets/tetris-vanilla.png';
import imgmon from '../assets/monkeytype.png';
import imgexc from '../assets/excel.png';
import Info from '../assets/Info';

const links = [
  'https://mati-fernandez.github.io/portfolio-vanilla-js/dom-ejercicios/index.html',
  'https://mati-fernandez.github.io/portfolio-vanilla-js/mis-proyectos/dibujo-canvas/index.html',
  'https://mati-fernandez.github.io/portfolio-vanilla-js/mis-proyectos/tetris-vanilla/index.html',
  'https://mati-fernandez.github.io/portfolio-vanilla-js/mis-proyectos/monkeytype/index.html',
  'https://mati-fernandez.github.io/portfolio-vanilla-js/mis-proyectos/excel/index.html',
];

const Exercises = ({ notFirstLoad, handleOpenModal, imagePreLoad }) => {
  const { translate } = useContext(TranslationContext);

  useEffect(() => {
    const urls = [imgdom, imgcan, imgtet, imgmon];
    imagePreLoad(urls);
  }, []);

  return (
    <div className="page">
      <Info
        notFirstLoad={notFirstLoad}
        handleOpenModal={handleOpenModal}
        itemKey={'exercises.info'}
      />
      <button
        className="long-text button link"
        onClick={() => handleOpenModal('exercises.dom', imgdom, links[0])}
      >
        {translate('exercises.dom.title')}
      </button>
      <button
        className="long-text button link"
        onClick={() => handleOpenModal('exercises.draw', imgcan, links[1])}
      >
        {translate('exercises.draw.title')}
      </button>
      <button
        className="long-text button link"
        onClick={() => handleOpenModal('exercises.tetris', imgtet, links[2])}
      >
        {translate('exercises.tetris.title')}
      </button>
      <button
        className="long-text button link"
        onClick={() =>
          handleOpenModal('exercises.monkeytype', imgmon, links[3])
        }
      >
        {translate('exercises.monkeytype.title')}
      </button>
      <button
        className="long-text button link"
        onClick={() => handleOpenModal('exercises.excel', imgexc, links[4])}
      >
        {translate('exercises.excel.title')}
      </button>
    </div>
  );
};

export default Exercises;
