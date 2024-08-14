import { useContext } from 'react';
import { TranslationContext } from '../i18n/TranslationContext';
import { useModal } from '../hooks/useModal';
import Modal from '../components/Modal';
import imgrqm from '../assets/random-quote-machine.png';
import imgmdp from '../assets/markdown-previewer.png';

const Projects = () => {
  const { translate } = useContext(TranslationContext);
  const [isOpen1, openModal1, closeModal1] = useModal();
  const [isOpen2, openModal2, closeModal2] = useModal();

  return (
    <div className="page menu">
      <a className="long-text button link" onClick={openModal1}>
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
        link="https://mati-fernandez.github.io/random-quote-machine/"
      />
      <a className="long-text button link" onClick={openModal2}>
        {translate('projects.item2.title')}
      </a>
      <Modal
        title={translate('projects.item2.title')}
        img={imgmdp}
        description={translate('projects.item2.description')}
        isOpen={isOpen2}
        closeModal={closeModal2}
        closeBtn={translate('projects.item2.button1')}
        openBtn={translate('projects.item2.button2')}
        link={'https://mati-fernandez.github.io/markdown-previewer/'}
      />
      <a
        className="long-text button link"
        href="https://mati-fernandez.github.io/drum-machine/"
        target="_blank"
      >
        {translate('projects.item3.title')}
      </a>
      <a
        className="long-text button link"
        href="https://mati-fernandez.github.io/js-calculator/"
        target="_blank"
      >
        {translate('projects.item4.title')}
      </a>
      <a
        className="long-text button link"
        href="https://mati-fernandez.github.io/pomodoro-clock/"
        target="_blank"
      >
        {translate('projects.item5.title')}
      </a>
      <a
        className="long-text button link"
        href="https://mati-fernandez.github.io/portfolio/"
        target="_blank"
      >
        {translate('projects.item6.title')}
      </a>
    </div>
  );
};

export default Projects;
