/* eslint-disable react/prop-types */
import { useContext } from "react";
import { TranslationContext } from "../context/contexts";
import { useNavigate } from "react-router-dom";

const LanguageButton = () => {
  const { language, setLanguage, setFromLanguageBtn } =
    useContext(TranslationContext);
  const navigate = useNavigate();

  const handleLanguageChange = (event) => {
    const pathParts = location.pathname.split("/").filter(Boolean);
    console.log(location.pathname);
    const newLanaguage = event.target.value;
    setFromLanguageBtn(true);
    setLanguage(newLanaguage);
    localStorage.setItem("language", newLanaguage);
    const newPath = `/${newLanaguage}/${pathParts.slice(1).join("/")}`;
    navigate(newPath, { replace: true });
  };

  return (
    <select
      className="cursor-pointer bg-transparent focus-visible:outline-none"
      value={language}
      onChange={handleLanguageChange}
    >
      <option className="bg-primary" value="es">
        Es
      </option>
      <option className="bg-primary" value="en">
        En
      </option>
      <option className="bg-primary" value="pt">
        Pt
      </option>
    </select>
  );
};

export default LanguageButton;
