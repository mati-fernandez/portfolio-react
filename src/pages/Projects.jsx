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

  const modals = [
    useModal(),
    useModal(),
    useModal(),
    useModal(),
    useModal(),
    useModal(),
  ];

  const content = [
    {
      title: 'projects.item1.title',
      description: 'projects.item1.description',
      img: imgrqm,
      link: 'https://mati-fernandez.github.io/random-quote-machine/',
      buttons: {
        close: 'projects.item1.button1',
        open: 'projects.item1.button2',
      },
    },
    {
      title: 'projects.item2.title',
      description: 'projects.item2.description',
      img: imgmdp,
      link: 'https://mati-fernandez.github.io/markdown-previewer/',
      buttons: {
        close: 'projects.item2.button1',
        open: 'projects.item2.button2',
      },
    },
    {
      title: 'projects.item3.title',
      description: 'projects.item3.description',
      img: imgdm,
      link: 'https://mati-fernandez.github.io/drum-machine/',
      buttons: {
        close: 'projects.item3.button1',
        open: 'projects.item3.button2',
      },
    },
    {
      title: 'projects.item4.title',
      description: 'projects.item4.description',
      img: imgcalc,
      link: 'https://mati-fernandez.github.io/js-calculator/',
      buttons: {
        close: 'projects.item4.button1',
        open: 'projects.item4.button2',
      },
    },
    {
      title: 'projects.item5.title',
      description: 'projects.item5.description',
      img: imgpc,
      link: 'https://mati-fernandez.github.io/pomodoro-clock/',
      buttons: {
        close: 'projects.item5.button1',
        open: 'projects.item5.button2',
      },
    },
    {
      title: 'projects.item6.title',
      description: 'projects.item6.description',
      img: imgop,
      link: 'https://mati-fernandez.github.io/portfolio/',
      buttons: {
        close: 'projects.item6.button1',
        open: 'projects.item6.button2',
      },
    },
  ];

  return (
    <div className="page">
      {content.map((content, index) => (
        <div key={index}>
          <a className="long-text button link" onClick={modals[index][1]}>
            {translate(content.title)}
          </a>
          <Modal
            title={translate(content.title)}
            img={content.img}
            description={translate(content.description)}
            isOpen={modals[index][0]}
            closeModal={modals[index][2]}
            closeBtn={translate(content.buttons.close)}
            openBtn={translate(content.buttons.open)}
            link={content.link}
          />
        </div>
      ))}
    </div>
  );
};

export default Projects;
