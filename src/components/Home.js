import React from 'react'
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { motion } from "framer-motion";

const Home = () => {

    const particlesInit = useCallback(async (engine) => {
        // console.log(engine);
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        // await console.log(container);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.8 } }}
            exit={{ opacity: 0, transition: { duration: 0.8 } }}>
            <div className="mainPage">
                <div className="contactArea">
                    <div className="contactText name unselectable">PIOTR SYJUD</div>
                    <div className="contactText title unselectable">FRONT-END DEVELOPER</div>
                    <div className="contactText linkedIn unselectable"><a href="https://www.linkedin.com/in/piotrsyjud/" target="_blank" rel="noreferrer">LinkedIn</a></div>
                    <div className="contactText gitHub unselectable"><a href="https://github.com/PiotrekSy" target="_blank" rel="noreferrer">GitHub</a></div>
                </div>
            </div>
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    background: {
                        color: {
                            // value: "#000000",
                        },
                    },
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "repulse",
                            },
                            resize: true,
                        },
                        modes: {
                            push: {
                                quantity: 4,
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4,
                            },
                        },
                    },
                    particles: {
                        color: {
                            value: "#ffffff",
                        },
                        links: {
                            color: "#ffffff",
                            distance: 250,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            directions: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: 2,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 500,
                            },
                            value: 20,
                        },
                        opacity: {
                            value: 1,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: { min: 2, max: 8 },
                        },
                    },
                    detectRetina: true,
                }}
            />
        </motion.div>
    )
}

export default Home;