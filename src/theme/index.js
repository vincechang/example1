import { createTheme } from '@mui/material';
import { COLOR } from './variables.ts';

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: COLOR.BLACK_18,
      paper: COLOR.BLACK_1B,
    },
  },
});

export default theme;
