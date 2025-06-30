import picTutor from './PicTutor.jpg';
import React, { useState, useRef, useEffect } from 'react';
import '../css/homePage.css';
import { useTheme } from '@mui/material/styles';

export default function HomePage() {
  const theme = useTheme();

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const useFixedHeight = windowWidth > 1300;

  const [isVisible, setIsVisible] = useState(false);
  const whoRef = useRef(null);

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
      { threshold: 0.2 }
    );

    if (whoRef.current) observer.observe(whoRef.current);
    return () => observer.disconnect();
  }, []);


  return (
    <>
      <div
        style={{
          position: 'relative',
          width: '100vw',
          height: useFixedHeight ? '1000px' : undefined,
          paddingTop: useFixedHeight ? undefined : '66.67%',
          backgroundImage: `url(${picTutor})`,
          backgroundSize: 'cover',
          backgroundPosition: 'top',
          color: 'white',
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
              2px 2px 4px rgba(0, 0, 0, 0.8),
              0 0 10px rgba(0, 0, 0, 0.6),
              0 0 20px rgba(0, 0, 0, 0.4)
            `,
          }}
        >
          "Hone your skills. Become your best self."
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
          Who Are We
        </h1>
        <p style={{ maxWidth: '800px', fontSize: '1.125rem', lineHeight: '1.6'}}>
          We are HoneCollege, a group of tutors who are passionate about helping students grow into confident,
          capable learners. We're looking to help shape future generations into becoming independent thinkers
          by having a real understanding of our content rather than solely chasing marks at school. Whether you're aiming to
          catch up or get ahead, we'll help hone your skills and unlock your full potential.
        </p>
      </div>
    </>
  );
}
