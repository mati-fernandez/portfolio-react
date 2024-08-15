import { useContext } from 'react';
import { TranslationContext } from '../i18n/TranslationContext';
import { useModal } from '../hooks/useModal';
import Modal from '../components/Modal';
import imgrwd from '../assets/certificado-responsive-web-design.jpg';
import imgjs from '../assets/certificado-javascript-algorithms-and-data-structures.jpg';
import imgfdl from '../assets/front-end-development-libraries.jpg';

const Certifications = () => {
  const { translate } = useContext(TranslationContext);

  const modals = [useModal(), useModal(), useModal()];

  const content = [
    {
      title: 'certifications.item1.title',
      description: 'certifications.item1.description',
      img: imgrwd,
      link: 'https://www.freecodecamp.org/certification/matifer/responsive-web-design',
      buttons: {
        close: 'certifications.item1.button1',
        open: 'certifications.item1.button2',
      },
    },
    {
      title: 'certifications.item2.title',
      description: 'certifications.item2.description',
      img: imgjs,
      link: 'https://www.freecodecamp.org/certification/matifer/javascript-algorithms-and-data-structures',
      buttons: {
        close: 'certifications.item2.button1',
        open: 'certifications.item2.button2',
      },
    },
    {
      title: 'certifications.item3.title',
      description: 'certifications.item3.description',
      img: imgfdl,
      link: 'https://www.freecodecamp.org/certification/matifer/front-end-development-libraries',
      buttons: {
        close: 'certifications.item3.button1',
        open: 'certifications.item3.button2',
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

export default Certifications;
