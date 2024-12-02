/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from 'react';
import { TranslationContext } from '../context/TranslationContext';

const Modal = ({
  activeModal,
  setActiveModal,
  modalVisibility,
  setModalVisibility,
}) => {
  const { translations, images } = useContext(TranslationContext);
  const [isImgLoaded, setIsImgLoaded] = useState(false);

  const closeModal = () => {
    setModalVisibility(false);
    const timeout = setTimeout(() => {
      setActiveModal({
        itemKey: null,
        imgKey: null,
      });
      clearTimeout(timeout);
    }, 150);
  };

  useEffect(() => {
    if (activeModal && activeModal.itemKey) {
      setModalVisibility(true);
    }
  }, [activeModal, setModalVisibility]);

  if (activeModal.itemKey === null) return;

  return (
    <article className={`modal`} onClick={closeModal}>
      <div className={`detail${!modalVisibility ? ' hidden' : ''}`}>
        <div className="modalBkg" onClick={(e) => e.stopPropagation()}>
          <h3>{translations[activeModal.itemKey]?.title || 'undefined'}</h3>
          <figure>
            {!isImgLoaded && <div className="loader" />}
            <img
              src={activeModal.img}
              alt={translations[activeModal.itemKey]?.title || 'undefined'}
              onLoad={() => setIsImgLoaded(true)}
            />
            <figcaption>
              {translations[activeModal.itemKey]?.description || 'undefined'}
            </figcaption>
          </figure>
          <div className="btn-panel">
            <a className="link button" onClick={closeModal}>
              {`${translations[activeModal.itemKey]}.close`}
            </a>
            <a
              href={`${translations[activeModal.itemKey]}.link`}
              target="_blank"
              className="link button"
            >
              {`${translations[activeModal.itemKey]}.open`}
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Modal;
