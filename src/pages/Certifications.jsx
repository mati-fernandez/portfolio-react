/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useContext, useEffect } from "react";
import { PageContext } from "../context/contexts";
import { TranslationContext } from "../context/contexts";
import { StylesContext } from "../context/contexts";
import { motion } from "motion/react";
import Info from "../assets/Info";

const Certifications = ({ notFirstLoad, handleOpenModal }) => {
  const {
    aspectRatio,
    actualPage,
    viewMore,
    handleViewMore,
    $viewMore,
    $viewLess,
    containerVariants,
    itemVariants,
  } = useContext(PageContext);

  const { updateDynamicStyles } = useContext(StylesContext);

  const { translate, getImage, endpoint } = useContext(TranslationContext);

  const imagesData = getImage("certifications");

  const translationsData = translate("certifications.certificationsList");

  useEffect(() => {
    if (notFirstLoad && $viewMore.current)
      $viewMore.current.style.opacity = 0.5;
    updateDynamicStyles(translationsData, imagesData);
  }, [aspectRatio, actualPage, viewMore, endpoint]);

  return (
    <>
      <div className="page long-content flex-grow overflow-y-hidden">
        <Info
          notFirstLoad={notFirstLoad}
          handleOpenModal={handleOpenModal}
          itemKey={"certifications.info"}
        />
        <motion.div
          className="page justify-items-center"
          custom={aspectRatio !== "portrait"}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {Object.keys(translationsData).map((key) =>
            !viewMore[actualPage] &&
            imagesData[key]?.class === "secondary" ? null : (
              <motion.button
                custom={aspectRatio !== "portrait"}
                variants={itemVariants}
                key={key}
                className={`long-text page-item ${
                  imagesData[key]?.class === "secondary" ? "sec" : ""
                }`}
                onClick={() =>
                  handleOpenModal(
                    `certifications.certificationsList.` + key,
                    `certifications.` + key,
                  )
                }
              >
                {translationsData[key].title}
              </motion.button>
            ),
          )}
          {/*.............................Ver
          más................................*/}
          {!viewMore[actualPage] ? (
            <button
              ref={$viewMore}
              className="view-more"
              onClick={handleViewMore}
            >
              {translate("certifications.buttons.viewMore")}
            </button>
          ) : (
            <button
              ref={$viewLess}
              className="view-less"
              onClick={handleViewMore}
            >
              {translate("certifications.buttons.viewLess")}
            </button>
          )}
        </motion.div>
      </div>
    </>
  );
};

export default Certifications;
