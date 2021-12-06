//import { setDoc }           from "firebase/firestore";
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

export function rollExists() {

}

export async function getRoll(roll) {
  console.log("Passed Dice:" + roll)
  let db = getFirestore()

  if(!roll) {
    console.log("No dice rolled")
    return //return early
  }

  // query the 'rolls' collection in the firestore db and get the document named "roll variable"
  
  let rollData;

    try {
    const rollRef = await getDoc(doc(db, 'rolls', roll)); //returns a promise
    console.log('Document Data:')
    console.log(rollRef.data());
    rollData = rollRef.data();
    console.log(rollData);
    for (let result in rollData) {
      console.log(rollData[result]);
    }
    return rollData;
  }
  catch(e) {
    console.log(e);
  }


  return rollData;
  /*// handle the promise fulfmillment or rejection
  rollRef
    .then(docSnap => {
      if(docSnap.exists()) {
        return docSnap.data()
      } else {
        console.log("No Doc");
      }
    })
  docSnap
    .then(result => result)
    .catch((e) => {
      console.log(e);
    });*/
}