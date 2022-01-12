import returnPermutations from './permutations';

export default function getAllResults(dice) {

  // calculate total permutations
  let permutations = 1
  for (let i = 0; i < dice.length; i++) {
    permutations *= dice[i].length;
  }

  //get all dice combinations into array as strings
  // let result = combine(dice); //needs to be replaced with permute(dice)
  // console.log("RESULT OF COMBINE: " + result);
  let result = returnPermutations(dice);
  
  //convert strings in array into nested arrays
  // let resultArray = [];
  // result.forEach(res => resultArray.push(res.split(';')));

  // let sumArray = [];
  // resultArray.map(res => {
  //   let tempArray = []
  //   res.forEach(num => tempArray.push(num.split(',')));
  //   sumArray.push(tempArray);
  // })

  // let intArray = sumArray.map(r => {
  //   return r.map(s => {
  //     return s.map(n => {
  //       return parseInt(n,10);
  //     })
  //   })
  // })

  //sum each combination of arrays inside larger array
  //I'm sure this could be turned into a recursive solution
  // let summedArray = result;
  // for(var i = 0; i < intArray.length; i++) {

  //   let sumResult = [];
  //   let tempArray = intArray[i];
  //   if(intArray.length > 1) {
  //     sumResult = tempArray.reduce((r, a) => a.map((b, y) => (r[y] || 0) + b), []) 
  //   } else {
  //     sumResult = intArray[0]; //if only one element in intArray, then result is that element
  //   }
  //   summedArray.push(sumResult)
  // }

  let uniqueArray = [],
  finalObject,
  keys,
  current;
  //get an object of every unique summed array result with the count of times it appeard in summedArray
  finalObject = result.reduce(function(acc, result) {
      var key = result[0] + ":" + result[1] + ":" + result[2] + ":" + result[3];
      if (!acc.hasOwnProperty(key)) {
          acc[key] = {result: result, count: 0}
      }
      acc[key].count += 1;
      return acc;
  }, {});

  keys = Object.keys(finalObject);
  for (var i = 0, l = keys.length; i < l; i++) {
      current = finalObject[keys[i]];
      current.result.push(current.count);
      uniqueArray.push(current.result);
  }

  //create roll object
  
  for (let key in finalObject) {
    finalObject[key].odds = (finalObject[key].count / permutations);
  }

  // for(i = 0; i < uniqueArray.length; i++) {

  //   //get values needed to create the Result object
  //   let tempArray = uniqueArray[i];
  //   let count = tempArray[4];
  //   uniqueArray[i].splice(4,1);
  //   let result = uniqueArray[i];
  //   let odds = (count / permutations).toFixed(6);

  //   let obj = {'Result': result, 'Odds': odds};
  //   finalObject[i] = obj;
  // }

  return finalObject;
}