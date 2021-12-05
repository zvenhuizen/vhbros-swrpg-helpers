export function getResults(posObject, negObject, result) {

  console.log("Result of Roll:")
  console.log(result)

  if(posObject) {
    Object.keys(posObject).forEach(key => {
      console.log(posObject[key].Result)
    })
  };

  if(negObject) {
    Object.keys(negObject).forEach(key => {
      console.log(negObject[key].Result)
    })
  };


  
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