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

  return {
    posDice: splitDice[0].join(''),
    negDice: splitDice[1].join(''),
    forceDice: splitDice[2].join(''),
    nonDice: splitDice[3].join('')
  }
};