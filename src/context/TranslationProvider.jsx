/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import DevBtn from "../components/DevBtn";
import Loader from "../components/Loader";
import { TranslationContext } from "./contexts";
import { fetchJSON } from "../helpers/fetchers";
import { useDetectLanguage } from "../hooks/useDetectLanguage";

export const TranslationProvider = ({ children }) => {
  const [translations, setTranslations] = useState(null);
  const [images, setImages] = useState(null);
  const [language, setLanguage] = useState("");
  const [fromLanguageBtn, setFromLanguageBtn] = useState(false);
  const [devMode, setDevMode] = useState(false);
  const [endpoint, setEndpoint] = useState("build");
  const [error, setError] = useState(null);

  const contentDevPath = "http://localhost:5500/";
  //   const contentDevPathMobile = 'http://192.168.1.100:5500/'; // Acá deberia usar aspectRatio supongo (esta en app ahora) para ver si es mobile y poner ese endpoint
  const contentBuildPath = "https://portfolio-4oh.pages.dev/";

  const actualPath = endpoint === "build" ? contentBuildPath : contentDevPath;

  const imagesApiEndpoint = `${actualPath}images.json`;

  const translationsApiEndpoint = `${actualPath}${language}.json`;

  useEffect(() => {
    import.meta.env.MODE === "development"
      ? setDevMode(true)
      : setDevMode(false);
  }, []);

  // CARGA DE TEXTOS CON FETCH
  const loadTranslations = async () => {
    try {
      const data = await fetchJSON(translationsApiEndpoint);
      setTranslations(data);
      setError(false);
    } catch (error) {
      setError(true);
      console.error("Error al cargar las traducciones:", error);
      // setTranslations({}); // Si falla, asegura un estado vacío
    }
  };
  // CARGA DE IMAGENES CON FETCH
  const loadImages = async () => {
    try {
      const data = await fetchJSON(imagesApiEndpoint);
      setImages(data);
      setError(false);
    } catch (error) {
      setError(true);
      console.error("Error al cargar las imágenes:", error);
    }
  };

  useEffect(() => {
    loadImages();
  }, [endpoint]);

  useEffect(() => {
    if (language) {
      loadTranslations();
    }
  }, [language, endpoint]);

  useDetectLanguage(language, setLanguage);

  const translate = (key) => {
    return (
      key.split(".").reduce((acc, part) => acc && acc[part], translations) || ""
    );
  };

  const getImage = (key) => {
    return key.split(".").reduce((acc, part) => acc && acc[part], images) || "";
  };

  return (
    <TranslationContext.Provider
      value={{
        getImage,
        loadImages,
        translate,
        setLanguage,
        language,
        fromLanguageBtn,
        setFromLanguageBtn,
        setEndpoint,
        endpoint,
        contentBuildPath,
        contentDevPath,
        actualPath,
      }}
    >
      {devMode ? <DevBtn /> : null}
      {endpoint === "dev" && error ? (
        <p
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%)",
            backgroundColor: "red",
            zIndex: 999,
            padding: "1rem",
          }}
        >
          Error de fetch, revisa si levantaste los JSON con live server o si
          cambió el puerto!
        </p>
      ) : null}
      {!translations ? (
        <div className="bg-opacity-50 absolute top-0 right-0 bottom-0 left-0 z-50 flex items-center justify-center bg-black">
          <Loader size="4rem" />
        </div>
      ) : (
        children
      )}
    </TranslationContext.Provider>
  );
};
