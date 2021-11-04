import React, { useState, useEffect } from 'react';
import Result from './Result';
import firebaseDB from '../firebase.js';
import { forceCombos } from '../helpers/Combos';

const RollResults = (props) => {

    let posRoll = props.posDice
    let negRoll = props.negDice

    //setting state for my roll object
    var [rollObjects,setRollObjects] = useState({
        Roll: '',
        Type: '',
        Combinations: null,
        Result: null
    })

    //returning the roll object from the database and storing it in the
    //current state of the rollObjects created above
    firebaseDB.child('rolls').on('value',(snapshot) => {
        if(snapshot.val() != null)
            setRollObjects({
                ...snapshot.val()
            })
    })

    //convert rollObject to array
    const rollArray = Object.keys(rollObjects).map((key, index) => {
        const roll = rollObjects[key];
        return roll;
    });
    
    //iterate over array to find the current data for the positive and negative dice rolled
    let posCombos = 1;
    let negCombos = 1;
    let posRes, negRes;
    let posArray = [];
    let negArray = [];
    for(var i; i < rollArray.length; i++) {

        //get positive dice info
        if(rollArray[i].Roll === posRoll) {
            posCombos = rollArray[i].Combinations;
            posRes = rollArray[i].Result;
            posArray = posRes.split(',');
        };
        //get negative dice info
        if(rollArray[i].Roll === negRoll) {
            negCombos = rollArray[i].Combinations;
            negRes = rollArray[i].Result;
            negArray = negRes.split(',');
        };
    }

    let posResult = props.posRes;
    let negResult = props.negRes;

    //setting state for my results object
    var [resultsObjects,setResultsObjects] = useState({
        Result: []
    })

    //returning the results object from the database and storing it in the
    //current state of the rollObjects created above
    firebaseDB.child('results').on('value',(snapshot) => {
        if(snapshot.val() != null)
            setResultsObjects({
                ...snapshot.val()
            })
    })

    //convert resultsObject to array
    const resultsArray = Object.keys(resultsObjects).map((key, index) => {
        const result = resultsObjects[key];
        return result;
    });

    //iterate over the array to find the correct index of the positive & negative result
    for(var i; i < resultsArray.length; i++) {

        //get positive dice info
        if(resultsArray[i].Roll === posResult) {
            posIndex = resultsArray[i].Result;
        };
        //get negative dice info
        if(resultsArray[i].Roll === negResult) {
            negIndex = resultsArray[i].Result;
        };
    }

    //get # of times the results rolled for pos and neg dice was possible
    let posProb, negProb;
    if(posArray.length > 0) {
        posProb = posArray[posIndex]
    };
    if(negArray.length > 0) {
        negProb = negArray[negIndex]
    };

    //calculate force dice info
    let forceArray = props.forceArray;
    let forcePoss = (12 ^ props.forceDice.length)
    let forceRes = 1;

    if(forceArray.toString() === forceCombos.one.result.toString()) {
        forceRes = forceCombos.one.qty;
    } else if(forceArray.toString() === forceCombos.two.result.toString()) {
        forceRes = forceCombos.two.qty;
    } else if(forceArray.toString() === forceCombos.three.result.toString()) {
        forceRes = forceCombos.three.qty;
    } else if(forceArray.toString() === forceCombos.four.result.toString()) {
        forceRes = forceCombos.four.qty;
    };

    //calculate probability
    let resultsDec = (posProb / posCombos) * (negProb / negCombos) * (forceRes / forcePoss)
    let finalResults = (resultsDec * 100).toFixed(2)

    const results = props.results.map((result,index) => <Result key={index} resultType='symbol' result={result} />)
    return (
        <div className='roll-results' id='roll-results'>

            <p className='result-header'>RESULTS <span className='successChance'>{finalResults}% ODDS OF RESULT</span></p>
            <div className='result'>{(props.rolledDice !== '' && results.length === 0) ? <span className='cancelled-result'>All Dice Have Cancelled</span> : results}</div>

        </div>
    )
}

export default RollResults;
