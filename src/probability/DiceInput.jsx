import React from 'react';
import {
    validLength,
    validInput,
} from '../helpers/validateInput'

export default class DiceInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            errors: []
        }

        this.validateInput = this.validateInput.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    validateInput(event) {
        let errors = [];
        let inputIsValid = true;

        if(!validInput(event.target.value)) {
            inputIsValid = false;
            errors.push(`INVALID CHARACTER: '${event.target.value.toLowerCase().slice(-1)}' is not allowed`);
          }
        
        if(!validLength(event.target.value,0,24)) {
          inputIsValid = false;
          errors.push("Must have between 1 and 24 characters");
        }
        
        if(inputIsValid) {
          this.props.diceInputChange(event);
        }

        this.setState({errors: errors});

    }

    handleKeyPress(event) {
        
      // check if keyCode matches Enter
      if (event.charCode === 13) {
        this.props.rollDiceClick(); //activate the rollDiceClick event handler
      }

    };

    render() {
        return (
            <div>
                <p className='input-errors'>{this.state.errors.map((error,index) => (<span key={index} className="alert alert-danger">{error}</span>))}</p>
                <div className='dice-input-container'>
                    <input 
                    className='dice-input'
                    type="text"
                    onChange={(event) => this.validateInput(event)}
                    value={this.props.value}
                    placeholder='Enter Your Dice' // Placeholder Text for an Input Field
                    autoFocus // Have the browser automatically start with the ability to type in the input
                    onKeyPress={this.handleKeyPress} // Listen for an enter key to roll the dice
                    />
                    <button className='btn btn-submit' onClick={this.props.rollDiceClick}>Roll</button>
                </div>
            </div>
        )
    }
}