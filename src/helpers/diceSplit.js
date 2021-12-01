export default function getDiceSplit(dice) {
    
  let diceArray = dice.split('').sort();
  let splitDice = [[],[],[],[]];
  
  splitDice[0].push(diceArray.filter(d => d === 'y').join(''));
  splitDice[0].push(diceArray.filter(d => d === 'g').join(''));
  splitDice[0].push(diceArray.filter(d => d === 'b').join(''));
  splitDice[1].push(diceArray.filter(d => d === 'r').join(''));
  splitDice[1].push(diceArray.filter(d => d === 'p').join(''));
  splitDice[1].push(diceArray.filter(d => d === 'k').join(''));
  splitDice[2].push(diceArray.filter(d => d === 'w').join(''));
  splitDice[3].push(diceArray.filter(d => d === 's').join(''));
  splitDice[3].push(diceArray.filter(d => d === 'a').join(''));
  console.log(splitDice);

  return {
    posDice: splitDice[0].join(''),
    negDice: splitDice[1].join(''),
    forceDice: splitDice[2].join(''),
    nonDice: splitDice[3].join('')
  }

//iterate through yellow or red first in order to get ordering correct
//   for (i = 0; i < diceArray.length; i++) {
//       if(typeOf === 'positive') {
//           if(diceArray[i] === 'y') {
//               result.push(diceArray[i]);
//           };
//       } else if(typeOf === 'negative') {
//           if(diceArray[i] === 'r') {
//               result.push(diceArray[i]);
//           };
//       };
//   };

//   //iterate through green or purple next in order to get ordering correct
//   for (i = 0; i < diceArray.length; i++) {
//       if(typeOf === 'positive') {
//           if(diceArray[i] === 'g') {
//               result.push(diceArray[i]);
//           };
//       } else if(typeOf === 'negative') {
//           if(diceArray[i] === 'p') {
//               result.push(diceArray[i]);
//           };
//       };
//   };

//   //iterate through blue or black next in order to get ordering correct
//   for (i = 0; i < diceArray.length; i++) {
//       if(typeOf === 'positive') {
//           if(diceArray[i] === 'b') {
//               result.push(diceArray[i]);
//           };
//       } else if(typeOf === 'negative') {
//           if(diceArray[i] === 'k') {
//               result.push(diceArray[i]);
//           };
//       };
//   };

//   //iterate through force next in order to get ordering correct
//   for (i = 0; i < diceArray.length; i++) {
//       if(typeOf === 'force') {
//           if(diceArray[i] === 'w') {
//               result.push(diceArray[i]);
//           };
//       };
//   };

};