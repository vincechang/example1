import {
  AppBar, Box, Toolbar, Typography,
} from '@mui/material';
import NavBottom from 'components/NavBottom';
import Slider from 'components/Slider';
import { COLOR } from 'theme/variables.ts';
import { useRef, useState } from 'react';

function HomePage() {
  const [value, setValue] = useState(0);
  const [width, setWidth] = useState(0);
  const sliderRef = useRef(null);
  return (
    <Box display="flex" sx={{ flexGrow: 1 }}>
      <AppBar
        sx={{
          backgroundColor: COLOR.BLACK_18,
          display: { xs: 'flex', sm: 'none' },
        }}
      >
        <Toolbar />
      </AppBar>
      <Box component="main" sx={{ flexGrow: 1 }}>
        <Toolbar />
        <Typography>{sliderRef.current?.getNum(value, width)}</Typography>
        <Slider
          value={value}
          setValue={setValue}
          width={width}
          setWidth={setWidth}
          ref={sliderRef}
        />
      </Box>
      <Box
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
        }}
      >
        <NavBottom />
      </Box>
    </Box>
  );
}

export default HomePage;
