import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZHomlXrFJlAGoNd8RCJTvelq5rKsuf-4",
  authDomain: "csgostore-d3e1e.firebaseapp.com",
  projectId: "csgostore-d3e1e",
  storageBucket: "csgostore-d3e1e.appspot.com",
  messagingSenderId: "127726335348",
  appId: "1:127726335348:web:3c7c2187a180e36f6ea821"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);


