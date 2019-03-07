import Rebase from 're-base'
import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyCCsL89v1r1SG807OOe4icUzQ9Q5CnADWw',
  authDomain: 'catch-of-the-day-sarah4594.firebaseapp.com',
  databaseURL: 'https://catch-of-the-day-sarah4594.firebaseio.com'
})

const base = Rebase.createClass(firebaseApp.database())

// Named export
export { firebaseApp }

// Default export
export default base
