import React from 'react';
import Header from './Header';
import Outcome from '../probability/Outcome';
import DiceFaceResults from '../probability/DiceFaceResults';
import DiceInput from '../probability/DiceInput';
import cancelDicePoolResults from '../helpers/cancelDicePoolResults';
import rollDicePool from '../helpers/rollDicePool';
import calculateSuccessProb from '../helpers/calculateSuccessProb';
import successProb from '../helpers/successProb';
import {validLength} from '../helpers/validateInput'
import { getOdds } from '../helpers/getOdds';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dicePoolInputValue: '',
      diceFaceResults: [],
      outcome: [],
      dicePool: '',
      successProb: '--.--',
      outcomeProb: '--.--',
      errors: []
    }

    this.handleDiceInput = this.handleDiceInput.bind(this);
    this.handleRollClick = this.handleRollClick.bind(this);
  }

  handleDiceInput(event) {

    let successPct = '--.--';

    if(event.target.value !== '') {
      successPct = successProb(calculateSuccessProb(event.target.value));
      }

    this.setState({
      dicePoolInputValue: event.target.value,
      diceFaceResults: [],
      outcome: [],
      errors: [],
      dicePool: '',
      successProb: successPct,
      outcomeProb: '--.--'
    });
  }

  handleRollClick(event) {
    // Validate length to ensure there is at least 1 die to roll
    let errors = [];

    if(validLength(this.state.dicePoolInputValue,1,24)) {
      const diceFaceResultsArray = rollDicePool(this.state.dicePoolInputValue); //returns full, uncancelled result string (i.e. ssatf)
      const outcome = cancelDicePoolResults(diceFaceResultsArray); //returns net results nested array (i.e. [[1, s], [1, a]] )

      // RUN THEN ON GETOODDS AND SET STATE AFTER THEN COMPLETES
      // first had to turn getOdds into an async function to get the results to return here.
      getOdds(this.state.dicePoolInputValue, diceFaceResultsArray).then(res => {
        console.log(`THIS IS THE GET ODDS IN APP SPEAKING: ${res}`);
        this.setState({
          outcomeProb: (res*100).toFixed(2)
        })
      });

      this.setState({
          diceFaceResults: diceFaceResultsArray,
          outcome: outcome,
          dicePoolInputValue: '',
          dicePool: this.state.dicePoolInputValue
        })
        
    } else {
      errors.push("Cannot roll 0 dice");
      
      this.setState({
        successProb: '--.--',
        outcomeProb: '--.--',
        diceFaceResults: [],
        outcome: [],
        dicePool: '',
        dicePoolInputValue: '',
        errors: errors
      })
    }
  }

  render() {

    return(
      <div className="App">

        <Header />
        <p className='input-errors'>{this.state.errors.map((error,index) => (<span key={index} className="alert alert-danger">{error}</span>))}</p>
        <DiceInput
          value={this.state.dicePoolInputValue}
          diceInputChange={this.handleDiceInput}
          rollDiceClick={this.handleRollClick}
          autofocus
        />
        
        <div className='results-container'>

          <DiceFaceResults 
            diceFaceResults={this.state.diceFaceResults}
            dicePool={this.state.dicePool}
            dice={this.state.dicePoolInputValue}
            successProb={this.state.successProb} />

          <Outcome
            outcomeProb={this.state.outcomeProb}
            outcome={this.state.outcome}
            dicePool={this.state.dicePool} />

        </div>
      </div>
    );
  }
}

export default App;


