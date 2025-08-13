/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { TranslationContext } from "../context/contexts";
import { motion } from "motion/react";
import Loader from "../components/Loader";

const SkillItem = ({ skillKey, skillData, transition }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { translate, endpoint, contentDevPath, contentBuildPath } =
    useContext(TranslationContext);
  const srcPath =
    endpoint === "build" ? `${contentBuildPath}` : `${contentDevPath}`;

  return (
    <li className="flex items-center justify-end">
      <div className="flex items-center gap-2">
        {/* Loader se muestra mientras la imagen no está cargada */}
        {!isLoaded && (
          <div className="relative mr-2">
            <Loader
              size="1rem"
              borderSize="0.1rem"
              className="absolute top-1/2 left-1/2 z-10 aspect-square -translate-x-1/2 -translate-y-1/2"
            />
          </div>
        )}

        {/* Imagen que se muestra al cargar */}
        <img
          src={`${srcPath}${skillData.src}`}
          alt={translate(`skills.${skillKey}.title`)}
          className={`${isLoaded ? "visible" : "invisible"} max-h-4 max-w-4`}
          onLoad={() => setIsLoaded(true)}
        />
        <span className="square:mr-0 mr-1 overflow-clip font-medium whitespace-nowrap">
          {translate(`skills.${skillKey}.title`)}
        </span>
      </div>
      <div className="square:w-1/2 ml-2 h-[0.15rem] w-1/2 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: skillData.progress }}
          transition={transition}
          className="bg-background-terciary h-full"
        />
      </div>
    </li>
  );
};

const Skills = () => {
  const { getImage } = useContext(TranslationContext);
  const data = getImage("skills");

  return (
    <main className="flex w-full flex-grow flex-col flex-wrap items-center justify-center overflow-y-hidden p-0 landscape:box-border landscape:flex-row landscape:flex-wrap landscape:content-center">
      <ul className="square:grid square:grid-cols-2 square:-translate-x-0 wide:w-1/2 wide:max-w-2xl wide:min-w-lg w-9/10 -translate-x-1 list-none p-0 text-sm leading-6 landscape:w-7/9 landscape:leading-8">
        {Object.keys(data).map((skill, index) => (
          <SkillItem
            key={skill}
            skillData={data[skill]}
            skillKey={skill}
            transition={{ duration: 0.2, delay: index * 0.1 }}
          />
        ))}
      </ul>
    </main>
  );
};

export default Skills;
