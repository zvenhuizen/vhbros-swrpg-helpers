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
        //setDoc,
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

export function rollExists(roll) {

  if (roll.exists()) {
    console.log("roll exists");
    return roll.data();
  } else {
    console.log("Roll Does Not Exist");
    // here is where we create the roll in the database
    return [];
  }

}

export async function getRoll(roll) {
  console.log("Passed Dice: " + roll); // roll is equal to the diceSplit object
  let db = getFirestore();

  if(!roll) {
    console.log("No dice rolled");
    return //return early
  }

  // query the 'rolls' collection in the firestore db and get the document named "roll variable"
  
  let rollData;

  try {
    // access posRes and negRes asynchronously, but wait until both are finished to continue (can be expanded to include force and nonDice if necessary)
    let [posRes, negRes] = await Promise.all([getDoc(doc(db, 'rolls', roll.posDice)), getDoc(doc(db, 'rolls', roll.negDice))]);

    posRes = rollExists(posRes);
    negRes = rollExists(negRes);
    rollData = {posDice: posRes, negDice: negRes, forceDice: '', nonDice: ''};
  }
  catch(e) {
    console.log(e);
  }

  return rollData;

}