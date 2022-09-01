import React from 'react'

const BeginnerModal = () => {
  return (
    <>
    <input type="checkbox" id="my-modal-3" className="modal-toggle" />
    <div className="modal">
      <div className="modal-box relative">
        <label htmlhtmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
        <h3 className="text-lg font-bold">Our Beginner Program</h3>
        <p className="py-4">If you're brand new to strength training <br></br>we recommend gaining foundational movements<br></br>
        & the correct technique to prevent injury.</p>
        <p className="py-4">Our beginner program has you train 3 days per <br></br>week; gaining foundational strength in classNameic<br></br> movement patterns. See for yourself!</p>
        With this template, you alternate between <br></br>two workouts. e.g. ABA - week 1. BAB - week 2.
        <br></br> 
        <br></br>
        
        <p className="py-4">
          Workout A:<br></br>
          Bench Press: 3x8<br></br>
          Barbell Row: 3x8<br></br>
          Squat Variation: 3x8<br></br>
          Tricep Extensions: 3x10<br></br>
          Bicep Curls: 3x10<br></br>
        </p>
        <p className="py-4">
          Workout B:<br></br>
          Bench Press: 3x8<br></br>
          Barbell Row: 3x8<br></br>
          Leg Press: 3x8<br></br>
          Skull Crushers: 3x10<br></br>
          Hammer Curls: 3x10<br></br>
        </p>
        <br></br>
        <button className="btn btn-primary">Select This Template</button>
      </div>
    </div>
    </>
  )
}

export default BeginnerModal
