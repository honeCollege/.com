import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Link } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import defaultBlueTheme from '../css/colorTheme';
import HeaderButton from './HeaderButton';


// Augment the palette to include an ochre color

// Update the Button's color options to include an ochre option

export default function NavigationHeader() {
  return (
    <ThemeProvider theme={defaultBlueTheme}>
      <AppBar position="static" color="secondary" elevation={12} sx={{ boxShadow: 4 }}>
          <Toolbar sx={{ height: 110 }}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Hone College
            </Typography>
              <HeaderButton text="Home" link="/" />
              <HeaderButton text="About" link="/about" />
              <HeaderButton text="Contact" link="/contact" />
          </Toolbar>
        </AppBar>
    </ThemeProvider>
  );
}