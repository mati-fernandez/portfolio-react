/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useContext, useEffect } from 'react';
import { TranslationContext } from '../i18n/TranslationContext';
import imgrwd from '../assets/cert-resp.png';
import imgjs from '../assets/cert-js.png';
import imgfdl from '../assets/cert-front.png';
import imghtml from '../assets/cert-html.jpeg';
import imghtml5css3 from '../assets/cert-jquery.jpeg';
import imgbbdd from '../assets/cert-bbdd.jpeg';
import imgflash from '../assets/cert-flash.jpeg';
import imgpresu from '../assets/cert-presu.jpeg';
import imgphoto from '../assets/cert-photo.jpeg';
import imgcssdivs from '../assets/cert-css-divs.jpeg';
import imgjquery from '../assets/cert-jquery.jpeg';
import Info from '../assets/Info';

const links = [
  'https://www.freecodecamp.org/certification/matifer/responsive-web-design',
  'https://www.freecodecamp.org/certification/matifer/javascript-algorithms-and-data-structures',
  'https://www.freecodecamp.org/certification/matifer/front-end-development-libraries',
  'https://www.educacionit.com/perfil/matias-fernandez-93622/certificado/9621',
  'https://www.educacionit.com/perfil/matias-fernandez-93622/certificado/13704',
  'https://www.educacionit.com/perfil/matias-fernandez-93622/certificado/9672',
  'https://www.educacionit.com/perfil/matias-fernandez-93622/certificado/9628',
  'https://www.educacionit.com/perfil/matias-fernandez-93622/certificado/12631',
  'https://www.educacionit.com/perfil/matias-fernandez-93622/certificado/9614',
  'https://www.educacionit.com/perfil/matias-fernandez-93622/certificado/13571',
  'https://www.educacionit.com/perfil/matias-fernandez-93622/certificado/13273',
];

const Certifications = ({
  notFirstLoad,
  handleOpenModal,
  imagePreLoad,
  viewMore,
  actualPage,
  $viewMore,
  $viewLess,
}) => {
  const { translate } = useContext(TranslationContext);

  useEffect(() => {
    const urls = [imgrwd, imgjs, imgfdl];
    imagePreLoad(urls);
  }, []);

  return (
    <>
      <div className="page long-content">
        <Info
          notFirstLoad={notFirstLoad}
          handleOpenModal={handleOpenModal}
          itemKey={'certifications.info'}
        />
        <a
          className="long-text button link"
          onClick={() =>
            handleOpenModal('certifications.rwd', imgrwd, links[0])
          }
        >
          {translate('certifications.rwd.title')}
        </a>
        <a
          className="long-text button link"
          onClick={() =>
            handleOpenModal('certifications.javascript', imgjs, links[1])
          }
        >
          {translate('certifications.javascript.title')}
        </a>
        <a
          className="long-text button link"
          onClick={() =>
            handleOpenModal('certifications.fdl', imgfdl, links[2])
          }
        >
          {translate('certifications.fdl.title')}
        </a>
        {/* ------------------- Enlaces secundarios ---------------------- */}
        {(viewMore[actualPage] && (
          <>
            <a
              className="long-text button link secondary"
              onClick={() =>
                handleOpenModal('certifications.html', imghtml, links[3])
              }
            >
              {translate('certifications.html.title')}
            </a>
            <a
              className="long-text button link secondary"
              onClick={() =>
                handleOpenModal(
                  'certifications.html5css3',
                  imghtml5css3,
                  links[4]
                )
              }
            >
              {translate('certifications.html5css3.title')}
            </a>
            <a
              className="long-text button link secondary"
              onClick={() =>
                handleOpenModal('certifications.bbdd', imgbbdd, links[5])
              }
            >
              {translate('certifications.bbdd.title')}
            </a>
            <a
              className="long-text button link secondary"
              onClick={() =>
                handleOpenModal('certifications.flash', imgflash, links[6])
              }
            >
              {translate('certifications.flash.title')}
            </a>
            <a
              className="long-text button link secondary"
              onClick={() =>
                handleOpenModal('certifications.presu', imgpresu, links[7])
              }
            >
              {translate('certifications.presu.title')}
            </a>
            <a
              className="long-text button link secondary"
              onClick={() =>
                handleOpenModal('certifications.photo', imgphoto, links[8])
              }
            >
              {translate('certifications.photo.title')}
            </a>
            <a
              className="long-text button link secondary"
              onClick={() =>
                handleOpenModal('certifications.cssdivs', imgcssdivs, links[9])
              }
            >
              {translate('certifications.cssdivs.title')}
            </a>
            <a
              className="long-text button link secondary"
              onClick={() =>
                handleOpenModal('certifications.jquery', imgjquery, links[10])
              }
            >
              {translate('certifications.jquery.title')}
            </a>
            <a ref={$viewLess} className="view-less">
              {translate('buttons.view-less')}
            </a>
          </>
        )) || (
          /*.............................Ver más................................*/
          <a ref={$viewMore} className="view-more">
            {translate('buttons.view-more')}
          </a>
        )}
      </div>
    </>
  );
};

export default Certifications;
