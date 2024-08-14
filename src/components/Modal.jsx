/* eslint-disable react/prop-types */
const Modal = ({
  title,
  img,
  description,
  isOpen,
  closeModal,
  closeBtn,
  openBtn,
}) => {
  return (
    <article className={`modal ${isOpen && 'is-open'}`}>
      <div className="modal-container detail">
        <h3>{title}</h3>
        <figure>
          <img src={img} alt={`${title} Thumbnail`} />
          <figcaption>{description}</figcaption>
        </figure>
        <div className="btn-panel">
          <a className="link button" onClick={closeModal}>
            {closeBtn}
          </a>
          <a
            href="https://mati-fernandez.github.io/random-quote-machine/"
            target="_blank"
            className="link button"
          >
            {openBtn}
          </a>
        </div>
      </div>
    </article>
  );
};

export default Modal;
