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
  typography: {
    fontFamily: 'Ubuntu',
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          backgroundImage: 'none',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...{
            color: COLOR.BLACK_12,
            backgroundColor: COLOR.WHITE,
            border: `1px solid ${COLOR.WHITE}`,
          textTransform: 'uppercase',
            fontSize: 12,
            fontWeight: 700,
            lineHeight: 1,
            padding: '13px 16px',
            minWidth: 0,
            '&:hover': {
              color: COLOR.WHITE,
              backgroundColor: COLOR.BLACK_12,
            },
          },
          ...(ownerState.variant === 'contained' && {
            fontFamily: 'Open Sans',
            color: COLOR.WHITE,
            backgroundColor: COLOR.BLACK_12,
            borderRadius: 20,
            textTransform: 'none',
            fontSize: 12,
            fontWeight: 600,
            lineHeight: 1,
            boxSizing: 'border-box',
            padding: '8px 10px',
            '&:hover': {
              color: COLOR.BLACK_12,
              backgroundColor: COLOR.WHITE,
            },
          }),
          ...(ownerState.variant === 'outlined' && {
            fontFamily: 'Open Sans',
            color: COLOR.BLACK_12,
            backgroundColor: COLOR.WHITE,
            borderRadius: 20,
            textTransform: 'none',
            fontSize: 12,
            fontWeight: 600,
            lineHeight: 1,
            boxSizing: 'border-box',
            padding: '8px 10px',
            '&:hover': {
              color: COLOR.WHITE,
              backgroundColor: COLOR.BLACK_12,
              border: `1px solid ${COLOR.WHITE}`,
            },
          }),
        }),
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          height: 70,
        },
    },
    },
  },
});

export default theme;
