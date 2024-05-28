import {
  AppBar, Box, Toolbar,
} from '@mui/material';
import NavBottom from 'components/NavBottom';
import { COLOR } from 'theme/variables.ts';
import { LogoIcon } from 'components/Icons';
import FriendTab from 'components/FriendTab';
import { Outlet } from 'react-router-dom';

function HomePage() {
  return (
    <Box display="flex" sx={{ flexGrow: 1 }}>
      <AppBar
        sx={{
          backgroundColor: COLOR.BLACK_18,
          display: { xs: 'flex', sm: 'none' },
          flexDirection: 'row',
        }}
      >
        <Box height={70} width={77} display="flex" sx={{ justifyContent: 'center', alignItems: 'center' }}>
          <LogoIcon />
        </Box>
        <Toolbar />
      </AppBar>
      <Outlet />
      <FriendTab />
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
