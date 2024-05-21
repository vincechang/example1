import {
  AppBar, Box, Button, Divider, TextField, Toolbar, Typography,
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
        <Toolbar sx={{ display: { sm: 'none' } }} />
        <Typography variant="h5" sx={{ margin: { xs: '0 0 16px', sm: '54px 0 20px' } }}>Search</Typography>
        <TextField placeholder="Keyword" variant="outlined" fullWidth />
        <Divider sx={{ display: { xs: 'none', sm: 'block' } }} />
        <Typography variant="h5" sx={{ margin: { xs: '28px 0 16px', sm: '0 0 20px' } }}># Of Results Per Page</Typography>
        <Typography>
          <Typography variant="h3" sx={{ fontWeight: 700, marginRight: '10px' }} component="span">{sliderRef.current?.getNum(value, width)}</Typography>
          results
        </Typography>
        <Slider
          value={value}
          setValue={setValue}
          width={width}
          setWidth={setWidth}
          ref={sliderRef}
        />
        <Divider sx={{ marginTop: { xs: '218px', sm: '30px' } }} />
        <Button
          sx={{
            width: { xs: '100%', sm: 343 },
            marginTop: { xs: '80px', sm: '335px' },
          }}
        >
          search
        </Button>
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
