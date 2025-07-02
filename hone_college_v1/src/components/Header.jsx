import { ThemeProvider } from '@mui/material/styles';
import { AppBar, Toolbar, Typography} from '@mui/material';
import defaultBlueTheme from '../css/colorTheme';
import HeaderButton from './HeaderButton';


// Augment the palette to include an ochre color

// Update the Button's color options to include an ochre option

export default function NavigationHeader() {
  return (
    <ThemeProvider theme={defaultBlueTheme}>
      <AppBar position="sticky" color="secondary" elevation={12} sx={{ boxShadow: 4 }}>
          <Toolbar 
            sx={{
              height: 90,
              mt: 2,
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
              width: '100%',
              gap: '10px',
              boxSizing: 'border-box',
            }}
          >
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Hone College
            </Typography>
              <HeaderButton text="Home" link="/.com" />
              <HeaderButton text="About" link="/.com/about" />
              <HeaderButton text="Courses" link="/.com/courses" />
          </Toolbar>
        </AppBar>
    </ThemeProvider>
  );
}
