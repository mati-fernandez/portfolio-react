/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useContext, useRef } from "react";
import { PageContext } from "../context/contexts";
import { TranslationContext } from "../context/contexts";
import { motion } from "motion/react";
import Info from "../assets/Info";
import ViewToggleButton from "../components/ViewToggleButton";

const Projects = ({ notFirstLoad, handleOpenModal }) => {
  const { actualPage, viewMore, containerVariants, itemVariants, aspectRatio } =
    useContext(PageContext);

  const { translate, getImage } = useContext(TranslationContext);

  const imagesData = getImage("projects");

  const alreadyShownOnce = useRef(false);

  const translationsData = translate("projects.projectsList");

  return (
    <main className="page flex-grow overflow-y-clip">
      <Info
        notFirstLoad={notFirstLoad}
        handleOpenModal={handleOpenModal}
        itemKey={"projects.info"}
      />
      <motion.div
        className="page justify-items-center"
        custom={aspectRatio !== "portrait"}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {Object.keys(translationsData).map((key) =>
          key === "portfolioReact" ? null : !viewMore[actualPage] &&
            imagesData[key]?.class === "secondary" ? null : (
            <motion.button
              custom={aspectRatio !== "portrait"}
              variants={itemVariants}
              key={key}
              className="long-text page-item"
              onClick={() =>
                handleOpenModal(
                  `projects.projectsList.` + key,
                  `projects.` + key,
                )
              }
            >
              {translationsData[key].title}
            </motion.button>
          ),
        )}
        <ViewToggleButton
          alreadyShownOnce={alreadyShownOnce}
          translateKey={"projects"}
        />
      </motion.div>
    </main>
  );
};

export default Projects;
