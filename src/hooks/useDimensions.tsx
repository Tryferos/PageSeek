import React, {useEffect, useMemo, useState} from 'react';

export const useDimensions = () => {
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = useMemo(() => dimensions.width <= 640, [dimensions]);
  const isSmall = useMemo(() => dimensions.width <= 840, [dimensions]);

  return {
    dimensions,
    isMobile,
    isSmall,
  };
};
