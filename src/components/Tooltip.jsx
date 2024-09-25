/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { TooltipContext } from '../context/TooltipContext';

const Tooltip = ({ aspectRatio }) => {
  const { tooltip } = useContext(TooltipContext);
  return (
    tooltip.visible &&
    aspectRatio === 'landscape' && (
      <div
        className="tooltip"
        style={{
          top: `${tooltip.y}px`,
          left: `${tooltip.x}px`,
          position: 'absolute',
          background: '#333',
          color: '#fff',
          padding: '5px',
          borderRadius: '5px',
          fontSize: '.7rem',
        }}
      >
        {tooltip.text}
      </div>
    )
  );
};

export default Tooltip;
