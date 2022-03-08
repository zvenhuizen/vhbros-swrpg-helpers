import getDicePoolObject from "./createDicePoolObjects"
import { nestFaceArrays } from "./getFaceArrays"
import { dice } from "./Dice"
import getDicePoolObject from "./createDicePoolObjects"

export default function getOutcomes(posDicePoolObj, negDicePoolObj, forceDicePool, adjustedOutcome) {
  
  if(!adjustedOutcome) {
    console.log('Returned Early, Result:', adjustedOutcome)
    return //return early
  }
  console.log(adjustedOutcome)

  let sucfai = adjustedOutcome.success
  let advthr = adjustedOutcome.advantage

  //Calculate the odds that the regular dice outcome could have been produced.
  let posNegProb = 0

  if(posDicePoolObj && negDicePoolObj) {

    console.log('Found both pos and neg objects.')
    console.log(posDicePoolObj, negDicePoolObj)

    Object.keys(posDicePoolObj).forEach(key => {
      
      let negKey = []
      negKey.push(sucfai -  posDicePoolObj[key].success)
      negKey.push(advthr - posDicePoolObj[key].advantage)
      negKey.push(adjustedOutcome.triumph)
      negKey.push(adjustedOutcome.despair)

      let negKeySearch = negKey.join(':');
      console.log(negKeySearch)

      if(negDicePoolObj[negKeySearch]) {
        posNegProb += posDicePoolObj[key].prob * negDicePoolObj[negKeySearch].prob
      };
    })
    console.log(posNegProb)
  } else if(posDicePoolObj) {

    console.log('Only found pos object.')
    console.log(posDicePoolObj)

    let posKey = ''
    posKey += sucfai + ':' + advthr + ':' + adjustedOutcome.triumph + ':' + adjustedOutcome.despair
    console.log(posKey)

    posNegProb = posDicePoolObj[posKey].prob;
    console.log(posNegProb)
  } else if(negDicePoolObj) {

    console.log('Only found neg object.')
    console.log(negDicePoolObj)

    let negKey = ''
    negKey += sucfai + ':' + advthr + ':' + adjustedOutcome.triumph + ':' + adjustedOutcome.despair
    console.log(negKey)

    posNegProb = negDicePoolObj[negKey].prob;
    console.log(posNegProb)
  };

  console.log('Regular Dice Odds:', posNegProb)

  //calculate the odds that the force dice outcome could have been produced
  let forceProb = 1
  if(forceDicePool) {

    let forceDice = forceDicePool.split('');

    let forceFaceArray = forceDice.map(sides => {
      switch(sides) {
        case 'w':
          return nestFaceArrays(dice.white);
        default:
          return null;
      }
    });

    forceFaceArray = forceFaceArray.filter(e => e != null);
    console.log(forceFaceArray)

    let forceDicePoolObj = getDicePoolObject(forceFaceArray, 'force')
    console.log(forceDicePoolObj)

    let forceKey = ''
    forceKey += adjustedOutcome.lsp + ':' + adjustedOutcome.dsp;
    console.log(forceKey)
    console.log(forceDicePoolObj[forceKey])

    forceProb = forceDicePoolObj[forceKey].prob
    console.log(forceProb)
  }

  console.log(posNegProb)
  let outcomeProb = posNegProb * forceProb

  return outcomeProb;
}