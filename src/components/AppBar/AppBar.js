import { AppBar as MuiAppBar, Toolbar } from '@mui/material';
import { COLOR } from 'theme/variables.ts';

// eslint-disable-next-line react/prop-types
function AppBar({ children }) {
  return (
    <MuiAppBar
      sx={{
        backgroundColor: COLOR.BLACK_18,
        display: { xs: 'flex', sm: 'none' },
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      {children}
      <Toolbar />
    </MuiAppBar>

  );
}

export default AppBar;
