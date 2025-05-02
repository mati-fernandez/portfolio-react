/* eslint-disable react/prop-types */
const Hamburguer = ({ showMenu }) => {
  return (
    <>
      {showMenu ? (
        <span className="-translate-1/4 transform p-4 text-[2rem] font-normal">
          X
        </span>
      ) : (
        <svg
          className="h-[1.8rem]"
          alt="Hamburguer btn"
          fill="currentColor"
          width="49"
          height="33"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 49 33"
          xmlnsXlink="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0.5C0 0.223858 0.223858 0 0.5 0H47.5C47.7761 0 48 0.223858 48 0.5V0.5C48 0.776142 47.7761 1 47.5 1H0.500001C0.223859 1 0 0.776142 0 0.5V0.5Z"
            fill="currentColor"
          />
          <path
            d="M0 16.5C0 16.2239 0.223858 16 0.5 16H47.5C47.7761 16 48 16.2239 48 16.5V16.5C48 16.7761 47.7761 17 47.5 17H0.500001C0.223859 17 0 16.7761 0 16.5V16.5Z"
            fill="currentColor"
          />
          <path
            d="M0 32.5C0 32.2239 0.223858 32 0.5 32H47.5C47.7761 32 48 32.2239 48 32.5V32.5C48 32.7761 47.7761 33 47.5 33H0.500001C0.223859 33 0 32.7761 0 32.5V32.5Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};

export default Hamburguer;
