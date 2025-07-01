import React, { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import MotivationIcon from './motivation.png';

export default function MotivationValue() {
  const theme = useTheme();

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Calculate scale factor for widths less than 1500px (adjust as needed)
  const scale = windowWidth < 1500 ? windowWidth / 1500 : 1;

  return (
    <div
      style={{
        width: 400 * scale,
        backgroundColor: '#f2f2f2',
        paddingTop: 50 * scale,
        height: 700 * scale,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1rem',
        borderRadius: 8 * scale,
        justifyContent: 'center',
        transformOrigin: 'top left', // scale from top-left corner
      }}
    >
      <div
        style={{
          width: 300 * scale,
          height: 300 * scale,
          borderRadius: '50%',
          backgroundColor: '#b4f7ff',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden',
        }}
      >
        <img
          src={MotivationIcon}
          alt="Motivation Icon"
          style={{
            width: 200 * scale,
            objectFit: 'contain',
            marginTop: 20 * scale,
            marginRight: 10 * scale,
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
            fontSize: 1.8 * scale + 'rem',
            fontWeight: '700',
            marginBottom: 0.5 * scale + 'rem',
          }}
        >
          Motivation
        </h2>
        <p
          style={{
            fontSize: 1.1 * scale + 'rem',
            fontWeight: '400',
            lineHeight: '1.6',
            marginBottom: 0.5 * scale + 'rem',
          }}
        >
          We want to cultivate our students at HoneCollege to have a love of learning, a priceless trait to have when the world is vast and full of knowledge.
        </p>
        <p
          style={{
            fontSize: 1.1 * scale + 'rem',
            fontWeight: '400',
            lineHeight: '1.6',
          }}
        >
          Motivated students understand what education means to them and make an active choice each day to pursue it.
        </p>
      </div>
    </div>
  );
}
