const Loader = ({ size = '10vw', borderSize = '8px', className = '' }) => {
  return (
    <div
      className={`loader ${className}`}
      style={{
        width: size,
        height: size,
        borderWidth: borderSize,
      }}
    />
  );
};

export default Loader;