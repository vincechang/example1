import {
  BottomNavigation, BottomNavigationAction,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { HomeIcon, TagsIcon } from 'components/Icons/';

function NavBottom() {
  return (
    <BottomNavigation
      sx={{
        height: 66,
        display: { sm: 'none' },
        backgroundColor: '#18181833',
        boxShadow: '0px 0.5px 0px 0px #000000CC inset',
      }}
    >
      <BottomNavigationAction label="/home" component={Link} to="/home" icon={<HomeIcon isSelected />} sx={{ padding: '17px 12px 0 109px' }} />
      <BottomNavigationAction label="/tags" component={Link} to="/tags" icon={<TagsIcon />} sx={{ padding: '17px 109px 0 12px' }} />
    </BottomNavigation>
  );
}

export default NavBottom;
