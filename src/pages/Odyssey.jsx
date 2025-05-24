/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { TranslationContext } from "../context/contexts";
import { useContext } from "react";
import { PageContext } from "../context/contexts";
import { motion } from "motion/react";
import Info from "../assets/Info";
import ViewToggleButton from "../components/ViewToggleButton";

const Odyssey = ({ handleOpenModal }) => {
  const { actualPage, viewMore, containerVariants, itemVariants, aspectRatio } =
    useContext(PageContext);

  const { translate, getImage } = useContext(TranslationContext);

  const imagesData = getImage("odyssey");

  const translationsData = translate("odyssey.odysseyList");

  return (
    <main className={`page flex-grow overflow-y-hidden`}>
      <Info handleOpenModal={handleOpenModal} itemKey={"odyssey.info"} />
      <motion.div
        key={`odysseys-${viewMore[actualPage]}`}
        className="page justify-items-center"
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
              className={`page-item ${
                imagesData[key]?.class === "secondary" ? "sec" : ""
              }`}
              onClick={() =>
                handleOpenModal(`odyssey.odysseyList.` + key, `odyssey.` + key)
              }
            >
              {translationsData[key].title}
            </motion.button>
          ),
        )}
        <ViewToggleButton translateKey={"odyssey"} />
      </motion.div>
    </main>
  );
};

export default Odyssey;
