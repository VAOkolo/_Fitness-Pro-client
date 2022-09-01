import { createContext, useState, useEffect } from 'react'
import jwt_decode from "jwt-decode";
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext()

export default AuthContext;

export const AuthProvider = ({ children }) => {
    const [authTokens, setAuthTokens] = useState(() => localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)
    const [user, setUser] = useState(() => localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')) : null)
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(true)

    const localhost = 'http://localhost:3000'
    const navigate = useNavigate()

    const loginUser = async (e) => {
        e.preventDefault()
        const response = await fetch('http://localhost:8000/api/token/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 'email': e.target.email.value, 'password': e.target.password.value })
        })

        const data = await response.json()

        if (response.status === 200) {
            setAuthTokens(data)
            setUser(jwt_decode(data.access))
            localStorage.setItem('authTokens', JSON.stringify(data))
            navigate('/dashboard')
        } else {
            setError('Wrong')
        }
    }


    const logoutUser = () => {
        setAuthTokens(null)
        setUser(null)
        localStorage.removeItem('authTokens')

        // PERMISSION TO LOGIN AND REGISTER PAGE AND WARNING USER IN CASE OF A TRY TO BYPASS TO PAGES
        const url = window.location.href
        const path = '/' + url.substring(url.lastIndexOf("/") + 1, url.length)
        if (path == '/') {
            navigate('/landing')
        } else if (path == '/login') {
            navigate(path)
        } else if (path == '/register') {
            navigate(path)
        } else {
            console.log("Not authorized. Try again.")
            navigate('/landing')
        }
    }


    const updateToken = async () => {
        if (authTokens == null) {
            console.log('Login or Register. You dont have any token right now.')
            logoutUser()
        } else {
            const response = await fetch('http://localhost:8000/api/token/refresh/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ 'refresh': authTokens?.refresh })
            })
            const data = await response.json()
            if (response.status === 200) {
                setAuthTokens(data)
                setUser(jwt_decode(data.access))
                localStorage.setItem('authTokens', JSON.stringify(data))
            }
        }
        if (loading) {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (loading) {
            updateToken()
        }
        const fourMinutes = 1000 * 60 * 4
        const interval = setInterval(() => {
            if (authTokens) {
                updateToken()
            }
        }, fourMinutes)
        return () => clearInterval(interval)

    }, [authTokens, loading])

    const postUser = async (username, email, password) => {
        try {
            const url = 'http://localhost:8000/api/user/register/';
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Accept: '*/*'
                },
                body: JSON.stringify({ 'email': email, 'user_name': username, 'password': password })
            }
            (options)
            const response = await fetch(url, options)
            (response.status)
        } catch (err) {
            console.error(err)
        }

    }

    const contextData = {
        user: user,
        user_id: user ? user.user_id : user,
        authTokens: authTokens,
        loginUser: loginUser,
        logoutUser: logoutUser,
        postUser: postUser,
    }

    return (
        <AuthContext.Provider value={contextData} >
            {loading ? null : children}
        </AuthContext.Provider>
    )
}
