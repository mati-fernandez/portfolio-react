import { useContext } from 'react';
import { TranslationContext } from '../i18n/TranslationContext';

const Exercises = () => {
  const { translate } = useContext(TranslationContext);

  return (
    <div className="mobile-menu">
      <a
        href="https://mati-fernandez.github.io/portfolio/dom-ejercicios/index.html"
        className="link"
        target="_blank"
      >
        {translate('exercises.item1')}
      </a>
      <a
        href="https://mati-fernandez.github.io/portfolio/mis-proyectos/dibujo-canvas/index.html"
        className="link"
        target="_blank"
      >
        {translate('exercises.item2')}
      </a>
      <a
        href="https://mati-fernandez.github.io/portfolio/mis-proyectos/tetris-vanilla/index.html"
        className="link"
        target="_blank"
      >
        {translate('exercises.item3')}
      </a>
      <a
        href="https://mati-fernandez.github.io/portfolio/mis-proyectos/monkeytype/index.html"
        className="link"
        target="_blank"
      >
        {translate('exercises.item4')}
      </a>
    </div>
  );
};

export default Exercises;
