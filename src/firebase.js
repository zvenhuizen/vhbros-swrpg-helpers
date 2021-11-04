import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAIrETYx861kemsmmYGBNc_q8yamLZe8rw",
    authDomain: "vhbros-swrpg-helpers.firebaseapp.com",
    projectId: "vhbros-swrpg-helpers",
    storageBucket: "vhbros-swrpg-helpers.appspot.com",
    messagingSenderId: "523300652788",
    appId: "1:523300652788:web:1ee68b04304bb2eda600a1",
    measurementId: "G-WMP88F67XW"
  };

// Initialize Firebase
var firebaseDb = firebase.initializeApp(firebaseConfig);

export default firebaseDb.database().ref();