import React, { useContext, useState } from 'react';

import { motion } from 'framer-motion';
import { Navbar } from '../../Components';

// UTILS
import AuthContext from '../../Context/AuthContext';


const AcceptInvite = () => {
  let { user } = useContext(AuthContext)
  let [inviteCode, setInviteCode ] = useState('')

  const updateInviteCode = (e) => {
      setInviteCode(e.target.value)
  }

  const postWorkout = async (e) => {
    const response = await fetch('')
    const data = await response.json()
    console.log(data)
  }

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
    <div className="hero hero-register min-h-screen info-content">
  <div className="hero-content flex-col lg:flex-row-reverse">

    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 card-dash">
    <form onSubmit>
      <div className="card-body">
        <div className="ui divider"></div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Invite Code</span>
          </label>
          <input onChange={updateInviteCode} type="text" placeholder="invite" name="invite" 
          className="input input-ghost"/>
        </div>
        <div className="ui divider"></div>

    
        <div className="ui divider"></div>
        
        <div className="form-control mt-6">
          <button onSubmit={postWorkout} className="btn btn-primary">AcceptInvite</button>
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

export default AcceptInvite

