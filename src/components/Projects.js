import React from 'react'
import { motion } from "framer-motion"

const Projects = () => {
    return (
        <motion.div className="projects"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.8 } }}
            exit={{ opacity: 0, transition: { duration: 0.8 } }}>
            <div className="container">
                <div className="firstRow">
                    <div className="item">
                        <div className="resumeIcon"></div>
                        <div className="projectName">ResumeSite</div>
                        <div className="link">
                            <a href="/"
                                target="_blank" rel="noreferrer">Home</a>
                            <a href="https://github.com/PiotrekSy/cvsite"
                                target="_blank" rel="noreferrer"><div className="gitHubIcon"></div></a>
                        </div>
                    </div>
                    <div className="item">
                        <div className="clothesIcon"></div>
                        <div className="projectName">GiveAwayApp </div>
                        <div className="link">
                            <a href="https://giveawaysite.netlify.app/"
                                target="_blank" rel="noreferrer"><div className="webAppIcon"></div></a>
                            <a href="https://github.com/PiotrekSy/GiveAway"
                                target="_blank" rel="noreferrer"><div className="gitHubIcon"></div></a>
                        </div>
                    </div>
                    <div className="item">
                        <div className="foodIcon"></div>
                        <div className="projectName">ZaplanujJedzonko</div>
                        <div className="link">
                            <a href="https://zaplanujjedzonko-ps.netlify.app/"
                                target="_blank" rel="noreferrer"><div className="gwebAppHubIcon"></div></a>
                            <a href="https://github.com/PiotrekSy/zaplanuj_jedzonko"
                                target="_blank" rel="noreferrer"><div className="gitHubIcon"></div></a>
                        </div>
                    </div>
                </div>
                <div className="secondRow">
                    <div className="item">
                        <div className="questionIcon"></div>
                        <div className="projectName">Comming soon </div>
                        <div className="link">
                            <a href="/" target="_blank" rel="noreferrer"><div className="webAppIcon"></div></a>
                            <a href="/" target="_blank" rel="noreferrer"><div className="gitHubIcon"></div></a>
                        </div>
                    </div>
                    <div className="item">
                        <div className="questionIcon"></div>
                        <div className="projectName">Comming soon </div>
                        <div className="link">
                            <a href="/" target="_blank" rel="noreferrer"><div className="webAppIcon"></div></a>
                            <a href="/" target="_blank" rel="noreferrer"><div className="gitHubIcon"></div></a>
                        </div>
                    </div>
                    <div className="item">
                        <div className="questionIcon"></div>
                        <div className="projectName">Comming soon</div>
                        <div className="link">
                            <a href="/" target="_blank" rel="noreferrer"><div className="webAppIcon"></div></a>
                            <a href="/" target="_blank" rel="noreferrer"><div className="gitHubIcon"></div></a>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Projects