/* eslint-disable react-hooks/exhaustive-deps */
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
  'https://mati-fernandez.github.io/portfolio-vanilla-js/',
];

const Projects = ({ handleOpenModal, imagePreLoad }) => {
  const { translate } = useContext(TranslationContext);

  useEffect(() => {
    const urls = [imgrqm, imgmdp, imgdm, imgcalc, imgpc, imgop];
    imagePreLoad(urls);
  }, []);

  return (
    <div className="page">
      <a
        className="long-text button link"
        onClick={() => handleOpenModal('projects.rqm', imgrqm, links[0])}
      >
        {translate('projects.rqm.title')}
      </a>
      <a
        className="long-text button link"
        onClick={() => handleOpenModal('projects.mdp', imgmdp, links[1])}
      >
        {translate('projects.mdp.title')}
      </a>
      <a
        className="long-text button link"
        onClick={() => handleOpenModal('projects.dm', imgdm, links[2])}
      >
        {translate('projects.dm.title')}
      </a>
      <a
        className="long-text button link"
        onClick={() => handleOpenModal('projects.calc', imgcalc, links[3])}
      >
        {translate('projects.calc.title')}
      </a>
      <a
        className="long-text button link"
        onClick={() => handleOpenModal('projects.pc', imgpc, links[4])}
      >
        {translate('projects.pc.title')}
      </a>
      <a
        className="long-text button link"
        onClick={() => handleOpenModal('projects.op', imgop, links[5])}
      >
        {translate('projects.op.title')}
      </a>
    </div>
  );
};

export default Projects;
