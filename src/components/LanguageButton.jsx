/* eslint-disable react/prop-types */
import { useContext } from "react";
import { TranslationContext } from "../context/contexts";
import { useNavigate } from "react-router-dom";

const LanguageButton = () => {
  const { language, setLanguage, setFromLanguageBtn } =
    useContext(TranslationContext);
  const navigate = useNavigate();

  const handleLanguageChange = (event) => {
    const pathParts = location.hash.split("/").filter(Boolean);
    const newLanaguage = event.target.value;
    setFromLanguageBtn(true);
    setLanguage(newLanaguage);
    localStorage.setItem("language", newLanaguage);
    const newPath = `/${newLanaguage}/${pathParts.slice(2).join("/")}`;
    navigate(newPath, { replace: true });
  };

  return (
    <select
      className="fixed top-0 right-0 z-10 mx-[6vw] my-[2vh] cursor-pointer bg-transparent p-[2vh] text-[1.3rem] focus-visible:outline-none landscape:static landscape:m-0 landscape:h-full landscape:rounded-none landscape:p-0 landscape:text-[0.8rem]"
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
