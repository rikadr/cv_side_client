import React, { useRef } from "react";
import UseElementOnScreen from '../hooks/UseElementOnScreen';


const IntersectEnter = ({ children }) => {
  const targetRef = useRef(null);
  const isVisible = UseElementOnScreen(
    {
      root: null,
      marginRoot: '0px 0px -200px 0px',
      threshold: 0.0
    },
    targetRef
  );

  return (
    <div className="IntersectEnter" ref={targetRef}>
      <div className={`IntersectEnter ${isVisible ? 'animate-enter' : 'animate-exit'}`}>
        {children}
      </div>
    </div>
  );
};

export default IntersectEnter;
