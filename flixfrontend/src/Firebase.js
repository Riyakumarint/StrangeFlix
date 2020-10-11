import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

firebase.initializeApp({
    apiKey: "AIzaSyDeG9NUUfNwNRP8LrWUFRk7oW2tmKNsWIE",
    authDomain: "strangeflix-aea61.firebaseapp.com",
    databaseURL: "https://strangeflix-aea61.firebaseio.com",
    projectId: "strangeflix-aea61",
    storageBucket: "strangeflix-aea61.appspot.com",
    messagingSenderId: "685598715001",
    appId: "1:685598715001:web:af0cd86b580a782e10f8a8",
    measurementId: "G-M4ZM094KPG"
})
const auth = firebase.auth();
const firestore = firebase.firestore();
const analytics = firebase.analytics();
