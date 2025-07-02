import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import BottomNavigation from "./components/BottomNavigation";
import "./css/colorPalette.css";
import theme from "./css/colorTheme";
import NavigationHeader from "./components/Header";

function Courses() {
  return <h2>COURSES</h2>;
}

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <NavigationHeader/>

        <Container
          maxWidth={false}
          disableGutters
        >
          <Routes>
            <Route path="/.com" element={<HomePage />} />
            <Route path="/.com/about" element={<AboutPage />} />
            <Route path="/.com/courses" element={<Courses />} />
          </Routes>
        </Container>
      </Router>
      <BottomNavigation/>
    </ThemeProvider>
  );
}
