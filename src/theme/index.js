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
    h4: {
      fontSize: 30,
    },
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
            fontSize: 14,
            fontWeight: 700,
            lineHeight: 1,
            padding: '12px 16px',
            minWidth: 0,
            '&:hover': {
              color: COLOR.WHITE,
              backgroundColor: COLOR.BLACK_12,
            },
            '&.Mui-disabled': {
              color: COLOR.GREY_6A,
              backgroundColor: COLOR.GREY_8A,
              borderColor: COLOR.GREY_8A,
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
    MuiListItemButton: {
      styleOverrides: {
        root: {
          justifyContent: 'center',
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          justifyContent: 'center',
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
            borderRadius: 6,
          },
          '&.Mui-focused': {
            '& .MuiOutlinedInput-notchedOutline': {
              border: `3px solid ${COLOR.ORANGE}`,
              borderRadius: 6,
            },
          },
        },
        input: {
          paddingLeft: 19,
          paddingRight: 19,
        },
      },
    },
    MuiSlider: {
      styleOverrides: {
        root: {
          padding: '29px 0',
          minWidth: 285,
          '@media (pointer: coarse)': {
            padding: '29px 0',
          },
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
            height: 8,
            opacity: 0.3,
            backgroundColor: COLOR.WHITE,
          },
          '& .MuiSlider-mark': {
            display: 'none',
          },
          '& .MuiSlider-markLabel': {
            top: 50,
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          minHeight: 33,
          '& .MuiTabs-flexContainer': {
            minHeight: 0,
          },
          '& .MuiTab-root': {
            minHeight: 0,
          },
          button: {
            height: 46,
            fontSize: 16,
            letterSpacing: 0.15,
            textTransform: 'none',
            color: COLOR.GREY_92,
            '&.MuiTab-root.Mui-selected': {
              color: COLOR.WHITE,
            },
          },
        },
        indicator: {
          backgroundColor: COLOR.WHITE,
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
