/* eslint-disable react/prop-types */
import { useContext } from "react";
import { TranslationContext } from "../context/contexts";
import { motion } from "motion/react";
import Loader from "./Loader";

const modalVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1 },
};

const bkgVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

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
    }, 250);
  };

  return (
    <>
      {activeModal.itemKey === null ? (
        <Loader />
      ) : (
        <motion.div
          variants={bkgVariants}
          initial="hidden"
          animate={modalVisibility ? "visible" : "hidden"}
          transition={{ duration: 0.25, ease: "easeInOut" }}
          className={`modal`}
          onClick={closeModal}
        >
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate={modalVisibility ? "visible" : "hidden"}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className={`infoModal`}
          >
            <div className="infoBkg" onClick={(e) => e.stopPropagation()}>
              <h3>{translate(activeModal.itemKey).title}</h3>
              <p>{translate(activeModal.itemKey).text}</p>
              <a onClick={closeModal}>
                {translate(activeModal.itemKey).continue}
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default InfoModal;
