import React, { useState } from 'react';
import './Tooltip.css';

const Tooltip = ({ text, children }) => {
  const [show, setShow] = useState(false);

  // const handleMouseEnter = () => {
  //   setShow(true);
  // };

  // const handleMouseLeave = () => {
  //   setShow(false);
  // };

  const handleClick = () => {
    setShow(true);
  }
  // const handleTouchStart = () => {
  //   setShow(true);
  // };

  // const handleTouchEnd = () => {
  //   setShow(false);
  // };

  return (
    <div className="tooltip-container">
      <div
        className="icon"
        onClick={handleClick}
        // onMouseEnter={handleMouseEnter}
        // onMouseLeave={handleMouseLeave}
        // onTouchStart={handleTouchStart}
        // onTouchEnd={handleTouchEnd}
      >
        {children}
      </div>
      {show && <div className="tooltip">{text}</div>}
    </div>
  );
};

export default Tooltip;