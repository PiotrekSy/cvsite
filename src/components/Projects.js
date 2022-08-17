import React from 'react'
import {motion} from 'framer-motion';

const Projects = () => {
    return (
        <>
            <motion.div className="projects"
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        transition={{duration: 0.2}}>
                <div className="Center">Portfolio</div>
            </motion.div>
        </>
    )
}

export default Projects