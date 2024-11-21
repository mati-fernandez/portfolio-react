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
      setActiveModal('');
      clearTimeout(timeout);
    }, 150);
  };

  return (
    <article className={`modal`} onClick={closeModal}>
      <div className={`infoModal${!modalVisibility ? ' hidden' : ''}`}>
        <div className="infoBkg" onClick={(e) => e.stopPropagation()}>
          <h3>{translate(`${activeModal}.title`)}</h3>
          <p>{translate(`${activeModal}.text`)}</p>
          <a className="link button" onClick={closeModal}>
            {translate(`${activeModal}.continue`)}
          </a>
        </div>
      </div>
    </article>
  );
};

export default InfoModal;
