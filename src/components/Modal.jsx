/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from 'react';
import { TranslationContext } from '../i18n/TranslationContext';

const Modal = ({ activeModal, img, link, setActiveModal }) => {
  const { translate } = useContext(TranslationContext);
  const [isLoading, setIsLoading] = useState(true);
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });

  const closeModal = () => setActiveModal(null);

  useEffect(() => {
    const image = new Image();
    image.src = img;
    image.onload = () => {
      setImageSize({ width: img.width, height: img.height });
      setIsLoading(false);
    };
  }, [img]);

  return (
    <article className={`modal`}>
      <div className="detail">
        <h3>{translate(`${activeModal}.title`)}</h3>
        <figure>
          {console.log(imageSize)}
          {isLoading && (
            <div
              className="skeleton"
              style={{
                width: `${imageSize.width}px`,
                height: `${imageSize.height}px`,
              }}
            ></div>
          )}{' '}
          {}
          <img
            src={img}
            alt={`${translate(`${activeModal}.title`)} Thumbnail`}
            style={{ display: isLoading ? 'none' : 'block' }}
            onLoad={() => setIsLoading(false)}
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
