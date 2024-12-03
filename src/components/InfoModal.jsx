/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { TranslationContext } from '../context/TranslationContext';

const InfoModal = ({
  activeModal,
  setActiveModal,
  modalVisibility,
  setModalVisibility,
}) => {
  const { translate } = useContext(TranslationContext);

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

  return (
    <>
      {activeModal.itemKey === null ? (
        <div className="loader"></div>
      ) : (
        <article className={`modal`} onClick={closeModal}>
          <div className={`infoModal${!modalVisibility ? ' hidden' : ''}`}>
            <div className="infoBkg" onClick={(e) => e.stopPropagation()}>
              <h3>{translate(activeModal.itemKey).title}</h3>
              <p>{translate(activeModal.itemKey).text}</p>
              <a className="link button" onClick={closeModal}>
                {translate(activeModal.itemKey).continue}
              </a>
            </div>
          </div>
        </article>
      )}
    </>
  );
};

export default InfoModal;
