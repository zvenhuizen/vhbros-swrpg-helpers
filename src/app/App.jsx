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
import getDiceSplit from '../helpers/diceSplit';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      diceInputValue: '',
      diceResult: [],
      rollResult: [],
      rolledDice: '',
      posDice: '',
      negDice: '',
      forceDice: '',
      posRes: [],
      negRes: [],
      forceArray: [],
      successOdds: '--.--',
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
      posDice: '',
      negDice: '',
      forceDice: '',
      posRes: [],
      negRes: [],
      forceArray: [],
      successOdds: sucPct
    });
  }

  handleRollClick() {
    // Validate length to ensure there is at least 1 die to roll
    let errors = [];

    if(validLength(this.state.diceInputValue,1,24)) {
      const diceResult = rollDice(this.state.diceInputValue);
      const rollResult = cancelResults(diceResult);
      const posDice = getDiceSplit(this.state.diceInputValue,'positive');
      const negDice = getDiceSplit(this.state.diceInputValue,'negative');
      const forceDice = getDiceSplit(this.state.diceInputValue,'force');

      var suc = (this.state.diceInputValue.match(/s/g) || []).length;
      var adv = (this.state.diceInputValue.match(/a/g) || []).length;
      var tri = (this.state.diceInputValue.match(/t/g) || []).length;
      var fai = (this.state.diceInputValue.match(/f/g) || []).length;
      var thr = (this.state.diceInputValue.match(/o/g) || []).length;
      var des = (this.state.diceInputValue.match(/d/g) || []).length;
      var lsp = (this.state.diceInputValue.match(/l/g) || []).length;
      var dsp = (this.state.diceInputValue.match(/n/g) || []).length;

      const queryResults = getResultArrays(diceResult,suc,adv,tri,fai,thr,des,lsp,dsp);
      const posRes = queryResults[0];
      const negRes = queryResults[2];
      const forceArray = [lsp,dsp];
    
      this.setState({
        diceResult: diceResult,
        rollResult: rollResult,
        rolledDice: this.state.diceInputValue,
        posDice: posDice,
        negDice: negDice,
        forceDice: forceDice,
        posRes: posRes,
        negRes: negRes,
        forceArray: forceArray,
        diceInputValue: '',
      })
    } else {
      errors.push("Cannot roll 0 dice");
      
      this.setState({
        successOdds: '--.--',
        diceResult: [],
        rollResult: [],
        rolledDice: '',
        posDice: '',
        negDice: '',
        forceDice: '',
        posRes: [],
        negRes: [],
        forceArray: [],
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
            results={this.state.rollResult}
            rolledDice={this.state.rolledDice}
            posDice={this.state.posDice}
            negDice={this.state.negDice}
            forceDice={this.state.forceDice}
            posRes={this.state.posRes}
            negRes={this.state.negRes}
            forceArray={this.state.forceArray} />

        </div>
      </div>
    );
  }
}

export default App;
