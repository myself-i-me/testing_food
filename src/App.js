import React from 'react'
import './App.css'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import SignIn from './Components/SignIn'
import FoodCheck from './Components/FoodCheck'
import SignUp from './Components/SignUp'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useEffect, useState } from 'react'
import Admin from './Components/Admin'

import { auth, messaging} from './firebase'
import firebase from 'firebase/compat/app'
import {getToken} from 'firebase/messaging'


function App() {
  const [user] = useAuthState(auth)
  
  async function requestPermission() {
    const permission = await Notification.requestPermission()
    if(permission == "granted"){
     const token = await getToken(messaging, {vapidKey:"BDFcpy8k-lY3NHxwy37S7cZb0Hgb-UDfwwV9nu4JqP4E-X3hPllvib44zrtIhn7bUALZn5ZqsNlJfqiF5ls9uL0"})
     console.log('token', token);
    }
  }

  useEffect(()=>{
    requestPermission()
  }, [])

  

  return (
    <div>
      <Router>
       
      <Switch>
        <Route exact path='/' component={user && user.emailVerified ? FoodCheck : SignIn} ></Route>
        <Route exact path='/admin' component={Admin}></Route>
        <Route exact path='/signin' component={SignIn}></Route>
        <Route exact path='/signup' component={SignUp}></Route>
        
      </Switch>
      </Router>
    </div>
  )
}

export default App