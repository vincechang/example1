import {
  Drawer, List, ListItem, ListItemButton, ListItemIcon,
} from '@mui/material';
import { Link, useMatch } from 'react-router-dom';
import { HomeIcon, TagsIcon } from 'components/Icons';
import { COLOR } from 'theme/variables.ts';

const NavConfig = [
  { path: '/home', icon: <HomeIcon /> },
  { path: '/tags', icon: <TagsIcon /> },
];

// eslint-disable-next-line react/prop-types
function NavItem({ path, icon }) {
  const isSelected = Boolean(useMatch(`${path}/*`));
  return (
    <ListItem key={path} disablePadding>
      <ListItemButton selected={isSelected} component={Link} to={path}>
        <ListItemIcon>
          {icon}
        </ListItemIcon>
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
      <List>
        {
          NavConfig.map(({ path, icon }) => (
            <NavItem path={path} icon={icon} />
          ))
        }
      </List>
    </Drawer>
  );
}

export default NavBar;
