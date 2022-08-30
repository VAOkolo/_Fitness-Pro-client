import { createContext, useState, useEffect } from 'react'
import jwt_decode from "jwt-decode";
import { useNavigate } from 'react-router-dom'

const UserContext = createContext()

export default UserContext;


export const UserProvider = ({ children }) => {

    let postTodaysExercises = (postData) => {
        console.log("I'm posting today's exercises")
    }
    let userData = {
        user_UD: "test",
        todaysExercises: ["Bench Press", "Situps", "Barbell Row", "Overhead Press", "Deadlift", "Bicep Curls", "Shoulder Press"],
        postTodaysExercises: postTodaysExercises
    }

    return (
        <UserContext.Provider value={userData} >
            {children}
        </UserContext.Provider>
    )
}