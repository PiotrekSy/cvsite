import React from "react";
import { Link as LinkRouter } from "react-router-dom"

const NavBar = () => {

    return (
        <div className="navigation unselectable">
            <div className="navButtons">
                <LinkRouter className="navButtonLink" to="/">
                    <div className="navButtonWrapper navHome">HOME</div>
                </LinkRouter>
                <LinkRouter className="navButtonLink" to="/skills">
                    <div className="navButtonWrapper navSkills">SKILLS</div>
                </LinkRouter>
                <LinkRouter className="navButtonLink" to="/projects">
                    <div className="navButtonWrapper navProjects">PROJECTS</div>
                </LinkRouter>
                <LinkRouter className="navButtonLink" to="/aboutMe">
                    <div className="navButtonWrapper navAboutMe">ABOUT ME</div>
                </LinkRouter>
            </div>
        </div>
    )
}

export default NavBar