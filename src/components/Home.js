import React from 'react'
import {motion} from 'framer-motion';

const Home = () => {
    return (
        <motion.div className="mainPage"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    transition={{duration: 0.2}}>
            <div className="Center">Home</div>
        </motion.div>
    )
}

export default Home