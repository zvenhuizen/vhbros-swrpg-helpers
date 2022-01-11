function getMaxResults(dicePool) {
  console.log(dicePool)
  let suc = 0
  let fai = 0;
  let adv = 0
  let thr = 0;
  if(dicePool) {
    const dicePoolArray = dicePool.split(''); //split the result into an array of single letters
    console.log(dicePoolArray)

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
  console.log(result)
  
  let maxArray = getMaxResults(dicePool);
  let maxSuccess = maxArray[0]
  let maxFailure = maxArray[1]
  let maxAdvantage = maxArray[2]
  let maxThreat = maxArray[3]

  //Eliminate elements from the objects that cannot produce the outcome of the roll
  if(posObject) {
    console.log(posObject)
    Object.keys(posObject).forEach(key => {
      if(posObject[key].elem[2] !== result[2] || posObject[key].elem[0] > (result[0] - maxFailure) || posObject[key].elem[1] > (result[1] > maxThreat)) {
        delete posObject[key]
      }
      if(result[0] > 0 && (posObject[key].elem[0] < result[0] || posObject[key].elem[1] < result[1])) {
        delete posObject[key]
      }
    })
  };
  console.log(posObject)

  if(negObject) {
    console.log(negObject)
    Object.keys(negObject).forEach(key => {
      if(negObject[key].elem[3] !== result[3] || negObject[key].elem[0] < (result[0] - maxSuccess) || negObject[key].elem[1] < (result[1] - maxAdvantage)) {
        delete negObject[key]
      }
      if(result[0] < 0 && (negObject[key].elem[0] > result[0] || negObject[key].elem[1] > result[1])) {
        delete negObject[key]
      }
    })
  };
  console.log(negObject)

  //Calculate the odds that the outcome could have been produced.
  let finalOdds = 0

  if(posObject && negObject) {
    Object.keys(posObject).forEach(key => {
      let negKeySearch = []
      negKeySearch.push(result[0] -  posObject[key].elem[0]);
      negKeySearch.push(result[1] - posObject[key].elem[1]);
      negKeySearch.push(result[2]);
      negKeySearch.push(result[3]);

      finalOdds += posObject[key].odds * negObject[negKeySearch].odds
    })
  } else if(posObject) {
    let posKey = toString(result[0]) & ':' & toString(result[1]) & ':' & toString(result[2]) & ':' & toString(result[3])
    finalOdds = posObject[posKey].odds;
  } else if(negObject) {
    let negKey = toString(result[0]) & ':' & toString(result[1]) & ':' & toString(result[2]) & ':' & toString(result[3])
    finalOdds = negObject[negKey].odds;
  }

  console.log(finalOdds)
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