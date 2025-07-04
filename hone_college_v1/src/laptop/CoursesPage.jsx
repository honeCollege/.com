import blackBoard from './blackboard.jpg';
import React, { useState, useRef, useEffect } from 'react';
import '../css/homePage.css';
import { Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function CoursesPage() {
  const theme = useTheme();

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const useFixedHeight = windowWidth > 1300;

  const [isVisible, setIsVisible] = useState(false);
  const whoRef = useRef(null);
  const [isOtherVisible, setIsOtherVisible] = useState(false);
  const otherRef = useRef(null);

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
          backgroundImage: `url(${blackBoard})`,
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
          Our Courses
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
      fontSize: '2.5rem',
      fontStyle: 'italic',
      marginBottom: '1rem',
      color: theme.palette.primary.dark,
      paddingBottom: '20px',
      textShadow: '1px 1px 3px rgba(0, 0, 0, 0.3)',
    }}
  >
    Why Hone College?
  </h1>
  <div
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
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
        borderColor: theme.palette.primary.light,
        borderWidth: '2px',
        borderStyle: 'solid',
        padding: '1.5rem',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      }}
    >
      <div style={{ fontWeight: 'bold', fontSize: '1.2rem', marginBottom: '0.5rem' }}>
        Weekly Classes
      </div>
      <div>
        Our structured weekly classes build consistent progress and deep understanding in every subject. 
        Expert tutors guide students through a structured lesson plan tailored to their learning pace and style.
      </div>
    </div>

    {/* Flashcard 2 */}
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
        Weekly Homework
      </div>
      <div>
        We provide weekly homework to reinforce the concepts taught in class, encouraging regular practice. 
        Our tutors mark homework and provide detailed feedback to ensure continuous improvement and confidence.
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
        Term Tests
      </div>
      <div>
        Regular term tests help track progress and highlight areas that need extra focus. 
        These assessments prepare students effectively for school exams and build test-taking confidence.
      </div>
    </div>
  </div>
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
    padding: '2rem',
    fontSize: '1.1rem',
    backgroundColor: '#f5f5f5', // Light grey background
    borderRadius: '12px', // Optional: soften the section
  }}
>
  <h1
    style={{
      fontSize: '2.5rem',
      marginBottom: '2rem',
      color: theme.palette.primary.dark,
      textShadow: '1px 1px 3px rgba(0, 0, 0, 0.3)',
      textAlign: 'center',
    }}
  >
    Available Courses
  </h1>
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      gap: '2rem',
      flexWrap: 'wrap',
    }}
  >
    {/* Column 1 – Primary */}
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        flex: 1,
        minWidth: '150px',
      }}
    >
      <h3 style={{ marginBottom: '1rem', fontWeight: '600' }}>Primary</h3>
      {['Year 2', 'Year 3', 'Year 4', 'Year 5', 'Year 6'].map((label) => (
        <Button
          key={label}
          variant="outlined"
          disableRipple
          disableElevation
          sx={{
            borderRadius: '30px',
            textTransform: 'none',
            fontSize: '1rem',
            fontWeight: 500,
            color: 'black',
            backgroundColor: '#e3f2fd', // Light blue background
            borderColor: theme.palette.primary.dark, // MUI default blue
            marginBottom: '1rem',
            '&:hover': {
              backgroundColor: '#e3f2fd',
              borderColor: '#1976d2',
            },
          }}
        >
          {label}
        </Button>
      ))}
    </div>

    {/* Column 2 – Junior High */}
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        flex: 1,
        minWidth: '150px',
      }}
    >
      <h3 style={{ marginBottom: '1rem', fontWeight: '600' }}>Junior High</h3>
      {['Year 7', 'Year 8', 'Year 9', 'Year 10'].map((label) => (
        <Button
          key={label}
          variant="outlined"
          disableRipple
          disableElevation
          sx={{
            borderRadius: '30px',
            textTransform: 'none',
            fontSize: '1rem',
            fontWeight: 500,
            color: 'black',
            backgroundColor: '#e3f2fd',
            borderColor: theme.palette.primary.dark,
            marginBottom: '1rem',
            '&:hover': {
              backgroundColor: '#e3f2fd',
              borderColor: '#1976d2',
            },
          }}
        >
          {label}
        </Button>
      ))}
    </div>

    {/* Column 3 – Senior High */}
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        flex: 1,
        minWidth: '180px',
      }}
    >
      <h3 style={{ marginBottom: '1rem', fontWeight: '600' }}>Senior High</h3>
      {[
        'Year 11 Standard',
        'Year 11 Advanced',
        'Year 11 Extension 1',
        'Year 12 Standard',
        'Year 12 Advanced',
        'Year 12 Extension 1',
        'Year 12 Extension 2',
      ].map((label) => (
        <Button
          key={label}
          variant="outlined"
          disableRipple
          disableElevation
          sx={{
            borderRadius: '30px',
            textTransform: 'none',
            fontSize: '1rem',
            fontWeight: 500,
            color: 'black',
            backgroundColor: '#e3f2fd',
            borderColor: theme.palette.primary.dark,
            marginBottom: '1rem',
            '&:hover': {
              backgroundColor: '#e3f2fd',
              borderColor: '#1976d2',
            },
          }}
        >
          {label}
        </Button>
      ))}
    </div>
  </div>
  </div>
    </>

  )
}
