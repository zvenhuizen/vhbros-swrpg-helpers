import React, { useState, useEffect } from 'react';
import Result from './Result';
import firebaseDB from '../firebase';

const RollResults = (props) => {

    var [rollObjects,setRollObjects] = useState({
        Roll: '',
        Type: '',
        Combinations: null,
        Result: null
    })

    useEffect(()=>{
        firebaseDB.child('rolls').on('value',foundRoll=>{
            if(foundRoll.val() != null)
            setRollObjects({
                ...foundRoll.val()
            })
        })
    },[])//similar to componentDidMount
    
    const addOrCalc = obj => {
        firebaseDB.child('rolls').push(
            obj,
            err => {
                if(err)
                console.log(err);
            }
        )
    }
    
    let posDice = props.posDice;
    let negDice = props.negDice;
    
    //search in db for current roll and return to that roll object to variable
    if(posDice) {
        var foundPos = rollObjects.filter(function(rollObject) {
            return rollObject.Roll === posDice
        })
    }
    if(negDice) {
        var foundNeg = rollObjects.filter(function(rollObject) {
            return rollObject.Roll === negDice
        })
    }

    //if roll wasn't found, insert it into the db
    if(!foundPos) {
        //insert positive dice into db
    }
    if(!foundNeg) {
        //insert negative dice into db
    }

    

    const results = props.results.map((result,index) => <Result key={index} resultType='symbol' result={result} />)
    return (
        <div className='roll-results' id='roll-results'>

            <p className='result-header'>RESULTS </p>
            <div className='result'>{(props.rolledDice !== '' && results.length === 0) ? <span className='cancelled-result'>All Dice Have Cancelled</span> : results}</div>

        </div>
    )
}

export default RollResults;
