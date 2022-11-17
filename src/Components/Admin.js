import React from 'react'
import {db} from '../firebase'
import {useState, useEffect} from 'react';

function Admin() {

const [count, setCount] = useState(0)
const [response, setResponse] = useState()

useEffect(()=>{
    db.collection('data').onSnapshot(doc=>{
        var x = doc.docs.map(y => y.data());
        var c =0
           for(let i of x){
               console.log(i);
               if(i.yesORno===true)
               c=c+1
           }
           setCount(c)
           console.log('hi')
       })
       console.log('hello')
}, [])    

  return (
 <div>
    Count:- {count}
 </div>
  )
}

export default Admin