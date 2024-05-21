import {
  Drawer, Link, List, ListItem, ListItemButton, ListItemIcon,
} from '@mui/material';
import { useMatch } from 'react-router-dom';

function HomeIcon() {
  return <div>Home</div>;
}

function TagsIcon() {
  return <div>Tags</div>;
}

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

function NavBar() {
  return (
    <Drawer variant="permanent" open>
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
