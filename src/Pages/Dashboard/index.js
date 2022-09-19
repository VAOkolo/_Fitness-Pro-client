import React, { useState, useEffect, useContext } from 'react'
import { NavbarDash } from '../../Components/index'

// STYLES LIBRARY
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import FitnessCenterRoundedIcon from '@mui/icons-material/FitnessCenterRounded';
import AutoGraphRoundedIcon from '@mui/icons-material/AutoGraphRounded';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import BookmarkAddedRoundedIcon from '@mui/icons-material/BookmarkAddedRounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import SportsGymnasticsRoundedIcon from '@mui/icons-material/SportsGymnasticsRounded';
import FitbitRoundedIcon from '@mui/icons-material/FitbitRounded';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { motion } from 'framer-motion'
import Graph from '../../Components/Graph'
import './dashboard.css'
import LogWorkout from '../LogWorkout/logworkout'
// UTILS
import AuthContext from '../../Context/AuthContext'
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    let navigate = useNavigate()
    let [dashboard, setDashboard] = useState(true)
    let [workout, setWorkout] = useState(false)
    let [accompl, setAccompl] = useState(false)

    let [stats, setStats] = useState(false)
    let [notes, setNotes] = useState([])
    let { authTokens, logoutUser } = useContext(AuthContext)
    const [dashWork, setDashWork] = useState(false)

    const [field1Set, setField1Set] = useState("")
    const [field1Rep, setField1Rep] = useState("")
    const [field2Set, setField2Set] = useState("")
    const [field2Rep, setField2Rep] = useState("")
    const [field3Set, setField3Set] = useState("")
    const [field3Rep, setField3Rep] = useState("")
    const [field4Set, setField4Set] = useState("")
    const [field4Rep, setField4Rep] = useState("")
    const [field5Set, setField5Set] = useState("")
    const [field5Rep, setField5Rep] = useState("")

    useEffect(() => {

    }, [])




    const handleDash = () => {
        setDashboard(true)
        setWorkout(false)
        setAccompl(false)
    
        setStats(false)
    }
    const handleWork = () => {
        setWorkout(true)
        setDashboard(false)
        setAccompl(false)
      
        setStats(false)
        navigate('/workout')

    }
   
    const accWorkout = () => {
        
        setAccompl(true)
        setDashboard(false)
        setWorkout(false)
        setStats(false)
        navigate('/history')
    }

    const handleLogout = () => {
        setStats(true)
        setDashboard(true)
        setWorkout(true)
        setAccompl(true)
        logoutUser()
    }

    function dashWorkModal() {
        setDashWork(true)
            ("I've been clicked")
    }

    function submitLog(e) {
        e.preventDefault()
            (field1Set, field1Rep)
        navigate('/workout')
    }

    return (
        <>
            {/* =======================Your Workout Today Modal!=======================*/}

            {dashWork &&
                <div>
                    <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box relative">
                            <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                            <h3 className="text-lg font-bold text-center">Login Your Workout Here!</h3>
                            <br></br>
                            <LogWorkout />
                        </div>
                    </div>
                </div>}


            {/* =======================Sidebar=======================*/}
            <NavbarDash />
            <div className='container-dash'>
                <motion.aside
                    animate={{ opacity: 1 }}
                    transition={{
                        default: {
                            duration: 0.5,
                        }
                    }}>
                    <div className='top'>

                    </div>
                    <div className='sidebar'>
                        <a href='#' className={dashboard || stats ? '' : 'active'} onClick={handleDash}>
                            <PersonRoundedIcon />
                            <h3>Dashboard</h3>
                        </a>
                        <a href='#' className={dashboard || workout ? '' : 'active'}
                            onClick={handleWork}>
                            <FitnessCenterRoundedIcon />
                            <h3>Create A Workout +</h3>
                        </a>
                        <a href='#' className={dashboard || accompl ? '' : 'active'}
                            onClick={accWorkout}>
                            <TaskAltIcon />
                            <h3>Accomplishments</h3>
                        </a>
                        <a href='#'
                            onClick={handleLogout}>
                            <LogoutRoundedIcon />
                            <h3>Logout</h3>
                        </a>
                    </div>
                </motion.aside>



                {/* ================DASHBOARD=================== */}
                <motion.main
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{
                        default: {
                            duration: 0.3,
                        }
                    }}>
                    <h1 className='dashboard-dash'>Dashboard</h1>

                    {/* Completion */}

                    <div className='insights'>
                        <div className='sales'>
                            <BookmarkAddedRoundedIcon
                                sx={{
                                    background: '#7380ec',
                                    borderRadius: '50%',
                                    color: 'white',
                                    padding: '0.5rem',
                                    fontSize: '3rem'
                                }} />
                            <div className='middle'>
                                <div className='left'>

                                    <h3>Days Completed</h3>
                                    <br></br>
<<<<<<< HEAD
                                    <h1>2/14</h1>
=======
                                    <h1>12/14</h1>
>>>>>>> b098ef71ea593714d6c1aa5415dd2d8b90d19654
                                </div>
                                <div className='progress'>
                                    <svg>
                                        <circle className="circle1" cx={38} cy={38} r={36}></circle>
                                    </svg>
                                    <div className="number1">
                                        <p>82%</p>
                                    </div>
                                </div>
                            </div>
                            <small className='text-cancel'>Last 24 Hours</small>
                        </div>

                        {/* Metrics */}


                        <div className='expenses' htmlFor="my-modal-3" onClick={dashWorkModal}>
                            <SportsGymnasticsRoundedIcon
                                sx={{
                                    background: '#ff7782',
                                    borderRadius: '50%',
                                    color: 'white',
                                    padding: '0.5rem',
                                    fontSize: '3rem'
                                }} />
                            <div className='middle middle-btn'>
                                <div className='left'>
                                    <h3>Your Workout Today</h3>
                                    <h1>Upper</h1>
                                </div>
                                <div className='progress-middle-2'>
                                    <label htmlFor="my-modal-3" className="btn btn-error modal-button">Open</label>
                                </div>
                            </div>
                            <small className='text-cancel'>Click For More Info</small>
                        </div>

                        {/* Head 2 Head */}


                        <div className='income'>
                            <PeopleAltRoundedIcon
                                sx={{
                                    background: '#41f1b6',
                                    borderRadius: '50%',
                                    color: 'white',
                                    padding: '0.5rem',
                                    fontSize: '3rem'
                                }} />
                            <div className='middle'>
                                <div className='left'>
<<<<<<< HEAD
                                    <h3>Recently Improved!</h3>
                                    <h1>3/14</h1>
=======
                                    <h3>Vincent Recently Improved!</h3>
                                    <h1>8/14</h1>
>>>>>>> b098ef71ea593714d6c1aa5415dd2d8b90d19654
                                </div>
                                <div className='progress'>
                                    <svg>
                                        <circle className="circle3" cx={38} cy={38} r={36}></circle>
                                    </svg>
                                    <div className="number2">
                                        <p>67%</p>
                                    </div>
                                </div>
                            </div>
                            <small className='text-cancel'>Last 24 Hours</small>
                        </div>
                    </div>

                    {/* Graph */}
                    <div className='recent-order'>
                        <h2>Current Stats</h2>
                        <div style={{ width: '99%' }} className="graph">
                            <Graph />
                        </div>
                    </div>
                </motion.main>
            </div>
        </>
    )
}

export default Dashboard
