import { useContext, useEffect, useState } from "react";
import { motion } from "motion/react";
import { PageContext } from "../context/contexts";

/* eslint-disable react/prop-types */
const Hamburguer = ({ setFromMenuBtn }) => {
  const { showMenu, setShowMenu } = useContext(PageContext);
  const [rings, setRings] = useState(false);

  useEffect(() => {
    setRings(true);
  }, []);

  const toggleMenu = () => {
    setRings(false);
    setShowMenu(!showMenu);
    showMenu ? setFromMenuBtn(true) : setFromMenuBtn(false);
  };

  return (
    <a className="cursor-pointer p-4" onClick={toggleMenu}>
      {showMenu ? (
        <span className="-translate-1/4 transform p-4 text-2xl font-normal">
          X
        </span>
      ) : (
        <>
          {rings &&
            [8, 8.2].map((delay, i) => (
              <motion.div
                key={i}
                className="border-general-primary-alpha square:-right-8 absolute top-1/2 -right-11 -translate-1/2 rounded-full border-10 border-dotted p-10"
                initial={{ opacity: 0, scale: 1 }}
                animate={{ scale: 0, opacity: 1 }}
                transition={{ duration: 1, repeat: Infinity, delay }}
              />
            ))}
          <svg
            className="h-6"
            alt="Hamburguer btn"
            fill="currentColor"
            width="49"
            height="33"
            stroke="currentColor"
            strokeWidth="1"
            viewBox="0 0 49 33"
            xmlnsXlink="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 0.5C0 0.223858 0.223858 0 0.5 0H47.5C47.7761 0 48 0.223858 48 0.5V0.5C48 0.776142 47.7761 1 47.5 1H0.500001C0.223859 1 0 0.776142 0 0.5V0.5Z"
              fill="currentColor"
            />
            <path
              d="M0 16.5C0 16.2239 0.223858 16 0.5 16H47.5C47.7761 16 48 16.2239 48 16.5V16.5C48 16.7761 47.7761 17 47.5 17H0.500001C0.223859 17 0 16.7761 0 16.5V16.5Z"
              fill="currentColor"
            />
            <path
              d="M0 32.5C0 32.2239 0.223858 32 0.5 32H47.5C47.7761 32 48 32.2239 48 32.5V32.5C48 32.7761 47.7761 33 47.5 33H0.500001C0.223859 33 0 32.7761 0 32.5V32.5Z"
              fill="currentColor"
            />
          </svg>
        </>
      )}
    </a>
  );
};

export default Hamburguer;
