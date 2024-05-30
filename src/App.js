import React from 'react';
import Skills from "./components/Skills";
import ProjectsList from "./components/ProjectsList";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";

function App() {
  return (
      <div>
          <Navbar/>
          <HeroSection/>
          <Skills/>
          <ProjectsList/>
          <Education/>
          <Contact/>
          <Footer/>
      </div>
  );
}

export default App;
