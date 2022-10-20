import './scss/App.scss';
import React from "react";
import NavBar from "./components/NavBar.js"
import AnimatedRoutes from "./components/AnimatedRoutes.js"
import { BrowserRouter as Router } from "react-router-dom";
import MobileNavbar from "./components/MobileNavbar";

const App = () => {
    return (
        <Router>
            <NavBar />
            <MobileNavbar />
            <AnimatedRoutes />
        </Router>
    );
};

export default App;