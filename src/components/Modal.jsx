/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { TranslationContext } from '../i18n/TranslationContext';
// import Modal from './ModalOld';
import imgdom from '../assets/dom-ejercicios.jpg';
import imgcan from '../assets/dibujo-canvas.png';
import imgtet from '../assets/tetris-vanilla.jpg';
import imgmon from '../assets/monkeytype.jpg';
import imgrqm from '../assets/random-quote-machine.png';
import imgmdp from '../assets/markdown-previewer.png';
import imgdm from '../assets/drum-machine.png';
import imgcalc from '../assets/js-calculator.png';
import imgpc from '../assets/pomodoro-clock.png';
import imgop from '../assets/old-portfolio.png';
import imgrwd from '../assets/certificado-responsive-web-design.jpg';
import imgjs from '../assets/certificado-javascript-algorithms-and-data-structures.jpg';
import imgfdl from '../assets/front-end-development-libraries.jpg';

const Modal = ({ activeModal, setActiveModal }) => {
  const { translate } = useContext(TranslationContext);

  const closeModal = () => setActiveModal(null);

  const content = {
    projects: {
      item1: {
        img: imgrqm,
        link: 'https://mati-fernandez.github.io/random-quote-machine/',
      },
      item2: {
        img: imgmdp,
        link: 'https://mati-fernandez.github.io/markdown-previewer/',
      },
      item3: {
        img: imgdm,
        link: 'https://mati-fernandez.github.io/drum-machine/',
      },
      item4: {
        img: imgcalc,
        link: 'https://mati-fernandez.github.io/js-calculator/',
      },
      item5: {
        img: imgpc,
        link: 'https://mati-fernandez.github.io/pomodoro-clock/',
      },
      item6: {
        img: imgop,
        link: 'https://mati-fernandez.github.io/portfolio/',
      },
    },
    certifications: {
      item1: {
        title: 'certifications.item1.title',
        description: 'certifications.item1.description',
        img: imgrwd,
        link: 'https://www.freecodecamp.org/certification/matifer/responsive-web-design',
        buttons: {
          close: 'certifications.item1.button1',
          open: 'certifications.item1.button2',
        },
      },
      item2: {
        title: 'certifications.item2.title',
        description: 'certifications.item2.description',
        img: imgjs,
        link: 'https://www.freecodecamp.org/certification/matifer/javascript-algorithms-and-data-structures',
        buttons: {
          close: 'certifications.item2.button1',
          open: 'certifications.item2.button2',
        },
      },
      item3: {
        title: 'certifications.item3.title',
        description: 'certifications.item3.description',
        img: imgfdl,
        link: 'https://www.freecodecamp.org/certification/matifer/front-end-development-libraries',
        buttons: {
          close: 'certifications.item3.button1',
          open: 'certifications.item3.button2',
        },
      },
    },
    exercises: {
      item1: {
        title: 'exercises.item1.title',
        description: 'exercises.item1.description',
        img: imgdom,
        link: 'https://mati-fernandez.github.io/portfolio/dom-ejercicios/index.html',
        buttons: {
          close: 'exercises.item1.button1',
          open: 'exercises.item1.button2',
        },
      },
      item2: {
        title: 'exercises.item2.title',
        description: 'exercises.item2.description',
        img: imgcan,
        link: 'https://mati-fernandez.github.io/portfolio/mis-proyectos/dibujo-canvas/index.html',
        buttons: {
          close: 'exercises.item2.button1',
          open: 'exercises.item2.button2',
        },
      },
      item3: {
        title: 'exercises.item3.title',
        description: 'exercises.item3.description',
        img: imgtet,
        link: 'https://mati-fernandez.github.io/portfolio/mis-proyectos/tetris-vanilla/index.html',
        buttons: {
          close: 'exercises.item3.button1',
          open: 'exercises.item3.button2',
        },
      },
      item4: {
        title: 'exercises.item4.title',
        description: 'exercises.item4.description',
        img: imgmon,
        link: 'https://mati-fernandez.github.io/portfolio/mis-proyectos/monkeytype/index.html',
        buttons: {
          close: 'exercises.item4.button1',
          open: 'exercises.item4.button2',
        },
      },
    },
  };

  // Aquí aseguramos que activeModal está dividido en secciones para acceder a content
  const [page, item] = activeModal.split('.'); // Ejemplo: 'projects.item1' -> ['projects', 'item1']

  const modalContent = content[page][item]; // Accede a content.projects.item1, por ejemplo

  return (
    <article className={`modal`}>
      <div className="detail">
        <h3>{translate(`${activeModal}.title`)}</h3>
        <figure>
          <img
            src={modalContent.img}
            alt={`${translate(`${activeModal}.title`)} Thumbnail`}
          />
          <figcaption>{translate(`${activeModal}.description`)}</figcaption>
        </figure>
        <div className="btn-panel">
          <a className="link button" onClick={closeModal}>
            {translate(`${activeModal}.button1`)}
          </a>
          <a href={modalContent.link} target="_blank" className="link button">
            {translate(`${activeModal}.button2`)}
          </a>
        </div>
      </div>
    </article>
  );
};

export default Modal;
