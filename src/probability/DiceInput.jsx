import React from 'react';
import {
    validLength,
    validInput,
} from '../helpers/validateInput'

class DiceInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            errors: []
        }

        this.validateInput = this.validateInput.bind(this);
    }

    validateInput(event) {
        let errors = [];
        let inputIsValid = true;
        
        // okay, I see a couple issues here.
        // the first is that you are passing event.target.value to validInput
        // event.target.value is simply a string, you would need the whole event to access event.keyCode in validInput

        // the bigger issue is I led you astray with the option of keyCode on the event.
        // apparantly the onChange event doesn't have access to the keyCode
        // keyCode is only available on the onKeyPress, onKeyDown, onKeyUp events...
        // my bad.
        // two ways around this... use the splice method on event.target.value and compare to the letter
        // to do this, you'd continue to pass event.target.value to validInput and your switch statement would be switch(event.toLowerCase().splice(-1))
        // you case statements would be case 'y': case: 'r', etc.
        // the second way would be to use onKeyPress on your input... this is probably more complicated because it would really affect your logic in validLength
        // as well as how you handle the global update of state value... 

        if(!validInput(event.target.value)) {
            inputIsValid = false;
            errors.push("Invalid characters")
        }
        else if(validLength(event.target.value)) {
            inputIsValid = false;
            errors.push("Max of 24 characters");
        }
        else {
            inputIsValid = true;
        }
        this.setState({errors});
        return inputIsValid;
    }

    render() {
        return (
            <div>
                <legend>Dice combination:</legend>
                {/* I just remembered that you will need to set a value prop for the input and set it equal to this.props.value */}
                {/* this.props.value will be pushed the value of this.state.value in the App Component */}
                {/* otherwise, you'll be letting the browser functionality handle your input and not the App state */}
                <input type="text" onChange={(event) => this.validateInput(event)} />

                {/* probably better to move the below code to below the buttom... I know I'm the one who told you to but it here... */}
                {this.state.errors.map((error, index) => (<p key={index}>{error}</p>))}
                <button className='btn btn-submit' onClick={this.props.rollDiceClick}>Roll</button>
            </div>
        )
    }
}

export default DiceInput;