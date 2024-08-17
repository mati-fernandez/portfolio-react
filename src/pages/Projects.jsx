/* eslint-disable react/prop-types */
import { useContext, useEffect } from 'react';
import { TranslationContext } from '../i18n/TranslationContext';
import imgrqm from '../assets/random-quote-machine.png';
import imgmdp from '../assets/markdown-previewer.png';
import imgdm from '../assets/drum-machine.png';
import imgcalc from '../assets/js-calculator.png';
import imgpc from '../assets/pomodoro-clock.png';
import imgop from '../assets/old-portfolio.png';

const links = [
  'https://mati-fernandez.github.io/random-quote-machine/',
  'https://mati-fernandez.github.io/markdown-previewer/',
  'https://mati-fernandez.github.io/drum-machine/',
  'https://mati-fernandez.github.io/js-calculator/',
  'https://mati-fernandez.github.io/pomodoro-clock/',
  'https://mati-fernandez.github.io/portfolio/',
];

const imagePreLoad = (urls) => {
  urls.map((url) => {
    const img = new Image();
    img.src = url;
  });
};

const Projects = ({ setActiveModal }) => {
  const { translate } = useContext(TranslationContext);

  const handleOpenModal = (itemKey, img, link) => {
    setActiveModal({ itemKey, img, link });
  };

  useEffect(() => {
    const urls = [imgrqm, imgmdp, imgdm, imgcalc, imgpc, imgop];
    imagePreLoad(urls);
  }, []);

  return (
    <div className="page">
      <a
        className="long-text button link"
        onClick={() => handleOpenModal('projects.item1', imgrqm, links[0])}
      >
        {translate('projects.item1.title')}
      </a>
      <a
        className="long-text button link"
        onClick={() => handleOpenModal('projects.item2', imgmdp, links[1])}
      >
        {translate('projects.item2.title')}
      </a>
      <a
        className="long-text button link"
        onClick={() => handleOpenModal('projects.item3', imgdm, links[2])}
      >
        {translate('projects.item3.title')}
      </a>
      <a
        className="long-text button link"
        onClick={() => handleOpenModal('projects.item4', imgcalc, links[3])}
      >
        {translate('projects.item4.title')}
      </a>
      <a
        className="long-text button link"
        onClick={() => handleOpenModal('projects.item5', imgpc, links[4])}
      >
        {translate('projects.item5.title')}
      </a>
      <a
        className="long-text button link"
        onClick={() => handleOpenModal('projects.item6', imgop, links[5])}
      >
        {translate('projects.item6.title')}
      </a>
    </div>
  );
};

export default Projects;
