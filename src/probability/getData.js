import React, { useState } from 'react';

function GetData(props) {
    
//Step 1: query the database for record of the positive and negative roll
    const [returnedRoll, setReturnedRoll] = useState('hey');   

    const fetchData = async () => {

        const newData = await fetch('/api/roll', {
            method: 'POST', //getting the response from the backend
            headers: {      //these help us tell the response how we are sending and accepting data
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
        setReturnedRoll(newData)
    };

//Step 2: query the database for the index # of the rolled result for both positive and negative dice
    const [returnedIndex, setReturnedIndex] = useState(['heyo']);

    const fetchResult = async () => {

        const newData = await fetch('/api/result', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                posResult: props.positiveRes,
                negResult: props.negativeRes,
            })
        })
            .then(res => res.json()); //putting the response in a json format
        console.log(newData);
        setReturnedIndex(newData);
    };

//Step 3: take the data returned by each query and get 
  //1: the total combinations possible with the roll
  //2: the # of times it was possible to roll the result

  //1: combinations possible from the roll
    let posCombos = returnedRoll[0].Combinations
    let negCombos = returnedRoll[1].Combinations

    //get array of qty of times it is possible to roll each possible result
    let positiveResult = returnedRoll[0].Result //stored as string in database, comma separated
    let negativeResult = returnedRoll[1].Result
    let positiveArray = positiveResult.split(',') //split result into array
    let negativeArray = negativeResult.split(',')
    
    //find index of the result in above array from Result table in db
    let posIndex = returnedIndex[0].Index
    let negIndex = returnedIndex[1].Index

  //2: # of times it was possible to roll the result
    let posRes = positiveArray[posIndex - 1]
    let negRes = negativeArray[negIndex - 1]

    //odds = #2/#1 --do this for both positive and negative dice rolled
    //odds of full result = multiply the odds of the positive result to the odds of the negative result
    let finalOdds = ((posRes / posCombos) * (negRes / negCombos) * 100).toFixed(2)

    return (
        <div className='successChance'>{finalOdds}% CHANCE OF RESULT</div>
    )
}

export default GetData;