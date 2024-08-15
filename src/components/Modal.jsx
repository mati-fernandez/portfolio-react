/* eslint-disable react/prop-types */

const Modal = ({
  title,
  img,
  description,
  isOpen,
  closeModal,
  closeBtn,
  openBtn,
  link,
}) => {
  return (
    <article className={`modal ${isOpen && 'is-open'}`}>
      <div className="detail">
        <h3>{title}</h3>
        <figure>
          <img src={img} alt={`${title} Thumbnail`} />
          <figcaption>{description}</figcaption>
        </figure>
        <div className="btn-panel">
          <a className="link button" onClick={closeModal}>
            {closeBtn}
          </a>
          <a href={link} target="_blank" className="link button">
            {openBtn}
          </a>
        </div>
      </div>
    </article>
  );
};

export default Modal;
