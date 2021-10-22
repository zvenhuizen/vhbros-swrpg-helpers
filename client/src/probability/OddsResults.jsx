import React, { useEffect } from "react";
import Axios from 'axios';

const OddsResults = (props) => {

    let posOdds = ''
    let negOdds = ''
    const positiveDice = props.positiveDice;
    const negativeDice = props.negativeDice;
    console.log(positiveDice, negativeDice)

    useEffect(() => {
        Axios.get('http://localhost:3001/api/get', {
          positiveDice: positiveDice,
          negativeDice: negativeDice
        }).then((response) => {
          console.log(response.data);
          posOdds = response.data;
        }).catch(() => {
            console.log('There is an error')
        });
      }, []);
      console.log(posOdds, negOdds)

      let rollOdds = (posOdds * negOdds * 100).toFixed(2)

    return (
        <div className='roll-results' id='roll-results'>

            <p className='result-header'>ODDS</p>
            <div className='odds'>{rollOdds}% Odds of that roll</div>

        </div>
    )
}

export default OddsResults;
