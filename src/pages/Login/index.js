import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import { Navbar } from '../../components'
import AuthContext from '../../context/AuthContext'

const Login = () => {
  let { loginUser, user } = useContext(AuthContext)

  console.log(user)
  return (
    <>
            <motion.div 
        initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            exit={{ opacity: 0}}
            transition={{
                default: {
                    duration: 0.3,
                }
            }}>
    <Navbar />
    <div class="hero hero-register min-h-screen info-content">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <div class="text-center lg:text-left">
      <h1 class="text-5xl font-bold">Login </h1>
      <p class="py-6">Welcome back!...</p>
    </div>

    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 card-dash">
    <form onSubmit={loginUser}>
      <div class="card-body">
        <div className="ui divider"></div>

        <div class="form-control">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" name="email" 
          class="input input-ghost"/>
        </div>
        <div className="ui divider"></div>

        <div class="form-control">
          <label class="label" htmlFor="exampleInputPassword1">
            <span class="label-text">Password</span>
          </label>
          <input type="text" id="exampleInputPassword1" placeholder="password"  
          name="password" class="input input-ghost" 
          />
        </div>
        <div className="ui divider"></div>
        
        <div class="form-control mt-6">
          <button class="btn btn-primary">Login</button>
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
