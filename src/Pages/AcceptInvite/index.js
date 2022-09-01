import React, { useContext, useState } from 'react';

import { motion } from 'framer-motion';
import { Navbar } from '../../Components';

// UTILS
import AuthContext from '../../Context/AuthContext';
import UserContext from '../../Context/UserContext';


const AcceptInvite = () => {
  let { user } = useContext(AuthContext)
  let { postNewWorkout, postNewWorkoutSessions } = useContext(UserContext)

  let [inviteCode, setInviteCode ] = useState('')

  const updateInviteCode = (e) => {
      setInviteCode(e.target.value)
  }

  const postWorkout = async (e) => {
    e.preventDefault()
    try {
        let user_id = user.user_id
        const response = await fetch(`http://localhost:8000/api/gym/workout/unique_string/${inviteCode}`)
        const data = await response.json()
        const workout_sessions = data[0].user_workout_session
        console.log(workout_sessions)
        if(data){
            const startDate = data[0].startTime
            const endDate = data[0].endTime
            const workout_id = await postNewWorkout(user_id,inviteCode, startDate, endDate )
            console.log("this means it works" + workout_id)

            if(workout_sessions){
                workout_sessions.forEach((e) => {
                    postNewWorkoutSessions(e)
                })
            }
        }
    } catch (err){
        console.error(err)
    }
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
          <button onClick={postWorkout} className="btn btn-primary">AcceptInvite</button>
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

