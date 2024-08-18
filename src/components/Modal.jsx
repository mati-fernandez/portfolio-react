/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { TranslationContext } from '../i18n/TranslationContext';

const Modal = ({ activeModal, img, link, setActiveModal }) => {
  const { translate } = useContext(TranslationContext);

  const closeModal = () => setActiveModal(null);

  return (
    <article className={`modal`}>
      <div className="detail">
        <h3>{translate(`${activeModal}.title`)}</h3>
        <figure>
          <img
            src={img}
            alt={`${translate(`${activeModal}.title`)} Thumbnail`}
          />
          <figcaption>{translate(`${activeModal}.description`)}</figcaption>
        </figure>
        <div className="btn-panel">
          <a className="link button" onClick={closeModal}>
            {translate(`${activeModal}.button1`)}
          </a>
          <a href={link} target="_blank" className="link button">
            {translate(`${activeModal}.button2`)}
          </a>
        </div>
      </div>
    </article>
  );
};

export default Modal;
