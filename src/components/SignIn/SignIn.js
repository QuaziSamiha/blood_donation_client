import React from 'react'
import Navbar from '../Shared/Navbar/Navbar'
// import firebase from 'firebase/app' for version 8
import firebase from 'firebase/compat/app'; // for version 9
// import { initializeApp } from 'firebase/app';
import 'firebase/compat/auth'; // for version 9
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import firebaseConfig from './firebase.config';

firebase.initializeApp(firebaseConfig);
// const app = firebase.initializeApp(firebaseConfig);

export default function SignIn() {

    const googleProvider = new GoogleAuthProvider();

    const handleSignIn = () => {
        // console.log('handled sign in');
        const auth = getAuth();
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                // const credential = GoogleAuthProvider.credentialFromResult(result);
                // const token = credential.accessToken;
                const user = result.user;
                // const { displayName, photoURL, email } = user;
                console.log(user);
                // console.log(displayName, photoURL, email);
            })
            .catch((error) => {
                // const errorCode = error.code;
                const errorMessage = error.message;
                // const email = error.email;
                // const credential = GoogleAuthProvider.credentialFromError(error);
                console.log(errorMessage);
            });
    }

    return (
        <div>
            <Navbar />
            <h1 className='pt-24'>this is sign in</h1>
            <button onClick={handleSignIn} className='bg-red-700 p-3 m-5 rounded text-white'>sign in with google</button>
        </div>
    )
}
