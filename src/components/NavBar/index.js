import {
  Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, Typography,
} from '@mui/material';
import { Link, useMatch } from 'react-router-dom';
import { LogoIcon } from 'components/Icons';
import { COLOR } from 'theme/variables.ts';
import NavItems from 'configs/navItems';

// eslint-disable-next-line react/prop-types
function NavItem({ path, icon, label }) {
  const isSelected = Boolean(useMatch(`${path}/*`));
  return (
    <ListItem
      key={path}
      disablePadding
      sx={{
        mb: '6px',
        '&:hover .MuiTypography-root': {
          color: isSelected ? COLOR.WHITE : COLOR.GREY_8A,
          visibility: 'visible',
        },
      }}
    >
      <ListItemButton component={Link} to={path} display="flex" sx={{ flexDirection: 'column' }}>
        <ListItemIcon>
          {icon({ isSelected })}
        </ListItemIcon>
        <Typography
          sx={{
            fontSize: 12,
            letterSpacing: 0.4,
            visibility: isSelected ? 'visible' : 'hidden',
          }}
        >
          {label}
        </Typography>
      </ListItemButton>
    </ListItem>
  );
}

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
