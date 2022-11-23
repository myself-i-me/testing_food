import React from 'react'
import './FoodCheck.css'
import {useState, useEffect} from 'react'
import {db, auth} from '../firebase'
import SignOut from './SignOut'
import { useAuthState } from 'react-firebase-hooks/auth'



function FoodCount() {
  const [user] = useAuthState(auth)

    const [response, setResponse] = useState(false)
    const [submitted, setSubmitted] = useState('')


    function sendResponse() {
      const time = new Date();
      if(time.getHours()==10 && time.getMinutes()<=50){
        db.collection('data').get().then((snap)=>{
          var c = 0
          snap.forEach(z=>{
            if(z.data().email==user.email) {
              c=c+1;
              db.collection('data').doc(z.id).update({response:response})
              setSubmitted('Response submitted successfully')
              return 
            }
          })
          if(c==0){
            db.collection('data').add({
              response:response,
              email:user.email
            })
            setSubmitted('Response submitted successfully')
          }
        })
      }
      else{
        setSubmitted('Response time:10:00 AM to 10:50 AM')
      }
      
      
    } 

    
  return (
    <div className='FoodCount'>
      <div className='box'>
       <h1>Are you opting for today's lunch arranged by Cylogic?</h1><br/>
       <button style={{}} className='yesNobutton' onClick={()=>{
        setResponse(true)

        }}>Yes</button>
       <button className='yesNobutton' onClick={()=>setResponse(false)}>No</button><br></br>
        {/* <input placeholder='Enter your code here' onChange={(e)=>setName(e.target.value)}></input><br></br> */}
        <button onClick={sendResponse} style={{width:'150px', height:'30px'}}>Submit</button>
        <div id='submitted'>{submitted}</div>
        <SignOut/>
    </div>
    </div>
  )
}

export default FoodCount