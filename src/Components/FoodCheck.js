import React from 'react'
import './FoodCheck.css'
import {useState, useEffect} from 'react'
import {db} from '../firebase'
import SignOut from './SignOut'


function FoodCount() {
    const [response, setResponse] = useState(false)
    const [name, setName]= useState('a')

    function sendResponse() {
     var x='';
      db.collection('data').onSnapshot(doc=>{
         x = doc.docs.map(y => y.data());
         for(let i of x) {
          if(i.name==name){
            return 
          }
         }
         db.collection('data').add({
          name: name, 
          yesORno: response
          })
       })

      //  var a=db.collection('data')
      //  console.log(a)
      //  for(let q of a){
      //   var w= a.docs.map(y =>y.data())
      //   console.log(w)
      //  }
      
    } 

    useEffect(()=>{ 
      
    }, [response])
    
    
    
  return (
    <div className='FoodCount'>
      <div className='box'>
       <h1>Are you opting for today's lunch arranged by Cylogic?</h1><br/>
       <button className='yesNobutton' onClick={()=>setResponse(true)}>Yes</button>
       <button className='yesNobutton'>No</button><br></br>
        <input placeholder='Enter your code here' onChange={(e)=>setName(e.target.value)}></input><br></br>
        <input type='submit' placeholder='Submit' onClick={sendResponse}/>
        <SignOut/>
    </div>
    </div>
  )
}

export default FoodCount