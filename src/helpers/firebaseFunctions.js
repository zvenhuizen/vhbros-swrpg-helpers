import { getFirestore,
        //collection,
        //where,
        //getDocs,
        getDoc,
        //getDocFromCache,
        //addDoc,
        //query,
        //orderBy,
        //limit,
        //onSnapshot,
        setDoc,
        //updateDoc,
        doc,
        //serverTimestamp
      }                     from 'firebase/firestore';
import { //getStorage,
        //ref,
        //uploadBytesResumable,
        //getDownloadURL,
        }                   from 'firebase/storage';
//import { getMessaging, getToken, onMessage } from 'firebase/messaging';
//import { getPerformance } from 'firebase/performance';
import getAllResults from './createRollObjects';
import DiceArrays from './getDiceArrays';

async function createDocument(id, data) {

  let db = getFirestore();
  let result;
  
  try {
    result = await setDoc(doc(db, 'rolls', id), data);

  }
  catch(e) {
    console.log(e);
  }

  return result;

}

function docsExist(documents, roll) {

  let rollObject = {}

  // Check if positive roll is in the database
  if (documents.posDoc.exists()) {
    // return the data if it is
    rollObject.posRoll = documents.posDoc.data();
  } else {
    // create and return the data if it is not
    rollObject.posRoll = getAllResults(DiceArrays(roll).posDice);
    // then add that data to the database
    createDocument(roll.posDice, rollObject.posRoll);
  }

  // Check if negative roll is in the database
  if (documents.negDoc.exists()) {
    // return the data if it is
    rollObject.negRoll = documents.negDoc.data();
  } else {
    // create and return the data if it is not
    rollObject.negRoll = getAllResults(DiceArrays(roll).negDice);
    // then add that data to the database
    createDocument(roll.negDice, rollObject.negRoll)
  }

  return rollObject;

}

export async function getRoll(roll) {

  let db = getFirestore();

  if(!roll) {
    console.log("No dice rolled");
    return //return early
  }
  
  let rollData;

  try {
    // access posRes and negRes asynchronously, but wait until both are finished to continue (can be expanded to include force and nonDice if necessary)
    let [posDoc, negDoc] = await Promise.all([getDoc(doc(db, 'rolls', roll.posDice)), getDoc(doc(db, 'rolls', roll.negDice))]);

    let rollPossibilities = docsExist({posDoc: posDoc, negDoc: negDoc}, roll)
    rollData = {posDice: rollPossibilities.posRoll, negDice: rollPossibilities.negRoll, forceDice: '', nonDice: ''};
  }
  catch(e) {
    console.log(e);
  }

  return rollData;

}