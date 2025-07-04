import React from 'react';
import { useTheme } from '@mui/material/styles';

export default function StickyFooter() {
  const theme = useTheme();

  const footerStyle = {
    bottom: 0,
    width: '100%',
    height: '200px', // 👈 smaller footer height
    backgroundColor: theme.palette.secondary.main,
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 -2px 5px rgba(0, 0, 0, 0.2)',
    zIndex: 1000,
    padding: '0 1rem',
    boxSizing: 'border-box',  // 👈 include padding in width
    overflowX: 'hidden',      // 👈 prevent horizontal scroll if any
  };

  const innerContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: '100%',
    maxWidth: '800px',
    gap: '50px',
  };

  const leftColumnStyle = {
    fontSize: '0.9rem', // 👈 smaller
    fontWeight: '500',
    lineHeight: 1.4,
  };

  const rightColumnStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.2rem',
    fontSize: '0.85rem', // 👈 smaller
    lineHeight: 1.3,
  };

  return (
    <div style={footerStyle}>
      <div style={innerContainerStyle}>
        <div style={leftColumnStyle}>
          <div style={{ fontWeight: 'bold', fontSize: '1rem' }}>Have any questions?</div>
          <div>Feel free to contact us!</div>
          <div
            style={{
              marginTop: '0.4rem',
              fontSize: '0.9rem',
              fontWeight: 'normal',
              color: '#dddddd',
            }}
          >
            Lidcombe 2141, Sydney Australia
          </div>
          <div
            style={{
              marginTop: '0.4rem',
              fontSize: '0.75rem',
              color: '#aaaaaa',
            }}
          >
            © HONECOLLEGE2025
          </div>
        </div>

        <div style={rightColumnStyle}>
          <div style={{ fontWeight: 'bold', fontSize: '1rem' }}>Contact Us</div>
          <div>0416-019-632</div>
          <div>honecollegelearning@gmail.com</div>
        </div>
      </div>
    </div>
  );
}
