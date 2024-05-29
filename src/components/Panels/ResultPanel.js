import { Box, Toolbar, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import BackAppBar from 'components/AppBar/BackAppBar';
import { BackIcon } from 'components/Icons';

function ResultPanel() {
  return (
    <>
      <BackAppBar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: { xs: '0px 20px', sm: '0px 130px' },
          overflowY: 'scroll',
          scrollbarWidth: 'none',
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          '&-ms-overflow-style:': {
            display: 'none',
          },
        }}
      >
        <Toolbar sx={{ display: { sm: 'none' } }} />
        <Box display="flex" sx={{ m: { xs: '22px 0 0 0', sm: '96px 0 0 7px' } }}>
          <Box
            component={Link}
            to="/home"
            height={26}
            width={0}
            sx={{
              display: { sx: 'none', sm: 'block' }, position: 'relative', left: -50, top: 6,
            }}
          >
            <BackIcon />
          </Box>
          <Typography sx={{ typography: { xs: 'h5', sm: 'h4' } }}>Results</Typography>
        </Box>
      </Box>
    </>
  );
}

export default ResultPanel;
