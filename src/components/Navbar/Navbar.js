import React, { useState } from 'react'
import { HiMenuAlt4, HiX } from 'react-icons/hi';  
//HiMenuAlt4 = toggle menu icon (two horizontial line button). Hix = Exit toggle menu (Cross button)
import { motion, AnimatePresence } from 'framer-motion';  //imports animations from node modules downloaded (pre-rendered animations)
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import'./Navbar.scss';
import { images } from '../../constants'


const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();
  
  function home () {
    navigate('/landing')
  }
  function signUp() {
    navigate('/register')
  }
  function login () {
    navigate('/login')
  }
  


  return (

    // Line 18-30: Landscape navbar with anchor links to specific pages
    // Line 30+ Sidebar which animates on entry & exit
    <nav classNameName="app__navbar">
      <div classNameName="app__navbar-logo">
        <img src={images.portfoliologo} alt="logo" />
      </div>
      <ul classNameName="app__navbar-link">
        <li className="app__flex p-text">
          <a onClick={home}>Home</a>
        </li>
        <li className="app__flex p-text">
          <a onClick={signUp}>Signup</a>
        </li>
        <li className="app__flex p-text">
          <a onClick={login}>Login</a>
        </li>
      </ul>

      <div classNameName="app__navbar-menu">
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
                    <a onClick={() => setToggle(false)}><Link to="/register">Signup</Link></a>
                  </li>
                  <li>
                    <a onClick={() => setToggle(false)}><Link to="/login">Login</Link></a>
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

