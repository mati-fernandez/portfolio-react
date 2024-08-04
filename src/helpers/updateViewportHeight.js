export function updateViewportHeight() {
  // Calcula la altura visible del viewport
  const vh = window.innerHeight * 0.01;

  // Establece la variable CSS
  document.documentElement.style.setProperty('--vh', `${vh}px`);
}

// Actualiza la altura al cargar y redimensionar
window.addEventListener('load', updateViewportHeight);
window.addEventListener('resize', updateViewportHeight);
