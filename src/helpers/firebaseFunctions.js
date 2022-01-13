// import { getStorage,ref,uploadBytesResumable,getDownloadURL } from 'firebase/storage';
//import { getMessaging, getToken, onMessage } from 'firebase/messaging';
//import { getPerformance } from 'firebase/performance';
import { //collection,where,getDocs,getDocFromCache,addDoc,query,orderBy,limit,onSnapshot,updateDoc,serverTimestamp
  getFirestore,
  getDoc,
  setDoc,
  doc
} from 'firebase/firestore';
import getAllResults  from './createRollObjects';
import DiceArrays     from './getDiceArrays';

// search database for pos and neg dicePool info
export async function getRoll(dicePoolObject) {

  let db = getFirestore();

  if(!dicePoolObject) {
    console.log("No dice rolled");
    return //return early
  }
  
  console.log(dicePoolObject);
  let rollData;

  try {
    // access posRes and negRes asynchronously, but wait until both are finished to continue (can be expanded to include force and nonDice if necessary)
    let [posDoc, negDoc] = await Promise.all([getDoc(doc(db, 'dicePools', dicePoolObject.posDicePool)), getDoc(doc(db, 'dicePools', dicePoolObject.negDicePool))]);

    let rollPossibilities = docsExist({posDoc: posDoc, negDoc: negDoc}, dicePoolObject)
    rollData = {posDicePoolObj: rollPossibilities.posRoll, negDicePoolObj: rollPossibilities.negRoll, forceDice: '', symbols: ''};
  }
  catch(e) {
    console.log(e);
  }

  return rollData;
}

// check if the dicePool exists in the database
function docsExist(documents, dicePoolObject) {

  let rollObject = {}

  // Check if positive roll is in the database
  if (documents.posDoc.exists()) {
    // return the data if it is
    rollObject.posRoll = documents.posDoc.data();
  } else {
    // create and return the data if it is not
    rollObject.posRoll = getAllResults(DiceArrays(dicePoolObject).posDicePool, 'positive');
    // then add that data to the database
    createDocument(dicePoolObject.posDicePool, rollObject.posRoll);
  }

  // Check if negative roll is in the database
  if (documents.negDoc.exists()) {
    // return the data if it is
    rollObject.negRoll = documents.negDoc.data();
  } else {
    // create and return the data if it is not
    rollObject.negRoll = getAllResults(DiceArrays(dicePoolObject).negDicePool, 'negative');
    // then add that data to the database
    createDocument(dicePoolObject.negDicePool, rollObject.negRoll)
  }

  return rollObject;
}

// create a new dicePool for a roll that does not yet exist
async function createDocument(id, data) {

  let db = getFirestore();
  let result;
  
  try {
    result = await setDoc(doc(db, 'dicePools', id), data);
  }
  catch(e) {
    console.log(e);
  }

  return result;
}