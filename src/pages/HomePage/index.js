import {
  AppBar, Box, Toolbar,
} from '@mui/material';
import NavBottom from 'components/NavBottom';
import { COLOR } from 'theme/variables.ts';

function HomePage() {
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
