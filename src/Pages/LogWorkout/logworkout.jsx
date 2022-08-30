import React, { useContext, useState, useEffect } from 'react'
import UserContext from '../../Context/UserContext'
import Modal from './modal'
import './style.css'

export default function LogWorkout() {

    const { todaysExercises, postTodaysExercises } = useContext(UserContext)
    const [openModal, setOpenModal] = useState(false)
    const [modalId, setModalId] = useState()
    const [url, setUrl] = useState('')
    const [modalUrl, setModalUrl] = useState('')
    const [modalTitle, setModalTitle] = useState()
    const [rows, setRows] = useState([1])
    const [postData, setPostData] = useState([])

    let api_key = process.env.REACT_APP_API_KEY

    //for each exercise in postData call postTodaysExercises to insert into table
    // useEffect(() => {
    //   if(postData.length > 0){
    //     postData.forEach((exercise) =>{
    //       postTodaysExercises(exercise)
    //     })
    //   }
    // }, [postData])

    const handleData = (e) => {
        console.log(e.target.parentElement.children)
        /*
        logic to validate submitted data (make sure no empty cell input)
        logic to push (id, exercise, date, sets, reps, weight into array)
        */
        setPostData()
    }

    const updateModal = (e) => {
        setUrl(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&order=viewCount&q=${e.target.text + " instructions"}&safeSearch=strict&key=${api_key}`)
        setOpenModal(true)
        console.log(e.target.id, e.target.name)
        setModalId(e.target.id)
        setModalTitle(e.target.name)
    }

    useEffect(() => {
        // fetchYouTubeVideo(url)
    }, [url])

    const fetchYouTubeVideo = async (url) => {
        const response = await fetch(url)
        const data = await response.json()
        const videoID = data.items[0].id.videoId
        console.log(videoID)
        setModalUrl(`https://www.youtube.com/embed/${videoID}`)
    }

    const submitData = (e) => {
        console.log(e)
        const tr = document.querySelectorAll('tr')

        const arr = []
        let count = '';

        tr.forEach(x => {
            if (x.classList.contains('head')) {
                count = x.children[0].innerHTML
            }
            else {
                let child = [...x.querySelectorAll('td')]
                console.log(child)
                arr.push(...child.map(a => ({ reps: a.children.valueAsNumber, sets: a.innerHTML, weight: a })))
            }
        })

        console.log(arr)
    }

    const value = (e) => {
        console.log(e)
        return e.target.value
    }

    const addRow = (e) => {
        setRows([...rows, "1"])
    }

    useEffect(() => {
        console.log("modalId changed", modalId)

    }, [rows])




    return (
        <>
            <div className="log-workout-parent">
                <div className="log-workout-title">Today's Exercises</div>
                {todaysExercises ?
                    <div className="log-workout-form-parent">
                        {todaysExercises.map((exercise) => (
                            <div className="log-workout-container" id={exercise} name={exercise}>
                                <div className="log-workout-exercise"><a>{exercise}</a></div>
                                <div className="log-workout-input">
                                    <button id={exercise} name={exercise} onClick={updateModal}>+</button>
                                </div>
                            </div>
                        ))}
                        <button onClick={handleData} className="log-workout-submitBtn">Submit</button>
                    </div> : <div></div>}
                <Modal open={openModal} onClose={() => { setOpenModal(false); setRows([]) }} url={modalUrl} id={modalId} exercise={modalTitle} rows={rows} addRow={addRow} submitData={submitData} />
            </div>
        </>
    )
}