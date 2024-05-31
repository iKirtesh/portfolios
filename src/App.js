import React, { useEffect, useState } from 'react';
import Skills from "./components/Skills";
import ProjectsList from "./components/ProjectsList";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";
import Loading from "./components/Loading";

function App() {
    const [darkMode, setDarkMode] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setDarkMode(prefersDarkMode);
        document.documentElement.classList.toggle('dark', prefersDarkMode);

        // Simulate a delay for loading (e.g., fetching data)
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000); // Adjust the delay as needed

        return () => clearTimeout(timer);
    }, []);

    const toggleDarkMode = () => {
        const newDarkMode = !darkMode;
        setDarkMode(newDarkMode);
        document.documentElement.classList.toggle('dark', newDarkMode);
    };

    if (loading) {
        return <Loading />;
    }

    return (
        <div className={`App ${darkMode ? 'dark' : ''}`}>
            <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <HeroSection darkMode={darkMode} />
            <Skills darkMode={darkMode} />
            <ProjectsList darkMode={darkMode} />
            <Education darkMode={darkMode} />
            <Contact darkMode={darkMode} />
            <SpeedInsights projectId="prj_xZte5IHFywUhbYpeZOkZwNoLfMrg" />
            <Analytics id="prj_xZte5IHFywUhbYpeZOkZwNoLfMrg" />
            <Footer />
        </div>
    );
}

export default App;
