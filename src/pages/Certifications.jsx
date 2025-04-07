/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useContext, useEffect } from 'react';
import { PageContext } from '../context/PageContext';
import { TranslationContext } from '../context/TranslationContext';
import { StylesContext } from '../context/StylesContext';
import Info from '../assets/Info';

const Certifications = ({ notFirstLoad, handleOpenModal }) => {
  const {
    aspectRatio,
    actualPage,
    viewMore,
    handleViewMore,
    $viewMore,
    $viewLess,
  } = useContext(PageContext);

  const { updateDynamicStyles, dynamicStyles } = useContext(StylesContext);

  const { translate, getImage, endpoint } = useContext(TranslationContext);

  const imagesData = getImage('certifications');

  const translationsData = translate('certifications.certificationsList');

  useEffect(() => {
    if (notFirstLoad && $viewMore.current)
      $viewMore.current.style.opacity = 0.5;
    updateDynamicStyles(translationsData, imagesData);
  }, [aspectRatio, actualPage, viewMore, endpoint]);

  return (
    <>
      <div className="page long-content">
        <Info
          notFirstLoad={notFirstLoad}
          handleOpenModal={handleOpenModal}
          itemKey={'certifications.info'}
        />
        <>
          {Object.keys(translationsData).map((key) =>
            !viewMore[actualPage] &&
            imagesData[key]?.class === 'secondary' ? null : (
              <div
                style={dynamicStyles}
                key={key}
                className={`long-text page-item ${
                  imagesData[key]?.class === 'secondary' ? 'secondary' : ''
                }`}
                onClick={() =>
                  handleOpenModal(
                    `certifications.certificationsList.` + key,
                    `certifications.` + key
                  )
                }
              >
                {translationsData[key].title}
              </div>
            )
          )}
          {/*.............................Ver
          más................................*/}
          {!viewMore[actualPage] ? (
            <button
              style={dynamicStyles}
              ref={$viewMore}
              className="view-more"
              onClick={handleViewMore}
            >
              {translate('certifications.buttons.viewMore')}
            </button>
          ) : (
            <button
              style={dynamicStyles}
              ref={$viewLess}
              className="view-less"
              onClick={handleViewMore}
            >
              {translate('certifications.buttons.viewLess')}
            </button>
          )}
        </>
      </div>
    </>
  );
};

export default Certifications;
