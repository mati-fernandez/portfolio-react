/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { TranslationContext } from '../context/TranslationContext';

const InfoModal = ({
  activeModal,
  setActiveModal,
  modalVisibility,
  setModalVisibility,
}) => {
  const { translations, images } = useContext(TranslationContext);

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

  //   if (!activeModal?.itemKey) {
  //     return null; // O un loader, si aplica
  //   }
  console.log('Translations desde InfoModal', translations);
  console.log('activeModal desde InfoModal:', activeModal);

  return (
    <>
      {activeModal.itemKey === null ||
      translations[activeModal.itemKey] === undefined ? (
        <div className="loader"></div>
      ) : (
        <article className={`modal`} onClick={closeModal}>
          <div className={`infoModal${!modalVisibility ? ' hidden' : ''}`}>
            <div className="infoBkg" onClick={(e) => e.stopPropagation()}>
              <h3>{translations[activeModal.itemKey].title}</h3>
              <p>{translations[activeModal.itemKey].text}</p>
              <a className="link button" onClick={closeModal}>
                {translations[activeModal.itemKey].continue}
              </a>
            </div>
          </div>
        </article>
      )}
    </>
  );
};

export default InfoModal;
