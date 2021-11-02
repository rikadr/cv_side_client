import React, { useEffect, useRef, useState, useMemo } from "react";
import UseElementOnScreen from '../hooks/UseElementOnScreen';


const BackdropSlit = () => {
  const targetRef = useRef(null);
  const isVisible = UseElementOnScreen(
    {
      root: null,
      marginRoot: '200px 200px 200px 200px',
      threshold: 0.9
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
