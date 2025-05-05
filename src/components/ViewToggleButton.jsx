/* eslint-disable react/prop-types */
import { motion } from "motion/react";
import { useContext } from "react";
import { PageContext } from "../context/contexts";
import { TranslationContext } from "../context/contexts";

const ViewToggleButton = ({ alreadyShownOnce, translateKey }) => {
  const { actualPage, viewMore, handleViewMore } = useContext(PageContext);
  const { translate } = useContext(TranslationContext);

  return (
    <>
      {!viewMore[actualPage] ? (
        <motion.button
          initial={!alreadyShownOnce.current ? { opacity: 0 } : false}
          animate={!alreadyShownOnce.current ? { opacity: 0.5 } : false}
          transition={
            !alreadyShownOnce.current ? { delay: 1.5, duration: 2 } : undefined
          }
          ref={alreadyShownOnce}
          className="m-3 cursor-pointer opacity-50"
          onClick={() => handleViewMore("show")}
        >
          {translate(`${translateKey}.buttons.viewMore`)}
        </motion.button>
      ) : (
        <button
          className="m-3 cursor-pointer opacity-50"
          onClick={() => {
            alreadyShownOnce.current = true;
            handleViewMore("hide");
          }}
        >
          {translate(`${translateKey}.buttons.viewLess`)}
        </button>
      )}
    </>
  );
};

export default ViewToggleButton;
