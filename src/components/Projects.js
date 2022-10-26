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
                        <div className="foodIcon"></div>
                        <div className="link">
                            <a href="https://zaplanujjedzonko-ps.netlify.app/">This Site</a>
                            <a href="https://zaplanujjedzonko-ps.netlify.app/">ZaplanujJedzonko App</a>
                        </div>
                    </div>
                    <div className="item">
                        <div className="foodIcon"></div>
                        <div className="link">
                            <a href="https://zaplanujjedzonko-ps.netlify.app/">App</a>
                            <a href="https://zaplanujjedzonko-ps.netlify.app/">ZaplanujJedzonko App</a>                    </div>
                    </div>
                    <div className="item">
                        <div className="clothesIcon"></div>
                        <div className=""></div>
                        <div className="link">
                            <a href="https://giveawaysite.netlify.app/" >GiveAway App</a>
                            <a href="https://giveawaysite.netlify.app/" >GiveAway App</a>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Projects