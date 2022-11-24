importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js');

const firebaseConfig ={
  apiKey: "AIzaSyBf9DAWYBtXd2B7pXS-jyN-LV5qenreolw",
authDomain: "sample-food-1548e.firebaseapp.com",
databaseURL: "https://sample-food-1548e-default-rtdb.firebaseio.com",
projectId: "sample-food-1548e",
storageBucket: "sample-food-1548e.appspot.com",
messagingSenderId: "880134688116",
appId: "1:880134688116:web:719445e120b73d8db7f021",
measurementId: "G-SY95GMKC2R"
}

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload)=>{
  console.log('recieved message', payload); 
  const notificationTItle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  self.registration.showNotification(noticationTitle, notificationOptions);
});























// if ('serviceWorker' in navigator) {
//     navigator.serviceWorker.register('../firebase-messaging-sw.js')
//       .then(function(registration) {
//         console.log('Registration successful, scope is:', registration.scope);
//       }).catch(function(err) {
//         console.log('Service worker registration failed, error:', err);
//       });
//     }

// firebase.initializeApp({
//     messagingSenderId: "880134688116",
//   })

// const initMessaging = firebase.messaging()