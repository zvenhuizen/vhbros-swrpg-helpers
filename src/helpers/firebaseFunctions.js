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

  // =============== PROBLEM LINE =============== //
  // first thing I did was comment out all the lines below this one.
  // const rollQuery = query(doc(getFirestore(), 'rolls', roll));
  // I then wanted to determine if there was an error connecting to firestor
  console.log(getFirestore()); // return something weird, but good enough.
  // that worked okay, so I decided to retry the query, passing in 'b' instead of roll
  console.log(query(doc(getFirestore(), 'rolls', 'b'))); // return something weird, but good enough
  // that also worked fine, so I figured out that the issue was in what was being passed as roll in getRoll(roll)
  // so I needed to find what was calling getRoll(), which was getOdds.jsx line 58-59
  // =============== PROBLEM LINE =============== //


  /* what Keith initially did worked:
      onSnapshot(sampleRollQuery, function(snapshot) {
      console.log(`TOTAL OUTCOMES FOR A BLUE DIE: ${Object.keys(snapshot.data()).length}`)
  */
  // listen to the query defined above and return what you define in the function(snapshot)
  // const result = onSnapshot(rollQuery, (snapshot) => {
  //   snapshot.data()
  // });

  // return result
}