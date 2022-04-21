import React, {useRef, useState} from 'react'
import {login, useAuth} from '../../firebase'

function SignIn() {
    const emailRef = useRef()
    const passwordRef = useRef()

    const [loading, setLoading] = useState(false)
    const currentUser = useAuth()

    async function handleSignIn (event) {
        setLoading(true)
        event.preventDefault()
        await login(emailRef.current.value, passwordRef.current.value)
        setLoading(false)
    }

  return (
    <div class='sigu-up'>
        <h1>Sign In</h1>
        <p>Currently logged in as {currentUser?.email}</p>
        <form>
            <div class='fields'>
                <input ref={emailRef} type='email' placeholder='Email'/>
                <input ref={passwordRef} type='password' placeholder='Password'/>
                <button type='submit' onClick={handleSignIn} disabled={loading || currentUser}>Sign In</button>
            </div>
        </form>
    </div>
  )
}

export default SignIn