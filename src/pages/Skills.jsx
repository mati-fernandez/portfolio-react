/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { TranslationContext } from '../context/TranslationContext';

const Skills = () => {
  const { images } = useContext(TranslationContext);

  // Si translations aún no está cargado, mostramos el loading
  if (!images) {
    return <div className="loader"></div>;
  }

  const data = images.skills;
  console.log('data:', data);

  return (
    <div className="page">
      <ul className="skills-list">
        {Object.keys(data).map((skill) => (
          <li key={skill}>
            <div className="skill-container">
              <img
                src={data[skill].src}
                alt={data[skill].alt}
                className="tech"
              />
              <span className="skill-name">{data[skill].alt}</span>
            </div>
            <div className="progress-bar">
              <div
                className="progress"
                style={{ width: data[skill].progress }}
              ></div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
