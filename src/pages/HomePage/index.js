import { Box } from '@mui/material';
import FriendTab from 'components/FriendTab';
import { Outlet } from 'react-router-dom';

function HomePage() {
  return (
    <Box display="flex" sx={{ flexGrow: 1 }}>
      <Outlet />
      <FriendTab />
    </Box>
  );
}

export default HomePage;
