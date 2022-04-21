import React from 'react'
import { logOut, useAuth } from '../../firebase'
import './dashboard.css'

function Dashboard() {

    const currentUser = useAuth()

    async function handleLogOut (event) {
        event.preventDefault()
        try {
            await logOut()
        } catch {
            alert('Error!')
        }
    }

  return (
    <div class='dash'>
        <p>Currently logged in as {currentUser?.email}</p>
        <button onClick={handleLogOut}>Log Out</button>
    </div>
  )
}

export default Dashboard