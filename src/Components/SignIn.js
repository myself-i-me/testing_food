import React, { useState } from 'react'
import firebase from 'firebase/compat/app'
import { auth } from '../firebase'
import SignUp from './SignUp'
import {NavLink} from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'



function SignIn() {
    
    const [user] = useAuthState(auth)
    // const [emailverification, setEmailverification] = useState("w")
    var emailverification = "Verify the email before signing in!"
    async function signInWithEmail(){
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        try {
           auth.signInWithEmailAndPassword(email, password).then(e=>{
           if(!e.user.emailVerified){
            console.log('email not verified');
            auth.signOut();
           }
           })
        } catch (error) {
            console.log(error);
        }

    }
    return (
        <div style={{backgroundColor: "#FC8019",height:"100vh"}}>
            <form onSubmit={(e)=>e.preventDefault()}>
                <h1>SignIn</h1>
        <input placeholder='email' id='email' required /><br></br>
        <input placeholder='password' id='password' required/><br></br>
        <button onClick={signInWithEmail}>SignIn</button><br></br>
        <h2 style={{color:"red"}}>{emailverification}</h2>
        <NavLink to='/signup'><button >SignUp</button></NavLink>
        </form>
    </div>
    )
}

export default SignIn

