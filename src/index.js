import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/main.scss';
import App from './app/App';
import reportWebVitals from './helpers/reportWebVitals';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyAIrETYx861kemsmmYGBNc_q8yamLZe8rw",
  authDomain: "vhbros-swrpg-helpers.firebaseapp.com",
  databaseURL: "https://vhbros-swrpg-helpers-default-rtdb.firebaseio.com",
  projectId: "vhbros-swrpg-helpers",
  storageBucket: "vhbros-swrpg-helpers.appspot.com",
  messagingSenderId: "523300652788",
  appId: "1:523300652788:web:1ee68b04304bb2eda600a1",
  measurementId: "G-WMP88F67XW"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

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
