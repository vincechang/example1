import { createTheme } from '@mui/material';
import { COLOR } from './variables.ts';

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1440,
    },
  },
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
    MuiDivider: {
      styleOverrides: {
        root: {
          margin: '30px 0px',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          fontSize: 14,
          lineHeight: 21,
          height: 60,
          '& .MuiOutlinedInput-notchedOutline': {
            borderWidth: 3,
          },
          '&.Mui-focused': {
            '& .MuiOutlinedInput-notchedOutline': {
              border: `3px solid ${COLOR.ORANGE}`,
            },
          },
        },
      },
    },
    MuiSlider: {
      styleOverrides: {
        root: {
          minWidth: 285,
          '& .MuiSlider-thumb': {
            width: 26,
            height: 26,
            color: COLOR.BLACK_1B,
            border: `6px solid ${COLOR.ORANGE_LIGHT}`,
          },
          '& .MuiSlider-track': {
            height: 8,
            border: 'none',
            background: 'linear-gradient(270deg, #FFD25F 0.13%, #FF5C01 100%)',
          },
          '& .MuiSlider-rail': {
            opacity: 0.3,
            backgroundColor: COLOR.WHITE,
          },
          '& .MuiSlider-mark': {
            display: 'none',
          },
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          height: 70,
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          lineHeight: 1.5,
        },
      },
    },
  },
});

export default theme;
