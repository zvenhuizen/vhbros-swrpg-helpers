import React from 'react';
import Result from './Result';

const Outcome = (props) => {
    
    const outcome = [];
    if(props.outcome.success > 0) { outcome.push(<Result key='success' resultType='symbol' result={[props.outcome.success, 's']} />) };
    if(props.outcome.success < 0) { outcome.push(<Result key='failure' resultType='symbol' result={[props.outcome.success * -1, 'f']} />) };
    if(props.outcome.advantage > 0) { outcome.push(<Result key='advantage' resultType='symbol' result={[props.outcome.advantage, 'a']} />) };
    if(props.outcome.advantage < 0) { outcome.push(<Result key='threat' resultType='symbol' result={[props.outcome.advantage * -1, 't']} />) };
    if(props.outcome.triumph > 0) { outcome.push(<Result key='triumph' resultType='symbol' result={[props.outcome.triumph, 'r']} />) };
    if(props.outcome.despair > 0) { outcome.push(<Result key='despair' resultType='symbol' result={[props.outcome.despair, 'd']} />) };
    if(props.outcome.lsp > 0) { outcome.push(<Result key='lsp' resultType='symbol' result={[props.outcome.lsp, 'l']} />) };
    if(props.outcome.dsp > 0) { outcome.push(<Result key='dsp' resultType='symbol' result={[props.outcome.dsp, 'n']} />) };
    
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