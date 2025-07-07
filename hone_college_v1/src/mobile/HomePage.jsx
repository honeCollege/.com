import picTutor from './PicTutor.jpg';
import React, { useState, useRef, useEffect } from 'react';
import '../css/homePage.css';
import { useTheme } from '@mui/material/styles';

export default function MobileHomePage() {
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
          padding: '1rem',
          width: '90vw',
          maxWidth: '600px',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h1
          style={{
            fontSize: 'clamp(1.5rem, 5vw, 2rem)',
            textAlign: 'center',
            color: 'white',
            textShadow: `
              3px 3px 6px rgba(0, 0, 0, 0.9),
              0 0 12px rgba(0, 0, 0, 0.7),
              0 0 24px rgba(0, 0, 0, 0.6),
              2px 2px 20px rgba(0, 0, 0, 0.5)
            `,
          }}
        >
          "Hone yourself. <br />Become an academic weapon."
        </h1>
      </div>
      </div>
      <div
      ref={whoRef}
          className={`fade-in-section ${isVisible ? 'visible' : ''}`}
  style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '4rem 2rem',
    backgroundColor: '#f8f9fa',
    color: '#333',
  }}
>
   <h1
    style={{
      fontSize: '2rem',
      fontStyle: 'italic',
      marginBottom: '1rem',
      color: theme.palette.primary.dark,
      paddingBottom: '20px',
      textShadow: '1px 1px 3px rgba(0, 0, 0, 0.3)'
    }}
  >
    Why Hone College?
  </h1>


  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem',
      maxWidth: '1000px',
      width: '100%',
    }}
  >
    {/* Flashcard 1 */}
    <div
      style={{
        backgroundColor: 'white',
        borderRadius: '12px',
        borderColor: theme.palette.primary.dark,
        borderWidth: '2px',
        borderStyle: 'solid',
        padding: '1.5rem',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      }}
    >
      <div style={{ fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '0.5rem' }}>
        Expert Tutors
      </div>
      <div>
        Our tutors are experienced, passionate, and subject-matter experts who know how to engage and motivate students.
        They simplify complex concepts and provide targeted support for real academic growth.
      </div>
    </div>

    {/* Flashcard 2 */}
    <div
      style={{
        backgroundColor: 'white',
        borderRadius: '12px',
        padding: '1.5rem',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        borderColor: theme.palette.primary.light,
        borderWidth: '2px',
        borderStyle: 'solid',
      }}
    >
      <div style={{ fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '0.5rem' }}>
        Supportive Learning Environment
      </div>
      <div>
        We foster a positive, encouraging space where students feel safe to ask questions and take academic risks.
        Learning thrives when confidence and curiosity are nurtured together.
      </div>
    </div>

    {/* Flashcard 3 */}
    <div
      style={{
        backgroundColor: 'white',
        borderRadius: '12px',
        padding: '1.5rem',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        borderColor: theme.palette.primary.light,
        borderWidth: '2px',
        borderStyle: 'solid',
      }}
    >
      <div style={{ fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '0.5rem' }}>
        Comprehensive Resources
      </div>
      <div>
        From extensive worksheets to past papers for practice, we provide everything students need to succeed.
        Our materials are regularly updated to match the current curriculum and exam standards.
      </div>
    </div>

    {/* Flashcard 4 */}
    <div
      style={{
        backgroundColor: 'white',
        borderRadius: '12px',
        padding: '1.5rem',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        borderColor: theme.palette.primary.dark,
        borderWidth: '2px',
        borderStyle: 'solid',
      }}
    >
      <div style={{ fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '0.5rem' }}>
        Exam Strategies
      </div>
      <div>
        We teach students how to think like teachers — focusing on structure, timing, and common pitfalls.
        Our strategies help reduce anxiety and boost performance under pressure.
      </div>
    </div>
  </div>
</div>
    </>
  );
}
