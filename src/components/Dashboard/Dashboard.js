import React,{useState, useRef} from 'react'
import { logOut, useAuth, changeEmail, changePassword } from '../../firebase'
import './dashboard.css'
import Header from '../Header/Header'
import {GrFormClose} from 'react-icons/gr'


function Dashboard() {

    const [loading, setLoading] = useState(false)
    const [emailVerified, setEmailVerified] = useState(false)

    const changeEmailRef = useRef()
    const changePasswordRef = useRef()

    const currentUser = useAuth()

    async function handleLogOut () {
        setLoading(true)
        try {
            await logOut()
        } catch {
            alert('Error!')
        }
        setLoading(false)
    }

    const toggleAccountEditForm = (className) => {
        const div = document.querySelector(className)
        div.classList.toggle('show')
    }

    async function handleEmailUpdate () {
        if (currentUser && currentUser.email !== changeEmailRef.current.value) {
            await changeEmail(changeEmailRef.current.value)
        }
        else {
            alert('Email already in use')
        }
    }

    async function handlePasswordUpdate () {
        await changePassword(changePasswordRef.current.value)
    }


  return (
    <div class='dash'>
        <Header />
        <div class='dash-overview'> 
            <h1>Dashboard</h1>

            <div class='account'>
                <h3>Account Information</h3>
                <p>Email: {currentUser?.email}</p>
                {currentUser?.emailVerified === false && <p>Please verify your email address</p>}
                <button onClick={() => toggleAccountEditForm('.change-email')}>Change Email</button>
                <button onClick={() => toggleAccountEditForm('.change-password')}>Change Password</button>
                <button onClick={() => handleLogOut()}>Sign Out</button>
                <div class='change-email'>
                    <button class='toggle-btn' onClick={() => toggleAccountEditForm('.change-email')}><GrFormClose class='close-icon'/></button>
                    <h2>Change Email</h2>
                    <label> New Email</label><input type='email' ref={changeEmailRef}/>
                    <button onClick={() => handleEmailUpdate()}>Submit Email</button>
                </div>
                <div class='change-password'>
                    <button class='toggle-btn' onClick={() => toggleAccountEditForm('.change-password')}><GrFormClose class='close-icon'/></button>
                    <h2>Change Password</h2>
                    <label> New Password</label><input type='password' ref={changePasswordRef}/>
                    <button onClick={() => handlePasswordUpdate()}>Submit Password</button>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Dashboard