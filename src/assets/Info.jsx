/* eslint-disable react-hooks/exhaustive-deps */
import { motion, useAnimation } from "framer-motion";
import { PageContext } from "../context/contexts";
import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";

/* eslint-disable react/prop-types */

const Info = ({ handleOpenModal, itemKey }) => {
  const { firstLoad, setFirstLoad } = useContext(PageContext);
  const location = useLocation();
  const page = location.pathname.split("/").at(-1);
  const controls = useAnimation();

  useEffect(() => {
    if (firstLoad[page]) {
      controls.start("normal").then(() => {
        controls.start("shake");
      });
    } else {
      controls.start("normal");
    }

    setFirstLoad((prev) => ({ ...prev, [page]: false }));
  }, []);

  const variants = {
    initial: { opacity: 0, y: "-5vh", rotate: 0 },
    normal: { opacity: 0.5, y: 0, rotate: 360 },
    shake: {
      opacity: 0.5,
      y: [0, -5, 5, -5, 5, 0],
      rotate: 360,
      transition: { duration: 0.6, repeat: Infinity, repeatDelay: 2, delay: 2 },
    },
  };

  return (
    <motion.svg
      onClick={() => handleOpenModal(itemKey)}
      alt="Info"
      className="fill-icon absolute top-8 right-8 w-fit cursor-pointer opacity-50 landscape:top-30 landscape:right-18"
      xmlnsXlink="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="100"
      height="100"
      viewBox="0 0 50 50"
      initial="initial"
      animate={controls}
      variants={variants}
    >
      <path d="M 25 2 C 12.309295 2 2 12.309295 2 25 C 2 37.690705 12.309295 48 25 48 C 37.690705 48 48 37.690705 48 25 C 48 12.309295 37.690705 2 25 2 z M 25 4 C 36.609824 4 46 13.390176 46 25 C 46 36.609824 36.609824 46 25 46 C 13.390176 46 4 36.609824 4 25 C 4 13.390176 13.390176 4 25 4 z M 25 11 A 3 3 0 0 0 22 14 A 3 3 0 0 0 25 17 A 3 3 0 0 0 28 14 A 3 3 0 0 0 25 11 z M 21 21 L 21 23 L 22 23 L 23 23 L 23 36 L 22 36 L 21 36 L 21 38 L 22 38 L 23 38 L 27 38 L 28 38 L 29 38 L 29 36 L 28 36 L 27 36 L 27 21 L 26 21 L 22 21 L 21 21 z"></path>
    </motion.svg>
  );
};

export default Info;
