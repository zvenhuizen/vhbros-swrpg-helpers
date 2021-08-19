import React , {Component} from 'react';
import {
    minMaxLength,
    validInput,
} from './FormErrors'

class DiceInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // remove value from state as this will be handled globall in App
            value: ''
            // add errors state and set it to an empty array or object (depends on how you're outputting your errors)
        }

        this.handleUserInput = this.handleUserInput.bind(this);
        this.handleRollClick = this.handleRollClick.bind(this);
    }

    // if you want to handle validation locally, I'd change this name to evidence that.
    // maybe name the function validateInput or something similar
    // then set the onChange prop of the input field equal to validateInput (or whatever you named it)
    handleUserInput = (e) => {

        // if handling validation locally, I would outsource the validation to a separate file and call them in this function

        // first, I'd create file in the helpers directory (similar to FormErrors).
        // that file should export two functions validateLength and validateDiceInput(or whatever you want to call it)
        // import the above functions and call them here passing in the event.target.value 

        // you can then call props.diceInputChange(or whatever you named the prop) and pass it the true of false base on whether validations passed and event.target.value
        // this will update state, which will update your input
        const {name, value}= e.target;
        let currentFormErrors = this.state.currentFormErrors;

        switch (name) {
            case 'dice':
                if(minMaxLength(value, 1, 24)) {
                    currentFormErrors[name]=`There must be between 1 and 24 characters`;
                } else if(!value || validInput(value)) {
                    currentFormErrors[name]=`Text entered is invalid`;
                } else {
                    delete currentFormErrors[name];
                }
                break;
            default:
                break;
        }
    } //On each keystroke

    handleRollClick(event) {
        //The following needs to be changed to handle the roll event
        alert('A roll was submitted: ' + this.state.value); //On clicking 'roll' button, alert a roll has been made
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <legend>Dice combination:</legend>

                {/* set input onChange have it call props.diceInputChange(or whatever you named the prop) and pass it the event to activate the global handleChange */}
                {/* see comment in handleUserInput if you'd rather handle validation locally (which I think may make the most sense) */}
                {/* use the value prop and set it equal to props.value(or whatever you named the prop) to get the value from global state */}
                {/* conditionally add a p element that lists the errors above the input field if there are errors*/}
                {/* because there you won't update the input if validation fails, you don't have to style the input for an error, because you will just prevent the error */}
                {/* but it is a good idea to let the user know that they aren't seeing what they typed because it didn't pass validation */}
                {/* that's why I'd add the p element with an explanation of the error */}
                <input 
                  className={this.state.currentFormErrors && this.state.currentFormErrors.dice
                    ? 'form-control error'
                    : 'form-control'
                  }
                  type="text" 
                  noValidate 
                  onBlur={this.handleUserInput}
                />

                {/* set the onClick event equal to props.rollDiceClick(or whatever you named it) to activate the global handleClick */}
                <button
                  className='btn btn-submit'
                  disabled={Object.entries(this.state.currentFormErrors || {}).length > 0}
                  onClick={this.handleRollClick}>
                    Roll
                </button>
                <ul>
                    {Object.entries(this.state.currentFormErrors || {}).map(([prop, value]) => {
                        return (
                            <li className='error-message' key={prop}>
                                {value}
                            </li>
                        );
                    })}
                </ul>
            </div>
        )
    }
}

export default DiceInput;