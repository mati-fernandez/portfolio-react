/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { TranslationContext } from "../context/contexts";
import Loader from "./Loader";
import { motion } from "motion/react";

const modalVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1 },
};

const bkgVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Modal = ({
  activeModal,
  setActiveModal,
  modalVisibility,
  setModalVisibility,
}) => {
  const { translate, getImage, endpoint, contentDevPath, contentBuildPath } =
    useContext(TranslationContext);
  const [isImgLoaded, setIsImgLoaded] = useState(false);
  const srcPath =
    endpoint === "build" ? `${contentBuildPath}` : `${contentDevPath}`;

  const closeModal = () => {
    setModalVisibility(false);
    const timeout = setTimeout(() => {
      setActiveModal({
        itemKey: null,
        imgKey: null,
      });
      clearTimeout(timeout);
    }, 250);
  };

  return (
    <motion.article
      variants={bkgVariants}
      initial="hidden"
      animate={modalVisibility ? "visible" : "hidden"}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      className="modal"
      onClick={closeModal}
    >
      <motion.div
        variants={modalVariants}
        initial="hidden"
        animate={modalVisibility ? "visible" : "hidden"}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        className="detail"
      >
        <div className="modalBkg" onClick={(e) => e.stopPropagation()}>
          <h1 className="modalTitle">
            {translate(activeModal.itemKey)?.title || "undefined"}
          </h1>
          <figure className="modalFigure">
            <img
              className="modalImg"
              src={`${srcPath}${getImage(activeModal.imgKey).src}`}
              alt={translate(activeModal.itemKey).title || "undefined"}
              onLoad={() => setIsImgLoaded(true)}
            />
            {!isImgLoaded ? (
              <Loader />
            ) : (
              <figcaption className="modalCaption">
                {translate(activeModal.itemKey)?.description || "undefined"}
              </figcaption>
            )}
          </figure>
          <div className="m-0 flex justify-around">
            <a
              className="detailBtn wide:scale-80 left-2/6"
              onClick={closeModal}
            >
              {translate(activeModal.itemKey).close}
            </a>
            <a
              className="detailBtn right-1/4"
              href={getImage(activeModal.imgKey).link}
              target="_blank"
            >
              {translate(activeModal.itemKey).open}
            </a>
          </div>
        </div>
      </motion.div>
    </motion.article>
  );
};

export default Modal;
