import React from 'react';
import { useTheme } from '@mui/material/styles';
import leafGrowth from './leafGrowth.png';

export default function GrowthValue() {
  const theme = useTheme();

  return (
    <div
      style={{
        width: 400,
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
            width: 200,
            objectFit: 'contain',
            marginTop: 20,
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
          Growth
        </h2>
        <p
          style={{
            fontSize: '21px', // 20 * 1.05
            fontWeight: '400',
            lineHeight: '1.6',
            marginBottom: '0.5rem',
          }}
        >
          At HoneCollege, we’re committed to nurturing growth by helping students build confidence and curiosity.
        </p>
        <p
          style={{
            fontSize: '21px',
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
