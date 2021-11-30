import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/main.scss';
import App from './app/App';
import reportWebVitals from './helpers/reportWebVitals';
import { getFirebaseConfig } from './firebase-config';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseAppConfig = getFirebaseConfig();
initializeApp(firebaseAppConfig);

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
