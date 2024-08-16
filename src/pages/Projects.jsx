/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { TranslationContext } from '../i18n/TranslationContext';

const Projects = ({ setActiveModal }) => {
  const { translate } = useContext(TranslationContext);

  return (
    <div className="page">
      <a
        className="long-text button link"
        onClick={() => setActiveModal('projects.item1')}
      >
        {translate('projects.item1.title')}
      </a>
      <a
        className="long-text button link"
        onClick={() => setActiveModal('projects.item2')}
      >
        {translate('projects.item2.title')}
      </a>
      <a
        className="long-text button link"
        onClick={() => setActiveModal('projects.item3')}
      >
        {translate('projects.item3.title')}
      </a>
      <a
        className="long-text button link"
        onClick={() => setActiveModal('projects.item4')}
      >
        {translate('projects.item4.title')}
      </a>
      <a
        className="long-text button link"
        onClick={() => setActiveModal('projects.item5')}
      >
        {translate('projects.item5.title')}
      </a>
      <a
        className="long-text button link"
        onClick={() => setActiveModal('projects.item6')}
      >
        {translate('projects.item6.title')}
      </a>
    </div>
  );
};

export default Projects;
