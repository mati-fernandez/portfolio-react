/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { TranslationContext } from "../context/contexts";
import { ThemeContext } from "../context/contexts";
import { motion } from "motion/react";
import Loader from "../components/Loader";

const SkillItem = ({ skillKey, skillData, transition }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { translate, endpoint, contentDevPath, contentBuildPath } =
    useContext(TranslationContext);
  const { styles } = useContext(ThemeContext);
  const srcPath =
    endpoint === "build" ? `${contentBuildPath}` : `${contentDevPath}`;

  return (
    <li className="flex items-center landscape:my-[1vh] landscape:justify-center landscape:font-[2.5vh]">
      <div className="flex w-[40%] items-center justify-end landscape:w-[15%]">
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
          className={`${isLoaded ? "visible" : "invisible"} mr-[0.5rem] max-h-[1rem] max-w-[1rem] landscape:mr-[5px]`}
          onLoad={() => setIsLoaded(true)}
        />
        <span className="mr-1 overflow-clip font-medium whitespace-nowrap landscape:mr-0">
          {translate(`skills.${skillKey}.title`)}
        </span>
      </div>
      <div
        className="ml-[10px] w-[60%] overflow-hidden landscape:mr-[1vw] landscape:w-[60%]"
        style={{
          backgroundColor: styles.colorBackgroundSecondary,
          height: `calc(${styles.fontSizeLandscape}*0.6)`,
        }}
      >
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: skillData.progress }}
          transition={transition}
          className="h-[100%]"
          style={{ backgroundColor: styles.colorGeneralPrimary }}
        />
      </div>
    </li>
  );
};

const Skills = () => {
  const { getImage } = useContext(TranslationContext);
  const { styles } = useContext(ThemeContext);
  const data = getImage("skills");

  return (
    <div className="flex flex-grow flex-col flex-wrap items-center justify-center overflow-y-hidden p-0 landscape:box-border landscape:flex-row landscape:flex-wrap landscape:content-center landscape:gap-[1.8vw] landscape:px-[4vw]">
      <ul
        className="ml-[-4rem] w-[90%] list-none p-0 leading-[4.5svh] landscape:ml-[1rem] landscape:grid landscape:w-[80%] landscape:grid-cols-2 landscape:p-0 landscape:leading-[6vh]"
        style={{ fontSize: styles.fontSizePortrait }}
      >
        {Object.keys(data).map((skill, index) => (
          <SkillItem
            key={skill}
            skillData={data[skill]}
            skillKey={skill}
            transition={{ duration: 0.2, delay: index * 0.1 }}
          />
        ))}
      </ul>
    </div>
  );
};

export default Skills;
