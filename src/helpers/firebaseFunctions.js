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

  if(dicePoolObject.posDicePool && dicePoolObject.negDicePool) {
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
  } else if(dicePoolObject.posDicePool) {
    try {
      // access posRes and negRes asynchronously, but wait until both are finished to continue (can be expanded to include force and nonDice if necessary)
      let [posDicePoolData] = await Promise.all([getDoc(doc(db, 'dicePools', dicePoolObject.posDicePool))]);

      let rollPossibilities = dicePoolDataExists({posDicePoolData: posDicePoolData}, dicePoolObject)
      dicePoolData = {posDicePoolObj: rollPossibilities.posDicePoolData, negDicePoolObj: '', forceDice: '', symbols: ''};
    }
    catch(e) {
      console.log(e);
    }

    return dicePoolData;
  } else if(dicePoolObject.negDicePool) {
    try {
      // access posRes and negRes asynchronously, but wait until both are finished to continue (can be expanded to include force and nonDice if necessary)
      let [negDicePoolData] = await Promise.all([getDoc(doc(db, 'dicePools', dicePoolObject.negDicePool))]);
      
      let rollPossibilities = dicePoolDataExists({negDicePoolData: negDicePoolData}, dicePoolObject)
      dicePoolData = {posDicePoolObj: '', negDicePoolObj: rollPossibilities.negDicePoolData, forceDice: '', symbols: ''};
    }
    catch(e) {
      console.log(e);
    }

    return dicePoolData;
  }
}

// check if the dicePool exists in the database
function dicePoolDataExists(dicePoolData, dicePoolObject) {

  let dicePoolDataObj = {}
  console.log('posDicePool:')
  if(dicePoolData.posDicePoolData) {
    console.log(dicePoolData.posDicePoolData)
    // Check if positive roll is in the database
    if (dicePoolData.posDicePoolData.exists()) {
      // return the data if it exists
      dicePoolDataObj.posDicePoolData = dicePoolData.posDicePoolData.data();
    } else {
      // create and return the data if it does not exist
      dicePoolDataObj.posDicePoolData = getDicePoolObject(getFaceArrays(dicePoolObject).posFaceArray, 'positive');
      console.log('PosDicePool Not Found')
      console.log('PosDicePoolData:',dicePoolDataObj.posDicePoolData)
      // then add that data to the database
      createDicePoolDoc(dicePoolObject.posDicePool, dicePoolDataObj.posDicePoolData);
    }
  }

  console.log('negDicePool:')
  if(dicePoolData.negDicePoolData) {
    console.log(dicePoolData.negDicePoolData)
    // Check if negative roll is in the database
    if (dicePoolData.negDicePoolData.exists()) {
      // return the data if it is
      dicePoolDataObj.negDicePoolData = dicePoolData.negDicePoolData.data();
    } else {
      // create and return the data if it is not
      dicePoolDataObj.negDicePoolData = getDicePoolObject(getFaceArrays(dicePoolObject).negFaceArray, 'negative');
      console.log('NegDicePool Not Found')
      console.log('NegDicePoolData:',dicePoolDataObj.negDicePoolData)
      // then add that data to the database
      createDicePoolDoc(dicePoolObject.negDicePool, dicePoolDataObj.negDicePoolData)
    }
  }
  
  console.log(dicePoolDataObj)
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