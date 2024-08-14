import { useContext } from 'react';
import { TranslationContext } from '../i18n/TranslationContext';
import imgrqm from '../assets/random-quote-machine.png';
import { useModal } from '../hooks/useModal';
import Modal from '../components/Modal';

const Projects = () => {
  const { translate } = useContext(TranslationContext);
  const [isOpen1, openModal1, closeModal1] = useModal();

  return (
    <div className="page menu">
      <a className="long-text button link" target="_blank" onClick={openModal1}>
        {translate('projects.item1.title')}
      </a>
      <Modal
        title={translate('projects.item1.title')}
        img={imgrqm}
        description={translate('projects.item1.description')}
        isOpen={isOpen1}
        closeModal={closeModal1}
        closeBtn={translate('projects.item1.button1')}
        openBtn={translate('projects.item1.button2')}
      />
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
