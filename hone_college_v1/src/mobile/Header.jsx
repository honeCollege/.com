import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  useTheme,
  useMediaQuery
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { ThemeProvider } from '@mui/material/styles';
import defaultBlueTheme from '../css/colorTheme';

const menuItems = [
  { text: 'Home', link: '/.com' },
  { text: 'About', link: '/.com/about' },
  { text: 'Courses', link: '/.com/courses' }
];

export default function MobileNavigationHeader() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const DrawerMenu = (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        bgcolor: theme.palette.secondary.main,
        color: 'white',
        display: 'flex',
        flexDirection: 'column'
      }}
      role="presentation"
    >
      <IconButton
        onClick={toggleDrawer(false)}
        sx={{ alignSelf: 'flex-end', m: 2, color: 'white' }}
      >
        <CloseIcon />
      </IconButton>
      <List sx={{ width: '100%' }}>
        {menuItems.map(({ text, link }) => (
          <ListItem
            button
            component={Link}
            to={link}
            key={text}
            sx={{
              width: '100%',
              height: '64px',
              borderBottom: '1px solid rgba(255,255,255,0.2)',
              justifyContent: 'center',
            }}
            onClick={toggleDrawer(false)}
          >
            <ListItemText
              primary={text}
              primaryTypographyProps={{
                align: 'center',
                fontSize: '1.25rem',
                fontWeight: 'bold',
                color: 'white'
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <ThemeProvider theme={defaultBlueTheme}>
      <AppBar position="sticky" color="secondary" elevation={12}>
        <Toolbar
          sx={{
            height: 90,
            mt: 2,
            display: 'flex',
            justifyContent: 'space-between',
            px: 2
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: 'bold',
              fontStyle: 'italic',
              fontSize: { xs: '1.5rem', sm: '2rem' },
              color: 'white',
              userSelect: 'none',
              cursor: 'default',
                            paddingLeft: '20px',
            }}
          >
            Hone College
          </Typography>

         <IconButton
        edge="end"
        color="inherit"
        aria-label="menu"
        onClick={toggleDrawer(true)}
      >
        <MenuIcon sx={{ fontSize: '40px', paddingRight: '80px' }} />
      </IconButton>

        </Toolbar>
      </AppBar>

      <Drawer
        anchor="top"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: { backgroundColor: theme.palette.secondary.main }
        }}
      >
        {DrawerMenu}
      </Drawer>
    </ThemeProvider>
  );
}
