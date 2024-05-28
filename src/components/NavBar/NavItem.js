import {
  ListItem, ListItemButton, ListItemIcon, Typography,
} from '@mui/material';
import { Link, useMatch } from 'react-router-dom';
import { COLOR } from 'theme/variables.ts';

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

export default NavItem;
