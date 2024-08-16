import { useContext } from 'react';
import { TranslationContext } from '../i18n/TranslationContext';
import { useModal } from '../hooks/useModal';
import Modal from '../components/Modal';
import imgdom from '../assets/dom-ejercicios.jpg';
import imgcan from '../assets/dibujo-canvas.png';
import imgtet from '../assets/tetris-vanilla.jpg';
import imgmon from '../assets/monkeytype.jpg';

const Exercises = () => {
  const { translate } = useContext(TranslationContext);

  const modals = [useModal(), useModal(), useModal(), useModal()];

  const content = [
    {
      title: 'exercises.item1.title',
      description: 'exercises.item1.description',
      img: imgdom,
      link: 'https://mati-fernandez.github.io/portfolio/dom-ejercicios/index.html',
      buttons: {
        close: 'exercises.item1.button1',
        open: 'exercises.item1.button2',
      },
    },
    {
      title: 'exercises.item2.title',
      description: 'exercises.item2.description',
      img: imgcan,
      link: 'https://mati-fernandez.github.io/portfolio/mis-proyectos/dibujo-canvas/index.html',
      buttons: {
        close: 'exercises.item2.button1',
        open: 'exercises.item2.button2',
      },
    },
    {
      title: 'exercises.item3.title',
      description: 'exercises.item3.description',
      img: imgtet,
      link: 'https://mati-fernandez.github.io/portfolio/mis-proyectos/tetris-vanilla/index.html',
      buttons: {
        close: 'exercises.item3.button1',
        open: 'exercises.item3.button2',
      },
    },
    {
      title: 'exercises.item4.title',
      description: 'exercises.item4.description',
      img: imgmon,
      link: 'https://mati-fernandez.github.io/portfolio/mis-proyectos/monkeytype/index.html',
      buttons: {
        close: 'exercises.item4.button1',
        open: 'exercises.item4.button2',
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

export default Exercises;
