import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { NavbarDash, BeginnerModal } from '../../Components/index';


import { levelAction } from "../../Actions";
import { motion } from 'framer-motion';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import FitnessCenterRoundedIcon from '@mui/icons-material/FitnessCenterRounded';
import AutoGraphRoundedIcon from '@mui/icons-material/AutoGraphRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import './friends.css';

import Running from '../../Assets/running_togther.jpg';
import Stare from '../../Assets/workout_friends.jpg';
import AuthContext from '../../Context/AuthContext';


export default function Friends() {

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

    function friendForm() {
        navigate('/friendsform')
    }


    return (
        <>
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


                            <div className="card-1">
                                <div className="card sm:card-side bg-base-100 shadow-xl">
                                    <figure><img className="friend-img" src={Running} alt="Album" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">Want To Invite A Friend?</h2>
                                        <p></p>
                                        <div className="card-actions justify-end">
                                            <label for="my-modal-3" onClick={handleDash} className="btn ">No Thanks</label>
                                            <label for="my-modal-3" onClick={friendForm} className="btn modal-button btn-primary">Yeah Sure!</label>
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
