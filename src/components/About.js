import React from 'react'
import {motion} from 'framer-motion';

const About = () => {
    return (

        <motion.div className="about"
                    initial={{width: 0}}
                    animate={{width: "100vw"}}
                    exit={{x: "100vw"}}
                    transition={{duration: 0.2}}>
            <div className="Center">About</div>
        </motion.div>
    )
}

export default About