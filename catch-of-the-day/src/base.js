import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
  apiKey: process.env.API_KEY,
  authDomain: 'catch-of-the-day-sarah4594.firebaseapp.com',
  databaseURL: 'https://catch-of-the-day-sarah4594.firebaseio.com'
})

const base = Rebase.createClass(firebaseApp.database())

// Named export
export { firebaseApp }

// Default export
export default base
