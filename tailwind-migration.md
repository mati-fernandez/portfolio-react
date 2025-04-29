# CSS to Tailwind Migration

This document serves as a brief record of the migration process from traditional CSS to Tailwind CSS in this project. The goal was to improve code clarity, consistency, and maintainability.  

Initially, the entire styling was written in one global CSS file. As the project grew, it became increasingly harder to navigate and manage style rules, especially when needing to locate or reuse specific elements.

While the design remained simple, there was a significant amount of custom CSS required to support it. Most styles were written manually, and some were duplicated across different components due to the lack of modular structure.

## Tailwind Layers
Tailwind CSS uses layers to organize styles with specific specificity and behavior:

- @layer base: Global styles, like resets or basic rules (e.g., margin normalization, font sizes).

- @layer components: Reusable UI components, like buttons, cards, headers.

- @layer utilities: Single-property utilities that apply specific styles to elements (e.g., margins, padding, colors, transitions).

For transitions or styles applied to specific elements (like buttons), I decided to place them under @layer utilities to maintain flexibility and keep everything organized.

## Notes on the Migration
- The entire UI was rebuilt using utility classes from Tailwind CSS.

- Styling is now co-located with components, improving readability and consistency.

- Class names are descriptive and directly reflect layout and behavior.

- No custom CSS files remain in the final version, unless strictly necessary (e.g. keyframes or special utilities).

- This migration was part of a general cleanup of the codebase. 

## Removing the `@theme` Warning in VS Code

To get rid of the annoying warning for the `@theme` directive in Tailwind CSS v4, follow these steps in VS Code:

1. Go to **Settings** → **Text Editor** → **Files**.
2. Click **"Add Item"** under the **Associations** section.
3. Add the following:
   - **Key**: `*.css`
   - **Value**: `tailwindcss`

That’s it! No more yellow squiggly lines ruining your vibe.

## Variables & Theme handling (Tailwind v4)
We now define most of our CSS variables inside the @theme layer of tailwind.css. This allows Tailwind v4 to match them directly with its utility classes (e.g. bg-[--color-primary]), enabling autocomplete and maintaining full compatibility without needing a tailwind.config.js file.

### Structure
The dark theme is the default, so its variables are defined globally inside @theme.

The light theme variables are defined inside a [data-theme="light"] selector, which is placed in the @layer base, since @theme does not support selectors.

### Why this works
Utility prefixes like bg-, text-, border-, etc. automatically infer the expected variable type, so Tailwind can match UC usage like `landscape:hover:bg-general-primary` with the variable `--color-general-primary` defined inside @theme.

However, if a variable is defined only in a selector like `[data-theme="light"]` in @layer base, Tailwind won't match it automatically for UC autocomplete. That's why the default theme (dark) goes in @theme.

### Examples of successful matching:
- `text-general-primary → --color-general-primary`
- `bg-general-secondary-alpha → --color-general-secondary-alpha`
- `border-general → --border-general`

### Only complex or frequently reused selectors are kept in @layer base.

## Implementing Motion for better integration with TailWind

## Additional Notes & Practices

- **Initial Flicker Prevention**: To avoid the initial flicker before Tailwind loads, we set a temporary background-color, color, and height inline in the **<body>** tag of `index.html`.

- **SVG Color Inheritance**: We use **currentColor** in SVGs so they inherit the correct theme color dynamically.

- **One-Time `calc()` Operations**: When a **calc()** operation is needed only once, we apply it inline (e.g., `style={{ height: calc(var(--font-size-landscape) * 0.6) }}`) instead of creating a utility class.
- 
## Using @apply in Tailwind CSS
When using @apply inside a Tailwind layer (@layer base, components, or utilities), the rule must only contain utility classes.
If you mix @apply with pure CSS properties inside the same selector, it will cause a build error.

Quick reminder:
@apply is used to group Tailwind utility classes together into a custom class, making your code cleaner and reusable without repeating the same utilities over and over.

## Conclusion
This migration helped me better organize styles and greatly reduced the amount of custom CSS required. It also aligned the project with more modern frontend practices and made future maintenance easier.
## I got rid of useAnimations hook
The useAnimations hook was complex because I tried to control too many details of the animation, turning it into a massive and hard-to-maintain hook. Now, by transitioning to Tailwind CSS and using motion, I’m adopting a more standard, maintainable approach without the need to control every single animation detail. This change allowed me to get rid of a hook that had a complex logic and a lot of comments scattered across 162 lines of code.

