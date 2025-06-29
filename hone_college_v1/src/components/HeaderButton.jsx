import React from 'react';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

export default function HeaderButton({ text, link }) {
  const theme = useTheme();

  return (
    <Button
      color="primary"
      variant="outlined"
      component={Link}
      to={link}
     sx={{
        color: theme.palette.primary.contrastText,
        fontSize: '18px',
        fontWeight: '600',
        textTransform: 'none',
        letterSpacing: '0.03em',
        borderRadius: '20px',
        padding: '8px 20px',
        '&:hover': {
          transform: 'translateY(-3px)',    
          borderColor: theme.palette.primary.light,
          backgroundColor: theme.palette.primary.contrastText,  // Add background color change here
          color: theme.palette.primary.contrastTextDark,    // Optional: keep text color consistent
        },
      }}
    >
      {text}
    </Button>
  );
}
