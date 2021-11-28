import { getResultArrays }  from "../helpers/calculateFullProbability";
import getDiceSplit         from "../helpers/diceSplit";
import firebaseDb           from '../firebase.js';
import { ref,
        get,
        query,
        equalTo,
        orderByChild }      from 'firebase/database';
import { forceCombos }      from '../helpers/Combos';

export default function GetOdds(roll, result) {

    let rolledDice = roll
    let diceResult = result

    const posRoll = getDiceSplit(rolledDice,'positive');
    const negRoll = getDiceSplit(rolledDice,'negative');
    const forceDice = getDiceSplit(rolledDice,'force');

    var adv = (rolledDice.match(/a/g) || []).length;
    var tri = (rolledDice.match(/t/g) || []).length;
    var fai = (rolledDice.match(/f/g) || []).length;
    var thr = (rolledDice.match(/o/g) || []).length;
    var des = (rolledDice.match(/d/g) || []).length;
    var lsp = (rolledDice.match(/l/g) || []).length;
    var dsp = (rolledDice.match(/n/g) || []).length;
    var suc = (rolledDice.match(/s/g) || []).length;

    const resultArray = getResultArrays(diceResult,suc,adv,tri,fai,thr,des,lsp,dsp);
    const posResult = resultArray[0];
    const negResult = resultArray[1];
    const forceArray = [lsp,dsp];

    /*setting state for my roll & results objects
    const [rollObjects,setRollObjects] = useState({
        Roll: '',
        RollType: '',
        Combinations: null,
        Result: null
    })
    const [resultsObjects,setResultsObjects] = useState({
        Result: []
    })*/
    //query firebase =>returning roll & results objects and storing them in the state objects above
    const rolls = get(query(ref(firebaseDb,'rolls'), orderByChild('Roll'), equalTo(posRoll.toString())), snapshot => {
        const queryResult = snapshot.Val().Result
        console.log(queryResult)
    })
    
    const results = get(query(ref(firebaseDb,'results'), equalTo(posResult.toString())), (snapshot) => {
        return{
            ...snapshot.Val()
        }
    })

    console.log(resultArray)
    console.log(posResult, negResult)
    console.log(forceArray)
    console.log(rolls)
    console.log(results)

    let posArray = [];
    let negArray = [];
    let posCombos = 1;
    let negCombos = 1;

    const filteredPosRoll = rolls.filter(roll => roll.Roll === posRoll)
    const filteredNegRoll = rolls.filter(roll => roll.Roll === negRoll)
    let posRes  = filteredPosRoll.Result
    posArray    = posRes.split(',');
    posCombos   = filteredPosRoll.Combinations
    let negRes  = filteredNegRoll.Result
    negArray    = negRes.split(',');
    negCombos   = filteredNegRoll.Combinations

    const filteredPosResult = results.filter(result => result.Result === posResult)
    const filteredNegResult = results.filter(result => result.Result === negResult)
    let posIndex = filteredPosResult.index
    let negIndex = filteredNegResult.index

    /*convert objects to arrays
    const rollArray = Object.keys(rollObjects).map((key, index) => {
        const roll = rollObjects[key];
        return roll;
    });
    const resultsArray = Object.keys(resultsObjects).map((key, index) => {
        const result = resultsObjects[key];
        return result;
    });
    
    //iterate over array to find the current data for the positive and negative dice rolled
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

    let posIndex, negIndex;
    //iterate over the array to find the correct index of the positive & negative result
    for(i; i < resultsArray.length; i++) {

        //get positive dice info
        if(resultsArray[i].Roll === posResult) {
            posIndex = resultsArray[i].Result;
        };
        //get negative dice info
        if(resultsArray[i].Roll === negResult) {
            negIndex = resultsArray[i].Result;
        };
    }*/

    //get # of times the results rolled for pos and neg dice was possible
    let posProb, negProb;
    if(posArray.length > 0) {
        posProb = posArray[posIndex]
    };
    if(negArray.length > 0) {
        negProb = negArray[negIndex]
    };

    //calculate force dice info
    let forcePoss = (12 ^ forceDice.length)
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

    return finalResults
}