Next, I will show you the code:

```jsx
/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from 'react';
import { PageContext } from '../context/contexts';
import { StylesContext } from '../context/contexts';

export default function useAnimations({
  location,
  theme,
  notFirstLoad,
  setNotFirstLoad,
  modalVisibility,
  setShowMenu,
  fromLanguageBtn,
  setFromLanguageBtn,
  fromThemeBtn,
  setFromThemeBtn,
  aspectRatio,
}) {
  // eslint-disable-next-line no-unused-vars
  const { actualPage, viewMore, $viewLess, $viewMore } =
    useContext(PageContext);

  const { dynamicStyles } = useContext(StylesContext);

  // ANIMACIONES
  useEffect(() => {
    // Pequeño retraso porque al cambiar de idioma y volver hacia atrás, el query no llegaba a agarrar los .page a
    // SetTimeOut necesario para "dar tiempo" a que se desmonte bien el componente
    const timeout = setTimeout(() => {
      console.log(actualPage, 'actualPage');
      if (
        Object.keys(dynamicStyles).length === 0 &&
        actualPage !== 'skills' &&
        actualPage !== 'home'
      )
        return;

      let fadeIn = null;
      let removeFadeIn = null;
      const progress = Array.from(document.querySelectorAll('.progress'));
      const buttons = Array.from(
        document.querySelectorAll('.page-item')
      ).reverse();
      const icons = Array.from(
        document.querySelectorAll('#desktop-footer a, #desktop-footer button')
      ).reverse();
      const desktopHeaderBtns = Array.from(
        document.querySelectorAll('#desktop-header a')
      );

      if (
        (aspectRatio === 'portrait' || aspectRatio === 'square') &&
        !fromThemeBtn &&
        !fromLanguageBtn
      ) {
        setShowMenu(false);
      }
      if (fromLanguageBtn) setFromLanguageBtn(false);
      if (fromThemeBtn) setFromThemeBtn(false);
      //**********************************************************************************************//
      // SI NO ES PRIMERA CARGA, CANCELA ANIMACIONES SALVO EN HOME Y CAMBIO DE TEMA en cuanto a footer
      //**********************************************************************************************//

      if (
        notFirstLoad.includes(actualPage) &&
        !fromThemeBtn &&
        !fromLanguageBtn
      ) {
        if ($viewMore.current) {
          $viewMore.current.style.animation = 'none';
          $viewMore.current.style.display = 'block';
        }
        // if (viewMore[actualPage]) handleViewMore();
        progress.forEach((item) => item.classList.remove('fill-progress'));
        desktopHeaderBtns.forEach((item) => item.classList.remove('glowing'));
        icons.forEach((icon) => {
          icon.classList.remove('animate-icon');
        });
        buttons.forEach((button) => {
          button.classList.remove = 'slide-in';
          button.style.opacity = 1;
        });
      } else {
        //********************************//
        //******SI ES PRIMERA CARGA ******//
        //********************************//
        setFromThemeBtn(false);
        setFromLanguageBtn(false);
        setNotFirstLoad((prevState) => [...prevState, actualPage]);

        let headerTimeout = null;
        const delayIncrement = 0.1;

        // Fade in del view more
        //Se comprueba si el botón existe en esa página
        if ($viewMore.current) {
          // Se oculta en la primera carga para esperar la animación de entrada:
          $viewMore.current.style.opacity = 0;
          // Evitar intaracción para no cortar la animación si lo tocan antes que se complete:
          $viewMore.current.style.pointerEvents = 'none';
          // Despues de llegar los enlaces de pagina aparece view more
          fadeIn = setTimeout(() => {
            $viewMore.current.classList.add('fade-in');
            // Saco el forwards para que funcione el hover
            // console.log($viewMore.current);
            removeFadeIn = setTimeout(() => {
              //   console.log($viewMore.current);
              $viewMore.current.style.opacity = 0.5;
              $viewMore.current.classList.remove('fade-in');
              $viewMore.current.style.pointerEvents = 'all';
            }, 1000);
          }, 1000);
        }

        progress.forEach((item) => item.classList.remove('fill-progress'));
        const fillTimeout = setTimeout(() => {
          progress.forEach((item, index) => {
            const delay = index * delayIncrement;
            item.classList.add('fill-progress');
            item.style.animationDelay = `${delay}s`;
          });
        }, 10);

        desktopHeaderBtns.forEach((item) => item.classList.remove('glowing'));
        if (location.pathname.endsWith('home')) {
          headerTimeout = setTimeout(() => {
            desktopHeaderBtns.forEach((item, index) => {
              const delay = index * delayIncrement;
              item.classList.add('glowing');
              item.style.animationDelay = `${delay}s`;
            });
          }, 10);
        }

        icons.forEach((icon) => {
          icon.classList.remove('animate-icon');
        });
        const footerTimeout = setTimeout(() => {
          icons.forEach((icon, index) => {
            const delay = index * delayIncrement;
            icon.classList.add('animate-icon');
            icon.style.animationDelay = `${delay}s`;
          });
        }, 10);

        buttons.forEach((button, index) => {
          const delay = index * delayIncrement;
          button.style.animationDelay = `${delay}s`;
          button.classList.add('slide-in');
        });

        return () => {
          clearTimeout(footerTimeout),
            clearTimeout(fillTimeout),
            clearTimeout(headerTimeout),
            clearTimeout(fadeIn),
            clearTimeout(removeFadeIn);
        };
      }
    }, 20); //Necesario para "dar tiempo" a que se desmonte bien el componente
    return () => clearTimeout(timeout);
  }, [theme, viewMore, modalVisibility, actualPage, location, dynamicStyles]); // No sacar actualPage de las deps porque evita error
}
```
## Original CSS (Before Migration)
Below is the full content of the CSS file before migrating to Tailwind. This illustrates how large and difficult to maintain the original approach had become. For example, many times I found myself using Ctrl + F to search for different selectors...

