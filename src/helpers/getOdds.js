import getDiceSplit from "./diceSplit";
import { forceCombos } from './Combos';
import { getResults, 
         netResults } from "./getResults";
import { //rollExists,
         getRoll } from "./firebaseFunctions";

export default function getOdds(roll, result) {

    let netRes = netResults(result) //returns net [s/f, a/thr, tri, des, lsp, dsp] where s, a, tri, des are positive #s and f & thr are negative #s
    let diceSplit = getDiceSplit(roll);
    console.log(diceSplit)

    //get number of static values rolled (i.e. rolling an advantage at the end of a roll)
    let suc = (roll.match(/s/g) || []).length;
    let adv = (roll.match(/a/g) || []).length;
    let tri = (roll.match(/t/g) || []).length;
    let fai = (roll.match(/f/g) || []).length * -1;
    let thr = (roll.match(/o/g) || []).length * -1;
    let des = (roll.match(/d/g) || []).length;
    let lsp = (roll.match(/l/g) || []).length;
    let dsp = (roll.match(/n/g) || []).length;

    //set final results of just the actual dice rolled
    let sucfai  = netRes[0] - suc + fai
    let advthr  = netRes[1] - adv + thr
        tri     = netRes[2] - tri
        des     = netRes[3] - des
        lsp     = netRes[4] - lsp
        dsp     = netRes[5] - dsp

    //this is the final array to use to check database objects against
    let finalRes = [sucfai, advthr, tri, des]
    let forceArray = [lsp, dsp];

    //send diceSplit to getRoll and wait for Promis to resolve
    getRoll(diceSplit).then(result => {

        console.log("INSIDE THEN RESULT") // will resolve after asynchronously

        console.log(`POSITIVE DICE RESULTS: ${result.posDice}`); // database data is available
        console.log(`NEGATIVE DICE RESULTS: ${result.negDice}`); // database data is available

        // THIS IS WHERE WE WANT TO CALL FUNCTION TO MANUPULATE OUR ROLL RESULTS INTO ACTUAL ODDS

    });

    console.log("Synchronous code written after getRoll()"); // will resolve synchronously

    //create code to get the appropriate map of the positive and negative objects that is associated with the net desired result.
    //This will likely be a separate function(s) we create to do this work, because we have to take net results and figure out how
    //many positive results could have been netted against how many negative results to get the final net result.
    let posRollData, negRollData
    let diceOdds = getResults(posRollData, negRollData, finalRes)

    //calculate force dice info
    let forceDice = diceSplit.forceDice
    let forcePerms = (12 ^ forceDice.length)
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

    let forceOdds = (forceRes / forcePerms)

    let resultsDec = diceOdds * forceOdds //decimal value of odds
    let finalResults = (resultsDec * 100).toFixed(2)

    return finalResults
}