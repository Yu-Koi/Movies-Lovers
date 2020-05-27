import app from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const firebaseConfig = {
    apiKey: "AIzaSyBZT0Yyaux1-2PwEa97vQvrroxHBpm9NSM",
    authDomain: "movies-lovers-63899.firebaseapp.com",
    databaseURL: "https://movies-lovers-63899.firebaseio.com",
    projectId: "movies-lovers-63899",
    storageBucket: "movies-lovers-63899.appspot.com",
    messagingSenderId: "945512834513",
    appId: "1:945512834513:web:4cbe89ac40617dbffeecf0"
  };
  // Initialize Firebase
  app.initializeApp(firebaseConfig);

  const db = app.firestore()
  const auth = app.auth()

  export {db, auth}