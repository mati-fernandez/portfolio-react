/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { TranslationContext } from "../context/contexts";
import { useContext, useRef } from "react";
import { PageContext } from "../context/contexts";
import { motion } from "motion/react";
import ViewToggleButton from "../components/ViewToggleButton";
import Info from "../assets/Info";

const Certifications = ({ notFirstLoad, handleOpenModal }) => {
  const { aspectRatio, actualPage, viewMore, containerVariants, itemVariants } =
    useContext(PageContext);

  const { translate, getImage } = useContext(TranslationContext);

  const imagesData = getImage("certifications");

  const translationsData = translate("certifications.certificationsList");

  const alreadyShownOnce = useRef(false);

  return (
    <>
      <div className="page flex-grow overflow-y-hidden">
        <Info
          notFirstLoad={notFirstLoad}
          handleOpenModal={handleOpenModal}
          itemKey={"certifications.info"}
        />
        <motion.div
          className={`page justify-items-center ${viewMore ? "flex-row" : "flex-col"}`}
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
          <ViewToggleButton
            alreadyShownOnce={alreadyShownOnce}
            translateKey={"certifications"}
          />
        </motion.div>
      </div>
    </>
  );
};

export default Certifications;
