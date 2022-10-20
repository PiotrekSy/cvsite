import React, { useState } from "react";
import { Link as LinkRouter } from "react-router-dom"
import { createContext } from "react"



const NavBar = () => {

    const [site, setSite] = useState("home");

    const SiteContext = createContext(site);

    return (
        <div className="navigation">
            <div className="navButtons">
                <LinkRouter className="navButtonLink" to="/" onClick={() => setSite("home")}>
                    <div className="navButtonWrapper">HOME</div>
                </LinkRouter>
                <LinkRouter className="navButtonLink" to="/about" onClick={() => setSite("about")}>
                    <div className="navButtonWrapper">SKILLS</div>
                </LinkRouter>
                <LinkRouter className="navButtonLink" to="/projects" onClick={() => setSite("projects")}>
                    <div className="navButtonWrapper">PROJECTS</div>
                </LinkRouter>
                <LinkRouter className="navButtonLink" to="/contact" onClick={() => setSite("contact")}>
                    <div className="navButtonWrapper">CONTACT</div>
                </LinkRouter>
            </div>
        </div>
    )
}

export default NavBar