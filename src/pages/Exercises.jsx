/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useContext, useEffect } from 'react';
import { TranslationContext } from '../context/TranslationContext';
import imgdom from '../assets/dom-ejercicios.png';
import imgcan from '../assets/dibujo-canvas.png';
import imgtet from '../assets/tetris-vanilla.png';
import imgmon from '../assets/monkeytype.png';
import imgexc from '../assets/excel.png';
import imgnextjsblog from '../assets/nextjs-blog.png';
import Info from '../assets/Info';

const links = [
  'https://mati-fernandez.github.io/portfolio-vanilla-js/dom-ejercicios/index.html',
  'https://mati-fernandez.github.io/portfolio-vanilla-js/mis-proyectos/dibujo-canvas/index.html',
  'https://mati-fernandez.github.io/portfolio-vanilla-js/mis-proyectos/tetris-vanilla/index.html',
  'https://mati-fernandez.github.io/portfolio-vanilla-js/mis-proyectos/monkeytype/index.html',
  'https://mati-fernandez.github.io/portfolio-vanilla-js/mis-proyectos/excel/index.html',
  'https://mati-nextjs-blog.vercel.app/',
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
        onClick={() =>
          handleOpenModal('exercises.exercisesList.dom', imgdom, links[0])
        }
      >
        {translate('exercises.exercisesList.dom.title')}
      </button>
      <button
        className="long-text button link"
        onClick={() =>
          handleOpenModal('exercises.exercisesList.draw', imgcan, links[1])
        }
      >
        {translate('exercises.exercisesList.draw.title')}
      </button>
      <button
        className="long-text button link"
        onClick={() =>
          handleOpenModal('exercises.exercisesList.tetris', imgtet, links[2])
        }
      >
        {translate('exercises.exercisesList.tetris.title')}
      </button>
      <button
        className="long-text button link"
        onClick={() =>
          handleOpenModal(
            'exercises.exercisesList.monkeytype',
            imgmon,
            links[3]
          )
        }
      >
        {translate('exercises.exercisesList.monkeytype.title')}
      </button>
      <button
        className="long-text button link"
        onClick={() =>
          handleOpenModal('exercises.exercisesList.excel', imgexc, links[4])
        }
      >
        {translate('exercises.exercisesList.excel.title')}
      </button>
      <button
        className="long-text button link"
        onClick={() =>
          handleOpenModal(
            'exercises.exercisesList.nextjs-blog',
            imgnextjsblog,
            links[5]
          )
        }
      >
        {translate('exercises.exercisesList.nextjs-blog.title')}
      </button>
    </div>
  );
};

export default Exercises;
