import { Box } from '@mui/material';
import AppBar from 'components/AppBar/AppBar';
import { LogoIcon } from 'components/Icons';

function LogoAppBar() {
  return (
    <AppBar>
      <Box height={70} width={77} display="flex" sx={{ justifyContent: 'center', alignItems: 'center' }}>
        <LogoIcon />
      </Box>
    </AppBar>

  );
}

export default LogoAppBar;
