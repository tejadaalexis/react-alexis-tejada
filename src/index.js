import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { initializeApp } from "firebase/app";

const firebaseConfig = {

    apiKey: "AIzaSyC5Vprvd9y8gfqw5G0KchC11QlyNsJ8shA",
    authDomain: "cripp-ecommerce.firebaseapp.com",
    projectId: "cripp-ecommerce",
    storageBucket: "cripp-ecommerce.appspot.com",
    messagingSenderId: "205372316647",
    appId: "1:205372316647:web:4b7ebec19cb94b79fe3b42"

};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />
);