/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useContext, useEffect } from 'react';
import { TranslationContext } from '../context/TranslationContext';

const Skills = () => {
  const { images } = useContext(TranslationContext);

  useEffect(() => {
    // Asignación de aspect ratio a imágenes de habilidades
    document.querySelectorAll('.skills-list img').forEach((img) => {
      img.addEventListener('load', () => {
        if (img.naturalWidth > img.naturalHeight) {
          img.classList.add('landscape');
        } else {
          img.classList.add('portrait');
        }
      });

      // Si la imagen ya se cargó (para navegadores que no disparan 'load' en imágenes ya cargadas)
      if (img.complete) {
        img.dispatchEvent(new Event('load'));
      }
    });
  }, []);

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
