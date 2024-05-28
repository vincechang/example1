import { useEffect, useState } from 'react';

const useSlider = (sliderRef, onSliderChange) => {
  const [value, setValue] = useState(0);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    onSliderChange(sliderRef.current?.getNum(value, width));
  }, [onSliderChange, sliderRef, value, width]);

  return {
    value, setValue, width, setWidth,
  };
};

export default useSlider;
