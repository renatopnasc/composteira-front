// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBO-d50q9u3JPusK4qX_CuBOdMYLiDNxZw',
  authDomain: 'composteira-monitoravel.firebaseapp.com',
  databaseURL: 'https://composteira-monitoravel-default-rtdb.firebaseio.com',
  projectId: 'composteira-monitoravel',
  storageBucket: 'composteira-monitoravel.appspot.com',
  messagingSenderId: '419812952459',
  appId: '1:419812952459:web:ed42a522c4fea66bb7c78e',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const database = getDatabase(app)
