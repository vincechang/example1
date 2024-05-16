import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import NavBar from 'components/NavBar';

const drawerWidth = 80;

function NavLayout() {
  return (
    <Box sx={{ display: 'flex' }}>
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
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          display: 'flex',
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}

export default NavLayout;
