import React, { useEffect, useRef, useState, useMemo } from 'react';

// When used, pass in options as an object and ref={targetRef}
// to the element that you want observed.

// The options object should declare the following parameters:
// - root: default is null (viewport)
// - marginRoot: default is '0px' (checks the whole viewport)
// - threshold: value between 0 and 1 to say how much of the object needs to be viewed.
const UseElementOnScreen = (options, targetRef) => {
  const [isVisible, setIsVisible] = useState(false);

  const callbackFunction = (entries) => {
    // Extracts the first element in the entries list, entries[0], and sets it to the variable entry
    const [entry] = entries;

    // Sets it to true if the entry's variable; isIntersecting, is true
    setIsVisible(entry.isIntersecting);
  };

  const optionsMemo = useMemo(() => {
    return options;
  }, [options]);

  useEffect(() => {
    // Initiate the intersectionObserver as a function called observer.
    const observer = new IntersectionObserver(callbackFunction, optionsMemo);

    // Sets the currentTarget variable to be the target that we adds the useRef-hook to
    const currentTarget = targetRef.current;

    // If some elements receive the currentTarget-ref then the observer will start to observe this target
    if (currentTarget) observer.observe(currentTarget);

    // Cleanup-function if the ref are removed from a target
    return () => {
      if (currentTarget) observer.unobserve(currentTarget);
    };
  }, [targetRef, optionsMemo]);

  return isVisible;
};

export default UseElementOnScreen;
