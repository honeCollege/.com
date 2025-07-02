import React from 'react';
import { useTheme } from '@mui/material/styles';

export default function StickyFooter() {
  const theme = useTheme();

  const footerStyle = {
    bottom: 0,
    width: '100%',
    height: '200px',
    backgroundColor: theme.palette.secondary.main,
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 -2px 5px rgba(0, 0, 0, 0.2)',
    zIndex: 1000,
  };

  const innerContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '100%',
    maxWidth: '800px',
  };

  const leftColumnStyle = {
    fontSize: '1.2rem',
    fontWeight: '500',
  };

  const rightColumnStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.3rem',
    fontSize: '1rem',
  };

  return (
  <div style={footerStyle}>
    <div style={innerContainerStyle}>
      <div style={leftColumnStyle}>
        <div style={{ fontWeight: 'bold' }}>Have any questions?</div>
        <div>Feel free to contact us!</div>
        <div style={{ marginTop: '1rem', fontSize: '1.2rem', fontWeight: 'normal', color: '#dddddd' }}>
          Lidcombe 2141, Sydney Australia
        </div>
      </div>

      <div style={rightColumnStyle}>
        <div style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>Contact Us</div>
        <div>0416-019-632</div>
        <div>honecollegelearning@gmail.com</div>
      </div>
    </div>
  </div>
);

}
