/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { PageContext } from '../context/PageContext';
import { TranslationContext } from '../context/TranslationContext';
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

  let dynamicFontSize = 0;
  if (aspectRatio === 'portrait') {
    dynamicFontSize = Math.max(1, Math.min(1.2, 3.5 / itemCount));
  } else if (aspectRatio === 'square') {
    dynamicFontSize = Math.max(0.8, Math.min(1.2, 3.5 / itemCount));
  } else {
    dynamicFontSize = Math.max(0.8, Math.min(1, 3.5 / itemCount));
  }

  const dynamicPadding = Math.max(0.4, 1 / itemCount);

  let dynamicMargin = 0;
  if (aspectRatio === 'portrait') {
    dynamicMargin = Math.max(0.1, 7 / itemCount);
  } else if (aspectRatio === 'square') {
    dynamicMargin = Math.max(0.4, Math.min(1.2, 3.5 / itemCount));
  } else {
    dynamicMargin = Math.max(0.1, 1 / itemCount);
  }

  console.log(
    'dynamicFontSize',
    dynamicFontSize,
    'dynamicPadding',
    `${dynamicPadding} ${dynamicPadding * 2}`,
    'dynamicMarginBottom',
    ` ${dynamicMargin * 2}`,
    'dynamicMarginInline',
    `${dynamicMargin / 2}`
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
                  padding: `${dynamicPadding}rem ${dynamicPadding * 2}rem`,
                  marginBottom: `${dynamicMargin * 2}rem `,
                  marginInline: `${dynamicMargin / 2}rem`,
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
