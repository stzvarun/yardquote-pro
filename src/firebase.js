
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCyiMLpnRDSomfoDEMcgRQV0yQSSiyW1VQ",
  authDomain: "yardquote.firebaseapp.com",
  projectId: "yardquote",
  storageBucket: "yardquote.appspot.com",
  messagingSenderId: "236840120161",
  appId: "1:236840120161:web:9c0eeb3eaac14cd57a5f20",
  measurementId: "G-DKYTSM4377"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
