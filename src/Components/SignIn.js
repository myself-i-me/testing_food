import React, { useState } from 'react'
import firebase from 'firebase/compat/app'
import { auth } from '../firebase'
import SignUp from './SignUp'
import {NavLink} from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'



function SignIn() {
    function signInWithGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider()
        auth.signInWithPopup(provider);
    }
    
    const [user] = useAuthState(auth)

    async function signInWithEmail(){
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        try {
           await  auth.signInWithEmailAndPassword(email, password)
           console.log('success');
           console.log(user.emailVerified);
           if(!user.emailVerified){
            console.log('inside');
                auth.signOut()
           }
        } catch (error) {
            console.log(error);
        }

    }
    return (
        // <div style={{ display: 'flex', justifyContent: 'center', height: '100vh', alignItems: 'center' }}>
        //     <button style={{ padding: '30px', fontSize: '20px', borderRadius: '0', fontWeight: '600' }} onClick={signInWithGoogle}>Sign In With Google</button>
        // </div>
        <div>
            <form onSubmit={(e)=>e.preventDefault()}>
                <h1>SignIn</h1>
        <input placeholder='email' id='email' required /><br></br>
        <input placeholder='password' id='password' required/><br></br>
        <button onClick={signInWithEmail}>SignIn</button><br></br>
        <NavLink to='/signup'><button >SignUp</button></NavLink>
        </form>
    </div>
    )
}

export default SignIn

