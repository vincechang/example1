import { useEffect, useRef } from 'react';
import {
  Box, Button, Divider, TextField, Toolbar, Typography,
} from '@mui/material';
import Slider from 'components/Slider';
import { Link } from 'react-router-dom';
import useStore from 'store';
import { useSlider } from 'hooks';
import LogoAppBar from 'components/AppBar/LogoAppBar';
import NavBottom from 'components/NavBottom';

function SearchPanel() {
  const sliderRef = useRef(null);
  const {
    keyword, pageSize, setKeyword, setPageSize,
  } = useStore();
  const sliderState = useSlider(sliderRef, setPageSize);

  useEffect(() => {
    setKeyword('');
    setPageSize(15);
    // eslint-disable-next-line
  }, []); // reset on mount

  const handleInputChange = (e) => {
    setKeyword(e.target.value);
  };

  return (
    <>
      <LogoAppBar />
      <Box component="main" sx={{ flexGrow: 1, p: { xs: '0px 20px', sm: '0px 130px' } }}>
        <Toolbar sx={{ display: { sm: 'none' } }} />
        <Typography variant="h5" sx={{ m: { xs: '0 0 16px', sm: '54px 0 20px' } }}>Search</Typography>
        <TextField placeholder="Keyword" variant="outlined" fullWidth onChange={handleInputChange} />
        <Divider sx={{ display: { xs: 'none', sm: 'block' } }} />
        <Typography variant="h5" sx={{ m: { xs: '28px 0 16px', sm: '0 0 20px' } }}># Of Results Per Page</Typography>
        <Typography>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700, letterSpacing: 0.15, lineHeight: 1, mr: '10px',
            }}
            component="span"
          >
            {pageSize}
          </Typography>
          results
        </Typography>
        <Slider
          sliderState={sliderState}
          ref={sliderRef}
        />
        <Divider sx={{ mt: { xs: '203px', sm: '14px' } }} />
        <Button
          disabled={keyword === ''}
          component={Link}
          to="result"
          sx={{
            width: { xs: '100%', sm: 343 },
            mt: { xs: '50px', sm: '305px' },
          }}
        >
          search
        </Button>
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
    </>

  );
}

export default SearchPanel;
