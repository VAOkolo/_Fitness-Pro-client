import React from 'react'
import { useNavigate} from 'react-router-dom';
import Template from "../../components/Template"
import { useSelector, useDispatch } from "react-redux";
import {levelAction } from "../../actions";

export default function Workout() {

    // const level = useSelector((state) => state.reducer.level);
    const dispatch = useDispatch();

    let navigate = useNavigate() ;
    const pathChange = (path) => {
      navigate(path)
    }

    let level_list = [{name:"Beginner", value:"beginner"},
    {name:"Intermediate", value:"intermediate"},
    {name:"Advanced", value:"advanced"}]

    const handleLevel = (e) => {
        e.preventDefault()
        console.log(e.target.value)
        dispatch(levelAction(e.target[0].value))
        pathChange('/submitworkout')
      }

    return (
        <div>
            <h1>Create a workout</h1>
            <button onClick={() => pathChange('/addworkout')}>Start a new Workout</button>
            {/* <button onClick={() => pathChange('/templates')}>Use a template</button> */}
            <h1>Select a template</h1>
            < Template/>
            <form onSubmit={handleLevel}>
                    <select className="">
                        {level_list.map(item => <option value={item.value}>{item.name}</option>)}
                    </select>
                    <input className="" type="submit" />
                </form>
        </div>
    )
}
