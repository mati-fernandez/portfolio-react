export function updateViewportHeight() {
  //Establece una variable CSS personalizada --vh con el valor calculado de la altura del viewport visible en píxeles.
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}
