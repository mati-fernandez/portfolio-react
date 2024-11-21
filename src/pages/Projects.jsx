/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useContext, useEffect } from 'react';
import { TranslationContext } from '../context/TranslationContext';
import imgrqm from '../assets/random-quote-machine.png';
import imgmdp from '../assets/markdown-previewer.png';
import imgdm from '../assets/drum-machine.png';
import imgcalc from '../assets/js-calculator.png';
import imgpc from '../assets/pomodoro-clock.png';
import imgop from '../assets/old-portfolio.png';
import Info from '../assets/Info';

const links = [
  'https://mati-fernandez.github.io/random-quote-machine/',
  'https://mati-fernandez.github.io/markdown-previewer/',
  'https://mati-fernandez.github.io/drum-machine/',
  'https://mati-fernandez.github.io/js-calculator/',
  'https://mati-fernandez.github.io/pomodoro-clock/',
  'https://mati-fernandez.github.io/portfolio-vanilla-js/',
];

const Projects = ({ notFirstLoad, handleOpenModal, imagePreLoad }) => {
  const { translate } = useContext(TranslationContext);

  useEffect(() => {
    const urls = [imgrqm, imgmdp, imgdm, imgcalc, imgpc, imgop];
    imagePreLoad(urls);
  }, []);

  return (
    <div className="page">
      <Info
        notFirstLoad={notFirstLoad}
        handleOpenModal={handleOpenModal}
        itemKey={'projects.info'}
      />
      <button
        className="long-text button link"
        onClick={() =>
          handleOpenModal('projects.projectsList.rqm', imgrqm, links[0])
        }
      >
        {translate('projects.projectsList.rqm.title')}
      </button>
      <button
        className="long-text button link"
        onClick={() =>
          handleOpenModal('projects.projectsList.mdp', imgmdp, links[1])
        }
      >
        {translate('projects.projectsList.mdp.title')}
      </button>
      <button
        className="long-text button link"
        onClick={() =>
          handleOpenModal('projects.projectsList.dm', imgdm, links[2])
        }
      >
        {translate('projects.projectsList.dm.title')}
      </button>
      <button
        className="long-text button link"
        onClick={() =>
          handleOpenModal('projects.projectsList.calc', imgcalc, links[3])
        }
      >
        {translate('projects.projectsList.calc.title')}
      </button>
      <button
        className="long-text button link"
        onClick={() =>
          handleOpenModal('projects.projectsList.pc', imgpc, links[4])
        }
      >
        {translate('projects.projectsList.pc.title')}
      </button>
      <button
        className="long-text button link"
        onClick={() =>
          handleOpenModal('projects.projectsList.op', imgop, links[5])
        }
      >
        {translate('projects.projectsList.op.title')}
      </button>
    </div>
  );
};

export default Projects;
