/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';
import { useContext } from 'react';
import { PageContext } from './PageContext';

export const StylesContext = createContext();

export const StylesProvider = ({ children }) => {
  const [dynamicStyles, setDynamicStyles] = useState({});

  const { actualPage, aspectRatio, viewMore } = useContext(PageContext);

  const updateDynamicStyles = (translationsData, imagesData) => {
    const allKeys = Object.keys(translationsData);

    // Filtrás según viewMore
    const visibleKeys = !viewMore[actualPage]
      ? allKeys.filter((key) => imagesData[key]?.class !== 'secondary')
      : allKeys;

    const itemCount = visibleKeys.length;
    console.log('itemCount', itemCount);

    let dynamicFontSize = 0;
    if (aspectRatio === 'portrait') {
      dynamicFontSize = Math.max(1, Math.min(1.2, 3.5 / itemCount));
    } else if (aspectRatio === 'square') {
      dynamicFontSize = Math.max(0.8, Math.min(1.2, 3.5 / itemCount));
    } else {
      dynamicFontSize = Math.max(0.8, Math.min(1, 3.5 / itemCount));
    }

    const dynamicPadding = Math.max(0.4, 1 / itemCount);

    let dynamicMargin = 0;
    if (aspectRatio === 'portrait') {
      dynamicMargin = Math.max(0.1, 7 / itemCount);
    } else if (aspectRatio === 'square') {
      dynamicMargin = Math.max(0.4, Math.min(1.2, 3.5 / itemCount));
    } else {
      dynamicMargin = Math.max(0.1, 1 / itemCount);
    }

    const newStyles = {
      fontSize: `${dynamicFontSize}rem`,
      padding: `${dynamicPadding}rem ${dynamicPadding * 1.5}rem`,
      marginBlock: `${dynamicMargin * 2}rem`,
      marginInline: `${dynamicMargin / 2}rem`,
    };
    console.log(newStyles, 'newStyles');

    setDynamicStyles((prevStyles) => ({ ...prevStyles, ...newStyles }));
  };

  return (
    <StylesContext.Provider
      value={{
        dynamicStyles,
        updateDynamicStyles,
      }}
    >
      {children}
    </StylesContext.Provider>
  );
};
