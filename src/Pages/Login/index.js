import React, { useContext } from 'react';

import { motion } from 'framer-motion';
import { Navbar } from '../../Components';


// UTILS
import AuthContext from '../../Context/AuthContext';


const Login = () => {
  let { loginUser, user } = useContext(AuthContext)

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{
          default: {
            duration: 0.3,
          }
        }}>
        <Navbar />
        <div className="hero hero-register min-h-screen info-content">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Login </h1>
              <p className="py-6">Welcome back!...</p>
            </div>

            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 card-dash">
              <form onSubmit={loginUser}>
                <div className="card-body">
                  <div className="ui divider"></div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input type="text" placeholder="email" name="email"
                      className="input input-ghost" />
                  </div>
                  <div className="ui divider"></div>

                  <div className="form-control">
                    <label className="label" htmlFor="exampleInputPassword1">
                      <span className="label-text">Password</span>
                    </label>
                    <input type="text" id="exampleInputPassword1" placeholder="password"
                      name="password" className="input input-ghost key"
                    />
                  </div>
                  <div className="ui divider"></div>

                  <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default Login
