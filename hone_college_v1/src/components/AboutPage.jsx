import handWriting from './handWriting.jpg';
import GrowthValue from './GrowthValue';
import MotivationValue from './MotivationValue';
import RespectValue from './RespectValue';
import React, { useState, useRef, useEffect } from 'react';
import '../css/homePage.css';
import { useTheme } from '@mui/material/styles';

export default function AboutPage() {
  const theme = useTheme();

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const useFixedHeight = windowWidth > 1300;

  const [isVisible, setIsVisible] = useState(false);
  const whoRef = useRef(null);
  const [isOtherVisible, setIsOtherVisible] = useState(false);
  const otherRef = useRef(null);
  const scale = windowWidth < 1500 ? windowWidth / 1600 : 1;
  const gapValue = 100 * scale;

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => setIsVisible(entry.isIntersecting),
        {
          threshold: 0.05, // 20% visible triggers
          rootMargin: "0px 0px -300px 0px" // trigger 100px *before* element fully enters viewport
        }
      );

      if (whoRef.current) observer.observe(whoRef.current);
      return () => observer.disconnect();
    }, []);

    useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsOtherVisible(entry.isIntersecting),
      { threshold: 0.10, rootMargin: "0px 0px -300px 0px" }
    );

    if (otherRef.current) observer.observe(otherRef.current);
    return () => observer.disconnect();
  }, []);


  return (
    <>
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: useFixedHeight ? '600px' : undefined,
          paddingTop: useFixedHeight ? undefined : '66.67%',
          backgroundImage: `url(${handWriting})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#f8fdff',
          textShadow: '2px 2px 6px rgba(138, 138, 138, 0.7)',
        }}
      >
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)', 
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',
          padding: '2rem',
          borderRadius: '8px',
          maxWidth: '600px',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h1
          style={{
            fontSize: 'clamp(1.5rem, 4vw, 3rem)',
            color: 'white',
            whiteSpace: 'nowrap',
           textShadow: `
            3px 3px 6px rgba(0, 0, 0, 0.9),
            0 0 12px rgba(0, 0, 0, 0.7),
            0 0 24px rgba(0, 0, 0, 0.6),
            2px 2px 20px rgba(0, 0, 0, 0.5)
          `,
          }}
        >
          About Us
        </h1>
      </div>
      </div>
      <div
          ref={whoRef}
          className={`fade-in-section ${isVisible ? 'visible' : ''}`}
          style={{
            fontStyle: 'italic',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '4rem 2rem',
            backgroundColor: '#f8fdff',
            color: '#333',
            textAlign: 'center',
          }}
        >
        <h1 style={{
            fontSize: '2.5rem',
            marginBottom: '1rem',
            color: theme.palette.primary.dark
          }}>
          Who We Are
        </h1>
        <p style={{ maxWidth: '800px', fontSize: '1.125rem', lineHeight: '1.6'}}>
          We are HoneCollege, a team of passionate math tutors dedicated to helping students truly understand math—not just memorise it.
          Our approach rewires the way students think about numbers, focusing on deep comprehension over rote learning.
          Whether you're looking to build confidence, catch up, or get ahead, we'll help hone your mathematical thinking and unlock your full potential.
        </p>
      </div>
      <div
         style={{
            width: '80vw',
            height: '5px', // Thickness of the line
            backgroundColor: theme.palette.primary.light, // Replace with any color you want
            margin: '2rem auto', // Centers it and adds spacing
            borderRadius: '2px', // Optional: round the edges
          }}
      />
       <div
          ref={otherRef}
          className={`fade-in-section ${isOtherVisible ? 'visible' : ''}`}
          style={{
            fontStyle: 'italic',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '4rem 2rem',
            backgroundColor: '#f8fdff',
            color: '#333',
            textAlign: 'center',
          }}
        >
           <h1 style={{
            fontSize: '2.5rem',
            marginBottom: '1rem',
            color: theme.palette.primary.dark
          }}>
          Our Values
        </h1>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between', // spreads columns evenly
            padding: '2rem',
            width: '1400px' * scale,
            gap: `${gapValue}px`,
          }}
        >
          <RespectValue/>
          <MotivationValue/>
          <GrowthValue/>
        </div>
      </div>
    </>
  )
}
