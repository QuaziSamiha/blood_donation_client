import React, { useContext, useState } from 'react'
import Navbar from '../Shared/Navbar/Navbar'
import firebase from 'firebase/compat/app';
// import { initializeApp } from 'firebase/app';
import 'firebase/compat/auth';
import { getAuth, signInWithPopup, signOut, GoogleAuthProvider } from "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useLocation, useNavigate } from 'react-router-dom';

firebase.initializeApp(firebaseConfig);
// const app = firebase.initializeApp(firebaseConfig);

export default function SignIn() {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const navigate = useNavigate();
    const location = useLocation();

    const [user, setUser] = useState({
        isSignedIn: false,
        userName: '',
        userEmail: '',
        userPhotoUrl: ''
    });

    const googleProvider = new GoogleAuthProvider();

    const handleSignIn = () => {
        const auth = getAuth();
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const { displayName, photoURL, email } = result.user;
                const signedInUser = {
                    isSignedIn: true,
                    userName: displayName,
                    userEmail: email,
                    userPhotoUrl: photoURL
                };
                setUser(signedInUser);
                setLoggedInUser(signedInUser);
                navigate(location.state.from);
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }

    const handleSignOut = () => {
        // console.log('handled sign out');
        const auth = getAuth();
        signOut(auth)
            .then((success) => {
                const signedOutUser = {
                    isSignedIn: false,
                    userName: '',
                    userEmail: '',
                    userPhotoUrl: ''
                };
                setUser(signedOutUser);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <>
            <Navbar />
            <div className='flex justify-center mt-16 pt-24 md:mt-32 md:pt-32'>
                <div className='mb-16 px-8 md:px-44 py-12 bg-red-100 mx-8'>
                    {
                        user.isSignedIn ?
                            <button
                                onClick={handleSignOut}
                                className='bg-red-700 p-3 m-5 rounded text-white'>sign up</button>
                            :
                            <button
                                onClick={handleSignIn}
                                className='bg-red-700 p-3 m-5 rounded text-white'>sign in with google</button>
                    }


                    <div>
                        {
                            user.isSignedIn ?
                                <div>
                                    <h2 className='text-red-700 font-semibold'>Welcome {user.userName}</h2>
                                </div>
                                :
                                <span></span>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
