//import { setDoc }           from "firebase/firestore";
import { getFirestore,
        //collection,
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

  // query the 'rolls' collection in the firestore db and get the document named "roll variable"
  // returns a snapshot of the db
  const rollQuery = query(doc(getFirestore(), 'rolls', roll));

  /* what Keith initially did worked:
      onSnapshot(sampleRollQuery, function(snapshot) {
      console.log(`TOTAL OUTCOMES FOR A BLUE DIE: ${Object.keys(snapshot.data()).length}`)
  */
  // listen to the query defined above and return what you define in the function(snapshot)
  const result = onSnapshot(rollQuery, (snapshot) => {
    snapshot.data()
  });

  return result
}