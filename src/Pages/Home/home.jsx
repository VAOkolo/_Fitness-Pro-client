import React, { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthContext from '../../Context/AuthContext'

export default function Home() {
  let [notes, setNotes] = useState([])
  let { authTokens, logoutUser, user } = useContext(AuthContext)

  let navigate = useNavigate()

  useEffect(() => {
    if (!user) {
      navigate('/')
    }
  }, [])

  useEffect(() => {
    getNotes()
  }, [])

  let getNotes = async () => {
    let response = await fetch('', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + String(authTokens.access)
      }
    })
    
    const data = await response.json()

    if (response.status === 200) {
      setNotes(data)
    } else if (response.statusText === 'Unauthorized') {
      logoutUser()
    }

  }

  return (
    <div className='container'>
      <div className='text-center'>
        <h1>Home</h1>
      </div>
    </div>
  )
}


