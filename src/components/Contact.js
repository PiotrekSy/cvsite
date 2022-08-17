import React from 'react'
import {motion} from 'framer-motion';

const Contact = () => {
    return (
        <>
            <motion.div className="contact"
                        initial={{width: 0}}
                        animate={{width: "100vw"}}
                        exit={{x: "100vw"}}
                        transition={{duration: 0.2}}>
                <div className="Center">Contact</div>
            </motion.div>
        </>
    )
}

export default Contact