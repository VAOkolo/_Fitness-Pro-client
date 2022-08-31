import { createContext, useState, useEffect } from 'react'
import jwt_decode from "jwt-decode";
import { useNavigate } from 'react-router-dom'

const UserContext = createContext()

export default UserContext;


export const UserProvider = ({ children }) => {

    let postTodaysExercises = (postData) => {
        // console.log("I'm posting today's exercises")
    }



    let userWorkoutPaths = async (user_id) => {
        const response = await fetch(`http://localhost:8000/api/gym/profile/workouts/${user_id}/active`)
        const data = await response.json()
        // console.log(data)
        return data
    }

    let userExercisePosts = async ([{ workout_session_id, reps, weights }], workout_session_id_int) => {

        try {
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "exercise_sets": workout_session_id,
                    "reps": reps,
                    "weights": weights
                })
            }
            const response = await fetch(`http://localhost:8000/api/gym/sets/post`, options)
            const data = await response.json()
            await postWorkoutCompletionStatus(workout_session_id_int)
        } catch (err) {
            console.error(err)
        }
    }
//patch request to update completion status
    let postWorkoutCompletionStatus = async (workout_session_id_int) => {
        try {
            let body = {
                complete: true,
            }

            let options = {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                }
            }

            const response = await fetch(`http://localhost:8000/api/gym/sessions/workout/patch/${workout_session_id_int}`, options)
            const data = await response.json()
            console.log(data)
        } catch (err){
            console.error(err)
        }
        
    }

    let userData = {
        user_UD: "test",
        todaysExercises: ["Bench Press", "Situps", "Barbell Row", "Overhead Press", "Deadlift", "Bicep Curls", "Shoulder Press"],
        postTodaysExercises: postTodaysExercises,
        userWorkoutPaths: userWorkoutPaths,
        userExercisePosts: userExercisePosts
    }



    return (
        <UserContext.Provider value={userData} >
            {children}
        </UserContext.Provider>
    )
}
