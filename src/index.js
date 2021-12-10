import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/main.scss';
import App from './app/App';
import reportWebVitals from './helpers/reportWebVitals';
import { getFirebaseConfig } from './firebase-config';
import { initializeApp } from 'firebase/app';

const firebaseAppConfig = getFirebaseConfig();
initializeApp(firebaseAppConfig);

let posDiceArray = [[[0,0,0,0],[1,0,0,0],[1,0,0,0],[0,1,0,0],[1,1,0,0],[1,1,0,0],[1,1,0,0],[2,0,0,0],[2,0,0,0],[0,2,0,0],[0,2,0,0],[1,0,1,0]], 
[[0,0,0,0],[1,0,0,0],[1,0,0,0],[0,1,0,0],[0,1,0,0],[1,1,0,0],[2,0,0,0],[0,2,0,0]],
[[0,0,0,0],[0,0,0,0],[1,0,0,0],[0,1,0,0],[1,1,0,0],[0,2,0,0]]];
let outputs = [];

function permute(allDice, die=0, output=[0,0,0,0]){

    allDice[die].forEach((result)=>{
        if( die === allDice.length - 1 ){            
            // Base case...
            outputs.push( result.map((r,i) => r + output[i]) );
            // console.log(outputs);
        }
        else{
            // Recursive case...
            permute(allDice, die+1, result.map((r,i) => r + output[i]) );
        }
    });/*  forEach() */
}

permute(posDiceArray)

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