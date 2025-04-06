/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useContext, useEffect } from 'react';
import { PageContext } from '../context/PageContext';
import { TranslationContext } from '../context/TranslationContext';
import { StylesContext } from '../context/StylesContext';
import Info from '../assets/Info';

const Projects = ({ aspectRatio, notFirstLoad, handleOpenModal }) => {
  const { actualPage, viewMore, $viewMore } = useContext(PageContext);

  const { updateDynamicStyles, dynamicStyles } = useContext(StylesContext);

  const { translate, getImage, endpoint } = useContext(TranslationContext);

  const imagesData = getImage('projects');

  const translationsData = translate('projects.projectsList');
  useEffect(() => {
    if (notFirstLoad && $viewMore.current)
      $viewMore.current.style.opacity = 0.5;
    console.log(updateDynamicStyles, 'updateDynamicStyles');
    // const delay = setTimeout(() => {
    updateDynamicStyles(translationsData, imagesData);
    // }, 1000);
    // return () => clearTimeout(delay);
  }, [aspectRatio, actualPage, viewMore, endpoint]);

  return (
    <div className="page ">
      <Info
        notFirstLoad={notFirstLoad}
        handleOpenModal={handleOpenModal}
        itemKey={'projects.info'}
      />
      {Object.keys(translationsData).map((key) =>
        key === 'portfolioReact' ? null : (
          <div
            style={dynamicStyles}
            key={key}
            className="long-text page-item"
            onClick={() =>
              handleOpenModal(`projects.projectsList.` + key, `projects.` + key)
            }
          >
            {translationsData[key].title}
          </div>
        )
      )}
    </div>
  );
};

export default Projects;
