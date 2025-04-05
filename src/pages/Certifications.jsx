/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { PageContext } from '../context/PageContext';
import { TranslationContext } from '../context/TranslationContext';
import Info from '../assets/Info';

const Certifications = ({ notFirstLoad, handleOpenModal }) => {
  const { actualPage, viewMore, handleViewMore, $viewMore, $viewLess } =
    useContext(PageContext);
  const { translate, getImage } = useContext(TranslationContext);

  const imagesData = getImage('certifications');

  const translationsData = translate('certifications.certificationsList');

  const allKeys = Object.keys(translationsData);

  // Filtrás según viewMore
  const visibleKeys = !viewMore[actualPage]
    ? allKeys.filter((key) => imagesData[key]?.class !== 'secondary')
    : allKeys;

  const itemCount = visibleKeys.length;
  console.log('itemCount', itemCount);
  const dynamicFontSize = Math.max(0.5, Math.min(1.2, 10 / itemCount));
  const dynamicPadding = Math.max(0.4, 1 / itemCount);
  console.log(
    'dynamicFontSize',
    dynamicFontSize,
    'dynamicPadding',
    `${dynamicPadding} ${Number(dynamicPadding) * 2}`
  );

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
                style={{
                  fontSize: dynamicFontSize + 'rem',
                  padding: `${dynamicPadding}rem ${
                    Number(dynamicPadding) * 2
                  }rem`,
                }}
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
              ref={$viewMore}
              className="view-more"
              onClick={handleViewMore}
            >
              {translate('certifications.buttons.viewMore')}
            </button>
          ) : (
            <button
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
