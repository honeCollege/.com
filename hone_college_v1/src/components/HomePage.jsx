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
              3px 3px 6px rgba(0, 0, 0, 0.9),
              0 0 12px rgba(0, 0, 0, 0.7),
              0 0 24px rgba(0, 0, 0, 0.6),
              2px 2px 20px rgba(0, 0, 0, 0.5)
            `,

          }}
        >
          "Hone yourself. Become an academic weapon."
        </h1>
      </div>
      </div>
    </>
  );
}
