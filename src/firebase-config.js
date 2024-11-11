import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyDF0fmfs4cZTy9Q7zRjN8jnhdRPIzF5nDk",
  authDomain: "app-vue-4c53c.firebaseapp.com",
  projectId: "app-vue-4c53c",
  storageBucket: "app-vue-4c53c.firebasestorage.app",
  messagingSenderId: "140272099812",
  appId: "1:140272099812:web:9dae5525645293a16367f1",
  measurementId: "G-KKD6JSJ37Z"
};


const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
export default db