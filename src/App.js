import React, {useEffect, useState} from 'react';
import Skills from "./components/Skills";
import ProjectsList from "./components/ProjectsList";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/react"
import Loading from "./components/Loading";

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate a delay for loading (e.g., fetching data)
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000); // Adjust the delay as needed

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <Loading />;
    }


    return (
      <div>
          <Navbar/>
          <HeroSection/>
          <Skills/>
          <ProjectsList/>
          <Education/>
          <Contact/>
          <SpeedInsights projectId="prj_xZte5IHFywUhbYpeZOkZwNoLfMrg" />
          <Analytics id="prj_xZte5IHFywUhbYpeZOkZwNoLfMrg" />
          <Footer/>
      </div>
  );
}

export default App;
