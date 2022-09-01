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
        navigate('/logworkout')
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



    function submitLog(e) {
        e.preventDefault()
        console.log(field1Set, field1Rep)
        navigate('/workout')
    }

    return (
    <>
    {/* =======================Your Workout Today Modal!=======================*/}

{dashWork &&     
    <div>
    <input type="checkbox" id="my-modal-3" class="modal-toggle" />
    <div class="modal">
      <div class="modal-box relative">
        <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
        <h3 class="text-lg font-bold">Login Your Workout Here!</h3>
        <br></br> 
        <h3 class="text-lg font-bold">Workout A</h3>
        <p class="py-4"></p>

<form class="form-workout" onSubmit={submitLog} >
        <h3 class="text-md font-bold">Bench Press: 3x8</h3>
          <div class="form-control">
  <label class="input-group input-group-sm">
    <span>Sets</span>
    <input type="text" placeholder="Type here" class="input input-bordered input-xs" value={field1Set} onChange={e => setField1Set(e.target.value)}/>
  </label>
</div>
          <div class="form-control">
  <label class="input-group input-group-sm">
    <span>Reps</span>
    <input type="text" placeholder="Type here" class="input input-bordered input-xs" value={field1Rep} onChange={e => setField1Rep(e.target.value)}/>
  </label>
</div>
          
          <br></br>
          <h3 class="text-md font-bold">Barbell Row: 3x8</h3>
          <div class="form-control">
  <label class="input-group input-group-sm">
    <span>Sets</span>
    <input type="text" placeholder="Type here" class="input input-bordered input-xs" value={field2Set} onChange={e => setField2Set(e.target.value)}/>
  </label>
</div>
          <div class="form-control">
  <label class="input-group input-group-sm">
    <span>Reps</span>
    <input type="text" placeholder="Type here" class="input input-bordered input-xs" value={field2Rep} onChange={e => setField2Rep(e.target.value)}/>
  </label>
</div>

          <br></br>
          <h3 class="text-md font-bold">Squat Variation: 3x8</h3>
          <div class="form-control">
  <label class="input-group input-group-sm">
    <span>Sets</span>
    <input type="text" placeholder="Type here" class="input input-bordered input-xs" value={field3Set} onChange={e => setField3Set(e.target.value)}/>
  </label>
</div>
          <div class="form-control">
  <label class="input-group input-group-sm">
    <span>Reps</span>
    <input type="text" placeholder="Type here" class="input input-bordered input-xs" value={field3Rep} onChange={e => setField3Rep(e.target.value)}/>
  </label>
</div>

          <br></br>
          <h3 class="text-md font-bold">Tricep Extensions: 3x10</h3>
          <div class="form-control">
  <label class="input-group input-group-sm">
    <span>Sets</span>
    <input type="text" placeholder="Type here" class="input input-bordered input-xs" value={field4Set} onChange={e => setField4Set(e.target.value)}/>
  </label>
</div>
          <div class="form-control">
  <label class="input-group input-group-sm">
    <span>Reps</span>
    <input type="text" placeholder="Type here" class="input input-bordered input-xs" value={field4Rep} onChange={e => setField4Rep(e.target.value)}/>
  </label>
</div>

          <br></br>
          <h3 class="text-md font-bold">Bicep Curls: 3x10</h3>
          <div class="form-control">
  <label class="input-group input-group-sm">
    <span>Sets</span>
    <input type="text" placeholder="Type here" class="input input-bordered input-xs" value={field5Set} onChange={e => setField5Set(e.target.value)}/>
  </label>
</div>
          <div class="form-control">
  <label class="input-group input-group-sm">
    <span>Reps</span>
    <input type="text" placeholder="Type here" class="input input-bordered input-xs" value={field5Rep} onChange={e => setField5Rep(e.target.value)}/>
  </label>
</div>
        <br></br>
        <br></br>
        <button type="submit" class="btn btn-primary">Log Your Workout</button>
        </form>
      </div>
    </div>
    </div>}

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

            
            <div className='expenses' for="my-modal-3" onClick={dashWorkModal}>
                    <SportsGymnasticsRoundedIcon 
                    sx={{
                        background: '#ff7782',
                        borderRadius: '50%',
                        color: 'white',
                        padding: '0.5rem',
                        fontSize: '3rem'
                    }}/>
                    <div className='middle middle-btn'>
                        <div className='left'>
                        <h3>Your Workout Today</h3>
                        <h1>Upper</h1>
                        </div>
                            <div className='progress-middle-2'>

                                <label for="my-modal-3" class="btn btn-error modal-button">Open</label>

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
