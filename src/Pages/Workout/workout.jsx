import React from 'react'
import { useNavigate} from 'react-router-dom';
import Template from "../../Components/Template"

export default function Workout() {

    let navigate = useNavigate() ;
    const pathChange = (path) => {
      navigate(path)
    }

    return (
        <div>
            <h1>Create a workout</h1>
            <button onClick={() => pathChange('/addworkout')}>Start a new Workout</button>
            {/* <button onClick={() => pathChange('/templates')}>Use a template</button> */}
            <h1>Select a template</h1>
            < Template/>
            <button onClick={() => pathChange('/submitworkout')}>Submit Workout</button>
        </div>
    )
}
