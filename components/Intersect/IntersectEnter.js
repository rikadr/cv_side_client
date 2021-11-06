import React, { useRef } from "react";
import UseElementOnScreen from '../hooks/UseElementOnScreen';


const IntersectEnter = () => {
  const targetRef = useRef(null);
  const isVisible = UseElementOnScreen(
    {
      root: null,
      marginRoot: '0px 0px 200px 200px',
      threshold: 0.0
    },
    targetRef
  );

  return (
    <div className={`IntersectEnter ${isVisible ? 'animate-enter' : 'animate-exit'}`} ref={targetRef}>

    </div>
  );
};

export default IntersectEnter;
