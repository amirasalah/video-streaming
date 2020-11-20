import Firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
// import { seedDatabase } from '../seed'

const config = {
    authDomain: 'videostreamer-6379a.firebaseapp.com',
    databaseURL: 'https://videostreamer-6379a.firebaseio.com',
    projectId: 'videostreamer-6379a',
    storageBucket: 'videostreamer-6379a.appspot.com',
    messagingSenderId: '813721506145',
    appId: '1:813721506145:web:5f6012ad4291ae6047b520',
    measurementId: 'G-TFSKYKKSBG',
}

export const firebase = Firebase.initializeApp(config)
// seedDatabase(firebase)
