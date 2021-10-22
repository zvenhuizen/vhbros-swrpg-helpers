import { useEffect } from 'react';
import Axios from 'axios'
import getDiceSplit from './diceSplit';

export default function dbOdds(props) {
    
    let dice = this.props.rolledDice

    const positiveDice = getDiceSplit(dice, 'positive');
    const negativeDice = getDiceSplit(dice, 'negtative');

    useEffect(() => {
        Axios.get('http://localhost3001/api/get', {
          positiveDice: positiveDice, 
          negativeDice: negativeDice
        }).then((response) => {
          rollOdds = response.data;
        });
      }, []);

      return rollOdds;
}