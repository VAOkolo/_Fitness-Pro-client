import React, { useState, useContext, useEffect } from 'react'

//UTILS
import UserContext from '../../Context/UserContext';
import AuthContext from '../../Context/AuthContext';

export default function History() {

  let { user_id } = useContext(AuthContext)
  let { finishedWorkouts } = useContext(UserContext)

  const [finishedWorkoutsData, setFinishedWorkoutsData] = useState([])

  console.log(finishedWorkoutsData)
  useEffect(() => {
    async function getFinishedWorkout(user_id) {
      const data = await finishedWorkouts(user_id);
      setFinishedWorkoutsData(data)
    }
    getFinishedWorkout(user_id)
  }, [user_id])

  return (
    finishedWorkoutsData ?

      <div className='hero hero-register min-h-screen info-content'>
        <div className='col'>
          <div className='text-center'>
            {finishedWorkoutsData.map(({ active, goal, start_time, end_time, created_at, workout_description, user_workout_session
            }) => {
              return (
                <div className="card mb-3">
                  <div className="card-body">
                    <h4>{workout_description}</h4>
                    <h5 className="card-title text-white">Workout {created_at}</h5>
                    <span>{goal}</span>
                    <p className="card-text"></p>
                    <p className="card-text">
                      <small className="text-muted">Finished at - {end_time}</small>
                    </p>
                    <div className='mt-2'>
                      <h6 className='text-white'>Workout Session</h6>
                      <br />
                      <div>
                        {user_workout_session.map(({ exercise_name }) => {
                          return (
                            <p>{exercise_name}</p>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      : <div><h1>You have not finished any workout</h1></div>
  )
}
