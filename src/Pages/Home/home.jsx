import React, { useState, useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthContext from '../../Context/AuthContext'

const Home = () => {
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
    let response = await fetch('http://127.0.0.1:8000/api/notes/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + String(authTokens.access)
      }
    })
    let data = await response.json()

    if (response.status === 200) {
      setNotes(data)
    } else if (response.statusText === 'Unauthorized') {
      logoutUser()
    }

  }

  return (
    <>
      {user ? <div>
        <p>You are logged to the home page!</p>


        <ul>
          {notes.map(note => (
            <li key={note.id} >{note.body}</li>
          ))}
        </ul>
      </div> : <div>not logged in</div>}
    </>
  )
}

export default Home
