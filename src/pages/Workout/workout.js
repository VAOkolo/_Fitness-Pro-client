import React, {useState, useContext, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';

import {levelAction } from "../../actions";
import { NavbarDash, BeginnerModal } from '../../components/index'
import AuthContext from '../../context/AuthContext'
import { motion } from 'framer-motion';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import FitnessCenterRoundedIcon from '@mui/icons-material/FitnessCenterRounded';
import AutoGraphRoundedIcon from '@mui/icons-material/AutoGraphRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import './workout.css'

import deadlift from '../../assets/deadlift.jpg';
import bench from '../../assets/bench_press.jpg';
import dumbbell from '../../assets/dumbbell2.jpg';
import treadmill from '../../assets/treadmill.jpg';
//*****VINCENT */
import UserContext from '../../context/UserContext';
//*****VINCENT */

export default function Workout() {

  let navigate = useNavigate()
  let [dashboard, setDashboard] = useState(false)
  let [workout, setWorkout] = useState(true)
  let [stats, setStats] = useState(false)
  let [notes, setNotes] = useState([])
  let {authTokens, logoutUser} = useContext(AuthContext)
  let [beginnerModal, setBeginnerModal] = useState(false)
  let [moderateModal, setModerateModal] = useState(false)
  let [advancedModal, setAdvancedModal] = useState(false)
  let [customModal, setCustomModal] = useState(false)
  // ******Vincent
  let { beginnerTemplate } = useContext(UserContext)
  let [startDate, setStartDate] = useState()
  let [endDate, setEndDate] = useState()
  // ******Vincent

    // const level = useSelector((state) => state.reducer.level);

    const pathChange = (path) => {
      navigate(path)
    }

    let level_list = [{name:"Beginner", value:"beginner"},
    {name:"Intermediate", value:"intermediate"},
    {name:"Advanced", value:"advanced"}]

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


    function handleBeginner () {
      setModerateModal(false)
      setAdvancedModal(false)
      setCustomModal(false)
      setBeginnerModal(true)
    }
    function handleModerate () {
      setAdvancedModal(false)
      setCustomModal(false)
      setBeginnerModal(false)
      setModerateModal(true)
    }
    function handleAdvanced () {
      setCustomModal(false)
      setBeginnerModal(false)
      setModerateModal(false)
      setAdvancedModal(true)
    }
    function handleCustom () {
      setBeginnerModal(false)
      setModerateModal(false)
      setAdvancedModal(false)
      setCustomModal(true)
    }

    function beginnerSelect () {
      // Post specific template to database
      navigate('/friends')
    }
    function moderateSelect () {
      // Post specific template  to database
      navigate('/friends')
    }
    function advancedSelect () {
      // Post specific template  to database
      navigate('/friends')
    }
    function customSelect () {
      // Post specific template  to database
      navigate('/friends')
    }

    // ******VINCENT**********
    const updateStartDate = (e) => {
      setStartDate(e.target.value)
    }
    const updateEndDate = (e) => {
      setEndDate(e.target.value)
    }

    useEffect(() => {
      console.log(startDate, endDate)
    },[startDate, endDate])
    // ******VINCENT**********
    

    return (
    <>


    {/* =======================Beginner Modal=======================*/}

    {beginnerModal &&     
    <div>
    <input type="checkbox" id="my-modal-3" class="modal-toggle" />
    <div class="modal">
      <div class="modal-box relative">
        <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
        <h3 class="text-lg font-bold">Our Beginner Program</h3>
        <p class="py-4">If you're brand new to strength training <br></br>we recommend gaining foundational movements<br></br>
        & the correct technique to prevent injury.</p>
        <p class="py-4">Our beginner program has you train 3 days per <br></br>week; gaining foundational strength in classic<br></br> movement patterns. See for yourself!</p>
        With this template, you alternate between <br></br>two workouts. e.g. ABA - week 1. BAB - week 2.
        <br></br> 
        <br></br>
        
        <p class="py-4">
          Workout A:<br></br>
          Bench Press: 3x8<br></br>
          Barbell Row: 3x8<br></br>
          Squat Variation: 3x8<br></br>
          Tricep Extensions: 3x10<br></br>
          Bicep Curls: 3x10<br></br>
        </p>
        <p class="py-4">
          Workout B:<br></br>
          Bench Press: 3x8<br></br>
          Barbell Row: 3x8<br></br>
          Leg Press: 3x8<br></br>
          Skull Crushers: 3x10<br></br>
          Hammer Curls: 3x10<br></br>
        </p>
        <br></br>
         {/* {*******VINCENT**********} */}
         <label for="start">Start date:</label>
        <input onChange={updateStartDate} type="date" id="startDate" name=""
        value={startDate}
        min="2022-01-01" max="2023-12-31"></input>

        <label  for="end">End date:</label>
        <input onChange={updateEndDate} type="date" id="endDate" name=""
        value={endDate}
        min="2022-01-01" max="2023-12-31"></input>
        <br></br>
        <br></br>
        <br></br>
        {/* {*******VINCENT**********} */}
        <button onClick={beginnerSelect}class="btn btn-primary">Select This Template</button>
      </div>
    </div>
    </div>}

    {/* =======================Moderate Modal=======================*/}

    {moderateModal &&     
    <>
    <input type="checkbox" id="my-modal-3" class="modal-toggle" />
    <div class="modal">
      <div class="modal-box relative">
        <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
        <h3 class="text-lg font-bold">Our Moderate Program</h3>
        <p class="py-4">If you're brand new to strength training <br></br>we recommend gaining foundational movements<br></br>
        & the correct technique to prevent injury.</p>
        <p class="py-4">Our beginner program has you train 3 days per <br></br>week; gaining foundational strength in classic<br></br> movement patterns. See for yourself!</p>
        With this template, you alternate between <br></br>two workouts. e.g. ABA - week 1. BAB - week 2.
        <br></br> 
        <br></br>
        
        <p class="py-4">
          Workout A:<br></br>
          Bench Press: 3x8<br></br>
          Barbell Row: 3x8<br></br>
          Squat Variation: 3x8<br></br>
          Tricep Extensions: 3x10<br></br>
          Bicep Curls: 3x10<br></br>
        </p>
        <p class="py-4">
          Workout B:<br></br>
          Bench Press: 3x8<br></br>
          Barbell Row: 3x8<br></br>
          Leg Press: 3x8<br></br>
          Skull Crushers: 3x10<br></br>
          Hammer Curls: 3x10<br></br>
        </p>
        <br></br>
        <button onClick={moderateSelect}class="btn btn-primary">Select This Template</button>
      </div>
    </div>
    </>}


    {/* =======================Advanced Modal=======================*/}

    {advancedModal &&     
    <>
    <input type="checkbox" id="my-modal-3" class="modal-toggle" />
    <div class="modal">
      <div class="modal-box relative">
        <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
        <h3 class="text-lg font-bold">Our Advanced Program</h3>
        <p class="py-4">If you're brand new to strength training <br></br>we recommend gaining foundational movements<br></br>
        & the correct technique to prevent injury.</p>
        <p class="py-4">Our beginner program has you train 3 days per <br></br>week; gaining foundational strength in classic<br></br> movement patterns. See for yourself!</p>
        With this template, you alternate between <br></br>two workouts. e.g. ABA - week 1. BAB - week 2.
        <br></br> 
        <br></br>
        
        <p class="py-4">
          Workout A:<br></br>
          Bench Press: 3x8<br></br>
          Barbell Row: 3x8<br></br>
          Squat Variation: 3x8<br></br>
          Tricep Extensions: 3x10<br></br>
          Bicep Curls: 3x10<br></br>
        </p>
        <p class="py-4">
          Workout B:<br></br>
          Bench Press: 3x8<br></br>
          Barbell Row: 3x8<br></br>
          Leg Press: 3x8<br></br>
          Skull Crushers: 3x10<br></br>
          Hammer Curls: 3x10<br></br>
        </p>
        <br></br>
        <button onClick={advancedSelect}class="btn btn-primary">Select This Template</button>
      </div>
    </div>
    </>}
    {/* =======================Custom Modal=======================*/}

    {customModal &&     
    <>
    <input type="checkbox" id="my-modal-3" class="modal-toggle" />
    <div class="modal">
      <div class="modal-box relative">
        <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
        <h3 class="text-lg font-bold">Your Custom Program </h3>
        <p class="py-4">If you're brand new to strength training <br></br>we recommend gaining foundational movements<br></br>
        & the correct technique to prevent injury.</p>
        <p class="py-4">Our beginner program has you train 3 days per <br></br>week; gaining foundational strength in classic<br></br> movement patterns. See for yourself!</p>
        With this template, you alternate between <br></br>two workouts. e.g. ABA - week 1. BAB - week 2.
        <br></br> 
        <br></br>
        
        <p class="py-4">
          Workout A:<br></br>
          Bench Press: 3x8<br></br>
          Barbell Row: 3x8<br></br>
          Squat Variation: 3x8<br></br>
          Tricep Extensions: 3x10<br></br>
          Bicep Curls: 3x10<br></br>
        </p>
        <p class="py-4">
          Workout B:<br></br>
          Bench Press: 3x8<br></br>
          Barbell Row: 3x8<br></br>
          Leg Press: 3x8<br></br>
          Skull Crushers: 3x10<br></br>
          Hammer Curls: 3x10<br></br>
        </p>
        <br></br>
        <button onClick={customSelect}class="btn btn-primary">Submit Program</button>
      </div>
    </div>
    </>}
      {/* =======================Sidebar=======================*/}
    <NavbarDash />
    <div className='container-dash'>
        <motion.aside
        animate={{ opacity: 1}}
  
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

        <motion.div className="workout-card"
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        exit={{ opacity: 0}}
        transition={{
          delay: 0.1,
            default: {
                duration: 0.1,
            }
        }}>
            <main class="main-workout">
              <h1>Create A Workout +</h1>
              <div class="outer-card">

                <div class="card-1">
                <div class="card sm:card-side bg-base-100 shadow-xl">
  <figure><img src={deadlift} alt="Album" /></figure>
  <div class="card-body">
    <h2 class="card-title">Beginner Program</h2>
    <p></p>
    <div class="card-actions justify-end">
    <label for="my-modal-3" class="btn modal-button btn-primary" onClick={handleBeginner}>Select</label>
    </div>
  </div>
</div>
</div>

<div class="card-2">
                <div class="card sm:card-side bg-base-100 shadow-xl">
  <figure><img src={bench} alt="Album" /></figure>
  <div class="card-body">
    <h2 class="card-title">Moderate Program</h2>
    <p></p>
    <div class="card-actions justify-end">
    <label for="my-modal-3" class="btn modal-button btn-primary" onClick={handleModerate}>Select</label>
    </div>
  </div>
</div>
</div>

<div class="card-3">
                <div class="card sm:card-side bg-base-100 shadow-xl">
  <figure><img src={dumbbell} alt="Album" /></figure>
  <div class="card-body">
    <h2 class="card-title">Advanced Program</h2>
    <p></p>
    <div class="card-actions justify-end">
    <label for="my-modal-3" class="btn modal-button btn-primary" onClick={handleAdvanced}>Select</label>
    </div>
  </div>
</div>
</div>

<div class="card-4">
                <div class="card sm:card-side bg-base-100 shadow-xl">
  <figure><img src={treadmill} alt="Album" /></figure>
  <div class="card-body">
    <h2 class="card-title">Custom Program</h2>
    <p></p>
    <div class="card-actions justify-end">
    <label for="my-modal-3" class="btn modal-button btn-primary" onClick={handleCustom}>Select</label>
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

{/*<div>
            <h1>Create a workout</h1>
            <button onClick={() => pathChange('/addworkout')}>Start a new Workout</button>
            {/* <button onClick={() => pathChange('/templates')}>Use a template</button> 
            <h1>Select a template</h1>
            < Template/>
            <form onSubmit={handleLevel}>
                    <select className="">
                        {level_list.map(item => <option value={item.value}>{item.name}</option>)}
                    </select>
                    <input className="" type="submit" />
                </form>
                <button className="text-center">Hello</button>
        </div>*/}
