import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      light: '#68bbe3',  // Baby Blue
      main: '#0e86d4',   // Blue Grotto
      dark: '#055c9d',   // Blue
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#003060',   // Navy Blue
      contrastText: '#ffffff',
    },
    background: {
      default: '#f5faff', // Optional soft background
      paper: '#ffffff',
    },
    text: {
      primary: '#003060', // Navy Blue
    },
  },
});

export default theme;
