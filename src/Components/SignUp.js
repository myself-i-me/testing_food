import React from 'react'
import SignIn from './SignIn'
import {NavLink} from 'react-router-dom'
import { auth } from '../firebase'
import {useState} from 'react'

function SignUp() {
  const [note, setNote] = useState('')


async function signUpWIthEmail() {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const result = await auth.createUserWithEmailAndPassword(email, password)
        await result.user.sendEmailVerification();
        auth.signOut();
        setNote('Please verify the email and do LogIn')
    }

  return (
    <div className='formParent'>
      
      <div className='formstyle'>
       <form onSubmit={(e)=>e.preventDefault()}>
       <h1>Sign-Up</h1>
       <input placeholder='only cylogic email' id='email' type="email" required pattern='^(.+)@cylogic(.+com)$'/><br></br>
        <input placeholder='length > 5' id='password' required minLength={6}/><br></br>
        <button type='submit' onClick={signUpWIthEmail} style={{backgroundColor:"rgb(32, 194, 222)", border:"0", borderRadius:"3px", padding:"8px", width:"100px"}}>  SignUp</button><br></br>
        <h2>{note}</h2>
       </form>
       </div>
       <div className='sideButton'>
                <p>Alredy have an account<NavLink to='/'><button className='signupbutton'>SignIn</button></NavLink></p>
            </div>
    </div>
  )
}

export default SignUp