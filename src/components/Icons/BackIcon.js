import { SvgIcon } from '@mui/material';
import { ReactComponent as NavIcon } from 'assets/back.svg';

function BackIcon() {
  return (
    <SvgIcon component={NavIcon} />
  );
}

export default BackIcon;
