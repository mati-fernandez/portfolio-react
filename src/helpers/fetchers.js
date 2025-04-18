// utils/fetchers.js
export const fetchJSON = async (url) => {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Error al cargar ${url}`);
  return response.json();
};
