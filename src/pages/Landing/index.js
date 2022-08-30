import React from 'react'
import { Navbar } from '../../components/index'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Lottie from 'react-lottie-player';
import watch from '../../lotties/watch.json'

const Landing = () => {
    return (
        <>
            <motion.div
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            exit={{ opacity: 0}}
            transition={{
                delay: 0.5,
                default: {
                    duration: 0.3,
                }
            }}>
                <Navbar />
            </motion.div>
            <motion.div className="intro" id="intro"
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            exit={{ opacity: 0}}
            transition={{
                delay: 0.5,
                default: {
                    duration: 0.3,
                }
            }}>
                <div className="intro__center center">
                    <div className="intro__wrap">
                        <div className="tagline">
                            Fitness Pro
                        </div>
                        <div className="header">
                            Train Together. Whenever.
                        </div>
                        <div className="text">
                            Fitness Pro helps track your workouts, compete with friends, and be the best version of you. Less thinking. More lifting.
                        </div>
                        <div className="buttons">
                            <Link to="/register" className="button signup">Signup</Link>
                            <Link to="/login" className="button login">Login</Link>
                        </div>
                    </div>
                </div>
                <Lottie
                className='watch'
                loop
                animationData={watch}
                play/>
            </motion.div>
        </>
    )
}

export default Landing