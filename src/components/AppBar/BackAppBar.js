import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { BackIcon } from 'components/Icons';
import AppBar from 'components/AppBar/AppBar';

function BackAppBar() {
  return (
    <AppBar>
      <Box component={Link} to="/home" height={70} width={58} display="flex" sx={{ p: '23px 13px 21px 19px' }}>
        <BackIcon />
      </Box>
      <Typography variant="h5">Home Page</Typography>
    </AppBar>

  );
}

export default BackAppBar;
