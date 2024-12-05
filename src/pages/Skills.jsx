/* eslint-disable react/prop-types */
import { useContext, useState } from 'react';
import { TranslationContext } from '../context/TranslationContext';

const Skills = () => {
  const { getImage } = useContext(TranslationContext);
  const data = getImage('skills');

  return (
    <div className="page">
      <ul className="skills-list">
        {Object.keys(data).map((skill) => (
          <SkillItem key={skill} skillData={data[skill]} />
        ))}
      </ul>
    </div>
  );
};
const SkillItem = ({ skillData }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <li>
      <div className="skill-container">
        {/* Loader se muestra mientras la imagen no está cargada */}
        <div style={{ position: 'relative', marginRight: '.5rem' }}>
          <div
            className="loader"
            style={{
              position: 'absolute',
              width: '1rem', // El mismo tamaño que la imagen
              height: '1rem',
              borderWidth: '.1rem',
              aspectRatio: 1,
              display: isLoaded ? 'none' : 'block', // Se oculta al cargar la imagen
            }}
          ></div>
        </div>

        {/* Imagen que se muestra al cargar */}
        <img
          src={skillData.src}
          alt={skillData.alt}
          className="tech"
          style={{
            visibility: isLoaded ? 'visible' : 'hidden', // Oculta visualmente la imagen hasta que cargue
          }}
          onLoad={() => setIsLoaded(true)}
        />
        <span className="skill-name">{skillData.alt}</span>
      </div>
      <div className="progress-bar">
        <div className="progress" style={{ width: skillData.progress }}></div>
      </div>
    </li>
  );
};

export default Skills;
