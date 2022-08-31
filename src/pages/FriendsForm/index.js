import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { NavbarDash, BeginnerModal } from '../../Components/index';

import { levelAction } from "../../Actions";
import AuthContext from '../../Context/AuthContext';
import { motion } from 'framer-motion';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import FitnessCenterRoundedIcon from '@mui/icons-material/FitnessCenterRounded';
import AutoGraphRoundedIcon from '@mui/icons-material/AutoGraphRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import './friendsform.css'

import deadlift from '../../Assets/deadlift.jpg';
import bench from '../../Assets/bench_press.jpg';
import dumbbell from '../../Assets/dumbbell2.jpg';
import treadmill from '../../Assets/treadmill.jpg';

export default function FriendsForm() {

  let navigate = useNavigate()
  let [dashboard, setDashboard] = useState(false)
  let [workout, setWorkout] = useState(true)
  let [stats, setStats] = useState(false)
  let [notes, setNotes] = useState([])
  let { authTokens, logoutUser } = useContext(AuthContext)

  // const level = useSelector((state) => state.reducer.level);

  const pathChange = (path) => {
    navigate(path)
  }

  let level_list = [{ name: "Beginner", value: "beginner" },
  { name: "Intermediate", value: "intermediate" },
  { name: "Advanced", value: "advanced" }]

  const handleLevel = (e) => {
    e.preventDefault()
    console.log(e.target.value)
    pathChange('/submitworkout')
  }


  const handleDash = () => {
    setDashboard(true)
    setWorkout(false)
    setStats(false)
    navigate('/dashboard')
  }
  const handleWork = () => {
    setWorkout(true)
    setDashboard(false)
    setStats(false)

  }
  const handleStats = () => {
    setStats(true)
    setDashboard(false)
    setWorkout(false)
  }
  const handleLogout = () => {
    setStats(true)
    setDashboard(true)
    setWorkout(true)
    logoutUser()
  }


  return (
    <>
      {/* =======================Sidebar=======================*/}
      <NavbarDash />
      <div classNameName='container-dash'>
        <motion.aside
          animate={{ opacity: 1 }}

          transition={{
            default: {
              duration: 0.3,
            }
          }}>
          <div classNameName='top'>

          </div>
          <div classNameName='sidebar'>
            <a href='#' classNameName={workout || stats ? '' : 'active'} onClick={handleDash}>
              <PersonRoundedIcon />
              <h3>Dashboard</h3>
            </a>
            <a href='#' classNameName={dashboard || stats ? '' : 'active'}
              onClick={handleWork}>
              <FitnessCenterRoundedIcon />
              <h3>Create A Workout +</h3>
            </a>
            <a href='#' classNameName={dashboard || workout ? '' : 'active'}
              onClick={handleStats}>
              <AutoGraphRoundedIcon />
              <h3>Your Stats</h3>
            </a>
            <a href='#'
              onClick={handleLogout}>
              <LogoutRoundedIcon />
              <h3>Logout</h3>
            </a>
          </div>
        </motion.aside>

        {/* =======================Workout=======================*/}

        <motion.div classNameName="workout-card"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            default: {
              duration: 0.1,
            }
          }}>
          <main className="main-friend">
            <h1>Invite A Friend +</h1>
            <div className="outer-card-friend">


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
                  <div className="hero min-h-screen-friend info-content">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                      <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold"> Invite</h1>
                        <p className="py-6">Give us some info<br></br> on your friend!</p>
                      </div>

                      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 card-dash">
                        <form>
                          <div className="card-body">
                            <div classNameName="ui divider"></div>

                            <div className="form-control">
                              <label className="label">
                                <span className="label-text">Friend's Name</span>
                              </label>
                              <input type="text" placeholder="name" name="email"
                                className="input input-ghost" />
                            </div>
                            <div classNameName="ui divider"></div>

                            <div className="form-control">
                              <label className="label" htmlFor="exampleInputPassword1">
                                <span className="label-text">Friend's Email</span>
                              </label>
                              <input type="text" id="exampleInputPassword1" placeholder="email"
                                name="password" className="input input-ghost"
                              />
                            </div>
                            <div classNameName="ui divider"></div>

                            <div className="form-control mt-6">
                              <button className="btn btn-primary">Send Email</button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </>


            </div>
          </main>
        </motion.div>
      </div>
    </>

  )
}

{/*<div>
            <h1>Create a workout</h1>
            <button onClick={() => pathChange('/addworkout')}>Start a new Workout</button>
            {/* <button onClick={() => pathChange('/templates')}>Use a template</button> 
            <h1>Select a template</h1>
            < Template/>
            <form onSubmit={handleLevel}>
                    <select classNameName="">
                        {level_list.map(item => <option value={item.value}>{item.name}</option>)}
                    </select>
                    <input classNameName="" type="submit" />
                </form>
                <button classNameName="text-center">Hello</button>
        </div>*/}
