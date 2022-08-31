import React, { useContext, useState, useEffect } from 'react'
import UserContext from '../../context/UserContext'
import AuthContext from '../../context/AuthContext'
import Modal from './modal'
import { inputAdornmentClasses } from '@mui/material'
import Button from 'react-bootstrap/Button';

export default function LogWorkout() {

    const { todaysExercises, userWorkoutPaths, userExercisePosts } = useContext(UserContext)
    const { user_id } = useContext(AuthContext)
    const [openModal, setOpenModal] = useState(false)
    const [modalId, setModalId] = useState()
    const [url, setUrl] = useState('')
    const [modalUrl, setModalUrl] = useState('')
    const [modalTitle, setModalTitle] = useState()
    const [rows, setRows] = useState([1])
    const [activeSession, setActiveSession] = useState([])
    const [workoutSessionSetId, setWorkoutSet] = useState([])
    const [modalData, setModalData] = useState([])


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
            const response = await userWorkoutPaths(user_id)
            const activeWorkout = response[0].user_workout_session
            setActiveSession(activeWorkout)
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
        let workoutID = document.getElementsByClassName('overlay')[0].id
        console.log(workoutID)
        let inputs = document.getElementsByClassName('sets')

        for (const set of inputs) {
            const tr = set.id
            reps = set.childNodes[1].childNodes[0].value
            weights = set.childNodes[2].childNodes[0].value
            exerciseSets.push({
                exercise_id: parseInt(tr),
                workout_id: parseInt(workoutID[0].id),
                reps: parseInt(reps),
                weights: parseInt(weights)
            })
        }
        userExercisePosts(exerciseSets, workoutID)
    }



    const addRow = (e) => {
        setRows([...rows, "1"])
    }

    return (
        <div className="log-workout-parent">
            <div className="log-workout-title" >Today's Exercises</div>
            {activeSession ?
                <div className="log-workout-form-parent" >
                    {activeSession.map((data) => (
                        <div className="log-workout-container" id={data.id}>
                            <div className="log-workout-exercise"><a>{data.exercise_name}</a></div>
                            <div className="log-workout-input">
                                <Button variant="" name={data.exercise_name} id={data.exercise} className={data.pk} onClick={(e) => { updateModal(e); setModalData(data.workout_exercise_set) }}>+</Button>
                            </div>
                        </div>
                    ))}
                </div> : <div>Nothing to show</div>}
            <Modal open={openModal} onClose={() => { setOpenModal(false); setRows([]) }} url={modalUrl} workoutSessionSetId={workoutSessionSetId} data={modalData} exercise={modalTitle} rows={rows} addRow={addRow} submitData={submitData} />
        </div>

    )
}
