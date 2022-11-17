import './App.css'
import SignIn from './Components/SignIn'
import { useEffect } from 'react'
import FoodCheck from './Components/FoodCheck'
import { useAuthState } from 'react-firebase-hooks/auth'
import Admin from './Components/Admin'
import { auth} from './firebase'
import '@firebase/messaging';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'



import React from 'react'

function App() {
  const [user] = useAuthState(auth)

  useEffect(()=>{
    // const msg = firebase.messaging();

  })

  return (
    <div>
      <Router>
       
      <Switch>
        <Route exact path='/' component={user ? FoodCheck : SignIn} ></Route>
        <Route exact path='/admin' component={Admin}></Route>
      </Switch>
      </Router>
      
    </div>
  )
}

export default App