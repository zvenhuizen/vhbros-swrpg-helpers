import getAllResults from "./createRollObjects"
import { nestFaceArrays } from "./getDiceArrays"
import { dice } from "./Dice"

export function getResults(posDicePoolObj, negDicePoolObj, forceDicePool, posNegOutcome, forceOutcome) {
  
  if(!posNegOutcome) {
    console.log('Returned Early, Result:', posNegOutcome)
    return //return early
  }
  console.log(posNegOutcome)

  //Calculate the odds that the regular dice outcome could have been produced.
  let posNegProb = 0

  if(posDicePoolObj && negDicePoolObj) {

    console.log('Found both pos and neg objects.')
    console.log(posDicePoolObj, negDicePoolObj)

    Object.keys(posDicePoolObj).forEach(key => {
      
      let negKey = []
      negKey.push(posNegOutcome[0] -  posDicePoolObj[key].success)
      negKey.push(posNegOutcome[1] - posDicePoolObj[key].advantage)
      negKey.push(posNegOutcome[2])
      negKey.push(posNegOutcome[3])

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
    posKey += posNegOutcome[0] + ':' + posNegOutcome[1] + ':' + posNegOutcome[2] + ':' + posNegOutcome[3]
    console.log(posKey)

    posNegProb = posDicePoolObj[posKey].prob;
    console.log(posNegProb)
  } else if(negDicePoolObj) {

    console.log('Only found neg object.')
    console.log(negDicePoolObj)

    let negKey = ''
    negKey += posNegOutcome[0] + ':' + posNegOutcome[1] + ':' + posNegOutcome[2] + ':' + posNegOutcome[3]
    console.log(negKey)

    posNegProb = negDicePoolObj[negKey].prob;
    console.log(posNegProb)
  };

  console.log('Regular Dice Odds:', posNegProb)

  //calculate the odds that the force dice outcome could have been produced
  let forceProb = 1
  if(forceOutcome && forceDicePool) {

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

    let forceDicePoolObj = getAllResults(forceFaceArray, 'force')
    console.log(forceDicePoolObj)

    let forceKey = ''
    forceKey += forceOutcome[0] + ':' + forceOutcome[1];
    console.log(forceKey)
    console.log(forceDicePoolObj[forceKey])

    forceProb = forceDicePoolObj[forceKey].prob
    console.log(forceProb)
  }

  console.log(posNegProb)
  let outcomeProb = posNegProb * forceProb

  return outcomeProb;
}

export function netResults(roll) {
  let sucfai = 0;
  let advthr = 0;
  let tri = 0;
  let des = 0;
  let lsp = 0;
  let dsp = 0;

  for(var i = 0; i < roll.length; i++) {

    const result = roll[i].split(''); //split the result into an array of single letters

    // add all results together
    for(var j = 0; j < result.length; j++) {

      switch(result[j]) {
        case 's':
          sucfai += 1;
          break;
        case 'a':
          advthr += 1;
          break;
        case 'r':
          tri += 1;
          sucfai += 1;
          break;
        case 'f':
          sucfai -= 1;
          break;
        case 't':
          advthr -= 1;
          break;
        case 'd':
          des += 1;
          sucfai -= 1;
          break;
        case 'n':
          dsp += 1;
          break;
        case 'l':
          lsp += 1;
          break;
        default:
          return null;
      }
    }
  }

  let results = [sucfai,advthr,tri,des,lsp,dsp];

  return results;
}