import React from 'react'
import {motion} from 'framer-motion';

const Home = () => {
    return (
        <motion.div className="mainPage"
                    initial={{width: 0}}
                    animate={{width: "100vw"}}
                    exit={{x: "100vw"}}
                    transition={{duration: 0.2}}>
            <div className="Center">Home</div>
        </motion.div>
    )
}

export default Home