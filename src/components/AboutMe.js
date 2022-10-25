import React from 'react'
import { motion } from "framer-motion"

const AboutMe = () => {
    return (
        <motion.div className="aboutMe"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}>
            <div className="container">
                <div className="text">
                    <div className="name">Piotr Syjud</div>
                    <div>Kraków<br />piotrsyjud@gmail.com</div>
                    <br />
                    <span>My professional career has been so far associated with the construction industry,
                        where I have held several roles. Due to my passion for new technologies,
                        I decided to change my career path and tie my future to the IT industry.
                        I like to explore new technologies and work in a team. Solving problems and
                        looking for new solutions gives me great satisfaction and keeps me motivated.
                        My strength is calmness, analytical thinking,
                        and the ability to work under time pressure.<br />
                    </span>
                    <div className="schools"><br />Currently finished courses:<br />
                        <li>CodersLab IT School – JavaScript Developer </li>
                        <li>CodersLab IT School – Docker </li>
                        <li>CodersLab IT School – Node.js - in progress</li>
                    </div>
                </div>
                <div className="photo"></div>
            </div>

        </motion.div >
    )
}

export default AboutMe