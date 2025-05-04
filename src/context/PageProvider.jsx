/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { PageContext } from "./contexts";

export const PageProvider = ({ children }) => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    hidden: (notPortrait) => ({
      opacity: 0.5,
      x: notPortrait ? "-100vw" : 0,
      y: notPortrait ? 0 : "-100vh",
    }),
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        ease: "easeOut",
      },
    },
  };

  const location = useLocation();
  const [viewMore, setViewMore] = useState({
    projects: false,
    exercises: false,
    certifications: false,
  });

  const $viewMore = useRef(null);
  const $viewLess = useRef(null);

  const getActualPage = () => {
    const actual = location.pathname.match(/(\w+)$/)?.[0] || ""; // Captura la última palabra del pathname
    return actual;
  };

  const updateAspectRatio = () => {
    let aspect = "portrait";
    if (window.innerWidth / window.innerHeight > 0.6) {
      aspect = "square";
      return aspect;
    } else if (window.innerWidth / window.innerHeight > 1) {
      aspect = "landscape";
      return aspect;
    } else if (window.innerWidth / window.innerHeight > 1.2) {
      aspect = "wide";
      return aspect;
    } else return aspect;
  };

  const [aspectRatio, setAspectRatio] = useState(updateAspectRatio());

  console.log(aspectRatio, "aspect ratio");

  const [actualPage, setActualPage] = useState(getActualPage());

  useEffect(() => {
    setActualPage(getActualPage());
  }, [location.pathname]);

  // VSUALIZACION
  useEffect(() => {
    window.addEventListener("resize", () =>
      setAspectRatio(updateAspectRatio()),
    );
    setAspectRatio(updateAspectRatio());
    document.addEventListener("contextmenu", (e) => e.preventDefault());

    return () => {
      document.removeEventListener("contextmenu", (e) => e.preventDefault());
    };
  }, []);

  const handleViewMore = (e) => {
    if (e.target.matches(".view-more")) {
      setViewMore((prevState) => ({
        ...prevState,
        [actualPage]: true,
      }));
    }
    if (e.target.matches(".view-less")) {
      setViewMore((prevState) => ({
        ...prevState,
        [actualPage]: false,
      }));
    }
  };

  return (
    <PageContext.Provider
      value={{
        viewMore,
        handleViewMore,
        actualPage,
        $viewLess,
        $viewMore,
        aspectRatio,
        setAspectRatio,
        itemVariants,
        containerVariants,
      }}
    >
      {children}
    </PageContext.Provider>
  );
};
