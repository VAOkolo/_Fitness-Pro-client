import React, {useState, useContext} from 'react'
import { useNavigate} from 'react-router-dom';

import {levelAction } from "../../actions";
import { NavbarDash, BeginnerModal } from '../../components/index'
import AuthContext from '../../context/AuthContext'
import { motion } from 'framer-motion';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import FitnessCenterRoundedIcon from '@mui/icons-material/FitnessCenterRounded';
import AutoGraphRoundedIcon from '@mui/icons-material/AutoGraphRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import './friendsform.css'

import deadlift from '../../assets/deadlift.jpg';
import bench from '../../assets/bench_press.jpg';
import dumbbell from '../../assets/dumbbell2.jpg';
import treadmill from '../../assets/treadmill.jpg';

export default function FriendsForm() {

  let navigate = useNavigate()
  let [dashboard, setDashboard] = useState(false)
  let [workout, setWorkout] = useState(true)
  let [stats, setStats] = useState(false)
  let [notes, setNotes] = useState([])
  let {authTokens, logoutUser} = useContext(AuthContext)
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

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

    // Before you submit just check when typing in your name and email - the states are console logging!!!
    //Below Submit Button is now ready to link to POST methods

    function friendSubmit() {

    }

    const nameChange = e => {
      console.log("Current Name: ", e.target.value);
      setName(e.target.value);
    }
    const emailChange = e => {
      console.log("Current Name: ", e.target.value);
      setEmail(e.target.value);
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

        <motion.div className="workout-card"
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        exit={{ opacity: 0}}
        transition={{
            default: {
                duration: 0.1,
            }
        }}>
            <main class="main-friend">
              <h1>Invite A Friend +</h1>
              <div class="outer-card-friend">


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
    <div class="hero min-h-screen-friend info-content">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <div class="text-center lg:text-left">
      <h1 class="text-5xl font-bold"> Invite</h1>
      <p class="py-6">Give us some info<br></br> on your friend!</p>
    </div>

    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 card-dash">
    <form onSubmit={friendSubmit}>
      <div class="card-body">
        <div className="ui divider"></div>

        <div class="form-control">
          <label class="label">
            <span class="label-text">Friend's Name</span>
          </label>
          <input type="text" placeholder="name" name="name" 
          class="input input-ghost" value={name} onChange={nameChange}/>
        </div>
        <div className="ui divider"></div>

        <div class="form-control">
          <label class="label" htmlFor="exampleInputPassword1">
            <span class="label-text">Friend's Email</span>
          </label>
          <input type="text" id="exampleInputPassword1" placeholder="email"  
          name="email" class="input input-ghost" value={email} onChange={emailChange}
          />
        </div>
        <div className="ui divider"></div>
        
        <div class="form-control mt-6">
          <button class="btn btn-primary">Send Email</button>
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
                    <select className="">
                        {level_list.map(item => <option value={item.value}>{item.name}</option>)}
                    </select>
                    <input className="" type="submit" />
                </form>
                <button className="text-center">Hello</button>
        </div>*/}
