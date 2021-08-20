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
    this.handleRollClick = this.handleRollClick.bind(this);
    this.handleDiceInput = this.handleDiceInput.bind(this);
  }

  handleRollClick() {
      // define a handleRollDiceClick function
  // this function should update rolledDice in state and reset diceInputValue to an empty string
  }

  handleDiceInput() {
    // define a handleDiceInputChange function
  // this function should handle validation before changing state
  // if handling the validation globally:
  // first, I'd create file in the helpers directory (similar to FormErrors).
  // that file should export two functions validateLength and validateDiceInput(or whatever you want to call it)
  // import the above functions and call them here passing in the event.target.value 
  // if validation fails, you just update state with the pervious state instead of with the new string
  // otherwise you update state with event.target.valu
  // if handlling the validation locally: 
  // this function should probably take two arguments
  // a boolean that states whether or not validation passed
  // and event.target.value
  // you need this so you can update the state with either the new sting or the old string and render the right value in DiceInput
  }

  render() {

    return(
      <div className="App">

        <Header style={this.state.style} headerClick={this.handleClick}/>
        <br />
        <DiceInput validateInput={this.handleDiceInput}/>
        {/* Add value(or whatever you want to name it) prop to DiceInput and set it equal to diceInputValue of this.state */}
        {/* Add rollDiceClick(or whatever you want to name it) prop to DiceInput and set it equal to handler function */}
        {/* Add diceInputChange(or whatever you want to name it) prop to DiceInput and set it equal to handler function */}
        {/* If you want to alert the user on errors, add error prop to DiceInput ans set it equal to error array */}
        {/* if you decide to handle validation locally, ignore the above line */}
        
      </div>
    );
  }
}

export default App;
