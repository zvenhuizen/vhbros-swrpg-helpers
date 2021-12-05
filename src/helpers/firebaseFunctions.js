//import { setDoc }           from "firebase/firestore";
import { getFirestore,
        collection,
        where,
        getDocs,
        getDoc,
        getDocFromCache,
        //addDoc,
        query,
        //orderBy,
        //limit,
        onSnapshot,
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

export function getRoll(roll) {
  if(!roll) {
    console.log("No dice rolled")
    return
  }
  
  // query the 'rolls' collection in the firestore db and get the document named "roll variable"
  let db = getFirestore()
  const rollsRef = getDoc(doc(db, 'rolls', roll)).then(docSnap => {
    if(docSnap.exists()) {
      console.log(docSnap.data());
    } else {
      console.log("No Doc");
    }
  });
  return rollsRef
}