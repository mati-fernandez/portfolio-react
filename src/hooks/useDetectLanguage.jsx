import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// hooks/useDetectLanguage.js
export const useDetectLanguage = (language, setLanguage) => {
  const navigate = useNavigate();
  useEffect(() => {
    const pathParts = location.pathname.split("/").filter(Boolean);

    const localStorageLang = localStorage.getItem("language");
    const supported = ["es", "pt", "en"];
    const navLanguage = navigator.language || navigator.userLanguage;
    const detectedLanguage =
      supported.find((lang) => navLanguage.startsWith(lang)) || "en";
    const URLlang = supported.find((lang) => pathParts.includes(lang)) || "";

    if (URLlang) {
      setLanguage(URLlang);
    } else if (localStorageLang) {
      setLanguage(localStorageLang);
    } else setLanguage(detectedLanguage);

    if (!URLlang && language) {
      const newPath = `/${language}/${pathParts.slice(2).join("/")}`;
      navigate(newPath, { replace: true });
    }
  }, [navigate, language, setLanguage]);
};
