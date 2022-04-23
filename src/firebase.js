import { useEffect, useState } from "react";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, updateEmail, updatePassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword, sendEmailVerification} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCT0eBb8ebo0W6usDvq-NY3-jGUa8FkM30",
  authDomain: "wendys-4d480.firebaseapp.com",
  projectId: "wendys-4d480",
  storageBucket: "wendys-4d480.appspot.com",
  messagingSenderId: "155413561495",
  appId: "1:155413561495:web:ebc8b1ba4572b0038829d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()

export function signUp (email, password) {
    createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
        const user = userCredential.user
        if (user && user.emailVerified === false) {
            sendEmailVerification(user)
        }
        return user;
    })
    .catch(error => {
        const errorCode = error.code
        const errorMessage = error.message
        //alert(`${errorCode}: ${errorMessage}`)
        if (errorCode == 'auth/email-already-in-use') {
            alert('Email already in use')
        }else if (errorCode == 'auth/weak-password') {
            alert('Your password is too weak')
        }
    })
}





export function login (email,password) {
    signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
        const user = userCredential.user
        window.location.replace('/dash')
    })
    .catch(error => {
        const errorCode = error.code
        const errorMessage = error.message
        //alert(`${errorCode}: ${errorMessage}`)

        if (errorCode == 'auth/wrong-password' || errorCode == 'auth/user-not-found') {
            alert('Invalid email or password. Please try again')
        }
    })
}

export function logOut () {
    signOut(auth).then(() => console.log('sign out successfull')).catch(error => {
        const errorCode = error.code
        const errorMessage = error.message
        alert(`${errorCode}: ${errorMessage}`)
    })
}

export function changeEmail (newEmail) {
    updateEmail(auth.currentUser, newEmail)
    .then(() => {
        window.location.reload()
    })
    .catch(error => {
        const errorCode = error.code
        const errorMessage = error.message
        //alert(`${errorCode}: ${errorMessage}`)

        if (errorCode == 'auth/requires-recent-login') {
            alert('Changing email requeres recent login.')
        }
    })
}

export function changePassword (newPass) {
    updatePassword(auth.currentUser, newPass)
    .then(() => window.location.reload())
    .catch(error => {
        const errorCode = error.code
        const errorMessage = error.message
        alert(`${errorCode}: ${errorMessage}`)

        if (errorCode == 'auth/requires-recent-login') {
            alert('Changing password requeres recent login.')
        } else if (errorCode == 'auth/weak-password') {
            alert('Your password is too weak')
        }
    })
}

export function useAuth () {
    const [currentUser, setCurrentUser] = useState()

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) => setCurrentUser(user))
        return unsub
    }, [])
    return currentUser
    
}
