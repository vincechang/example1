import { SvgIcon } from '@mui/material';
import { ReactComponent as NavIcon } from 'assets/nav.svg';
import { COLOR } from 'theme/variables.ts';

// eslint-disable-next-line react/prop-types
function HomeIcon({ isSelected = false }) {
  return (
    <SvgIcon component={NavIcon} sx={{ color: `${isSelected ? COLOR.WHITE : COLOR.GREY_8A}` }} />
  );
}

export default HomeIcon;
