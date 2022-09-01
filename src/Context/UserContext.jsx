import { createContext, useState, useEffect } from 'react'
import jwt_decode from "jwt-decode";
import { useNavigate } from 'react-router-dom'

const UserContext = createContext()

export default UserContext;


export const UserProvider = ({ children }) => {

    let beginnerTemplate = [
        { "Monday": [1, 2, 3, 4, 5] },
        { "Tuesday": [] },
        { "Wednesday": [1, 2, 3, 4, 5] },
        { "Thursday": [] },
        { "Friday": [1, 2, 3, 4, 5] }
    ]

    let userWorkoutPaths = async (user_id) => {
        const response = await fetch(`http://localhost:8000/api/gym/profile/workouts/${user_id}/active`)
        const data = await response.json()
        return data
    }

    // BRINGING LOG WORKOUTS FILTERED BY TODAY
    let setTodaysExercises = async (workout_id) => {
        try {
            const response = await fetch(`http://localhost:8000/api/gym/sessions/workout/${workout_id}/sessionday`)
            const data = await response.json()
            return data
        } catch (err) {
            console.error(err)
        }
    }

    //POSTS SETS TO WORKOUT SESSION
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

    //patch request to update workout session complete status
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

        } catch (err) {
            console.error(err)
        }

    }

    //post new workout
    const postNewWorkout = async (user_profile_id, startDate, endDate) => {
        try {
            let body = {
                user_profile: parseInt(user_profile_id),
                unique_str: lobbyCodeGenerator(),
                goal: "CONSISTENCY",
                complete: false,
                start_time: startDate,
                end_time: endDate
            }

            let options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body)
            }

            const response = await fetch(`http://localhost:8000/api/gym/workout/new/post`, options)
            const data = await response.json()
            const workout_id = data.workout_id

            return workout_id

        } catch (err) {
            console.error(err)
        }
    }

    //post sessions to new workout
    const postNewWorkoutSessions = async ({ workout_id, exercise_id, date, date_name }) => {
        try {
            let body = {
                workout_id: workout_id,
                exercise: exercise_id,
                date: date,
                date_name: date_name,
                complete: false
            }

            let options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body)
            }

            const response = await fetch(`http://localhost:8000/api/gym/sessions/workout/exercise/sets/post`, options)
            console.log(response)

            return response

        } catch (err) {
            console.error(err)
        }
    }

    function lobbyCodeGenerator() {
        let result = "";
        let characters = 'abcdefghijklmnopqrstuvwxyz123456789';
        let charactersLength = 9;
        for (let i = 0; i < charactersLength; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    }

    let userData = {
        userWorkoutPaths: userWorkoutPaths,

        //POSTS SETS TO WORKOUT SESSION
        userExercisePosts: userExercisePosts,

        //POSTING NEW WORKOUT
        postNewWorkout: postNewWorkout,

        // BRINGING LOG WORKOUTS FILTERED BY TODAY
        setTodaysExercises: setTodaysExercises,

        //POST SESSION TO NEW WORKOUT
        postNewWorkoutSessions: postNewWorkoutSessions
    }

    return (
        <UserContext.Provider value={userData} >
            {children}
        </UserContext.Provider>
    )
}
