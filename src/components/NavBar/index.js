import { Box, Drawer, List } from '@mui/material';
import { LogoIcon } from 'components/Icons';
import { COLOR } from 'theme/variables.ts';
import NavItems from 'configs/navItems';
import NavItem from 'components/NavBar/NavItem';

// eslint-disable-next-line react/prop-types
function NavBar({ width }) {
  return (
    <Drawer
      variant="permanent"
      open
      sx={{
        display: { xs: 'none', sm: 'block' },
        '& .MuiDrawer-paper': {
          borderRight: `1px solid ${COLOR.BLACK_00_33}`,
          boxSizing: 'border-box',
          width,
        },
      }}
    >
      <Box height={88} display="flex" sx={{ justifyContent: 'center', alignItems: 'center' }}>
        <LogoIcon />
      </Box>
      <List disablePadding>
        {
          NavItems.map(({ path, icon, label }) => (
            <NavItem key={path} path={path} icon={icon} label={label} />
          ))
        }
      </List>
    </Drawer>
  );
}

export default NavBar;
