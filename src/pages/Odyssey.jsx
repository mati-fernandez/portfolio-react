/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useContext, useEffect } from 'react';
import { PageContext } from '../context/PageContext';
import { TranslationContext } from '../context/TranslationContext';
import { StylesContext } from '../context/StylesContext';
import Info from '../assets/Info';

const Odyssey = ({ aspectRatio, notFirstLoad, handleOpenModal }) => {
  const { actualPage, viewMore, handleViewMore, $viewMore, $viewLess } =
    useContext(PageContext);

  const { updateDynamicStyles, dynamicStyles } = useContext(StylesContext);

  const { translate, getImage, endpoint } = useContext(TranslationContext);

  const imagesData = getImage('odyssey');

  const translationsData = translate('odyssey.odysseyList');

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
    <>
      <div className={`page long-content`}>
        <Info
          notFirstLoad={notFirstLoad}
          handleOpenModal={handleOpenModal}
          itemKey={'odyssey.info'}
        />
        <>
          {Object.keys(translationsData).map((key) =>
            !viewMore[actualPage] &&
            imagesData[key]?.class === 'secondary' ? null : (
              // Odysseys buttons
              <div
                style={dynamicStyles}
                key={key}
                className={`long-text page-item ${
                  imagesData[key]?.class === 'secondary' ? 'secondary' : ''
                }`}
                onClick={() =>
                  handleOpenModal(
                    `odyssey.odysseyList.` + key,
                    `odyssey.` + key
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
              ref={$viewMore}
              className="view-more"
              onClick={handleViewMore}
            >
              {translate('odyssey.buttons.viewMore')}
            </button>
          ) : (
            <button
              ref={$viewLess}
              className="view-less"
              onClick={handleViewMore}
            >
              {translate('odyssey.buttons.viewLess')}
            </button>
          )}
        </>
      </div>
    </>
  );
};

export default Odyssey;
