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

    let userExercisePosts = async ([{ exercise_id, workout_id, reps, weights }]) => {
        try {
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "exercise_sets": workout_id,
                    "reps": reps,
                    "weights": weights
                })
            }
            const response = await fetch(`http://localhost:8000/api/gym/sets/post`, options)
            const data = await response.json()
            console.log(data)
        } catch (err) {
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
