import React from 'react'
import {motion} from 'framer-motion';

const Projects = () => {
    return (
        <>
            <motion.div className="projects"
                        initial={{width: 0}}
                        animate={{width: "100vw"}}
                        exit={{x: "100vw"}}
                        transition={{duration: 0.2}}>
                <div className="Center">Portfolio</div>
            </motion.div>
        </>
    )
}

export default Projects