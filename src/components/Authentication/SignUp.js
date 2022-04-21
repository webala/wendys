import './auth.css'
import React, {useRef, useState} from 'react'
import {signUp, useAuth} from '../../firebase'

function SignUp() {

    const [loading, setLoading] = useState(false)

    const currentUser = useAuth()

    const emailRef = useRef()
    const passwordRef = useRef()

    async function handleSignUp (event) {
        setLoading(true)
        event.preventDefault()
        await signUp(emailRef.current.value, passwordRef.current.value)
        setLoading(false)
    }

  return (
    <div class='sign-up'>
        
        <form>
        <h1>Sign up</h1>
        <p>Currently logged in as {currentUser?.email}</p>
            <div class='fields'>
                <input ref={emailRef} type='email' placeholder='Email'/>
                <input ref={passwordRef} type='password' placeholder='Password'/>
                <button type='submit' onClick={handleSignUp} disabled={loading || currentUser}>Sign Up</button>
            </div>
        </form>
    </div>
  )
}

export default SignUp