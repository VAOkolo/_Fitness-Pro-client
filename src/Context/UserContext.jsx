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

    let [createdWorkoutObject, setCreatedWorkoutObject] = useState()

    let userWorkoutPaths = async (user_id) => {
        const response = await fetch(`http://localhost:8000/api/gym/profile/workouts/${user_id}/active`)
        const data = await response.json()
        const workout_id = data[0].workout_id

        return workout_id
    }

    //posts sets to workout session
    let userExercisePosts = async ([{ workout_session_id, reps, weights }], workout_session_id_int) => {

        try {
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "exercise_sets": workout_session_id_int,
                    "reps": reps,
                    "weights": weights
                })
            }
            const response = await fetch(`http://localhost:8000/api/gym/sets/post`, options)
            const data = await response.json()
            const exerciseId = data.pk
            return exerciseId
            // await postWorkoutCompletionStatus(workout_session_id_int)
        } catch (err) {
            console.error(err)
        }
    }

    //patch request to update workout session complete status
    let postWorkoutCompletionStatus = async (workout_session_id_int, workout_id, exercise) => {
        try {
            let body = {
                workout_id: workout_id,
                exercise: exercise,
                complete: true,
            }

            let options = {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body)
            }

            const response = await fetch(`http://localhost:8000/api/gym/sessions/workout/patch/${workout_session_id_int}`, options)
            const data = await response.json()
            return data
        } catch (err) {
            console.error(err)
        }

    }

    //todays exercise setter
    let setTodaysExercises = async (workout_id) => {
        try {
            const response = await fetch(`http://localhost:8000/api/gym/sessions/workout/${workout_id}/sessionday`)
            const data = await response.json()
            return data
        } catch (err) {
            console.error(err)
        }
    }



    //post new workout
    const postNewWorkout = async (user_profile_id, unique_str, startDate, endDate) => {
        try {
            let body = {
                user_profile: parseInt(user_profile_id),
                unique_str: unique_str ? unique_str : lobbyCodeGenerator(),
                goal: "CONSISTENCY",
                complete: false,
                // start_time: startDate,
                // end_time: endDate
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

            //set created workout object so we can send string and all the data to the user
            setCreatedWorkoutObject(data)
            return workout_id

        } catch (err) {
            console.error(err)
        }
    }

    //post sessions to new workout
    const postNewWorkoutSessions = async ({ workout_id, exercise, date, date_name }) => {
        try {
            let body = {
                workout_id: workout_id,
                exercise: exercise,
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

            // (body)
            const response = await fetch(`http://localhost:8000/api/gym/sessions/workout/exercise/sets/post`, options)
            const data = await response.json()

            return response

        } catch (err) {
            console.error(err)
        }
    }


    const finishedWorkouts = async (user) => {
        try {
            const response = await fetch(`http://localhost:8000/api/gym/profile/workouts/${user}/inactive`)
            const data = await response.json()
            return data
        } catch (err) {
            console.log(err)
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
        userExercisePosts: userExercisePosts,
        postNewWorkout: postNewWorkout,
        beginnerTemplate: beginnerTemplate,
        postNewWorkoutSessions: postNewWorkoutSessions,
        setTodaysExercises: setTodaysExercises,
        postWorkoutCompletionStatus: postWorkoutCompletionStatus,
        createdWorkoutObject: createdWorkoutObject,
        finishedWorkouts: finishedWorkouts
    }



    return (
        <UserContext.Provider value={userData}>
            {children}
        </UserContext.Provider>
    )
}