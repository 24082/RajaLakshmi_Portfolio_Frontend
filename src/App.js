import React, { useRef } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import { Box } from "@mui/material";

function App() {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const handleScroll = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="App animated-bg">
      {/* Header */}
      <Header
        onHeroClick={() => handleScroll(heroRef)}
        onExperienceClick={() => handleScroll(experienceRef)}
        onAboutClick={() => handleScroll(aboutRef)}
        onProjectsClick={() => handleScroll(projectsRef)}
        onContactClick={() => handleScroll(contactRef)}
      />

      {/* Sections */}
      <Box ref={heroRef} sx={{ minHeight: "100vh", pt: 10 }}>
        <Hero onContactClick={() => handleScroll(contactRef)} />
      </Box>

      <Box ref={aboutRef} sx={{ minHeight: "100vh", pt: 10 }}>
        <About />
      </Box>
       <Box ref={experienceRef} sx={{ minHeight: "100vh", pt: 10 }}>
        <Experience />
      </Box>

      <Box ref={projectsRef} sx={{ minHeight: "100vh", pt: 10 }}>
        <Projects />
      </Box>

      <Box ref={contactRef} sx={{ minHeight: "100vh", pt: 10 }}>
        <Contact />
      </Box>
       {/* Footer */}
        <Box
          sx={{
            textAlign: "center",
            py: 3,
            fontSize: "0.9rem",
            borderTop: "1px solid #222",
            mt: 5,
            color: "text.secondary",
          }}
        >
          © {new Date().getFullYear()} Rajalakshmi | Built with React & Node Js 💙
        </Box>
    </div>
  );
}

export default App;
