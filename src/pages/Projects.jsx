import { useContext } from 'react';
import { TranslationContext } from '../i18n/TranslationContext';
import Modal from '../components/Modal';
import imgrqm from '../assets/random-quote-machine.png';

const Projects = () => {
  const { translate } = useContext(TranslationContext);

  return (
    <div className="page menu">
      <a
        className="long-text button link"
        href="https://mati-fernandez.github.io/random-quote-machine/"
        target="_blank"
      >
        {translate('projects.item1.title')}
      </a>
      <Modal>
        <h3>{translate('projects.item1.title')}</h3>
        <figure>
          <img src={imgrqm} alt="Random quote machine" />
          <figcaption>{translate('projects.item1.description')}</figcaption>
        </figure>
        <div className="btn-panel">
          <a href="#" className="link button">
            {translate('projects.item1.button1')}
          </a>
          <a href="#" className="link button">
            {translate('projects.item1.button2')}
          </a>
        </div>
      </Modal>
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
