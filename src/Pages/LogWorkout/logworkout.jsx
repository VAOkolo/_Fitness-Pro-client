import React, { useContext, useState, useEffect } from 'react';

import Modal from './modal';
import Button from 'react-bootstrap/Button';
import { inputAdornmentClasses } from '@mui/material';

// UTILS
import UserContext from '../../Context/UserContext';
import AuthContext from '../../Context/AuthContext';

export default function LogWorkout() {

    const { userWorkoutPaths,
        userExercisePosts,
        setTodaysExercises,
        postWorkoutCompletionStatus } = useContext(UserContext)
    const { user_id } = useContext(AuthContext)
    const [openModal, setOpenModal] = useState(false)
    const [modalId, setModalId] = useState()
    const [url, setUrl] = useState('')
    const [modalUrl, setModalUrl] = useState('')
    const [modalTitle, setModalTitle] = useState()
    const [rows, setRows] = useState([1])
    const [activeSession, setActiveSession] = useState([])
    const [workoutSetId, setWorkoutSet] = useState()
    const [modalData, setModalData] = useState([])
    const [workoutSessionId, workoutSessionID] = useState([])

    const [parentWorkoutId, setParentWorkoutId] = useState()
    const [exerciseId, setExerciseId] = useState()


    let api_key = process.env.REACT_APP_API_KEY


    const updateModal = (e) => {
        setUrl(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&order=viewCount&q=${e.target.text + "instructions"}&safeSearch=strict&key=${api_key}`)
        setOpenModal(true)
        setModalId(e.target.id)
        setModalTitle(e.target.name)
        setWorkoutSet(e.target.id)
    }

    useEffect(() => {
        // fetchYouTubeVideo(url)
    }, [url])

    useEffect(() => {
        async function getActiveWorkout(user_id) {
            const workout_id = await userWorkoutPaths(user_id)
            const todaysWorkouts = await setTodaysExercises(workout_id)
            console.log(todaysWorkouts)
            setActiveSession(todaysWorkouts)

            setParentWorkoutId(todaysWorkouts[0].workout_id)
        }
        getActiveWorkout(user_id)
    }, [user_id])


    //YOUTUBE FEATURE
    const fetchYouTubeVideo = async (url) => {
        const response = await fetch(url)
        const data = await response.json()
        const videoID = data.items[0].id.videoId
        // console.log(videoID)
        setModalUrl(`https://www.youtube.com/embed/${videoID}`)
    }



    const submitData = (e) => {
        e.preventDefault()

        let reps, weights = ''
        const exerciseSets = []
        let exercise_id = document.getElementsByClassName('overlay')[0].id
        let inputs = document.getElementsByClassName('sets')

        for (const set of inputs) {
            const tr = set.id
            reps = set.childNodes[1].childNodes[0].value
            weights = set.childNodes[2].childNodes[0].value
            exerciseSets.push({
                exercise_id: parseInt(exercise_id),
                workout_id: parseInt(workoutSessionId),
                reps: parseInt(reps),
                weights: parseInt(weights)
            })
        }

        //submit sets to workout session and then change status of workout session to true
        userExercisePosts(exerciseSets, workoutSessionId)
        postWorkoutCompletionStatus(workoutSessionId, parentWorkoutId, exerciseId)
    }


    const addRow = (e) => {
        setRows([...rows, "1"])
    }

    return (
        <div className="">
            <div className="text-lg font-bold text-center" >Today's Exercises</div>
            <br /><br />
            {activeSession ?
                <div>
                    {activeSession.map((data) => (
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 card-dash mb-3" >
                            <div key={data.pk}>
                                <div className="card-body text-md font-bold" id={data.pk}>
                                    <div>
                                        <div className='ui divider'></div>
                                        <br />
                                        <div className="text-center text-white">{data.exercise_name}</div>
                                    </div>
                                    <div className='row justify-content-center mt-4'>
                                        {data.workout_exercise_set ?
                                            <div className='col-auto'>
                                                <table className="table table-borderless center text-center" key={data.pk}>
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">Sets</th>
                                                            <th scope="col">Reps</th>
                                                            <th scope="col">Weights</th>
                                                        </tr>
                                                    </thead>
                                                    {data.workout_exercise_set.map(({ pk, sets, weights }) => {
                                                        return (
                                                            <tbody key={pk}>
                                                                <tr>
                                                                    <td>{pk}</td>
                                                                    <td>{sets}</td>
                                                                    <td>{weights}</td>
                                                                </tr>
                                                            </tbody>
                                                        )
                                                    })
                                                    }
                                                </table>
                                            </div>
                                            : <div>No Sets</div>
                                        }
                                    </div>
                                </div>
                                <div className="form-control">
                                    <Button variant="" name={data.exercise_name} id={data.exercise} className='btn btn-primary' onClick={(e) => {
                                        updateModal(e);
                                        setModalData(data.workout_exercise_set);
                                        setExerciseId(e.target.id);
                                        workoutSessionID(data.pk)
                                    }}>Add Set</Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div> : <div>Nothing to show</div>}
            <Modal open={openModal} onClose={() => { setOpenModal(false); setRows([]) }} url={modalUrl} workoutSetId={workoutSetId} data={modalData} exercise={modalTitle} rows={rows} addRow={addRow} submitData={submitData} />
        </div >

    )
}
