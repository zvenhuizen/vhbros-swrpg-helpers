export default function getDicePools(dicePool) {
    
  let dicePoolArray = dicePool.split('').sort();
  let splitDice = [[],[],[],[]];
  
  splitDice[0].push(dicePoolArray.filter(d => d === 'y').join(''));
  splitDice[0].push(dicePoolArray.filter(d => d === 'g').join(''));
  splitDice[0].push(dicePoolArray.filter(d => d === 'b').join(''));
  splitDice[1].push(dicePoolArray.filter(d => d === 'r').join(''));
  splitDice[1].push(dicePoolArray.filter(d => d === 'p').join(''));
  splitDice[1].push(dicePoolArray.filter(d => d === 'k').join(''));
  splitDice[2].push(dicePoolArray.filter(d => d === 'w').join(''));
  splitDice[3].push(dicePoolArray.filter(d => d === 's').join(''));
  splitDice[3].push(dicePoolArray.filter(d => d === 'a').join(''));

  return {
    posDicePool:    splitDice[0].join(''),
    negDicePool:    splitDice[1].join(''),
    forceDicePool:  splitDice[2].join(''),
    symbols:        splitDice[3].join('')
  }
};