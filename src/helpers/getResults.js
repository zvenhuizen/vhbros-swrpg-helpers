export function getResults(posObject, negObject, result) {
  
  if(!result) {
    console.log('Returned Early, Result:', result)
    return //return early
  }

  console.log('Positive Object:', posObject)
  console.log('Negative Object:', negObject)
  console.log('Result:', result)

  //Calculate the odds that the outcome could have been produced.
  let finalOdds = 0

  if(posObject && negObject) {
    console.log('Found both pos and neg objects.')
    Object.keys(posObject).forEach(key => {
      
      let negKey = []
      negKey.push(result[0] -  posObject[key].result[0])
      negKey.push(result[1] - posObject[key].result[1])
      negKey.push(result[2])
      negKey.push(result[3])

      let negKeySearch = negKey.join(':');

      console.log('Current Positive Key:', posObject[key])
      console.log('Calculated Current Negative Key:', negKeySearch)
      console.log('Current Negative Key:', negObject[negKeySearch])
      if(negObject[negKeySearch]) {
        finalOdds += posObject[key]['odds'] * negObject[negKeySearch]['odds']
        console.log('Current Final Odds:', finalOdds)
      };
    })
  } else if(posObject) {
    console.log('Only found pos object.')
    let posKey = ''
    posKey += result[0] + ':' + result[1] + ':' + result[2] + ':' + result[3]

    finalOdds = posObject[posKey]['odds'];
  } else if(negObject) {
    console.log('Only found neg object.')
    let negKey = ''
    negKey += result[0] + ':' + result[1] + ':' + result[2] + ':' + result[3]

    finalOdds = negObject[negKey]['odds'];
  };

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