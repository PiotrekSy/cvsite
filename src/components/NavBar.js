import React from "react";
import {Link as LinkRouter} from "react-router-dom"

const NavBar = () => {

    return (
        <div className="navigation">
            <div className="navButtons">
                <LinkRouter className="navButtonLink" to="/">
                    <div className="navButtonWrapper">HOME</div>
                </LinkRouter>
                <LinkRouter className="navButtonLink" to="/about">
                    <div className="navButtonWrapper">SKILLS</div>
                </LinkRouter>
                <LinkRouter className="navButtonLink" to="/projects">
                    <div className="navButtonWrapper">PROJECTS</div>
                </LinkRouter>
                <LinkRouter className="navButtonLink" to="/contact">
                    <div className="navButtonWrapper">CONTACT</div>
                </LinkRouter>
            </div>
        </div>
    )
}

export default NavBar