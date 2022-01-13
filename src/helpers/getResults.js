import getAllResults from "./createRollObjects"
import DiceArrays from "./getDiceArrays"

export function getResults(posDicePoolObj, negDicePoolObj, forceDicePool, posNegOutcome, forceOutcome) {
  
  if(!posNegOutcome) {
    console.log('Returned Early, Result:', posNegOutcome)
    return //return early
  }

  //Calculate the odds that the regular dice outcome could have been produced.
  let posNegProb = 0

  if(posDicePoolObj && negDicePoolObj) {

    console.log('Found both pos and neg objects.')

    Object.keys(posDicePoolObj).forEach(key => {
      
      let negKey = []
      negKey.push(posNegOutcome[0] -  posDicePoolObj[key].success)
      negKey.push(posNegOutcome[1] - posDicePoolObj[key].advantage)
      negKey.push(posNegOutcome[2])
      negKey.push(posNegOutcome[3])

      let negKeySearch = negKey.join(':');

      if(negDicePoolObj[negKeySearch]) {
        posNegProb += posDicePoolObj[key].prob * negDicePoolObj[negKeySearch].prob
      };
    })
  } else if(posDicePoolObj) {

    console.log('Only found pos object.')

    let posKey = ''
    posKey += posNegOutcome[0] + ':' + posNegOutcome[1] + ':' + posNegOutcome[2] + ':' + posNegOutcome[3]

    posNegProb = posDicePoolObj[posKey].prob;
  } else if(negDicePoolObj) {

    console.log('Only found neg object.')

    let negKey = ''
    negKey += posNegOutcome[0] + ':' + posNegOutcome[1] + ':' + posNegOutcome[2] + ':' + posNegOutcome[3]

    posNegProb = negDicePoolObj[negKey].prob;
  };

  console.log('Regular Dice Odds:', posNegProb)

  //calculate the odds that the force dice outcome could have been produced
  let forceProb = 1
  if(forceOutcome) {

    let forceDicePoolObj = getAllResults(DiceArrays(forceDicePool).forceDicePool, 'force')

    let forceKey = ''
    forceKey += forceOutcome[0] + ':' + forceOutcome[1];

    forceProb = forceDicePoolObj[forceKey].prob
  }

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