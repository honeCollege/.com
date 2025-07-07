import React from 'react';
import { useTheme } from '@mui/material/styles';
import { useState, useEffect } from 'react';
import HandShakeIcon from './hand-shake.png';

export default function RespectValue() {
  const theme = useTheme();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const width = windowWidth < 500 ? 350 : 400;

  return (
    <div
      style={{
        width: width,
        backgroundColor: '#f2f2f2',
        paddingTop: 50,
        height: 700,
        minHeight: 600,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1rem',
        borderRadius: 8,
        justifyContent: 'center',
        // transformOrigin removed (no scale)
      }}
    >
      <div
        style={{
          width: 300,
          height: 300,
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
          alt="Hand Shake"
          style={{
            width: 200,
            objectFit: 'contain',
            marginTop: 20,
            marginRight: 10,
          }}
        />
      </div>

      <div
        style={{
          width: 300,
          maxWidth: 300,
          textAlign: 'center',
          margin: '0 auto',
          flexShrink: 0,
        }}
      >
        <h2
          style={{
            color: theme.palette.primary.dark,
            fontSize: '1.8rem',
            fontWeight: '700',
            marginBottom: '0.5rem',
          }}
        >
          Respect
        </h2>
        <p
          style={{
            fontSize: '21px', // 20 * 1.05
            fontWeight: '400',
            lineHeight: '1.6',
            marginBottom: '0.5rem',
          }}
        >
          Students at HoneCollege walk the same path through education, we must respect our peers and tutors.
        </p>
        <p
          style={{
            fontSize: '21px',
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
