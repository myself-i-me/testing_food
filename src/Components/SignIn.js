import React, { useState } from 'react'
import firebase from 'firebase/compat/app'
import { auth } from '../firebase'
import SignUp from './SignUp'
import {NavLink} from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'



function SignIn() {
    
    const [user] = useAuthState(auth)
    const [emailverification, setEmailverification] = useState("")
    // var emailverification = ""
    async function signInWithEmail(){
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
           auth.signInWithEmailAndPassword(email, password).then(e=>{
           if(!e.user.emailVerified){
            console.log('email not verified');
            auth.signOut();
           }
           })
           .catch(()=>{
            console.log("failed");
           setEmailverification("Invalid credentials!")
           })
       

    }
    return (
        <div className='formParent'>
             
            <div className='formstyle'>
            <form onSubmit={(e)=>e.preventDefault()}>
                <h1>SignIn</h1>
                <input placeholder='email' id='email' required /><br></br>
                <input placeholder='password' id='password' required minLength={6}/><br></br>
                <button onClick={signInWithEmail}>SignIn</button><br></br>
                <h2 style={{color:"red"}}>{emailverification}</h2>
            </form>
            </div>
            <div className='sideButton'>
                <h4>Don't have an account </h4>
            <NavLink to='/signup'><button>SignUp</button></NavLink>
            </div>
    </div>
    )
}

export default SignIn

