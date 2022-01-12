function getMaxResults(dicePool) {

  let suc = 0
  let fai = 0;
  let adv = 0
  let thr = 0;
  if(dicePool) {
    const dicePoolArray = dicePool.split(''); //split the result into an array of single letters

    // add all results together
    for(var j = 0; j < dicePoolArray.length; j++) {

      switch(dicePoolArray[j]) {
        case 'y':
        case 'g':
          suc += 2;
          adv += 2;
          break;
        case 'b':
          suc += 1;
          adv += 2;
          break;
        case 'r':
        case 'p':
          fai -= 2;
          thr -= 2;
          break;
        case 'k':
          fai -= 1;
          thr -= 1;
          break;
        default:
          return null;
      }
    }
  };

  let results = [suc,fai,adv,thr];

  return results;
}

export function getResults(dicePool, posObject, negObject, result) {
  
  if(!result) {
    console.log('Returned Early, Result:', result)
    return //return early
  }

  console.log('Result:', result)

  let maxArray = getMaxResults(dicePool);
  let maxSuccess = maxArray[0]
  let maxFailure = maxArray[1]
  let maxAdvantage = maxArray[2]
  let maxThreat = maxArray[3]

  //Eliminate elements from the objects that cannot produce the outcome of the roll
  if(posObject) {
    console.log('Positive Object:', posObject)
    Object.keys(posObject).forEach(key => {
      if(posObject[key]['result'][2] !== result[2] || posObject[key]['result'][0] > (result[0] - maxFailure) || posObject[key]['result'][1] > (result[1] > maxThreat)) {
        delete posObject[key]
      }
      console.log('Positive Object[', key, ']:', posObject[key]);
      if(posObject[key]) { //since keys may have been deleted in prior step, current iteration of a key may return undefined
        if(result[0] > 0 && (posObject[key]['result'][0] < result[0] || posObject[key]['result'][1] < result[1])) {
          delete posObject[key]
        }
      }
    })
  };
  console.log('Final Positive Object:', posObject)

  if(negObject) {
    console.log('Negative Object:', negObject)
    Object.keys(negObject).forEach(key => {
      if(negObject[key]['result'][3] !== result[3] || negObject[key]['result'][0] < (result[0] - maxSuccess) || negObject[key]['result'][1] < (result[1] - maxAdvantage)) {
        delete negObject[key]
      }
      console.log('Negative Object[', key, ']:', negObject[key])
      if(negObject[key]) { //since keys may have been deleted in prior step, current iteration of a key may return undefined
        if(result[0] < 0 && (negObject[key]['result'][0] > result[0] || negObject[key]['result'][1] > result[1])) {
          delete negObject[key]
        }
      }
    })
  };
  console.log('Final Negative Object:', negObject)

  //Calculate the odds that the outcome could have been produced.
  let finalOdds = 0

  if(posObject && negObject) {
    Object.keys(posObject).forEach(key => {
      let negKeySearch = ''
      negKeySearch += result[0] -  posObject[key]['result'][0] + ':';
      negKeySearch += result[1] - posObject[key]['result'][1] + ':';
      negKeySearch += result[2] + ':';
      negKeySearch += result[3];

      console.log('Negative Key Search:', negKeySearch)
      console.log('Positive Odds:', posObject[key]['odds'])
      console.log('Negative Object[', negKeySearch, ']:', negObject[negKeySearch])
      if(negObject[negKeySearch]) {
        finalOdds += posObject[key]['odds'] * negObject[negKeySearch]['odds']
      };
    })
  } else if(posObject) {
    let posKey = toString(result[0]) + ':' + toString(result[1]) + ':' + toString(result[2]) & ':' + toString(result[3])
    finalOdds = posObject[posKey]['odds'];
  } else if(negObject) {
    let negKey = toString(result[0]) + ':' & toString(result[1]) + ':' & toString(result[2]) + ':' + toString(result[3])
    finalOdds = negObject[negKey]['odds'];
  }

  console.log('Final Odds:', finalOdds)
  return finalOdds
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