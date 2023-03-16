import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react' // v2.4.9

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZmC5vTbDamUVGHCw3kjhRgAASvlFVVjI",
  authDomain: "e-commerce-react-97058.firebaseapp.com",
  projectId: "e-commerce-react-97058",
  storageBucket: "e-commerce-react-97058.appspot.com",
  messagingSenderId: "1092320180534",
  appId: "1:1092320180534:web:f60c5edcd42ed429fc9b97"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
);