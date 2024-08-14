import { useContext } from 'react';
import { TranslationContext } from '../i18n/TranslationContext';
import { useModal } from '../hooks/useModal';
import Modal from '../components/Modal';
import imgrqm from '../assets/random-quote-machine.png';
import imgmdp from '../assets/markdown-previewer.png';
import imgdm from '../assets/drum-machine.png';
import imgcalc from '../assets/js-calculator.png';
import imgpc from '../assets/pomodoro-clock.png';
import imgop from '../assets/old-portfolio.png';

const Projects = () => {
  const { translate } = useContext(TranslationContext);
  const [isOpen1, openModal1, closeModal1] = useModal();
  const [isOpen2, openModal2, closeModal2] = useModal();
  const [isOpen3, openModal3, closeModal3] = useModal();
  const [isOpen4, openModal4, closeModal4] = useModal();
  const [isOpen5, openModal5, closeModal5] = useModal();
  const [isOpen6, openModal6, closeModal6] = useModal();

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
      <a className="long-text button link" onClick={openModal3}>
        {translate('projects.item3.title')}
      </a>
      <Modal
        title={translate('projects.item3.title')}
        img={imgdm}
        description={translate('projects.item3.description')}
        isOpen={isOpen3}
        closeModal={closeModal3}
        closeBtn={translate('projects.item3.button1')}
        openBtn={translate('projects.item3.button2')}
        link={'https://mati-fernandez.github.io/drum-machine/'}
      />
      <a className="long-text button link" onClick={openModal4}>
        {translate('projects.item4.title')}
      </a>
      <Modal
        title={translate('projects.item4.title')}
        img={imgcalc}
        description={translate('projects.item4.description')}
        isOpen={isOpen4}
        closeModal={closeModal4}
        closeBtn={translate('projects.item4.button1')}
        openBtn={translate('projects.item4.button2')}
        link={'https://mati-fernandez.github.io/js-calculator/'}
      />
      <a className="long-text button link" onClick={openModal5}>
        {translate('projects.item5.title')}
      </a>
      <Modal
        title={translate('projects.item5.title')}
        img={imgpc}
        description={translate('projects.item5.description')}
        isOpen={isOpen5}
        closeModal={closeModal5}
        closeBtn={translate('projects.item5.button1')}
        openBtn={translate('projects.item5.button2')}
        link={'https://mati-fernandez.github.io/pomodoro-clock/'}
      />
      <a className="long-text button link" onClick={openModal6}>
        {translate('projects.item6.title')}
      </a>
      <Modal
        title={translate('projects.item6.title')}
        img={imgop}
        description={translate('projects.item6.description')}
        isOpen={isOpen6}
        closeModal={closeModal6}
        closeBtn={translate('projects.item6.button1')}
        openBtn={translate('projects.item6.button2')}
        link={'https://mati-fernandez.github.io/portfolio/'}
      />
    </div>
  );
};

export default Projects;
