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
import SignUp from './Components/SignUp'

function App() {
  const [user] = useAuthState(auth)


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