import { Typography } from '@mui/material';

function LogoIcon() {
  return (
    <Typography
      component="span"
      sx={{
        fontSize: 13,
        lineHeight: 1.15,
        fontWeight: 700,
        background: 'linear-gradient(270deg, #FFD25F 0.13%, #FF5C01 100%)',
        backgroundClip: 'text',
        textFillColor: 'transparent',
      }}
    >
      LOGO
    </Typography>
  );
}

export default LogoIcon;
