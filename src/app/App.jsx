import Header from './Header.js';
import React from 'react';
import DiceInput from '../probability/DiceInput'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      diceInputValue: '',
      rolledDice: '',
      style: {
        backgroundColor: '#232323'
      }
    }

    this.handleDiceInput = this.handleDiceInput.bind(this);
    this.handleRollClick = this.handleRollClick.bind(this);
  }

  handleDiceInput(event) {
    this.setState({diceInputValue: event.target.value});
  }

  handleRollClick(event) {
    this.setState({rolledDice: event.target.value});
    this.setState({diceInputValue: ''});
  }
  

  render() {

    return(
      <div className="App">

        <Header style={this.state.style} />
        <br />
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
