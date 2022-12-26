import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const firebase = require("firebase/app");
require("firebase/firestore");
require('firebase/analytics')

var config = {
    apiKey: "AIzaSyAZ1lZxUlUWKPgcGHsTsPv1EwDuVnwrDvM",
    authDomain: "alejandrocoronado-3de1f.firebaseapp.com",
    projectId: "alejandrocoronado-3de1f",
    storageBucket: "alejandrocoronado-3de1f.appspot.com",
    messagingSenderId: "111873655157",
    appId: "1:111873655157:web:254804a00cc644be40533c",
    measurementId: "G-8Q1BB4EF85"
};


firebase.initializeApp(config)
firebase.analytics();


const app = (
    <App />
);

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();