const logo = document.getElementById('logo');

export function changeSVGColor(img, color) {
  fetch(img.src)
    .then((response) => response.text())
    .then((svgText) => {
      const parser = new DOMParser();
      const svgDoc = parser.parseFromString(svgText, 'image/svg+xml');
      const svgElement = svgDoc.querySelector('svg');

      svgElement.querySelectorAll('*').forEach((element) => {
        element.setAttribute('fill', color);
      });

      const serializedSVG = new XMLSerializer().serializeToString(svgElement);
      const encodedSVG =
        'data:image/svg+xml;base64,' + encodeURIComponent(serializedSVG);
      img.src = encodedSVG;
    });
}

logo.addEventListener('mouseover', () => {
  changeSVGColor(logo, 'var(--color-secondary)');
});

logo.addEventListener('mouseout', () => {
  changeSVGColor(logo, 'var(--color-primary)');
});
