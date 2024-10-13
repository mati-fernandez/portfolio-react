/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useContext, useEffect } from 'react';
import { TranslationContext } from '../i18n/TranslationContext';
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

const Skills = ({ imagePreLoad }) => {
  const { language } = useContext(TranslationContext);

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

  return (
    <div className="page">
      <ul className="skills-list">
        <li>
          <div className="skill-container">
            <img src={html} className="tech" alt="HTML 5" />
            <span className="skill-name">HTML 5</span>
          </div>
          <div className="progress-bar">
            <div className="progress" style={{ width: '55%' }}></div>
          </div>
        </li>
        <li>
          <div className="skill-container">
            <img src={css} className="tech" alt="CSS 3" />
            <span className="skill-name">CSS 3</span>
          </div>
          <div className="progress-bar">
            <div className="progress" style={{ width: '63%' }}></div>
          </div>
        </li>
        <li>
          <div className="skill-container">
            <img src={sass} className="tech" alt="Sass" />
            <span className="skill-name">Sass</span>
          </div>
          <div className="progress-bar">
            <div className="progress" style={{ width: '22%' }}></div>
          </div>
        </li>
        <li>
          <div className="skill-container">
            <img id="js-icon" src={js} className="tech" alt="JavaScript" />
            <span className="skill-name">JavaScript</span>
          </div>
          <div className="progress-bar">
            <div className="progress" style={{ width: '63%' }}></div>
          </div>
        </li>{' '}
        <li>
          <div className="skill-container">
            <img id="ts-icon" src={ts} className="tech" alt="TypeScript" />
            <span className="skill-name">TypeScript</span>
          </div>
          <div className="progress-bar">
            <div className="progress" style={{ width: '11%' }}></div>
          </div>
        </li>
        <li>
          <div className="skill-container">
            <img src={git} className="tech" alt="Git" />
            <span className="skill-name">Git</span>
          </div>
          <div className="progress-bar">
            <div className="progress" style={{ width: '33%' }}></div>
          </div>
        </li>
        <li>
          <div className="skill-container">
            <img src={react} className="tech" alt="React JS" />
            <span className="skill-name">React JS</span>
          </div>
          <div className="progress-bar">
            <div className="progress" style={{ width: '60%' }}></div>
          </div>
        </li>
        <li>
          <div className="skill-container">
            <img src={nextjs} className="tech" alt="Next.js" />
            <span className="skill-name">Next.js</span>
          </div>
          <div className="progress-bar">
            <div className="progress" style={{ width: '11%' }}></div>
          </div>
        </li>{' '}
        <li>
          <div className="skill-container">
            <img src={prisma} className="tech" alt="Prisma" />
            <span className="skill-name">Prisma</span>
          </div>
          <div className="progress-bar">
            <div className="progress" style={{ width: '11%' }}></div>
          </div>
        </li>
        <li>
          <div className="skill-container">
            <img src={redux} className="tech" alt="Redux" />
            <span className="skill-name">Redux</span>
          </div>
          <div className="progress-bar">
            <div className="progress" style={{ width: '11%' }}></div>
          </div>
        </li>
        <li>
          <div id="router" className="skill-container">
            <img src={router} className="tech" alt="React Router v6" />
            <span className="skill-name"> Router v6 </span>
          </div>
          <div className="progress-bar">
            <div className="progress" style={{ width: '33%' }}></div>
          </div>
        </li>
        <li>
          <div className="skill-container">
            <img src={figma} className="tech" alt="Figma" />
            <span className="skill-name">Figma</span>
          </div>
          <div className="progress-bar">
            <div className="progress" style={{ width: '52%' }}></div>
          </div>
        </li>
        <li>
          <div className="skill-container">
            <img src={english} className="tech english" alt="Inglés" />
            <span className="skill-name">
              {language === 'es'
                ? 'Inglés'
                : language === 'en'
                ? 'English'
                : 'Inglês'}
            </span>
          </div>
          <div className="progress-bar">
            <div className="progress" style={{ width: '65%' }}></div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Skills;
