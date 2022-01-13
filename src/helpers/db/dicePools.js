import {
  getFirestore,
  getDoc,
  setDoc,
  doc
} from 'firebase/firestore';
import getAllResults  from './createRollObjects';
import DiceArrays     from './getDiceArrays';

const db = getFirestore();

export async function getDicePool(db, dicePool) {

  if(!dicePoolObject) {
    console.log("ERROR: No Dice Rolled");
    return;
  }

  let dicePoolData;

  try {
    
    let doc = await getDoc(doc(db, 'dicePools', dicePool));

    if(doc.exists()) {
      dicePoolData = doc.data();
    }

  }
  catch(e) {
    console.log(e);
  }

  return dicePoolData;
}