```css
/*
███╗   ███╗ ██████╗ ██████╗ ██╗██╗     ███████╗    
████╗ ████║██╔═══██╗██╔══██╗██║██║     ██╔════╝    ╔══╗♫ *´”)
██╔████╔██║██║   ██║██████╔╝██║██║     █████╗      ║██║ ¸.•´¸.•*´¨) ¸.•*¨) ♫ ♪
██║╚██╔╝██║██║   ██║██╔══██╗██║██║     ██╔══╝      ║88║ (¸.•´ (¸.• ♫ ♪
██║ ╚═╝ ██║╚██████╔╝██████╔╝██║███████╗███████╗    ╚══╝ 
╚═╝     ╚═╝ ╚═════╝ ╚═════╝ ╚═╝╚══════╝╚══════╝    
*/
:root {
  font-size: 4vmin;
  /* Constantes Globales */
  --font-size-landscape: calc((1vw + 1vh) * 0.8);
  --font-size-portrait: calc((1vw + 1vh) * 1.2);
  --color-general-primary: rgb(76, 150, 199);
  --color-general-primary-alpha: rgba(76, 150, 199, 0.363);
  --color-general-secondary: grey;
  --color-general-secondary-alpha: #222222c5;
  --border-general: 1px solid black;
}

[data-theme='dark'] {
  --color-box-shadow: #737d60;
  --color-primary: white;
  --color-secondary: #3b3b3b;
  --color-terciary: #394733;
  --color-secondary-alpha: #939e8f80;
  --color-background: black;
  --color-background-secondary: #222;
  --color-background-alpha: #2e312bec;
  --color-background-alpha-secondary: #222222ce;
  --border: 1px solid var(--color-primary);
  --icon-fill: white;
  --title-color: white;
  --h3-font-weight: 400;
  --font-weight: 400;
}

[data-theme='light'] {
  --color-box-shadow: #424739;
  --color-primary: black;
  --color-secondary: #d3d2d2;
  --color-terciary: #c4e3b8;
  --color-secondary-alpha: #89a18480;
  --color-background: rgb(233, 233, 233);
  --color-background-secondary: #ffffff;
  --color-background-alpha: #ffffffec;
  --color-background-alpha-secondary: #d8d8d8ce;
  --border: 1px solid var(--color-primary);
  --icon-fill: black;
  --title-color: dark;
  --h3-font-weight: 600;
  --font-weight: 500;
}

*,
*::before,
*::after,
html {
  box-sizing: border-box;
  user-select: none; /* Estándar moderno */
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  /* Elimina el color de resaltado en dispositivos móviles */
  -webkit-tap-highlight-color: transparent;
}

body {
  position: relative;
  height: 90svh;
  font-family: 'Raleway', Arial, Helvetica, sans-serif;
  background-color: var(--color-background);
  color: var(--color-primary);
  margin: 0 auto;
  padding: 0;
  text-align: center;
}

#root {
  height: inherit;
}

/*Reset de ul*/
ul {
  padding: 0;
  margin: 0;
  list-style: none;
}

:hover:not(body, .menu) .button:not(svg, .active-button) {
  transition: color 0.8s ease-in-out;
}

.loader {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 8px solid #f3f3f3;
  border-top: 8px solid #3498db;
  border-radius: 50%;
  width: 10vw;
  height: 10vw;
  animation: spin 0.5s linear infinite;
  z-index: 11;
}

@keyframes spin {
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

a {
  transition: background-color 0.8s ease-in-out, color 0.8s ease-in-out;
}

a,
button {
  display: flex;
  align-items: center; /*Centra svg dentro de su padre*/
  justify-content: center;
}

button {
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  font: inherit;
  color: inherit;
  height: fit-content;
}
/* 
.view-less,
.view-more {
  position: fixed;
  bottom: 5.5vh;
  left: 53%;
  transform: translateX(-50%);
  font-size: 5rem;
  line-height: 0;
} */

p:not(#name) {
  transition: color 0.8s ease-in-out;
}

@keyframes slideInRotate {
  0% {
    opacity: 0;
    transform: translateY(-3vh) rotate(0deg);
  }
  100% {
    opacity: 0.5;
    transform: translateY(0) rotate(1080deg);
  }
}

#dev-mode-btn {
  position: absolute;
  top: 2.5vh;
  left: 2vh;
  cursor: pointer;
  opacity: 0.7;
  border: 1px solid var(--color-primary);
  border-radius: 50px;
  padding: 0.5rem;
}

#dev-mode-btn:hover {
  background-color: var(--color-secondary-alpha);
}

.infoBtnTransition {
  animation: slideInRotate 1s ease-out forwards;
}

.infoBtn {
  fill: var(--icon-fill);
  position: absolute;
  top: 1.5vh;
  right: 2vh;
  width: 5vw;
  height: 5vh;
  cursor: pointer;
  opacity: 0.5;
}

/* Para ganar en especificidad */
.infoModal.hidden {
  animation: animate-modal-close 150ms ease-in-out forwards;
}

.infoModal {
  font-size: 2.2vh;
  white-space: pre-wrap; /*Para que interprete los \n del .json*/
  width: 80%;
  pointer-events: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  align-content: center;
  animation: animate-modal-open 150ms ease-out forwards;
  transform-origin: 0 0;
  & h3 {
    margin: 0;
  }
  & p {
    font-weight: var(--font-weight);
  }
  & a {
    background-color: var(--color-general-primary-alpha);
    width: fit-content;
    margin: auto;
    border: var(--border);
    font-weight: var(--font-weight);
  }
}

.infoBkg {
  padding: 1rem;
  border: 1px solid var(--color-primary);
  background-color: var(--color-background);
  z-index: -1;
}

svg {
  fill: var(--icon-fill);
  transition: fill 0.8s ease-in-out;
  width: 8vw;
  height: 8vw;
}

select:focus-visible {
  outline: none;
}

option {
  color: var(--color-primary);
  background-color: var(--color-background);
}

.container {
  position: fixed;
  top: 46%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 75vmin;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#language-btn {
  color: var(--color-primary);
  background-color: transparent;
  border: none;
  cursor: pointer;
  pointer-events: auto;
  font-family: 'Raleway', Arial, Helvetica, sans-serif;
  font-size: 1.3rem;
  font-weight: inherit;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 11;
  margin: 2vh 6vw;
  padding: 2vh;
}

#theme-btn {
  position: fixed;
  pointer-events: auto;
  z-index: 11;
}

#name {
  font-size: 1.8rem;
  font-weight: 400;
  margin: 0;
  border-radius: 50px;
  padding: 2vw;
}

#hamburguer-btn {
  cursor: pointer;
  border-radius: 50px;
  padding: 2vh;
}

#hamburguer-svg {
  height: 2.1rem;
}

#close-menu {
  font-size: 2.1rem;
  font-weight: 400;
  transform: translate(-25%);
}

#avatar {
  width: 40vmin;
}

#description {
  transition: all 3s ease-out;
}

#mobile-header-wrapper {
  pointer-events: none;
  position: absolute;
  inset: 0;
  height: 100svh;
  overflow: hidden; /*NO BORRAR, sirve en cuadrada minimo*/
}

.menu {
  z-index: 999;
  pointer-events: all;
  position: absolute;
  top: 0;
  height: 90svh;
  width: 100vw;
  background-color: var(--color-background-alpha);
  transition: background-color 0.8s ease-in-out;
}

#mobile-main-menu {
  font-size: 1.8rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  pointer-events: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 85svh;
  padding-top: 8vh;
}

#mobile-main-menu > a {
  line-height: 0;
  background-color: var(--color-secondary-alpha);
  border-radius: 0;
}

.active-button {
  background-color: var(--color-background) !important;
  color: var(--color-primary);
}

#mobile-header {
  pointer-events: auto;
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4vw;
  bottom: 0vh;
  width: 100vw;
  height: 10vh;
  background-color: var(--color-background-alpha);
}

.skills-list {
  margin-left: -3rem;
  padding: 0;
  list-style: none;
  width: 90%;
  line-height: 4.5svh;
}

.skills-list li {
  display: flex;
  align-items: center;
}

.skill-container {
  display: flex;
  width: 40%;
  justify-content: right;
  align-items: center;
}

.skills-list img {
  margin-right: 0.5rem;
  max-width: 1rem;
  max-height: 1rem;
}

#js-icon {
  max-height: calc(var(--font-size-landscape) * 1.5);
}

#ts-icon {
  max-height: calc(var(--font-size-landscape) * 1.5);
}

.skill-name {
  font-weight: bold;
  margin-right: 10px;
  white-space: nowrap;
  text-overflow: clip;
}

.progress-bar {
  background-color: var(--color-background-secondary);
  width: 60%;
  height: calc(var(--font-size-landscape) * 0.6);
  margin-left: 10px;
  overflow: hidden;
}

@keyframes progress {
  0% {
    width: 0;
  }
}

.fill-progress {
  animation: progress 200ms ease-out backwards;
}

.progress {
  background-color: var(--color-general-primary);
  height: 100%;
}

.modal {
  z-index: 999;
  pointer-events: all;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 100%;
  width: 100vw;
  background-color: var(--color-background-alpha);
}

@keyframes animate-modal-open {
  0% {
    transform: scale(0) translate(-50%, -50%);
    opacity: 0;
  }
  100% {
    transform: scale(1) translate(-50%, -50%);
    opacity: 1;
  }
}
@keyframes animate-modal-close {
  0% {
    transform: scale(1) translate(-50%, -50%);
    opacity: 1;
  }
  100% {
    transform: scale(0) translate(-50%, -50%);
    opacity: 0;
  }
}

/* Para ganar en especificidad */
.detail.hidden {
  animation: animate-modal-close 150ms ease-in-out forwards;
}

.detail {
  pointer-events: auto;
  position: absolute;
  top: 44svh;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  animation: animate-modal-open 150ms ease-out forwards;
  transform-origin: 0 0;
}

.detail h3 {
  font-size: 6vw;
  margin-bottom: 0;
  color: var(--title-color);
}

figure {
  margin: 0;
  display: flex;
  flex-direction: column;
  margin: 3vh 0 0;
  justify-self: center;
}

figure img {
  width: 90vw;
  max-height: 50vh;
  object-fit: contain;
}

figcaption {
  font-size: 4.3vw;
  margin: 2vh;
  font-weight: var(--font-weight);
}

.btn-panel {
  display: flex;
  justify-content: space-around;
  margin: 0;
}

.detail .btn-panel .button {
  margin: 0;
  font-size: 4vw;
  height: fit-content;
  width: fit-content;
  border: var(--border);
  background-color: var(--color-general-primary-alpha);
  font-weight: var(--font-weight);
}

.page {
  /* padding: 1rem 1rem 15rem; El bottom hace que se vea bien en tel. No uso medidas viewport porque no se ajusta igual en todos los browsers */
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  /* align-content: space-around; */
  align-items: center;
  height: 90svh;
  overflow: hidden;
}

.page-item {
  justify-content: center;
  color: var(--color-primary);
  cursor: pointer;
  border: var(--border);
  border-radius: 50px;
  display: flex;
  height: fit-content;
  background-color: var(--color-general-primary-alpha);
  color: var(--color-primary);
  &:not(.secondary) {
    opacity: 0;
  }
  transition: margin 1s ease, font-size 1s ease;
}

@keyframes slideIn {
  from {
    transform: translateY(-100vh);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.slide-in {
  animation: slideIn 200ms ease-out forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 0.5;
  }
}

.fade-in {
  animation: fadeIn 1s ease-out forwards;
}

.view-more {
  opacity: 0;
  cursor: pointer;
  background: none;
  text-decoration: none;
  color: var(--color-primary);
  align-self: center;
}

.view-less {
  opacity: 0.5;
  cursor: pointer;
  background: none;
  text-decoration: none;
  color: var(--color-primary);
  align-self: center;
}

.link {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-decoration: none;
  color: inherit;
  height: 100%;
}

.button {
  background-color: transparent;
  color: var(--color-primary);
  border: none;
  cursor: pointer;
  border-radius: 50px;
  padding: 2vh;
  display: flex;
  margin: 2vh 6vw;
}

@keyframes rotate {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(2turn);
  }
}

.rotate {
  animation: rotate 0.8s cubic-bezier(0, 0.24, 0.59, 0.92);
}

#contact-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.contact-img {
  border-radius: 50px;
  cursor: pointer;
  height: 2rem;
}

#desktop-footer a {
  align-items: center;
  justify-content: center;
}

.linkedin {
  width: 80%;
  border-radius: 0;
  aspect-ratio: 1;
}

#cv {
  width: 66px;
}

/* .long-text {
  font-size: clamp(0.1rem, 0.3rem, 0.5rem);
} NOVAMAAASS!*/

.long-content {
  /* height: 90svh; */
  box-sizing: border-box;
  flex-direction: row;
  flex-wrap: wrap;
}

/******** Aspect 0.53 ********/

@media (min-aspect-ratio: 0.53) {
  .detail {
    justify-content: center;
    padding: 2vh;
  }
  .detail h3 {
    font-size: 1rem;
    margin-top: 2vh;
  }
  figcaption {
    font-size: 0.8rem;
  }
  .page {
    padding: calc(2rem - 1vw) 1vw;
  }
}

/* Para skill list */
@media (min-aspect-ratio: 0.85) {
  .skills-list {
    margin-left: 0.5rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    font-size: var(--font-size-portrait);
    line-height: 10vh;
    & img {
      margin-right: 5px;
    }
    & span {
      margin-right: 0;
    }
  }
  .progress-bar {
    width: 50%;
  }
}

/*
1111      11111111      1111    11   11  11111111    1111     11111111
11 11     11          11        11  11      11     11    11   11    11
11  11    11         11         11 11       11    11      11  11    11
11   11   11          11        1111        11    11      11  11    11
11    11  11111111     1111     111         11    11      11  11111111
11   11   11              11    1111        11    11      11  11
11  11    11               11   11 11       11    11      11  11
11 11     11              11    11  11      11     11    11   11
1111      11111111    1111      11   11     11       1111     11
*/

@media (min-aspect-ratio: 1.2) {
  /**** HEADER ****/
  #desktop-header {
    position: fixed;
    display: flex;
    justify-content: space-around;
    align-items: center;
    top: 2vh;
    width: 100%;
    background-color: var(--color-background-secondary);
  }

  @keyframes glowing {
    50% {
      background-color: var(--color-secondary);
    }
  }

  .glowing {
    animation: glowing 1s ease-in-out;
  }

  #desktop-header a {
    border-radius: 0;
  }

  svg {
    width: auto;
  }

  #dev-mode-btn {
    position: absolute;
    top: 12.5vh;
    left: 2vh;
    cursor: pointer;
    opacity: 0.7;
    border: 1px solid var(--color-primary);
    border-radius: 50px;
    padding: 0.5rem;
    font-size: 0.5rem;
  }

  .infoBtn {
    top: 15vh;
    right: 3vw;
    width: 3vw;
    height: 3vh;
  }

  .container {
    top: 51%;
    width: 100vmin;
  }

  #description {
    font-size: 2.7vmin;
  }

  .skills-list {
    margin-left: 1rem;
    padding: 0;
    line-height: 6vh;
    width: 80%;
  }

  .skills-list li {
    margin-block: 1vh;
    justify-content: center;
    font-size: 2.5vh;
  }

  .skill-container {
    width: 15%;
  }

  #js-icon {
    max-height: calc(var(--font-size-landscape) * 1.3);
  }

  #ts-icon {
    max-height: calc(var(--font-size-landscape) * 1.3);
  }

  .progress-bar {
    width: 60%;
    margin-right: 1vw;
  }

  .modal {
    z-index: 99;
    position: fixed;
    top: 50%;
    left: 50%;
    height: 100vh;
    transform: translate(-50%, -50%);
    background-color: var(--color-background-alpha-secondary);
  }

  .detail {
    top: 49%;
    gap: 50vh;
    width: 85vw;
    height: 80vh;
  }

  .modalBkg {
    position: absolute;
    top: 5vh;
    left: 5vw;
    right: 5vw;
    bottom: 5vh;
    border: 1px solid var(--color-secondary);
    border-radius: 200px;
    z-index: -1;
    background-color: var(--color-background);
  }

  .infoModal {
    width: 50%;
    top: 50%;
    & p {
      font-size: 0.7rem;
    }
    & a {
      font-size: 0.7rem;
      font-weight: normal;
    }
    & p {
      font-weight: normal;
    }
  }

  .detail h3 {
    position: absolute;
    font-size: 4vw;
    top: -8%;
    left: 50%;
    transform: translateX(-50%);
    text-wrap: nowrap;
    z-index: 9;
    font-weight: var(--h3-font-weight);
    background-color: var(--color-background-secondary);
    border-radius: 50px;
    padding: 0 1.2vw;
    border: var(--border);
  }

  figure {
    position: absolute;
    margin: 0; /*NO BORRAR, limpia el otro*/
    width: 100%;
    height: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  figure img {
    margin-left: -2vw;
    max-height: 55vh;
    width: fit-content;
    max-width: 60%;
  }

  figcaption {
    margin-right: -2vw;
    font-size: 1.7vw;
    width: 60%;
    height: fit-content;
    background-color: var(--color-background-secondary);
    border: 1px solid var(--color-primary);
    border-radius: 50px;
    padding: 1vh 1.3vw;
    font-weight: normal;
  }

  .detail .btn-panel .button {
    position: absolute;
    font-size: 1.5vw;
    bottom: -3vh;
    font-weight: normal;
  }

  .detail .btn-panel .button:first-of-type {
    left: 9vw;
  }
  .detail .btn-panel .button:first-of-type:hover {
    background-color: var(--color-general-primary);
  }

  .detail .btn-panel .button:last-of-type {
    font-size: 2.2vw;
    right: 9vw;
  }
  .detail .btn-panel .button:last-of-type:hover {
    background-color: var(--color-general-primary);
  }

  .link {
    font-size: 0.8rem;
  }

  .button {
    margin: 0;
  }

  .button:hover,
  .page-item:hover {
    background-color: var(--color-general-primary);
  }

  .contact-img {
    height: 1.3rem;
  }

  #language-btn {
    position: static;
    margin: 0;
    font-size: 0.8rem;
    border-radius: 0;
    height: 100%;
    padding: 0;
  }

  #theme-btn {
    position: static;
  }

  #cv-desktop {
    font-size: 1rem;
    font-weight: 600;
    aspect-ratio: 1;
  }

  .page {
    height: 100vh;
    box-sizing: border-box;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    gap: 1.8vw;
    padding: 0 4vw;
  }

  @keyframes slideIn {
    from {
      transform: translateX(-100vw);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  /* .page > button:hover:not(.view-more, .view-less) {
    background-color: var(--color-general-primary);
    height: 110%;
  } */

  .view-more {
    font-size: 0.7rem;
  }

  .view-less {
    font-size: 0.7rem;
  }

  .view-more:hover {
    opacity: 1;
  }

  .view-less:hover {
    opacity: 1;
  }

  /**** FOOTER ****/
  @keyframes icons {
    0% {
      transform: translateY(0) rotate(0);
    }
    15% {
      transform: translateY(20px) rotate(1800deg);
    }
    25% {
      transform: translateY(-12px) rotate(2880deg);
    }
    45% {
      transform: translateY(10px) rotate(3960deg);
    }
    75% {
      transform: translateY(-3px) rotate(3960deg);
    }
    100% {
      transform: translateY(0) rotate(3960deg);
    }
  }

  .animate-icon {
    animation: icons 1s;
    animation-timing-function: cubic-bezier(0, 0.75, 0.37, 0.95);
  }

  #desktop-footer {
    box-sizing: border-box;
    width: 100%;
    height: 11vh;
    position: fixed;
    display: flex;
    justify-content: space-around;
    bottom: 2vh;
    padding: 0 5vw;
    padding-top: 2vh;
  }
}

```
---
