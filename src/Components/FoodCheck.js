import React from 'react'
import './FoodCheck.css'
import {useState, useEffect} from 'react'
import {db, auth} from '../firebase'
import SignOut from './SignOut'
import { useAuthState } from 'react-firebase-hooks/auth'



function FoodCount() {
  const [user] = useAuthState(auth)

    const [response, setResponse] = useState(false)

    function sendResponse() {
     var x='';
    //  console.log(user);
      // db.collection('data').onSnapshot(doc=>{
      //    x = doc.docs.map(y => y.data());
      //    for(let i of x) {
      //     console.log(i);
      //     if(i.name==name){
      //       return 
      //     }
      //    }
      //    console.log('add');
      //    db.collection('data').add({
      //     name: 'react', 
      //     yesORno: response,
      //     email:'reactmail'
      //     })
      //  })
      db.collection('data').get().then((snap)=>{
        // console.log(snap);
        var c = 0
        snap.forEach(z=>{
          if(z.data().email==user.email) {
            c=c+1;
            db.collection('data').doc(z.id).update({response:response})
            return 
          }
        })
        if(c==0){
          db.collection('data').add({
            response:response,
            email:user.email
          })
        }
        
        
      })
      

      //  var a=db.collection('data')
      //  console.log(a)
      //  for(let q of a){
      //   var w= a.docs.map(y =>y.data())
      //   console.log(w)
      //  }
      
    } 

    
  return (
    <div className='FoodCount'>
      <div className='box'>
       <h1>Are you opting for today's lunch arranged by Cylogic?</h1><br/>
       <button className='yesNobutton' onClick={()=>setResponse(true)}>Yes</button>
       <button className='yesNobutton' onClick={()=>setResponse(false)}>No</button><br></br>
        {/* <input placeholder='Enter your code here' onChange={(e)=>setName(e.target.value)}></input><br></br> */}
        <input type='submit' placeholder='Submit' onClick={sendResponse}/>
        <SignOut/>
    </div>
    </div>
  )
}

export default FoodCount