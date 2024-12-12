/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { PageContext } from '../context/PageContext';
import { TranslationContext } from '../context/TranslationContext';
import Info from '../assets/Info';

const Certifications = ({
  notFirstLoad,
  handleOpenModal,
  $viewMore,
  $viewLess,
}) => {
  const { actualPage, viewMore, handleViewMore } = useContext(PageContext);
  const { translate, getImage } = useContext(TranslationContext);

  const imagesData = getImage('certifications');

  const translationsData = translate('certifications.certificationsList');

  return (
    <>
      <div
        className={`page long-content ${
          viewMore.certifications ? 'expanded' : ''
        }`}
      >
        <Info
          notFirstLoad={notFirstLoad}
          handleOpenModal={handleOpenModal}
          itemKey={'certifications.info'}
        />
        <>
          {Object.keys(translationsData).map((key) =>
            !viewMore[actualPage] &&
            imagesData[key]?.class === 'secondary' ? null : (
              <button
                key={key}
                className={`long-text button link ${
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
              </button>
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
              {translate('certifications.buttons.view-more')}
            </button>
          ) : (
            <button
              ref={$viewLess}
              className="view-less"
              onClick={handleViewMore}
            >
              {translate('certifications.buttons.view-less')}
            </button>
          )}
        </>
      </div>
    </>
  );
};

export default Certifications;
