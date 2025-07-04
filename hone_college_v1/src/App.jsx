import {useState, useEffect} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import HomePage from "./laptop/HomePage";
import AboutPage from "./laptop/AboutPage";
import BottomNavigation from "./laptop/BottomNavigation";
import "./css/colorPalette.css";
import theme from "./css/colorTheme";
import NavigationHeader from "./laptop/Header";
import MobileHomePage from "./mobile/HomePage";
import MobileNavigationHeader from "./mobile/Header";
import MobileFooter from "./mobile/BottomNavigation";
import CoursesPage from "./laptop/CoursesPage"
import MobileAboutPage from "./mobile/AboutPage";
import MobileCoursesPage from "./mobile/CoursesPage";

export default function App() {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
      function handleResize() {
        setWindowWidth(window.innerWidth);
      }

      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);



  return (
    <ThemeProvider theme={theme}>
      <Router>
        {windowWidth > 1000 && (<>
          <NavigationHeader/>

          <Container
            maxWidth={false}
            disableGutters
          >
            <Routes>
              <Route path="/.com" element={<HomePage />} />
              <Route path="/.com/about" element={<AboutPage />} />
              <Route path="/.com/courses" element={<CoursesPage />} />
            </Routes>
          </Container>
          <BottomNavigation/>
          </>
        )}
        {windowWidth <= 1000 && (<>
          <MobileNavigationHeader/>

          <Container
            maxWidth={false}
            disableGutters
          >
            <Routes>
              <Route path="/.com" element={<MobileHomePage />} />
              <Route path="/.com/about" element={<MobileAboutPage />} />
              <Route path="/.com/courses" element={<MobileCoursesPage />} />
            </Routes>
          </Container>
          <MobileFooter/>
          </>
        )}

      </Router>
    </ThemeProvider>
  );
}
