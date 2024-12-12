/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { TranslationContext } from '../context/TranslationContext';
import Info from '../assets/Info';

const Projects = ({ notFirstLoad, handleOpenModal }) => {
  const { translate } = useContext(TranslationContext);

  const translationsData = translate('projects.projectsList');

  return (
    <div className="page">
      <Info
        notFirstLoad={notFirstLoad}
        handleOpenModal={handleOpenModal}
        itemKey={'projects.info'}
      />
      {Object.keys(translationsData).map((key) =>
        key === 'portfolioReact' ? null : (
          <button
            key={key}
            className="long-text button link"
            onClick={() =>
              handleOpenModal(`projects.projectsList.` + key, `projects.` + key)
            }
          >
            {translationsData[key].title}
          </button>
        )
      )}
    </div>
  );
};

export default Projects;
