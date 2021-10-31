import React, { useEffect, useRef, useState, useMemo } from "react";
import UseElementOnScreen from '../hooks/UseElementOnScreen';


const BackdropSlit = () => {
  const targetRef = useRef(null);
  const isVisible = UseElementOnScreen(
    {
      root: null,
      marginRoot: '0px',
      threshold: 0.0
    },
    targetRef
  );

  return (
    <div className="backdropSlit" ref={targetRef}>
        <div className={`back ${isVisible ? 'animate-fadeIn' : ''}`}></div> 
        <div className={`front ${isVisible ? 'animate-flipIn' : ''}`}></div> 
    </div>
  );
};

export default BackdropSlit;
