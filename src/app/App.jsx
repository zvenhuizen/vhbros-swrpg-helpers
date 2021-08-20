import Header from './Header.js';
import React from 'react';
import DiceInput from '../probability/DiceInput'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      style: {
        backgroundColor: '#232323'
      }
    }
    this.handleRollClick = this.handleRollClick.bind(this);
    this.handleDiceInput = this.handleDiceInput.bind(this);
  }

  handleRollClick() {
    //Insert code to roll dice
  }

  handleDiceInput() {
    //Insert code to update state with successProbability
  }

  render() {
    return(
      <div className="App">

        <Header style={this.state.style} headerClick={this.handleClick}/>
        <br />
        <DiceInput validateInput={this.handleDiceInput}/>
        
      </div>
    );
  }
}

export default App;
