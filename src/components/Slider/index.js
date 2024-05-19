import {
  useLayoutEffect, useMemo, useRef, useState,
} from 'react';
import { Slider as MuiSlider } from '@mui/material';
import { useDebounceCallback, useResizeObserver } from 'usehooks-ts';

const defaultMarks = [
  {
    value: 0,
    label: '3',
  },
  {
    value: 134,
    label: '6',
  },
  {
    value: 268,
    label: '9',
  },
  {
    value: 402,
    label: '12',
  },
  {
    value: 536,
    label: '15',
  },
  {
    value: 670,
    label: '50',
  },
];

function getStep(width) {
  return width >= 670 ? 134 : 57;
}

function rescaleValue(oldValue, oldWidth, newWidth) {
  const step = getStep(oldWidth);
  const newStep = getStep(newWidth);
  const mark = oldValue / step;
  return mark > 4 ? newWidth : newStep * mark;
}

function Slider() {
  const [value, setValue] = useState(0);
  const [width, setWidth] = useState(0);
  const ref = useRef(null);

  useLayoutEffect(() => {
    const step = getStep(width);
    setValue(step * 4);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // on component mount

  const onResize = useDebounceCallback(({ width: newWidth }) => {
    setValue((v) => rescaleValue(v, width, newWidth));
    setWidth(newWidth);
  }, 200);

  useResizeObserver({
    ref,
    onResize,
  });

  const handleChange = (event, newValue) => {
    if (typeof newValue === 'number') {
      setValue(newValue);
    }
  };

  const marks = useMemo(() => {
    const newMarks = [...defaultMarks];
    const step = getStep(width);
    let i;
    for (i = 0; i < newMarks.length - 1; i += 1) {
      newMarks[i].value = step * i;
    }
    newMarks[i].value = width;
    return newMarks;
  }, [width]);

  return (
    <MuiSlider
      ref={ref}
      value={value}
      defaultValue={15}
      valueLabelDisplay="off"
      min={0}
      max={width}
      step={null}
      marks={marks}
      onChange={handleChange}
    />
  );
}

export default Slider;
