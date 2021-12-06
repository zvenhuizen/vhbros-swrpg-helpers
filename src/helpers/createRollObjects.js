export default function getAllResults(dice) {

  // calculate total permutations
  let permutations = 1
  for (let i = 0; i < dice.length; i++) {
    permutations *= dice[i].length;
  }

  //get all dice combinations into array as strings
  let result = combine(dice); //needs to be replaced with permute(dice)
  let checkIt = permute(dice);
  console.log(checkIt)
  
  //convert strings in array into nested arrays
  let resultArray = [];
  result.forEach(res => resultArray.push(res.split(';')));

  let sumArray = [];
  resultArray.map(res => {
    let tempArray = []
    res.forEach(num => tempArray.push(num.split(',')));
    sumArray.push(tempArray);
  })

  let intArray = sumArray.map(r => {
    return r.map(s => {
      return s.map(n => {
        return parseInt(n,10);
      })
    })
  })

  //sum each combination of arrays inside larger array
  //I'm sure this could be turned into a recursive solution
  let summedArray = []
  for(var i = 0; i < intArray.length; i++) {

    let sumResult = [];
    let tempArray = intArray[i];
    if(intArray.length > 1) {
      sumResult = tempArray.reduce((r, a) => a.map((b, y) => (r[y] || 0) + b), []) 
    } else {
      sumResult = intArray[0]; //if only one element in intArray, then result is that element
    }
    summedArray.push(sumResult)
  }

  let uniqueArray = [],
  counts,
  keys,
  current;
  //get an object of every unique summed array result with the count of times it appeard in summedArray
  counts = summedArray.reduce(function(acc, elem) {
      var key = elem[0] + ":" + elem[1] + ":" + elem[2] + ":" + elem[3];
      if (!acc.hasOwnProperty(key)) {
          acc[key] = {elem: elem, count: 0}
      }
      acc[key].count += 1;
      return acc;
  }, {});
  console.log(counts)

  keys = Object.keys(counts);
  for (var i = 0, l = keys.length; i < l; i++) {
      current = counts[keys[i]];
      current.elem.push(current.count);
      uniqueArray.push(current.elem);
  }

  //create roll object
  let finalObject = {}

  for(i = 0; i < uniqueArray.length; i++) {

    //get values needed to create the Result object
    let tempArray = uniqueArray[i];
    let count = tempArray[4];
    uniqueArray[i].splice(4,1);
    let result = uniqueArray[i]
    let odds = (count / permutations).toFixed(6);

    let obj = {'Result': result, 'Odds': odds}
    finalObject[i] = obj
  }

  console.log(finalObject)
  return finalObject
}