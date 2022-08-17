import React from "react";
import Home from "./Home.js"
import About from "../components/About.js"
import Projects from "../components/Projects.js"
import Contact from "../components/Contact.js"
import {Route, Routes,} from "react-router-dom";

const AnimatedRoutes = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/Projects" element={<Projects/>}/>
            <Route path="/Contact" element={<Contact/>}/>
        </Routes>
    );
};

export default AnimatedRoutes;