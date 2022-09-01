import React, { useState } from 'react'
import { HiMenuAlt4, HiX } from 'react-icons/hi';  
//HiMenuAlt4 = toggle menu icon (two horizontial line button). Hix = Exit toggle menu (Cross button)
import { motion, AnimatePresence } from 'framer-motion';  //imports animations from node modules downloaded (pre-rendered animations)
import { Link } from 'react-router-dom';

import'./NavbarDash.scss';
import { images } from '../../constants'


const Navbar = () => {
  const [toggle, setToggle] = useState(false);  


  return (

    // Line 18-30: Landscape navbar with anchor links to specific pages
    // Line 30+ Sidebar which animates on entry & exit
    <nav className="app__navbar">
      <div className="app__navbar-logo">
      </div>
      <ul className="app__navbar-links">
        {['home', 'signup', 'login'].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />
        <AnimatePresence mode='wait'>
          {toggle && (
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 300 }}
              exit={{ opacity: 0, width: 0 }}
              transition={{
                default: {
                  duration: 0.3,
                  ease: [0, 0.71, 0.2, 1.01],
                }
              }}>

              <HiX onClick={() => setToggle(false)} />
              <ul>
                  <li>
                    <a onClick={() => setToggle(false)}><Link to="/landing">Home</Link></a>
                  </li>
                  <li>
                    <a onClick={() => setToggle(false)}><Link to="/login">Signup</Link></a>
                  </li>
                  <li>
                    <a onClick={() => setToggle(false)}><Link to="/dashboard">Login</Link></a>
                  </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

export default Navbar

