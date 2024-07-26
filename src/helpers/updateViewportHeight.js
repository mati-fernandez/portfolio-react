export function updateViewportHeight() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
  //Establece una variable CSS personalizada --vh con el valor calculado de la altura del viewport visible en píxeles.
}
