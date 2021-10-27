import React, {useState} from 'react';
dbOperation = require('../../server/dbOperation.js')
//dbOperation = require('../server/dbOperation.js');

function GetData(props) {
    
    //Step 1: query the database for record of the positive and negative roll
    const getRolls = async (url) => {

        const [returnedData, setReturnedData] = useState(['wasssuuuuupppp']);

        const newData = await fetch(url, {
            method: 'POST', //getting the response from the backend
            headers: { //these help us tell the response how we are sending and accepting data
                'content-type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ 
                posRoll: props.positiveDice, //pass in props from app to pass dice to sql statement on backend
                negRoll: props.negativeDice
            })
        })
        .then(res => res.json()); //putting the response in a json format
        console.log(newData);
        setReturnedData(newData[0])
    }

    //take positive and negative roll records from db and get:
    let posCombos = newData[0].Combinations //combinations possible from the roll
    let negCombos = newData[1].Combinations

    let positiveResult = newData[0].Result //result (string separated by commas) # of times each result is possible with roll
    let positiveArray = positiveResult.split(',') //split result into array
    let negativeResult = newData[1].Result
    let negativeArray = negativeResult.split(',')

    //Step 2: query the database for the index # of the rolled result for both positive and negative dice
    const getResult = async (url) => {

        const [returnedData, setReturnedData] = useState(['wasssuuuuupppp']);

        const newData = await fetch(url, {
            method: 'POST', //getting the response from the backend
            headers: { //these help us tell the response how we are sending and accepting data
                'content-type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ 
                positiveRes: props.positiveRes, //pass in props from app to pass dice to sql statement on backend
                negativeRes: props.negativeRes, 
            })
        })
        .then(res => res.json()); //putting the response in a json format
        console.log(newData);
        setReturnedData(newData[0])
    }

    let posIndex = newData[0].Index //set index into variable
    let negIndex = newData[1].Index

    //Step 3: using the index from Step 2:
        //get # of times that result was possible from the positive & negative Arrays defined above
    let posRes = positiveArray[posIndex - 1]
    let negRes = negativeArray[negIndex - 1]

    //# of times the result was possible divided by # of possible combinations is the odds.
    //odds of full result = multiply the odds of the positive result to the odds of the negative result
    let finalOdds = ((posRes / posCombos) * (negRes / negCombos) * 100).toFixed(2)

    return (
        <div className='successChance'>{finalOdds}% CHANCE OF RESULT</div>
    )
}

export default GetData;