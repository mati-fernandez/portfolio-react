import { useContext } from 'react';
import { TranslationContext } from '../context/TranslationContext';

const DevBtn = () => {
  const { endpoint, setEndpoint } = useContext(TranslationContext);

  const handleClick = () => {
    setEndpoint((prev) => (prev === 'build' ? 'dev' : 'build'));
  };

  return (
    <>
      {endpoint === 'build' ? (
        <button id="dev-mode-btn" onClick={handleClick}>
          Build <br /> Endpoint
        </button>
      ) : (
        <button
          id="dev-mode-btn"
          style={{
            backgroundColor: 'red',
            color: 'black',
            fontWeight: 'bolder',
          }}
          onClick={handleClick}
        >
          Dev <br /> Endpoint
        </button>
      )}
    </>
  );
};

export default DevBtn;
