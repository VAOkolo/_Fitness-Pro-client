import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { measureAction, durationAction } from "../../actions";

export default function SubmitWorkout() {
  const level = useSelector(state => state.level);


  let measure_list = [{ name: "Consistency", value: "consistency" },
  { name: "Progression", value: "progression" },
  { name: "Tonage", value: "tonage" }]
  let duration_list = [{ name: "1 week", value: 1 },
  { name: "2 weeks", value: 2 },
  { name: "3 weeks", value: 3 },
  { name: "4 weeks", value: 4 },
  { name: "5 weeks", value: 5 },
  { name: "6 weeks", value: 6 },
  { name: "7 weeks", value: 7 },
  { name: "8 weeks", value: 8 },
  ]

  const dispatch = useDispatch();

  const handleMeasure = (e) => {
    e.preventDefault()
    console.log(e.target.value)
    dispatch(measureAction(e.target.value))
  }
  const handleDuration = (e) => {
    e.preventDefault()
    console.log(e.target.value)
    dispatch(durationAction(e.target[0].value))
  }

  return (
    <div>
      <h1>Workout Details</h1>
      <p> You have chosen the {level} template</p>
      <h3>How would you like to track your workout?</h3>
      <div className="difficulty-box">
        {measure_list.map(item => <button value={item.value} onClick={(e) => handleMeasure(e)}>{item.name}</button>)}
      </div>
      <h3>Please select the duration of time you would like to track for?</h3>
      <form onSubmit={handleDuration}>
        <select className="">
          {duration_list.map(item => <option value={item.value}>{item.name}</option>)}
        </select> <br></br> <br></br>
        <input className="" value= "Confirm Challenge" type="submit" />
      </form>
    </div>
  )
}
