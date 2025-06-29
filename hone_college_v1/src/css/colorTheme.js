import { createTheme } from '@mui/material/styles';

const defaultBlueTheme = createTheme({
  palette: {
    primary: {
      main: '#327adb',
      light: '#7aa0e7',
      dark: '#1e4fa5',
      contrastText: '#FAF1E4',
      contrastTextDark: '#8c5d1a' 
    },
    typography: {
      fontFamily: 'Verdana, Geneva, Tahoma, sans-serif',
    },
    secondary: {
      main: '#327adb',
    }
  },
});

export default defaultBlueTheme;
