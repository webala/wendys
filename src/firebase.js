import { useEffect, useState } from "react";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut} from 'firebase/auth'
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
const auth = getAuth()

export function signUp (email, password) {
    createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
        const user = userCredential.user
        alert(`current user: ${user}`)
    })
    .catch(error => {
        const errorCode = error.code
        const errorMessage = error.message
        alert(`${errorCode}: ${errorMessage}`)
    })
}

export function logOut () {
    signOut(auth).then(() => console.log('sign out successfull')).catch(error => {
        const errorCode = error.code
        const errorMessage = error.message
        alert(`${errorCode}: ${errorMessage}`)
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
