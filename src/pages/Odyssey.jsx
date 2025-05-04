/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useContext, useEffect } from "react";
import { PageContext } from "../context/contexts";
import { TranslationContext } from "../context/contexts";
import { StylesContext } from "../context/contexts";
import Info from "../assets/Info";
import { motion } from "motion/react";

const Odyssey = ({ notFirstLoad, handleOpenModal }) => {
  const {
    actualPage,
    viewMore,
    handleViewMore,
    $viewMore,
    $viewLess,
    containerVariants,
    itemVariants,
    aspectRatio,
  } = useContext(PageContext);

  const { updateDynamicStyles } = useContext(StylesContext);

  const { translate, getImage, endpoint } = useContext(TranslationContext);

  const imagesData = getImage("odyssey");

  const translationsData = translate("odyssey.odysseyList");

  useEffect(() => {
    if (notFirstLoad && $viewMore.current)
      $viewMore.current.style.opacity = 0.5;
    console.log(updateDynamicStyles, "updateDynamicStyles");
    // const delay = setTimeout(() => {
    updateDynamicStyles(translationsData, imagesData);
    // }, 1000);
    // return () => clearTimeout(delay);
  }, [aspectRatio, actualPage, viewMore, endpoint]);

  useEffect(() => {}, [aspectRatio]);

  return (
    <>
      <div className={`page long-content flex-grow overflow-y-hidden`}>
        <Info
          notFirstLoad={notFirstLoad}
          handleOpenModal={handleOpenModal}
          itemKey={"odyssey.info"}
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
                    `odyssey.odysseyList.` + key,
                    `odyssey.` + key,
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
              {translate("odyssey.buttons.viewMore")}
            </button>
          ) : (
            <button
              ref={$viewLess}
              className="view-less"
              onClick={handleViewMore}
            >
              {translate("odyssey.buttons.viewLess")}
            </button>
          )}
        </motion.div>
      </div>
    </>
  );
};

export default Odyssey;
