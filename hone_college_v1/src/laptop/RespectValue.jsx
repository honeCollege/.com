import React, { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import HandShakeIcon from './hand-shake.png';

export default function RespectValue() {
  const theme = useTheme();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // If window width is less than 1500, shrink by e.g. 80%
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
        transformOrigin: 'top center',  // anchor scale from top center
      }}
    >
      <div
        style={{
          width: 300 * scale,
          height: 300 * scale,
          borderRadius: '50%',
          backgroundColor: '#e59eff',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden',
        }}
      >
        <img
          src={HandShakeIcon}
          alt="Leaf Growth"
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
          Respect
        </h2>
        <p
          style={{
            fontSize: `${20 * (scale + 0.05)}px`,
            fontWeight: '400',
            lineHeight: '1.6',
            marginBottom: 0.5 * scale + 'rem',
          }}
        >
          Students at HoneCollege walk the same path through education, we must respect our peers and tutors.
        </p>
        <p
          style={{
            fontSize: `${20 * (scale + 0.05)}px`,
            fontWeight: '400',
            lineHeight: '1.6',
          }}
        >
          Respect comes from both the student and the teacher through how we share knowledge and wisdom.
        </p>
      </div>
    </div>
  );
}
