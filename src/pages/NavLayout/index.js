import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import NavBar from 'components/NavBar';

const drawerWidth = 80;

function NavLayout() {
  return (
    <Box display="flex">
      <Box
        component="nav"
        sx={{
          width: { sm: drawerWidth },
          flexShrink: { sm: 0 },
        }}
      >
        <NavBar width={drawerWidth} />
      </Box>
      <Box
        display="flex"
        sx={{
          flexGrow: 1,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          height: '100vh',
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}

export default NavLayout;
