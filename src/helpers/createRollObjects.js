import returnPermutations from './permutations';

export default function getAllResults(faceArray, typeOf) {

  // calculate total permutations
  let permutations = 1
  for (let i = 0; i < faceArray.length; i++) {
    permutations *= faceArray[i].length;
  };

  let combinedFaceArray = returnPermutations(faceArray);

  let dicePoolObject, keys;

  //get an object of every unique summed array result with the count of times it appeard in summedArray
  if(typeOf !== 'force') {
    dicePoolObject = combinedFaceArray.reduce(function(acc, combinedFaceArray) {
        var key = combinedFaceArray[0] + ":" + combinedFaceArray[1] + ":" + combinedFaceArray[2] + ":" + combinedFaceArray[3];
        if (!acc.hasOwnProperty(key)) {
            acc[key] = {
              success: combinedFaceArray[0],
              advantage: combinedFaceArray[1],
              triumph: combinedFaceArray[2],
              despair: combinedFaceArray[3],
              count: 0}
        }
        acc[key].count += 1;
        return acc;
    }, {});
  } else {
    dicePoolObject = combinedFaceArray.reduce(function(acc, combinedFaceArray) {
        var key = combinedFaceArray[0] + ":" + combinedFaceArray[1];
        if (!acc.hasOwnProperty(key)) {
            acc[key] = {
              lsp: combinedFaceArray[0],
              dsp: combinedFaceArray[1],
              count: 0}
        }
        acc[key].count += 1;
        return acc;
    }, {});
  }

  keys = Object.keys(dicePoolObject);

  //create roll object
  
  for (let key in dicePoolObject) {
    dicePoolObject[key].prob = (dicePoolObject[key].count / permutations);
  }

  return dicePoolObject;
}