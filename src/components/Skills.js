import React from 'react'
import { motion } from "framer-motion"

const Skills = () => {
    return (
        <motion.div className="skills"
            initial={{ opacity: 0, transition: {duration: 0.5} }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: {duration: 0.5} }}>
            <div className="Center">Skills</div>
        </motion.div>
    )
}

export default Skills