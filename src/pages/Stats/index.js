import React, {useState, useContext} from 'react'
import { useNavigate} from 'react-router-dom';

import {levelAction } from "../../actions";
import { NavbarDash, BeginnerModal } from '../../components/index'
import AuthContext from '../../context/AuthContext'
import { motion } from 'framer-motion';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import FitnessCenterRoundedIcon from '@mui/icons-material/FitnessCenterRounded';
import BookmarkAddedRoundedIcon from '@mui/icons-material/BookmarkAddedRounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import SportsGymnasticsRoundedIcon from '@mui/icons-material/SportsGymnasticsRounded';
import AutoGraphRoundedIcon from '@mui/icons-material/AutoGraphRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import './stats.css'
import Graph from '../../components/Graph/index';

import Running from '../../assets/running_togther.jpg'
import Stare from '../../assets/workout_friends.jpg'

export default function Stats() {

  let navigate = useNavigate()
  const [dashWork, setDashWork] = useState(false)
  let [dashboard, setDashboard] = useState(false)
  let [workout, setWorkout] = useState(false)
  let [stats, setStats] = useState(true)
  let [notes, setNotes] = useState([])
  let {authTokens, logoutUser} = useContext(AuthContext)

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
        navigate('/workout')
        
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
    
    function dashWorkModal() {
        setDashWork(true)
        console.log("I've been clicked")
    }

    

    return (
    <>
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

                <motion.div className="workout-card-stats"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                        default: {
                            duration: 0.1,
                        }
                    }}>
                    <main class="main-friend">
                        <h1>See Your Competition!</h1>
                        <div class="outer-card-friend">


                            <div className='recent-order'>
                                <h2>Multiplayer Stats</h2>
                                <div style={{ width: '99%' }} className="graph-stats-tab">
                                    <Graph />
                                </div>
                            </div>
                        </div>
                    </main>

        <motion.main
        className="main-stats"
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        exit={{ opacity: 0}}
        transition={{
            default: {
                duration: 0.3,
            }
        }}>

            {/* Completion */}
            
            <div className='insights'>
                <div className='sales'>
                    <PersonRoundedIcon 
                    sx={{
                        background: '#7380ec',
                        borderRadius: '50%',
                        color: 'white',
                        padding: '0.5rem',
                        fontSize: '3rem'
                    }}/>
                    <div className='middle'>
                        <div className='left'>
                            
                            <h3>Date Joined: <br></br>1st September 2022</h3>
                            <br></br>
                            <h1>Harry</h1>
                        </div>
                            <div className='progress-middle-1'>
                            <label for="my-modal-3" class="btn btn-error modal-button first-button">More Info</label>
                        </div>
                    </div>
                    <small className='text-cancel'>User Profile</small>
                </div>

            {/* Metrics */}

            
            <div className='expenses' for="my-modal-3" onClick={dashWorkModal}>
                    <PersonRoundedIcon
                    sx={{
                        background: '#ff7782',
                        borderRadius: '50%',
                        color: 'white',
                        padding: '0.5rem',
                        fontSize: '3rem'
                    }}/>
                    <div className='middle middle-btn'>
                        <div className='left'>
                        <h3>Date Joined:<br></br> 29th August 2022
                        </h3>
                        <h1>Vincent</h1>
                        </div>
                            <div className='progress-middle-2'>

                                <label for="my-modal-3" class="btn btn-error modal-button">More Info</label>

                        </div>
                    </div>
                    <small className='text-cancel'>User Profile</small>
                </div>
            </div>   
        </motion.main>
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
