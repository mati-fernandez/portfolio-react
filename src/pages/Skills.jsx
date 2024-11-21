/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useContext, useEffect } from 'react';
import { TranslationContext } from '../context/TranslationContext';
import html from '../assets/html-5.png';
import css from '../assets/css-3.png';
import sass from '../assets/sass.png';
import js from '../assets/js.png';
import git from '../assets/git.png';
import react from '../assets/react.png';
import redux from '../assets/redux.png';
import router from '../assets/react-router.png';
import figma from '../assets/figma.png';
import english from '../assets/english.png';
import nextjs from '../assets/nextjs.png';
import ts from '../assets/ts.png';
import prisma from '../assets/prisma.png';
import sql from '../assets/sql.png';

const Skills = ({ imagePreLoad }) => {
  const { language, translations, images } = useContext(TranslationContext);

  useEffect(() => {
    const urls = [
      html,
      css,
      sass,
      js,
      git,
      react,
      redux,
      router,
      figma,
      english,
    ];
    imagePreLoad(urls);

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
  if (!translations || !images) {
    return <div className="loader"></div>;
  }

  return (
    <div className="page">
      <ul className="skills-list">
        {images.skills.forEach((skill) => {
          const data = images.skills;
          <li>
            <div className="skill-container">
              <img
                src={data[skill].src}
                alt={data[skill].alt}
                className="tech"
              />
              <span className="skill-name">{data[skill].alt}</span>
            </div>
            <div className="progress-bar">
              <div className="progress" style={data[skill].progress}></div>
            </div>
          </li>;
        })}
      </ul>
    </div>
  );
};

export default Skills;
