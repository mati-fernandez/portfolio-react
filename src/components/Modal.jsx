/* eslint-disable react/prop-types */
import { useContext, useState } from 'react';
import { TranslationContext } from '../context/TranslationContext';

const Modal = ({
  activeModal,
  img,
  link,
  setActiveModal,
  modalVisibility,
  setModalVisibility,
}) => {
  const { translate } = useContext(TranslationContext);
  const [isImgLoaded, setIsImgLoaded] = useState(false);

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
            {!isImgLoaded && <div className="loader" />}
            <img
              src={img}
              alt={`${translate(`${activeModal}.title`)} Thumbnail`}
              onLoad={() => setIsImgLoaded(true)}
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
