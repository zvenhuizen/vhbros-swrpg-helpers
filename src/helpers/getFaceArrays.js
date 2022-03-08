import { dice } from './Dice.js';

export default function getFaceArrays(dicePoolObject) {

  let posDicePool = dicePoolObject.posDicePool.split('');
  let negDicePool = dicePoolObject.negDicePool.split('');

  let posFaceArray = posDicePool.map(sides => {
    switch(sides) {
      case 'y':
        return nestFaceArrays(dice.yellow);
      case 'g':
        return nestFaceArrays(dice.green);
      case 'b':
        return nestFaceArrays(dice.blue);
      default:
        return null;
    }
  });
  console.log('PosFaceArray:',posFaceArray)

  let negFaceArray = negDicePool.map(sides => {
    switch(sides) {
      case 'r':
        return nestFaceArrays(dice.red);
      case 'p':
        return nestFaceArrays(dice.purple);
      case 'k':
        return nestFaceArrays(dice.black);
      default:
        return null;
    }
  });
  console.log('NegFaceArray:',negFaceArray)

  posFaceArray = posFaceArray.filter(e => e != null);
  negFaceArray = negFaceArray.filter(e => e != null);

  return {posFaceArray: posFaceArray, negFaceArray: negFaceArray};
}

export function nestFaceArrays(die) {

  let finalFaceArray = []

  Object.keys(die).forEach(key => {
    finalFaceArray.push(die[key].faceArray)
  })

  return finalFaceArray
}