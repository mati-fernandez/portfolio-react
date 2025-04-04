/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { updateViewportHeight } from '../helpers/updateViewportHeight';

export const PageContext = createContext();

export const PageProvider = ({ children }) => {
  const location = useLocation();
  const [viewMore, setViewMore] = useState({
    projects: false,
    exercises: false,
    certifications: false,
  });

  const $viewMore = useRef(null);
  const $viewLess = useRef(null);

  const getActualPage = () => {
    const actual = location.pathname.match(/(\w+)$/)?.[0] || ''; // Captura la última palabra del pathname
    return actual;
  };

  const updateAspectRatio = () =>
    window.innerWidth / window.innerHeight < 1.2 ? 'portrait' : 'landscape';
  const [aspectRatio, setAspectRatio] = useState(updateAspectRatio());

  const [actualPage, setActualPage] = useState(getActualPage());

  useEffect(() => {
    setActualPage(getActualPage());
  }, [location.pathname]);

  // VSUALIZACION
  useEffect(() => {
    updateViewportHeight();
    window.addEventListener('resize', () =>
      setAspectRatio(updateAspectRatio())
    );
    setAspectRatio(updateAspectRatio());
    document.addEventListener('contextmenu', (e) => e.preventDefault());

    return () => {
      document.removeEventListener('contextmenu', (e) => e.preventDefault());
    };
  }, []);

  const handleViewMore = (e) => {
    if (e.target.matches('.view-more')) {
      console.log('Mostrando más para la página:', actualPage);

      setViewMore((prevState) => ({
        ...prevState,
        [actualPage]: true,
      }));
      console.log($viewLess, 'view less full obj');
    }
    if (e.target.matches('.view-less')) {
      setViewMore((prevState) => ({
        ...prevState,
        [actualPage]: false,
      }));
      console.log($viewMore, 'view more full obj');
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
      }}
    >
      {children}
    </PageContext.Provider>
  );
};
