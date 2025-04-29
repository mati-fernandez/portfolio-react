import { useContext } from "react";
import { TranslationContext } from "../context/contexts";

const DevBtn = () => {
  const { endpoint, setEndpoint } = useContext(TranslationContext);

  const handleClick = () => {
    setEndpoint((prev) => (prev === "build" ? "dev" : "build"));
  };

  const baseClasses =
    "border-primary hover:bg-secondary-alpha absolute top-[2.5vh] left-[2vh] cursor-pointer rounded-4xl border-1 border-solid p-[0.5rem] opacity-[0.7] landscape:top-[12vh] landscape:left-[2vh] landscape:text-[0.5rem]";

  return (
    <button
      className={`${
        endpoint === "build"
          ? `${baseClasses}`
          : `${baseClasses} bg-[red] font-extrabold text-[black]`
      }`}
      onClick={handleClick}
    >
      {endpoint === "build" ? "Build" : "Dev"} <br /> Endpoint
    </button>
  );
};

export default DevBtn;
