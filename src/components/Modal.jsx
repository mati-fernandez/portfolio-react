/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { TranslationContext } from '../i18n/TranslationContext';

const Modal = ({
  activeModal,
  img,
  link,
  setActiveModal,
  modalVisibility,
  setModalVisibility,
}) => {
  const { translate } = useContext(TranslationContext);

  const closeModal = () => {
    setModalVisibility(false);
    const timeout = setTimeout(() => {
      setActiveModal('');
      clearTimeout(timeout);
    }, 150);
  };

  return (
    <article className={`modal`} onClick={closeModal}>
      <div className={`detail${!modalVisibility ? ' hidden' : ''}`}>
        <div className="modalBkg" onClick={(e) => e.stopPropagation()}>
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
              {translate(`${activeModal}.close`)}
            </a>
            <a href={link} target="_blank" className="link button">
              {translate(`${activeModal}.open`)}
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Modal;
