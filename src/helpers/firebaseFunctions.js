import { setDoc } from "firebase/firestore";
import {
  getFirestore,
//  collection,
//  addDoc,
  query,
//  orderBy,
//  limit,
  onSnapshot,
//  setDoc,
//  updateDoc,
  doc,
//  serverTimestamp,
} from 'firebase/firestore';

export function rollExists() {

}

export function getRoll(roll) {

  // query the 'rolls' collection in the firestore db and get the document named "roll variable"
  // returns a snapshot of the db
  const rollQuery = query(doc(getFirestore(), 'rolls', roll));

  // listen to the query defined above and return what you define in the function(snapshot)
  const result = onSnapshot(rollQuery, (snapshot) => {
    snapshot.data()
  });

  return result
}