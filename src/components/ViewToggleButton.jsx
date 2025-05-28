/* eslint-disable react/prop-types */
import { motion } from "motion/react";
import { useContext } from "react";
import { PageContext, TranslationContext } from "../context/contexts";

const ViewToggleButton = ({ translateKey, className = `` }) => {
  const { actualPage, viewMore, handleViewMore } = useContext(PageContext);
  const { translate } = useContext(TranslationContext);

  const isExpanded = viewMore[actualPage];
  const labelKey = isExpanded ? "viewLess" : "viewMore";

  const motionProps = {
    initial: { opacity: 0 },
    animate: { opacity: 0.5 },
    transition: { delay: 0.5, duration: 2 },
  };

  const handleClick = () => {
    handleViewMore(isExpanded ? "hide" : "show");
  };

  return (
    <motion.button
      {...motionProps}
      className={`m-3 cursor-pointer opacity-50 ${className}`}
      onClick={handleClick}
    >
      {translate(`${translateKey}.buttons.${labelKey}`)}
    </motion.button>
  );
};

export default ViewToggleButton;
