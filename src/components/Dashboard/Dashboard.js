import React,{useState} from 'react'
import { logOut, useAuth } from '../../firebase'
import './dashboard.css'

function Dashboard() {

    const [loading, setLoading] = useState(false)
    const currentUser = useAuth()

    async function handleLogOut (event) {
        setLoading(true)
        event.preventDefault()
        try {
            await logOut()
        } catch {
            alert('Error!')
        }
        setLoading(false)
    }

  return (
    <div class='dash'>
        <p>Currently logged in as {currentUser?.email}</p>
        <button disaled={loading || !currentUser } onClick={handleLogOut}>Log Out</button>
    </div>
  )
}

export default Dashboard