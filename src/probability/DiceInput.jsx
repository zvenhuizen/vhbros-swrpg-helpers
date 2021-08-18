//Import ProbabilityCalculator from ./Calculator.js
import React from 'react';

class DiceInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        /*The following needs to be updated to automatically render a
        new probability % in the other component. To do this I will need
        to import the probability calculator from Keith's file.*/
        this.setState({value: event.target.value}); //On each keystroke, update the input box.
    }

    handleSubmit(event) {
        //The following needs to be changed to handle the roll event
        alert('A roll was submitted: ' + this.state.value); //On clicking 'roll' button, alert a roll has been made
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <legend>Dice combination:</legend>
                    <input type="text" value={this.state.value} onChange={this.handleChange}/>
                    <input type="submit" value="Roll" />
                </form>
            </div>
        );
    }
}

export default DiceInput;