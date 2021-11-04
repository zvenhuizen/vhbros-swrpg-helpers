import {initializeApp} from 'firebase/app';
import {getDatabase} from 'firebase/database';

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

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const firebaseDb = getDatabase(firebaseApp);

export default firebaseDb