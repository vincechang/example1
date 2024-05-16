import {
  BottomNavigation, BottomNavigationAction,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { HomeIcon, TagsIcon } from 'components/Icons/';

function NavBottom() {
  return (
    <BottomNavigation
      sx={{
        display: { sm: 'none' },
      }}
    >
      <BottomNavigationAction label="/home" component={Link} to="/home" icon={<HomeIcon />} />
      <BottomNavigationAction label="/tags" component={Link} to="/tags" icon={<TagsIcon />} />
    </BottomNavigation>
  );
}

export default NavBottom;
