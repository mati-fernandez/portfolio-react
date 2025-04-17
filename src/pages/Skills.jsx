/* eslint-disable react/prop-types */
import { useContext, useState } from 'react';
import { TranslationContext } from '../context/contexts';
import Loader from '../components/Loader';

const Skills = () => {
  const { getImage } = useContext(TranslationContext);
  const data = getImage('skills');

  return (
    <div className="flex-grow overflow-y-hidden page" style={{ padding: '0' }}>
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
  const { endpoint, contentDevPath, contentBuildPath } =
    useContext(TranslationContext);
  const srcPath =
    endpoint === 'build' ? `${contentBuildPath}` : `${contentDevPath}`;

  return (
    <li>
      <div className="skill-container">
        {/* Loader se muestra mientras la imagen no está cargada */}
        <div style={{ position: 'relative', marginRight: '.5rem' }}>
          {/* <div
            className="loader"
            style={{
              position: 'absolute',
              width: '1rem', // El mismo tamaño que la imagen
              height: '1rem',
              borderWidth: '.1rem',
              aspectRatio: 1,
              display: isLoaded ? 'none' : 'block', // Se oculta al cargar la imagen
            }}
          ></div> */}
          {!isLoaded && (
            <Loader
              size="1rem"
              borderSize="0.1rem"
              className="absolute z-10 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 aspect-square"
            />
          )}
        </div>

        {/* Imagen que se muestra al cargar */}
        <img
          src={`${srcPath}${skillData.src}`}
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
