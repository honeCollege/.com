import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

export default function HeaderButton({ text, link }) {
  const theme = useTheme();

  return (
    <Button
      color="primary"
      variant="text"
      component={Link}
      to={link}
     sx={{
        color: 'white',
        fontSize: '18px',
        fontWeight: '600',
        textTransform: 'none',
        letterSpacing: '0.03em',
        borderRadius: '20px',
        padding: '8px 20px',
        border: '2px solid transparent', 
        '&:hover': {
          transform: 'translateY(-3px)',    
          backgroundColor: theme.palette.primary.light,
          border: '3px solid white',
          color: 'white',  
        },
      }}
    >
      {text}
    </Button>
  );
}
