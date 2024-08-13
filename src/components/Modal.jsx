// eslint-disable-next-line react/prop-types
const Modal = ({ children }) => {
  return (
    <article className="alpha-bkg is-open">
      <div className="modal detail">{children}</div>
    </article>
  );
};

export default Modal;
