import React, {useState, useEffect, useContext} from 'react'
import AuthContext from '../../context/AuthContext'
import { Navbar, Sidebar} from '../../components/index'

const Dashboard = () => {
    let [notes, setNotes] = useState([])
    let {authTokens, logoutUser} = useContext(AuthContext)

    useEffect(()=> {
        getNotes()
    }, [])


    let getNotes = async() => {
        let response = await fetch('http://127.0.0.1:8000/api/notes/', {
            method:'GET',
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Bearer ' + String(authTokens.access)
            }
        })
        let data = await response.json()

        if(response.status === 200){
            setNotes(data)
        }else if(response.statusText === 'Unauthorized'){
            logoutUser()
        }
        
    }

    return (
    <>
    <Navbar />
    <Sidebar />
    </>
    )
}

export default Dashboard
