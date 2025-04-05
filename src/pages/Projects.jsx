/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { PageContext } from '../context/PageContext';
import { TranslationContext } from '../context/TranslationContext';
import Info from '../assets/Info';

const Projects = ({ notFirstLoad, handleOpenModal }) => {
  const { actualPage, viewMore } = useContext(PageContext);
  const { translate, getImage } = useContext(TranslationContext);

  const imagesData = getImage('projects');

  const translationsData = translate('projects.projectsList');

  const allKeys = Object.keys(translationsData);

  // Filtrás según viewMore
  const visibleKeys = !viewMore[actualPage]
    ? allKeys.filter((key) => imagesData[key]?.class !== 'secondary')
    : allKeys;

  const itemCount = visibleKeys.length;
  console.log('itemCount', itemCount);
  const dynamicFontSize = Math.max(1, Math.min(1.2, 3.5 / itemCount));
  const dynamicPadding = Math.max(0.4, 1 / itemCount);
  console.log(
    'dynamicFontSize',
    dynamicFontSize,
    'dynamicPadding',
    `${dynamicPadding} ${Number(dynamicPadding) * 2}`
  );

  return (
    <div className="page">
      <Info
        notFirstLoad={notFirstLoad}
        handleOpenModal={handleOpenModal}
        itemKey={'projects.info'}
      />
      {Object.keys(translationsData).map((key) =>
        key === 'portfolioReact' ? null : (
          <div
            style={{
              fontSize: dynamicFontSize + 'rem',
              padding: `${dynamicPadding}rem ${Number(dynamicPadding) * 2}rem`,
            }}
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
