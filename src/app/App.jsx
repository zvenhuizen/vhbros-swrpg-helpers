import React from 'react';
import Header from './Header';
import RollResults from '../probability/RollResults';
import DiceResults from '../probability/DiceResults';
import DiceInput from '../probability/DiceInput';
import cancelResults from '../helpers/cancelResults';
import rollDice from '../helpers/rollDice';
import calculateSuccessProb from '../helpers/calculateSuccessProbability';
import successOdds from '../probability/SuccessOdds';
import {validLength} from '../helpers/validateInput'
import GetOdds from '../probability/getOdds';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      diceInputValue: '',
      diceResult: [],
      rollResult: [],
      rolledDice: '',
      successOdds: '--.--',
      finalOdds: '--.--',
      errors: []
    }

    this.handleDiceInput = this.handleDiceInput.bind(this);
    this.handleRollClick = this.handleRollClick.bind(this);
  }

  handleDiceInput(event) {

    let sucPct = '--.--';

    if(event.target.value !== '') {
      sucPct = successOdds(calculateSuccessProb(event.target.value));
      }

    this.setState({
      diceInputValue: event.target.value,
      diceResult: [],
      rollResult: [],
      errors: [],
      rolledDice: '',
      successOdds: sucPct,
      finalOdds: '--.--'
    });
  }

  handleRollClick(event) {
    // Validate length to ensure there is at least 1 die to roll
    let errors = [];

    if(validLength(this.state.diceInputValue,1,24)) {
      const diceResult = rollDice(this.state.diceInputValue); //returns full, uncancelled result string (i.e. ssatf)
      const rollResult = cancelResults(diceResult); //returns net results nested array (i.e. [[1, s], [1, a]] )
      const finalOdds = GetOdds(this.state.diceInputValue,diceResult)
    
      this.setState({
        diceResult: diceResult,
        rollResult: rollResult,
        finalOdds: finalOdds,
        diceInputValue: ''
      })
    } else {
      errors.push("Cannot roll 0 dice");
      
      this.setState({
        successOdds: '--.--',
        finalOdds: '--.--',
        diceResult: [],
        rollResult: [],
        rolledDice: '',
        diceInputValue: '',
        errors: errors
      })
    }
  }

  render() {

    return(
      <div className="App">

        <Header style={this.state.style} />
        <p className='input-errors'>{this.state.errors.map((error,index) => (<span key={index} className="alert alert-danger">{error}</span>))}</p>
        <DiceInput
          value={this.state.diceInputValue}
          diceInputChange={this.handleDiceInput}
          rollDiceClick={this.handleRollClick}
          autofocus />
        
        <div className='results-container'>

          <DiceResults 
            results={this.state.diceResult}
            rolledDice={this.state.rolledDice}
            dice={this.state.diceInputValue}
            successChance={this.state.successOdds} />
          <RollResults
            finalOdds={this.state.finalOdds}
            results={this.state.rollResult}
            rolledDice={this.state.rolledDice} />

        </div>
      </div>
    );
  }
}

export default App;


