import React, { useState, useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { NavbarDash, BeginnerModal } from '../../Components/index'

import { levelAction } from "../../Actions";
import { motion } from 'framer-motion';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import FitnessCenterRoundedIcon from '@mui/icons-material/FitnessCenterRounded';
import AutoGraphRoundedIcon from '@mui/icons-material/AutoGraphRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import './workout.css'

import deadlift from '../../Assets/deadlift.jpg';
import bench from '../../Assets/bench_press.jpg';
import dumbbell from '../../Assets/dumbbell2.jpg';
import treadmill from '../../Assets/treadmill.jpg';
import FitbitRoundedIcon from '@mui/icons-material/FitbitRounded';


// UTILS
import { workoutSessionSetter, dateFormatter } from '../../_helpers/helpers';
import AuthContext from '../../Context/AuthContext'
import UserContext from '../../Context/UserContext';


export default function Workout() {

  let navigate = useNavigate()
  let [dashboard, setDashboard] = useState(false)
  let [workout, setWorkout] = useState(true)
  let [stats, setStats] = useState(false)
  let [notes, setNotes] = useState([])
  let [isSubmit, setIsSubmit] = useState(false)

  let [beginnerModal, setBeginnerModal] = useState(false)
  let [moderateModal, setModerateModal] = useState(false)
  let [advancedModal, setAdvancedModal] = useState(false)
  let [customModal, setCustomModal] = useState(false)
  // ******Vincent
  let [startDate, setStartDate] = useState()
  let [endDate, setEndDate] = useState()
  let [unique_str, setUniqueStr] = useState('')

  let { authTokens,
    logoutUser,
    user_id } = useContext(AuthContext)

  let { beginnerTemplate,
    postNewWorkout,
    postNewWorkoutSessions
  } = useContext(UserContext)
  // ******Vincent

  // const level = useSelector((state) => state.reducer.level);

  const pathChange = (path) => {
    navigate(path)
  }

  let level_list = [{ name: "Beginner", value: "beginner" },
  { name: "Intermediate", value: "intermediate" },
  { name: "Advanced", value: "advanced" }]

  const handleLevel = (e) => {
    e.preventDefault()
      (e.target.value)
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
      ('/workout')

  }
  const logWorkout = () => {
    setWorkout(false)
    setDashboard(false)
    setStats(true)
    navigate('/history')

  }
  const handleLogout = () => {
    setStats(true)
    setDashboard(true)
    setWorkout(true)
    logoutUser()
  }


  function handleBeginner() {
    setModerateModal(false)
    setAdvancedModal(false)
    setCustomModal(false)
    setBeginnerModal(true)
  }
  function handleModerate() {
    setAdvancedModal(false)
    setCustomModal(false)
    setBeginnerModal(false)
    setModerateModal(true)
  }
  function handleAdvanced() {
    setCustomModal(false)
    setBeginnerModal(false)
    setModerateModal(false)
    setAdvancedModal(true)
  }
  function handleCustom() {
    setBeginnerModal(false)
    setModerateModal(false)
    setAdvancedModal(false)
    setCustomModal(true)
  }



  async function beginnerSelect() {
    setIsSubmit(true)


    const id = await postNewWorkout(user_id, unique_str, startDate, endDate)
    const workoutSessions = workoutSessionSetter(startDate, endDate, beginnerTemplate, id)
    if (id) {
      workoutSessions.forEach((e) => {
        postNewWorkoutSessions(e)
      })
    }

    navigate('/friends')
  }

  function moderateSelect() {
    // Post specific template  to database
    navigate('/friends')
  }
  function advancedSelect() {
    // Post specific template  to database
    navigate('/friends')
  }
  function customSelect() {
    // Post specific template  to database
    navigate('/friends')
  }

  // ******VINCENT**********
  const updateStartDate = (e) => {
    setStartDate(dateFormatter(e.target.value))
  }
  const updateEndDate = (e) => {
    setEndDate(dateFormatter(e.target.value))
  }

  useEffect(() => {

  }, [startDate, endDate])
  // ******VINCENT**********


  return (
    <>


      {/* =======================Beginner Modal=======================*/}

      {beginnerModal &&
        <div>
          <input type="checkbox" id="my-modal-3" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box relative">
              <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
              <h3 className="text-lg font-bold">Our Beginner Program</h3>
              <p className="py-4">If you're brand new to strength training <br></br>we recommend gaining foundational movements<br></br>
                & the correct technique to prevent injury.</p>
              <p className="py-4">Our beginner program has you train 3 days per <br></br>week; gaining foundational strength in classNameic<br></br> movement patterns. See for yourself!</p>
              With this template, you alternate between <br></br>two workouts. e.g. ABA - week 1. BAB - week 2.
              <br></br>
              <br></br>

              <p className="py-4">
                Workout A:<br></br>
                Bench Press: 3x8<br></br>
                Barbell Row: 3x8<br></br>
                Squat Variation: 3x8<br></br>
                Tricep Extensions: 3x10<br></br>
                Bicep Curls: 3x10<br></br>
              </p>
              <p className="py-4">
                Workout B:<br></br>
                Bench Press: 3x8<br></br>
                Barbell Row: 3x8<br></br>
                Leg Press: 3x8<br></br>
                Skull Crushers: 3x10<br></br>
                Hammer Curls: 3x10<br></br>
              </p>
              <br></br>
              {/* {*******VINCENT**********} */}
              <label htmlFor="start">Start date:</label>
              <input onChange={updateStartDate} type="date" id="startDate" name=""
                value={startDate}
                min="2022-01-01" max="2023-12-31" className='btn btn-sm btn-outline'></input>
                <br></br>
                <br></br>

              <label htmlFor="end">End date:</label>
              <input onChange={updateEndDate} type="date" id="endDate" name=""
                value={endDate}
                min="2022-01-01" max="2023-12-31" className='btn btn-sm btn-outline'></input>
              <br></br>
              <br></br>
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">                        {isSubmit && (
                  <div className="ui message success">Loading...</div>)}</a>
              </label>
              <br></br>
              {/* {*******VINCENT**********} */}
              <button onClick={beginnerSelect} className="btn btn-primary">Select This Template</button>
            </div>
          </div>
        </div>}

      {/* =======================Moderate Modal=======================*/}

      {moderateModal &&
        <>
          <input type="checkbox" id="my-modal-3" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box relative">
              <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
              <h3 className="text-lg font-bold">Our Moderate Program</h3>
              <p className="py-4">If you're brand new to strength training <br></br>we recommend gaining foundational movements<br></br>
                & the correct technique to prevent injury.</p>
              <p className="py-4">Our beginner program has you train 3 days per <br></br>week; gaining foundational strength in classNameic<br></br> movement patterns. See for yourself!</p>
              With this template, you alternate between <br></br>two workouts. e.g. ABA - week 1. BAB - week 2.
              <br></br>
              <br></br>

              <p className="py-4">
                Workout A:<br></br>
                Bench Press: 3x8<br></br>
                Barbell Row: 3x8<br></br>
                Squat Variation: 3x8<br></br>
                Tricep Extensions: 3x10<br></br>
                Bicep Curls: 3x10<br></br>
              </p>
              <p className="py-4">
                Workout B:<br></br>
                Bench Press: 3x8<br></br>
                Barbell Row: 3x8<br></br>
                Leg Press: 3x8<br></br>
                Skull Crushers: 3x10<br></br>
                Hammer Curls: 3x10<br></br>
              </p>
              <br></br>
              <button onClick={moderateSelect} className="btn btn-primary">Select This Template</button>
            </div>
          </div>
        </>}


      {/* =======================Advanced Modal=======================*/}

      {advancedModal &&
        <>
          <input type="checkbox" id="my-modal-3" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box relative">
              <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
              <h3 className="text-lg font-bold">Our Advanced Program</h3>
              <p className="py-4">If you're brand new to strength training <br></br>we recommend gaining foundational movements<br></br>
                & the correct technique to prevent injury.</p>
              <p className="py-4">Our beginner program has you train 3 days per <br></br>week; gaining foundational strength in classNameic<br></br> movement patterns. See for yourself!</p>
              With this template, you alternate between <br></br>two workouts. e.g. ABA - week 1. BAB - week 2.
              <br></br>
              <br></br>

              <p className="py-4">
                Workout A:<br></br>
                Bench Press: 3x8<br></br>
                Barbell Row: 3x8<br></br>
                Squat Variation: 3x8<br></br>
                Tricep Extensions: 3x10<br></br>
                Bicep Curls: 3x10<br></br>
              </p>
              <p className="py-4">
                Workout B:<br></br>
                Bench Press: 3x8<br></br>
                Barbell Row: 3x8<br></br>
                Leg Press: 3x8<br></br>
                Skull Crushers: 3x10<br></br>
                Hammer Curls: 3x10<br></br>
              </p>
              <br></br>
              <button onClick={advancedSelect} className="btn btn-primary">Select This Template</button>
            </div>
          </div>
        </>}
      {/* =======================Custom Modal=======================*/}

      {customModal &&
        <>
          <input type="checkbox" id="my-modal-3" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box relative">
              <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
              <h3 className="text-lg font-bold">Your Custom Program </h3>
              <p className="py-4">If you're brand new to strength training <br></br>we recommend gaining foundational movements<br></br>
                & the correct technique to prevent injury.</p>
              <p className="py-4">Our beginner program has you train 3 days per <br></br>week; gaining foundational strength in classNameic<br></br> movement patterns. See for yourself!</p>
              With this template, you alternate between <br></br>two workouts. e.g. ABA - week 1. BAB - week 2.
              <br></br>
              <br></br>

              <p className="py-4">
                Workout A:<br></br>
                Bench Press: 3x8<br></br>
                Barbell Row: 3x8<br></br>
                Squat Variation: 3x8<br></br>
                Tricep Extensions: 3x10<br></br>
                Bicep Curls: 3x10<br></br>
              </p>
              <p className="py-4">
                Workout B:<br></br>
                Bench Press: 3x8<br></br>
                Barbell Row: 3x8<br></br>
                Leg Press: 3x8<br></br>
                Skull Crushers: 3x10<br></br>
                Hammer Curls: 3x10<br></br>
              </p>
              <br></br>
              <button onClick={customSelect} className="btn btn-primary">Submit Program</button>
            </div>
          </div>
        </>}
      {/* =======================Sidebar=======================*/}
      <NavbarDash />
      <div className='container-dash'>
        <motion.aside
          animate={{ opacity: 1 }}

          transition={{
            default: {
              duration: 0.3,
            }
          }}>
          <div className='top'>

          </div>
          <div className='sidebar'>
            <a href='#' className={workout || stats ? '' : 'active'} onClick={handleDash}>
              <PersonRoundedIcon />
              <h3>Dashboard</h3>
            </a>
            <a href='#' className={dashboard || stats ? '' : 'active'}
              onClick={handleWork}>
              <FitnessCenterRoundedIcon />
              <h3>Create A Workout +</h3>
            </a>
            <a href='#' className={dashboard || workout ? '' : 'active'}
              onClick={logWorkout}>
              <FitbitRoundedIcon />
              <h3>Accomplishments</h3>
            </a>
            <a href='#'
              onClick={handleLogout}>
              <LogoutRoundedIcon />
              <h3>Logout</h3>
            </a>
          </div>
        </motion.aside>

        {/* =======================Workout=======================*/}

        <motion.div className="workout-card"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            delay: 0.1,
            default: {
              duration: 0.1,
            }
          }}>
          <main className="main-workout">
            <h1>Create A Workout +</h1>
            <div className="outer-card">

              <div className="card-1">
                <div className="card sm:card-side bg-base-100 shadow-xl">
                  <figure><img src={deadlift} alt="Album" /></figure>
                  <div className="card-body">
                    <h2 className="card-title">Beginner Program</h2>
                    <p></p>
                    <div className="card-actions justify-end">
                      <label htmlFor="my-modal-3" className="btn modal-button btn-primary" onClick={handleBeginner}>Select</label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-2">
                <div className="card sm:card-side bg-base-100 shadow-xl">
                  <figure><img src={bench} alt="Album" /></figure>
                  <div className="card-body">
                    <h2 className="card-title">Moderate Program</h2>
                    <p></p>
                    <div className="card-actions justify-end">
                      <label htmlFor="my-modal-3" className="btn modal-button btn-primary" onClick={handleModerate}>Select</label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-3">
                <div className="card sm:card-side bg-base-100 shadow-xl">
                  <figure><img src={dumbbell} alt="Album" /></figure>
                  <div className="card-body">
                    <h2 className="card-title">Advanced Program</h2>
                    <p></p>
                    <div className="card-actions justify-end">
                      <label htmlFor="my-modal-3" className="btn modal-button btn-primary" onClick={handleAdvanced}>Select</label>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card-4">
                <div className="card sm:card-side bg-base-100 shadow-xl">
                  <figure><img src={treadmill} alt="Album" /></figure>
                  <div className="card-body">
                    <h2 className="card-title">Custom Program</h2>
                    <p></p>
                    <div className="card-actions justify-end">
                      <label htmlFor="my-modal-3" className="btn modal-button btn-primary" onClick={handleCustom}>Select</label>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </main>
        </motion.div>
      </div>
    </>

  )
}
