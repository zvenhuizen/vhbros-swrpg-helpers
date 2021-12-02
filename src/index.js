import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/main.scss';
import App from './app/App';
import reportWebVitals from './helpers/reportWebVitals';
import { getFirebaseConfig } from './firebase-config';
import { initializeApp } from 'firebase/app';
import {
  getFirestore,
//  collection,
//  addDoc,
  query,
//  orderBy,
//  limit,
  onSnapshot,
//  setDoc,
//  updateDoc,
  doc,
//  serverTimestamp,
} from 'firebase/firestore';
import {
//  getStorage,
//  ref,
//  uploadBytesResumable,
//  getDownloadURL,
} from 'firebase/storage';
//import { getMessaging, getToken, onMessage } from 'firebase/messaging';
//import { getPerformance } from 'firebase/performance';

const firebaseAppConfig = getFirebaseConfig();
initializeApp(firebaseAppConfig);

// ======================================== ACCESSING FIRESTORE! ====================================== //

// THIS CODE MUST COME AFTER initializeApp IN ORDER TO WORK

export function loadRolls() { // loadRolls is an arbitrary name

  // using imported functions from firestore
  // doc accesses a document (in our case a specific roll) and takes 3 parameters, the database (i.e. getFirestore() - could be replaced with a variable like db); the collection (i.e. rolls, but we could split it into posRolls and negRolls); and the document (in our case the dice)
  const sampleRollQuery = query(doc(getFirestore(), 'rolls', 'b'));

  // I don't fully understand onSnapshot or the function(snapshot), but I think its basically saying figure out what the db looks like when this runs and just use that instead of reading any live changes of the db...
  onSnapshot(sampleRollQuery, function(snapshot) {
    console.log(`TOTAL OUTCOMES FOR A BLUE DIE: ${Object.keys(snapshot.data()).length}`) // I just wanted to make sure I was reading the full object of the blue die that had the five possible results.
    // just using count for display purposes
    let count = 1;

    // this is how you loop over an object result is the name of the keys of your object, but could just as well be named anything, and snapshot.data() is how you actually access the data on the document and is the full object -> should be stored in a variable typically
    for (const result in snapshot.data()) {
      // here I am just operating on the Object, accessing the information stored at the specific key we are mapping.
      console.log(`RESULT ${count}: ${snapshot.data()[result].result} | ODDS: ${snapshot.data()[result].odds * 100}%`);
      // incrementing count for display purposes.
      count += 1;
    }
  });
}


// don't forget to call the function, we could easily use this to pass our dice as a parameter and use that above where you see 'b'
loadRolls();

// ======================================== ACCESSING FIRESTORE! ====================================== //

// ============================= RECURSIVE PRACTICE ============================= //
let posDiceArray = [[[0,0,0,0],[1,0,0,0],[1,0,0,0],[0,1,0,0],[1,1,0,0],[1,1,0,0],[1,1,0,0],[2,0,0,0],[2,0,0,0],[0,2,0,0],[0,2,0,0],[1,0,1,0]], 
[[0,0,0,0],[1,0,0,0],[1,0,0,0],[0,1,0,0],[0,1,0,0],[1,1,0,0],[2,0,0,0],[0,2,0,0]],
[[0,0,0,0],[0,0,0,0],[1,0,0,0],[0,1,0,0],[1,1,0,0],[0,2,0,0]]];
let diceRolled = 0;
let permutations = 1;

function getAllResults(dice) {

    // calculate total permutations
    for (let i = 0; i < dice.length; i++) {
      permutations *= dice[i].length;
    }
    console.log(permutations);

    let resultsArray = [];

    const combine = ([head, ...[headTail, ...tailTail]]) => {
      if (!headTail) return head
    
      const combined = headTail.reduce((acc, x) => {
        return acc.concat(head.map(h => `${h},${x}`))
      }, [])
    
      return combine([combined, ...tailTail])
    }
  
    let result = combine(dice);

    console.log(result);
    console.log("In getAllResults");
}

getAllResults(posDiceArray);

// ============================= RECURSIVE PRACTICE ============================= //

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
console.log("Reading from index.js");