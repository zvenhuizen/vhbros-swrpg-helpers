import React from 'react';
import Header from './Header';
import RollResults from '../probability/RollResults';
import DiceResults from '../probability/DiceResults';
import DiceInput from '../probability/DiceInput';
import cancelResults from '../helpers/cancelResults';
import rollDice from '../helpers/rollDice';
import calculateProbability from '../helpers/calculateProbability';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      diceInputValue: '',
      diceResult: [],
      rollResult: [],
      rolledDice: '',
      rollOdds: '',
      successOdds: '--.--'
    }

    this.handleDiceInput = this.handleDiceInput.bind(this);
    this.handleRollClick = this.handleRollClick.bind(this);
  }

  handleDiceInput(event) {

    let sucPct = '--.--';
    let probabilities, sucDec;
    if(event.target.value !== '') {
      probabilities = calculateProbability(event.target.value);
      if (probabilities[0]) {
        sucDec = probabilities[0].reduce((a, b) => a + b, 0) - probabilities[0][0];
        sucPct = (sucDec * 100).toFixed(2);
      }
    }


    this.setState({
      diceInputValue: event.target.value,
      diceResult: [],
      rollResult: [],
      rolledDice: '',
      rollOdds: '',
      successOdds: sucPct
    });
  }

  handleRollClick(event) {
    // I wonder if you should validLength() first to make sure there is at least one die to roll?

    const diceResult = rollDice(this.state.diceInputValue);
    const rollResult = cancelResults(diceResult);
    const probabilities = calculateProbability(this.state.diceInputValue);
    const sucDec = probabilities[0].reduce((a, b) => a + b, 0) - probabilities[0][0];
    const sucPct = (sucDec * 100).toFixed(2);
  
    this.setState({
      diceResult: diceResult,
      rollResult: rollResult,
      rolledDice: this.state.diceInputValue,
      diceInputValue: '',
      successOdds: sucPct
    })

  }

  render() {

    return(
      <div className="App">

        <Header style={this.state.style} />

        <DiceInput 
          value={this.state.diceInputValue}
          diceInputChange={this.handleDiceInput}
          rollDiceClick={this.handleRollClick}
        />
        
        <div className='results-container'>
          <DiceResults results={this.state.diceResult} rolledDice={this.state.rolledDice} dice={this.state.diceInputValue} successChance={this.state.successOdds} />
          <RollResults results={this.state.rollResult} />
        </div>
        
      </div>
    );
  }
}

export default App;
