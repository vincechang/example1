import {
  AppBar, Box, Toolbar,
} from '@mui/material';
import NavBottom from 'components/NavBottom';
import { COLOR } from 'theme/variables.ts';

function HomePage() {
  return (
    <Box display="flex">
      <AppBar
        sx={{
          backgroundColor: COLOR.BLACK_18,
          display: { xs: 'flex', sm: 'none' },
        }}
      >
        <Toolbar />
      </AppBar>
      <Box component="main">
        <Toolbar />
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
