import React, {useState, useEffect, useContext} from 'react'
import AuthContext from '../../context/AuthContext'
import { NavbarDash } from '../../components/index'
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import FitnessCenterRoundedIcon from '@mui/icons-material/FitnessCenterRounded';
import AutoGraphRoundedIcon from '@mui/icons-material/AutoGraphRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import BookmarkAddedRoundedIcon from '@mui/icons-material/BookmarkAddedRounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import SportsGymnasticsRoundedIcon from '@mui/icons-material/SportsGymnasticsRounded';
import { motion } from 'framer-motion'
import Graph from '../../components/Graph'
import './dashboard.css'
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    let navigate = useNavigate()
    let [dashboard, setDashboard] = useState(true)
    let [workout, setWorkout] = useState(false)
    let [stats, setStats] = useState(false)
    let [notes, setNotes] = useState([])
    let {authTokens, logoutUser} = useContext(AuthContext)

    useEffect(()=> {
        getNotes()
    }, [])


    let getNotes = async() => {
        let response = await fetch('http://127.0.0.1:8000/api/notes/', {
            method:'GET',
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Bearer ' + String(authTokens.access)
            }
        })
        let data = await response.json()

        if(response.status === 200){
            setNotes(data)
        }else if(response.statusText === 'Unauthorized'){
            logoutUser()
        }     
    }


    // These states below are:
    // changing the purple colour of current sidebar selection
    // changing page routes
    // handling logout

    const handleDash = () => {
        setDashboard(true)
        setWorkout(false)
        setStats(false)
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

    return (
    <>

    {/* =======================Sidebar=======================*/}
    <NavbarDash />
    <div className='container-dash'>
        <motion.aside
        animate={{ opacity: 1}}
        transition={{
            default: {
                duration: 0.5,
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



        {/* ================DASHBOARD=================== */}
        <motion.main
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        exit={{ opacity: 0}}
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
                    }}/>
                    <div className='middle'>
                        <div className='left'>
                            
                            <h3>Days Completed</h3>
                            <br></br>
                            <h1>7/14</h1>
                        </div>
                            <div className='progress'>
                                <svg>
                                    <circle class="circle1" cx={38} cy={38} r={36}></circle>
                                </svg>
                                <div class="number1">
                                    <p>82%</p>
                                </div>
                        </div>
                    </div>
                    <small className='text-cancel'>Last 24 Hours</small>
                </div>

            {/* Metrics */}

            
            <div className='expenses'>
                    <SportsGymnasticsRoundedIcon 
                    sx={{
                        background: '#ff7782',
                        borderRadius: '50%',
                        color: 'white',
                        padding: '0.5rem',
                        fontSize: '3rem'
                    }}/>
                    <div className='middle'>
                        <div className='left'>
                        <h3>Your Workout Today</h3>
                        <h1>Upper</h1>
                        </div>
                            <div className='progress'>
                                <svg>
                                    <circle class="circle2" cx={38} cy={38} r={36}></circle>
                                </svg>
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
                    }}/>
                    <div className='middle'>
                        <div className='left'>
                        <h3>Vincent Recently Improved!</h3>
                            <h1>3/14</h1>
                        </div>
                            <div className='progress'>
                                <svg>
                                    <circle class="circle3" cx={38} cy={38} r={36}></circle>
                                </svg>
                                <div class="number2">
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
                        <div style={{width: '99%'}} className="graph">
                            <Graph />
                        </div>
                    </div>
        </motion.main>
    </div>
    </>
    )
}

export default Dashboard
