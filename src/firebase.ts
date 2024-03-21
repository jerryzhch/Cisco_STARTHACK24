import { createContext } from 'react';
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDpzUQDSA19lso0lm4sKWPjZ1R78W21VlY',
  authDomain: 'starthack2024.firebaseapp.com',
  databaseURL: 'https://starthack2024-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'starthack2024',
  storageBucket: 'starthack2024.appspot.com',
  messagingSenderId: '283438281266',
  appId: '1:283438281266:web:2fbb1be2e0786a5b07822b',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth();

export const FB_DATABASE = createContext(db);
export const FB_AUTH = createContext(auth);
