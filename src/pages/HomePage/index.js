import { Box } from '@mui/material';
import NavBottom from 'components/NavBottom';
import FriendTab from 'components/FriendTab';
import { Outlet } from 'react-router-dom';

function HomePage() {
  return (
    <Box display="flex" sx={{ flexGrow: 1 }}>
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
