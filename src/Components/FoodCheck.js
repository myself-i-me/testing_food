import React from 'react'
import './FoodCheck.css'
import {useState, useEffect} from 'react'
import {db, auth} from '../firebase'
import SignOut from './SignOut'
import { useAuthState } from 'react-firebase-hooks/auth'



function FoodCount() {
  const [user] = useAuthState(auth)

  const [response, setResponse] = useState(false)
  const [yescolor, setYescolor] = useState()
  const [nocolor, setNocolor] = useState()
  const [buttonEnable, setButtonEnable] = useState(true)
  const [submitted, setSubmitted] = useState('')

    function sendResponse() {
      const time = new Date();
      console.log(time.getHours())
      if((time.getHours()==11 && time.getMinutes()<=45) || (time.getHours()>=9 && time.getHours()<11)){
        db.collection('data').get().then((snap)=>{
          var c = 0
          snap.forEach(z=>{
            if(z.data().email==user.email) {
              c=c+1;
              db.collection('data').doc(z.id).update({response:response,responsetime:String(time.getHours())+":"+String(time.getMinutes()) })
              setSubmitted('Response submitted successfully')
              return 
            }
          })
          if(c==0){
            db.collection('data').add({
              response:response,
              email:user.email,
              responsetime:String(time.getHours())+":"+String(time.getMinutes())
            })
            setSubmitted('Response submitted successfully!')
          }
        })
      }
      else{
        setSubmitted('Response time:09:00 AM to 11:45 AM')
      }
      
      
    } 

    
  return (
    <div className='FoodCount'>
    <div className='box'>
     <h2>Would you like to have food at office today? Please confirm.</h2><br/>
     <button className='yesNobutton' style={{border:`${yescolor} 2px solid`}} onClick={()=>{
                    setResponse(true)
                    setYescolor('rgba(57, 230, 218, 0.948)')
                    setNocolor('black')
                    setButtonEnable(false)
                    }}>Yes</button>
     <button className='yesNobutton' style={{border:`${nocolor} 2px solid`}} onClick={()=>{
                    setResponse(false)
                    setNocolor('rgba(57, 230, 218, 0.948)')
                    setYescolor('black')
                    setButtonEnable(false)
      }}>No</button><br></br>
      <button disabled={buttonEnable} onClick={sendResponse} style={{width:"120px", height:"40px"}}>Submit</button>
      <div id='submitted'>{submitted}</div>
      <SignOut/>
  </div>
  </div>
  )
}

export default FoodCount