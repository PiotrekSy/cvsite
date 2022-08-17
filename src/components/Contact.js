import React from 'react'
import {motion} from 'framer-motion';

const Contact = () => {
    return (
        <>
            <motion.div className="contact"
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        exit={{opacity: 0}}
                        transition={{duration: 0.2,}}>
                <div className="Center">Contact</div>
            </motion.div>
        </>
    )
}

export default Contact