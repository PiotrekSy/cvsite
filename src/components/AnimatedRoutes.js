import React from "react";
import Home from "./Home.js"
import About from "../components/About.js"
import Projects from "../components/Projects.js"
import Contact from "../components/Contact.js"
import {Route, Routes, useLocation} from "react-router-dom";
import {AnimatePresence} from 'framer-motion';

const AnimatedRoutes = () => {
    const location = useLocation();

    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route exact path="/" element={<Home/>}/>
                <Route path="/About" element={<About/>}/>
                <Route path="/Projects" element={<Projects/>}/>
                <Route path="/Contact" element={<Contact/>}/>
            </Routes>
        </AnimatePresence>
    );
};

export default AnimatedRoutes;