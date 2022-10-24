import React from 'react'
import { motion } from "framer-motion"

const AboutMe = () => {
    return (
        <motion.div className="aboutMe"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.2 } }}>
            <div className="">About Me</div>

        </motion.div>
    )
}

export default AboutMe