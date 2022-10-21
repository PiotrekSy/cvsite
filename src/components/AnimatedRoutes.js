import React from "react";
import Home from "./Home.js"
import Skills from "./Skills.js"
import Projects from "./Projects.js"
import AboutMe from "./AboutMe.js"
import {Route, Routes,} from "react-router-dom";

const AnimatedRoutes = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/Skills" element={<Skills/>}/>
            <Route path="/Projects" element={<Projects/>}/>
            <Route path="/Contact" element={<AboutMe/>}/>
        </Routes>
    );
};

export default AnimatedRoutes;