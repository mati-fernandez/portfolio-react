/* eslint-disable react/prop-types */
import avatar from "../assets/avatar.webp";
import { useContext, useState } from "react";
import { TranslationContext } from "../context/contexts";
import { motion } from "motion/react";
import Info from "../assets/Info";
import Loader from "../components/Loader";

const Home = ({ notFirstLoad, handleOpenModal }) => {
  const { translate } = useContext(TranslationContext);
  const [imgLoading, setImgLoading] = useState(true);

  const handleLoad = () => {
    setImgLoading(false);
  };

  return (
    <main className="flex w-full flex-grow flex-col items-center justify-center overflow-y-hidden p-4">
      {imgLoading && (
        <Loader className="absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2 transform" />
      )}
      <Info
        notFirstLoad={notFirstLoad}
        handleOpenModal={handleOpenModal}
        itemKey={"info"}
      />
      <div className="square:p-4 fixed top-3/7 left-1/2 flex w-3/4 flex-grow -translate-1/2 flex-col items-center justify-center overflow-y-hidden landscape:top-1/2 landscape:w-1/2">
        <motion.img
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className={`${imgLoading ? "opacity-0" : "w-1/2 opacity-100 landscape:w-1/3"}`}
          src={avatar}
          alt="avatar"
          onLoad={handleLoad}
        />
        {!imgLoading ? (
          <motion.p
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="mt-1 text-sm font-bold dark:font-normal"
          >
            {translate("description")}
          </motion.p>
        ) : null}
      </div>
    </main>
  );
};

export default Home;
