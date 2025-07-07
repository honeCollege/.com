import React from 'react';
import { useTheme } from '@mui/material/styles';
import { useState, useEffect } from 'react';
import MotivationIcon from './motivation.png';

export default function MotivationValue() {
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
        // removed transformOrigin & scale
      }}
    >
      <div
        style={{
          width: 300,
          height: 300,
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
          Motivation
        </h2>
        <p
          style={{
            fontSize: '21px', // 20 * (1 + 0.05)
            fontWeight: '400',
            lineHeight: '1.6',
            marginBottom: '0.5rem',
          }}
        >
          Hone College cultivates students to have a love of learning and a passion for undertstanding new topics.
        </p>
        <p
          style={{
            fontSize: '21px',
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
