/* eslint-disable react/prop-types */
import { useContext, useState } from 'react';
import { TranslationContext } from '../context/TranslationContext';

const SkillItem = ({ skillKey, skillData }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { translate, endpoint, contentDevPath, contentBuildPath } =
    useContext(TranslationContext);
  const srcPath =
    endpoint === 'build' ? `${contentBuildPath}` : `${contentDevPath}`;

  return (
    <li>
      <div className="skill-container">
        {/* Loader se muestra mientras la imagen no está cargada */}
        <div style={{ position: 'relative', marginRight: '.5rem' }}>
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
          alt={translate(`skills.${skillKey}.title`)}
          className="tech"
          style={{
            visibility: isLoaded ? 'visible' : 'hidden', // Oculta visualmente la imagen hasta que cargue
          }}
          onLoad={() => setIsLoaded(true)}
        />
        <span className="skill-name">
          {translate(`skills.${skillKey}.title`)}
        </span>
      </div>
      <div className="progress-bar">
        <div className="progress" style={{ width: skillData.progress }}></div>
      </div>
    </li>
  );
};

const Skills = () => {
  const { getImage } = useContext(TranslationContext);
  const data = getImage('skills');

  return (
    <div className="flex-grow overflow-y-hidden page" style={{ padding: '0' }}>
      <ul className="skills-list">
        {Object.keys(data).map((skill) => (
          <SkillItem key={skill} skillData={data[skill]} skillKey={skill} />
        ))}
      </ul>
    </div>
  );
};

export default Skills;
