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
        setNote('Please verify the email and do LogIn')
    }

  return (
    <div className='formParent'>
      
      <div className='formstyle'>
       <form onSubmit={(e)=>e.preventDefault()}>
       <h1>SignUp</h1>
       <input placeholder='email' id='email' required pattern='^([\w]*[\w\.]*(?!\.)@cylogic.com)'/><br></br>
        <input placeholder='password length shold be greater than six' id='password' required minLength={6}/><br></br>
        <button onClick={signUpWIthEmail}>  SignUp</button><br></br>
        <h2>{note}</h2>
       </form>
       </div>
       <div className='sideButton'>
       <NavLink to='/'><button>SignIn</button></NavLink>
       </div>
    </div>
  )
}

export default SignUp