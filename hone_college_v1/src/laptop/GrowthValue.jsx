import React, { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import leafGrowth from './leafGrowth.png';

export default function GrowthValue() {
  const theme = useTheme();

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Scale factor: 1 if width >= 1500, else proportionally smaller
  const scale = windowWidth < 1500 ? windowWidth / 1500 : 1;

  return (
    <div
      style={{
        width: 400 * scale,
        backgroundColor: '#f2f2f2',
        paddingTop: 50 * scale,
        height: 700 * scale,
        minHeight: '600px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: `${1 * scale}rem`,
        borderRadius: 8 * scale,
        justifyContent: 'center',
        transformOrigin: 'top left',
      }}
    >
      <div
        style={{
          width: 300 * scale,
          height: 300 * scale,
          borderRadius: '50%',
          backgroundColor: '#30cf5b',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden',
        }}
      >
        <img
          src={leafGrowth}
          alt="Leaf Growth"
          style={{
            width: 200 * scale,
            objectFit: 'contain',
            marginTop: 20 * scale,
          }}
        />
      </div>

      <div
        style={{
          width: 300 * scale,
          maxWidth: 300 * scale,
          textAlign: 'center',
          margin: '0 auto',
          flexShrink: 0,
        }}
      >
        <h2
          style={{
            color: theme.palette.primary.dark,
            fontSize: `${1.8 * scale}rem`,
            fontWeight: '700',
            marginBottom: `${0.5 * scale}rem`,
          }}
        >
          Growth
        </h2>
        <p
          style={{
            fontSize: `${20 * (scale+ 0.05)}px`,
            fontWeight: '400',
            lineHeight: '1.6',
            marginBottom: `${0.5 * scale}rem`,
          }}
        >
          At HoneCollege, we’re committed to nurturing growth by helping students build confidence and curiosity.
        </p>
        <p
          style={{
            fontSize: `${20 * (scale + 0.05)}px`,
            fontWeight: '400',
            lineHeight: '1.6',
          }}
        >
          We empower them to take ownership of their education, and reach their full academic potential.
        </p>
      </div>
    </div>
  );
}
