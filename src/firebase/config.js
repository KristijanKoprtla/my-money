import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCnSHjdKjXsiqkbipA7rT3uJQZEZXM9puE",
    authDomain: "mymoney-67dc4.firebaseapp.com",
    projectId: "mymoney-67dc4",
    storageBucket: "mymoney-67dc4.appspot.com",
    messagingSenderId: "680946634354",
    appId: "1:680946634354:web:cb4bb033129ec47e403ceb"
  };

//init firebase
firebase.initializeApp(firebaseConfig)

//init service
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }