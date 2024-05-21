import {
  forwardRef,
  useImperativeHandle,
  useLayoutEffect, useMemo, useRef,
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

function Slider({
// eslint-disable-next-line react/prop-types
  value, width, setValue, setWidth,
}, ref) {
  const resizeRef = useRef(null);

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
    ref: resizeRef,
    onResize,
  });

  const handleChange = (event, newValue) => {
    setValue(newValue);
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

  useImperativeHandle(ref, () => ({
    getNum: (v, w) => {
      const step = getStep(w);
      const mark = (v / step) > 4 ? 5 : (v / step);
      const map = [3, 6, 9, 12, 15, 50];
      return map[mark];
    },
  }), []);

  return (
    <MuiSlider
      ref={resizeRef}
      value={value}
      valueLabelDisplay="off"
      min={0}
      max={width}
      step={null}
      marks={marks}
      onChange={handleChange}
    />
  );
}

export default forwardRef(Slider);
