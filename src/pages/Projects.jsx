import { useContext } from 'react';
import { TranslationContext } from '../i18n/TranslationContext';

const Projects = () => {
  const { translate } = useContext(TranslationContext);

  return (
    <>
      <h1>Projects</h1>
      <div className="mobile-menu">
        <a
          className="project link"
          href="https://mati-fernandez.github.io/random-quote-machine/"
          target="_blank"
        >
          {translate('menu.projects.item1')}
        </a>
        <a
          className="project link"
          href="https://mati-fernandez.github.io/markdown-previewer/"
          target="_blank"
        >
          {translate('menu.projects.item2')}
        </a>
        <a
          className="project link"
          href="https://mati-fernandez.github.io/drum-machine/"
          target="_blank"
        >
          {translate('menu.projects.item3')}
        </a>
        <a
          className="project link"
          href="https://mati-fernandez.github.io/js-calculator/"
          target="_blank"
        >
          {translate('menu.projects.item4')}
        </a>
        <a
          className="project link"
          href="https://mati-fernandez.github.io/pomodoro-clock/"
          target="_blank"
        >
          {translate('menu.projects.item5')}
        </a>
        <a
          className="project link"
          href="https://mati-fernandez.github.io/portfolio/"
          target="_blank"
        >
          {translate('menu.projects.item6')}
        </a>
      </div>
    </>
  );
};

export default Projects;
