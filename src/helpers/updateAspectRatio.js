export const updateAspectRatio = () =>
  window.innerWidth / window.innerHeight < 1 ? 'portrait' : 'landscape';
