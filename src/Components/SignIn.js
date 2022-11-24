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
            console.log('not verified')
            // auth.signOut();
            setEmailverification('email not verified');
           }
           else{
            console.log('verified')
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
                <h1>Sign-In</h1>
                <input placeholder='email' id='email' required /><br></br>
                <input placeholder='password' id='password' required minLength={6}/><br></br>
                <button onClick={signInWithEmail} style={{backgroundColor:"rgb(32, 194, 222)", border:"0", borderRadius:"3px", padding:"8px", width:"100px"}}>Sign in</button><br></br>
                <h2 style={{color:"red"}}>{emailverification}</h2>
            </form>
            </div>
            <div className='sideButton'>
                <h4>Don't have an account<NavLink to='/signup'><button className='signupbutton'>Sign up</button></NavLink></h4>
            </div>
    </div>
    )
}

export default SignIn

