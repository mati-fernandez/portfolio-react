import { useContext } from 'react';
import { TranslationContext } from '../i18n/TranslationContext';
import imgrqm from '../assets/random-quote-machine.png';
import { useModal } from '../hooks/useModal';

const Projects = () => {
  const { translate } = useContext(TranslationContext);
  const [isOpen1, openModal1, closeModal1] = useModal();

  return (
    <div className="page menu">
      <a className="long-text button link" target="_blank" onClick={openModal1}>
        {translate('projects.item1.title')}
      </a>
      <article className={`modal ${isOpen1 && 'is-open'}`}>
        <div className="modal-container detail">
          <h3>{translate('projects.item1.title')}</h3>
          <figure>
            <img src={imgrqm} alt="Random quote machine" />
            <figcaption>{translate('projects.item1.description')}</figcaption>
          </figure>
          <div className="btn-panel">
            <a className="link button" onClick={closeModal1}>
              {translate('projects.item1.button1')}
            </a>
            <a
              href="https://mati-fernandez.github.io/random-quote-machine/"
              target="_blank"
              className="link button"
            >
              {translate('projects.item1.button2')}
            </a>
          </div>
        </div>
      </article>
      <a
        className="long-text button link"
        href="https://mati-fernandez.github.io/markdown-previewer/"
        target="_blank"
      >
        {translate('projects.item2')}
      </a>
      <a
        className="long-text button link"
        href="https://mati-fernandez.github.io/drum-machine/"
        target="_blank"
      >
        {translate('projects.item3')}
      </a>
      <a
        className="long-text button link"
        href="https://mati-fernandez.github.io/js-calculator/"
        target="_blank"
      >
        {translate('projects.item4')}
      </a>
      <a
        className="long-text button link"
        href="https://mati-fernandez.github.io/pomodoro-clock/"
        target="_blank"
      >
        {translate('projects.item5')}
      </a>
      <a
        className="long-text button link"
        href="https://mati-fernandez.github.io/portfolio/"
        target="_blank"
      >
        {translate('projects.item6')}
      </a>
    </div>
  );
};

export default Projects;
