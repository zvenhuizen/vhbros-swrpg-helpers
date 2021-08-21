import React from 'react';
import Header from './Header';
import RollResults from '../probability/RollResults';
import DiceResults from '../probability/DiceResults';
import DiceInput from '../probability/DiceInput';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      diceInputValue: '',
      diceResult: ['r', 'ss', 'sa', 'd', 'ff', 't', 'll'],
      rollResult: ['s', 'a', 'r', 'f', 't', 'd', 'l', 'n'],
      rolledDice: 'ygbrpkw',
      rollOdds: '',
      successOdds: ''
    }

    this.handleDiceInput = this.handleDiceInput.bind(this);
    this.handleRollClick = this.handleRollClick.bind(this);
  }

  handleDiceInput(event) {
    this.setState({diceInputValue: event.target.value});
  }

  handleRollClick(event) {
    // I wonder if you should validLength() first to make sure there is at least one die to roll?
    
    // I think event.target.value on an onClick won't return what you want
    // I think you want to set rolledDice: this.state.diceInputValue
    // state will have the most up to date version of what's in the input
    this.setState({rolledDice: event.target.value});
    this.setState({diceInputValue: ''});
  }

  render() {

    return(
      <div className="App">

        <Header style={this.state.style} />
        <DiceResults results={this.state.diceResult} dice={this.state.rolledDice}/>
        <RollResults results={this.state.rollResult} />
        <DiceInput 
          value={this.state.diceInputValue}
          diceInputChange={this.handleDiceInput}
          rollDiceClick={this.handleRollClick}
        />
        
      </div>
    );
  }
}

export default App;
