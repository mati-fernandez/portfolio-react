/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useContext, useEffect } from 'react';
import { TranslationContext } from '../context/TranslationContext';
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
import imgics from '../assets/cert-ics.png';
import Info from '../assets/Info';

const links = {
  rwd: 'https://www.freecodecamp.org/certification/matifer/responsive-web-design',
  javascript:
    'https://www.freecodecamp.org/certification/matifer/javascript-algorithms-and-data-structures',
  fdl: 'https://www.freecodecamp.org/certification/matifer/front-end-development-libraries',
  ics: 'https://www.credly.com/badges/86f90a98-4290-4eb1-8c12-909598a92c6d',
  html: 'https://www.educacionit.com/perfil/matias-fernandez-93622/certificado/9621',
  html5css3:
    'https://www.educacionit.com/perfil/matias-fernandez-93622/certificado/13704',
  bbdd: 'https://www.educacionit.com/perfil/matias-fernandez-93622/certificado/9672',
  flash:
    'https://www.educacionit.com/perfil/matias-fernandez-93622/certificado/9628',
  presu:
    'https://www.educacionit.com/perfil/matias-fernandez-93622/certificado/12631',
  photo:
    'https://www.educacionit.com/perfil/matias-fernandez-93622/certificado/9614',
  cssdivs:
    'https://www.educacionit.com/perfil/matias-fernandez-93622/certificado/13571',
  jquery:
    'https://www.educacionit.com/perfil/matias-fernandez-93622/certificado/13273',
};

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
        <button
          className="long-text button link"
          onClick={() =>
            handleOpenModal(
              'certifications.certificationsList.rwd',
              imgrwd,
              links.rwd
            )
          }
        >
          {translate('certifications.certificationsList.rwd.title')}
        </button>
        <button
          className="long-text button link"
          onClick={() =>
            handleOpenModal(
              'certifications.certificationsList.javascript',
              imgjs,
              links.javascript
            )
          }
        >
          {translate('certifications.certificationsList.javascript.title')}
        </button>
        <button
          className="long-text button link"
          onClick={() =>
            handleOpenModal(
              'certifications.certificationsList.fdl',
              imgfdl,
              links.fdl
            )
          }
        >
          {translate('certifications.certificationsList.fdl.title')}
        </button>
        {/* ------------------- Enlaces secundarios ---------------------- */}
        {(viewMore[actualPage] && (
          <>
            <button
              className="long-text button link secondary"
              onClick={() =>
                handleOpenModal(
                  'certifications.certificationsList.ics',
                  imgics,
                  links.ics
                )
              }
            >
              {translate('certifications.certificationsList.ics.title')}
            </button>
            <button
              className="long-text button link secondary"
              onClick={() =>
                handleOpenModal(
                  'certifications.certificationsList.html',
                  imghtml,
                  links.html
                )
              }
            >
              {translate('certifications.certificationsList.html.title')}
            </button>
            <button
              className="long-text button link secondary"
              onClick={() =>
                handleOpenModal(
                  'certifications.certificationsList.html5css3',
                  imghtml5css3,
                  links.html5css3
                )
              }
            >
              {translate('certifications.certificationsList.html5css3.title')}
            </button>
            <button
              className="long-text button link secondary"
              onClick={() =>
                handleOpenModal(
                  'certifications.certificationsList.bbdd',
                  imgbbdd,
                  links.bbdd
                )
              }
            >
              {translate('certifications.certificationsList.bbdd.title')}
            </button>
            <button
              className="long-text button link secondary"
              onClick={() =>
                handleOpenModal(
                  'certifications.certificationsList.flash',
                  imgflash,
                  links.flash
                )
              }
            >
              {translate('certifications.certificationsList.flash.title')}
            </button>
            <button
              className="long-text button link secondary"
              onClick={() =>
                handleOpenModal(
                  'certifications.certificationsList.presu',
                  imgpresu,
                  links.presu
                )
              }
            >
              {translate('certifications.certificationsList.presu.title')}
            </button>
            <button
              className="long-text button link secondary"
              onClick={() =>
                handleOpenModal(
                  'certifications.certificationsList.photo',
                  imgphoto,
                  links.photo
                )
              }
            >
              {translate('certifications.certificationsList.photo.title')}
            </button>
            <button
              className="long-text button link secondary"
              onClick={() =>
                handleOpenModal(
                  'certifications.certificationsList.cssdivs',
                  imgcssdivs,
                  links.cssdivs
                )
              }
            >
              {translate('certifications.certificationsList.cssdivs.title')}
            </button>
            <button
              className="long-text button link secondary"
              onClick={() =>
                handleOpenModal(
                  'certifications.certificationsList.jquery',
                  imgjquery,
                  links.jquery
                )
              }
            >
              {translate('certifications.certificationsList.jquery.title')}
            </button>
            <button ref={$viewLess} className="view-less">
              {translate('certifications.buttons.view-less')}
            </button>
          </>
        )) || (
          /*.............................Ver más................................*/
          <button ref={$viewMore} className="view-more">
            {translate('certifications.buttons.view-more')}
          </button>
        )}
      </div>
    </>
  );
};

export default Certifications;
