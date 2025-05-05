/* eslint-disable react/prop-types */
import avatar from "../assets/avatar.png";
import { useContext, useState } from "react";
import { TranslationContext } from "../context/contexts";
import Info from "../assets/Info";
import Loader from "../components/Loader";

const Home = ({ notFirstLoad, handleOpenModal }) => {
  const { translate } = useContext(TranslationContext);
  const [imgLoading, setImgLoading] = useState(true);

  const handleLoad = () => {
    setImgLoading(false);
  };

  return (
    <div className="flex flex-grow flex-col items-center justify-center overflow-y-hidden p-4">
      {imgLoading && (
        <Loader className="absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2 transform" />
      )}
      <Info
        notFirstLoad={notFirstLoad}
        handleOpenModal={handleOpenModal}
        itemKey={"info"}
      />
      <div className="square:p-4 fixed top-[46%] left-1/2 flex w-[75vmin] flex-grow -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center overflow-y-hidden landscape:top-[51%] landscape:w-[100vmin]">
        <img
          className={`${imgLoading ? "opacity-0" : "w-[40vmin] opacity-100"}`}
          src={avatar}
          alt="avatar"
          onLoad={handleLoad}
        />
        {!imgLoading ? (
          <p className="mt-1 text-sm font-bold dark:font-normal">
            {translate("description")}
          </p>
        ) : null}
      </div>
    </div>
  );
};

export default Home;
