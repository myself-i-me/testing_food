import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { initializeApp} from 'firebase/app'


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBf9DAWYBtXd2B7pXS-jyN-LV5qenreolw",
  authDomain: "sample-food-1548e.firebaseapp.com",
  databaseURL: "https://sample-food-1548e-default-rtdb.firebaseio.com",
  projectId: "sample-food-1548e",
  storageBucket: "sample-food-1548e.appspot.com",
  messagingSenderId: "880134688116",
  appId: "1:880134688116:web:719445e120b73d8db7f021",
  measurementId: "G-SY95GMKC2R"
})


const db = firebaseApp.firestore();
const auth = firebase.auth();
const messaging = getMessaging(firebaseApp)




export {db, auth, messaging};