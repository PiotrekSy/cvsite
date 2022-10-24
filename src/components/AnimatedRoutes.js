import React from "react";
import Home from "./Home.js"
import Skills from "./Skills.js"
import Projects from "./Projects.js"
import AboutMe from "./AboutMe.js"
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, } from "framer-motion"

const AnimatedRoutes = () => {

    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route exact path="/" element={<Home />} />
                <Route path="/Skills" element={<Skills />} />
                <Route path="/Projects" element={<Projects />} />
                <Route path="/AboutMe" element={<AboutMe />} />
            </Routes>
        </AnimatePresence>
    );
};

export default AnimatedRoutes;