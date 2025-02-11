/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { PageContext } from '../context/PageContext';
import { TranslationContext } from '../context/TranslationContext';
import Info from '../assets/Info';

const Odyssey = ({ notFirstLoad, handleOpenModal }) => {
  const { actualPage, viewMore, handleViewMore, $viewMore, $viewLess } =
    useContext(PageContext);
  const { translate, getImage } = useContext(TranslationContext);

  const imagesData = getImage('odyssey');

  const translationsData = translate('odyssey.odysseyList');

  return (
    <>
      <div className={`page ${viewMore.certifications ? 'expanded' : ''}`}>
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
              <button
                key={key}
                className={`long-text button link ${
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
