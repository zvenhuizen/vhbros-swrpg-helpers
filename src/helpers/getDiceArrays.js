import { diceCombos } from './combos';
import getDiceSplit from './diceSplit'

export default function DiceArrays(dice) {

  let posDice = getDiceSplit(dice).posDice.split('')
  let negDice = getDiceSplit(dice).negDice.split('')

  let posDiceArray = posDice.map(sides => {
    switch(sides) {
      case 'y':
        return diceCombos.yellow;
      case 'g':
        return diceCombos.green;
      case 'b':
        return diceCombos.blue;
      default:
        return null;
    }
  });

  let negDiceArray = negDice.map(sides => {
    switch(sides) {
      case 'r':
        return diceCombos.red;
      case 'p':
        return diceCombos.purple;
      case 'k':
        return diceCombos.black;
      default:
        return null;
    }
  });

  posDiceArray = posDiceArray.filter(e => e != null);
  negDiceArray = negDiceArray.filter(e => e != null);

  return [posDiceArray, negDiceArray];
}