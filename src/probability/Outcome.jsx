import React from 'react';
import Result from './Result';

const Outcome = (props) => {
    
    const outcome = props.outcome.map((result,index) => <Result key={index} resultType='symbol' result={result} />)
    return (
        <div className='roll-results' id='roll-results'>

            <p className='result-header'>
                OUTCOME
                <span className='successProb'>{props.outcomeProb}% CHANCE OF OUTCOME</span>
            </p>
            <div className='result'> {
                (props.dicePool !== '' && outcome.length === 0)
                    ? <span className='cancelled-result'>All Dice Have Cancelled</span>
                    : outcome
                }
            </div>

        </div>
    )
}

export default Outcome;