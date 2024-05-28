import { Box, Button, Toolbar } from '@mui/material';

function ResultPanel() {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: { xs: '0px 20px', sm: '0px 130px' } }}>
      <Toolbar sx={{ display: { sm: 'none' } }} />
      <Button
        sx={{
          width: { xs: '100%', sm: 343 },
          mt: { xs: '50px', sm: '305px' },
        }}
      >
        more
      </Button>
    </Box>
  );
}

export default ResultPanel;
