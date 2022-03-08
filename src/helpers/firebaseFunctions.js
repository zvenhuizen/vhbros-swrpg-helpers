// import { getStorage,ref,uploadBytesResumable,getDownloadURL } from 'firebase/storage';
//import { getMessaging, getToken, onMessage } from 'firebase/messaging';
//import { getPerformance } from 'firebase/performance';
import { //collection,where,getDocs,getDocFromCache,addDoc,query,orderBy,limit,onSnapshot,updateDoc,serverTimestamp
  getFirestore,
  getDoc,
  setDoc,
  doc
} from 'firebase/firestore';
import getDicePoolObject  from './createDicePoolObjects';
import getFaceArrays     from './getFaceArrays';

// search database for pos and neg dicePool info
export async function getDicePoolData(dicePoolObject) {

  let db = getFirestore();

  if(!dicePoolObject) {
    console.log("No dice rolled");
    return //return early
  }
  
  console.log(dicePoolObject);
  let dicePoolData;

  try {
    // access posRes and negRes asynchronously, but wait until both are finished to continue (can be expanded to include force and nonDice if necessary)
    let [posDicePoolData, negDicePoolData] = await Promise.all([getDoc(doc(db, 'dicePools', dicePoolObject.posDicePool)), getDoc(doc(db, 'dicePools', dicePoolObject.negDicePool))]);

    let rollPossibilities = dicePoolDataExists({posDicePoolData: posDicePoolData, negDicePoolData: negDicePoolData}, dicePoolObject)
    dicePoolData = {posDicePoolObj: rollPossibilities.posDicePoolData, negDicePoolObj: rollPossibilities.negDicePoolData, forceDice: '', symbols: ''};
  }
  catch(e) {
    console.log(e);
  }

  return dicePoolData;
}

// check if the dicePool exists in the database
function dicePoolDataExists(dicePoolData, dicePoolObject) {

  let dicePoolDataObj = {}

  // Check if positive roll is in the database
  if (dicePoolData.posDicePoolData.exists()) {
    // return the data if it is
    dicePoolDataObj.posDicePoolData = dicePoolData.posDicePoolData.data();
  } else {
    // create and return the data if it is not
    dicePoolDataObj.posDicePoolData = getDicePoolObject(getFaceArrays(dicePoolObject).posFaceArray, 'positive');
    // then add that data to the database
    createDicePoolDoc(dicePoolObject.posDicePool, dicePoolDataObj.posDicePoolData);
  }

  // Check if negative roll is in the database
  if (dicePoolData.negDicePoolData.exists()) {
    // return the data if it is
    dicePoolDataObj.negDicePoolData = dicePoolData.negDicePoolData.data();
  } else {
    // create and return the data if it is not
    dicePoolDataObj.negDicePoolData = getDicePoolObject(getFaceArrays(dicePoolObject).negFaceArray, 'negative');
    // then add that data to the database
    createDicePoolDoc(dicePoolObject.negDicePool, dicePoolDataObj.negDicePoolData)
  }

  return dicePoolDataObj;
}

// create a new dicePool for a roll that does not yet exist
async function createDicePoolDoc(dicePoolData, dicePool) {

  let db = getFirestore();
  let dicePoolDoc;
  
  try {
    dicePoolDoc = await setDoc(doc(db, 'dicePools', dicePoolData), dicePool);
  }
  catch(e) {
    console.log(e);
  }

  return dicePoolDoc;
}