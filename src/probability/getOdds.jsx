import getDiceSplit from "../helpers/diceSplit";
import { forceCombos } from '../helpers/Combos';
import { getResults, 
         netResults } from "../helpers/getResults";
import { //rollExists,
         getRoll } from "../helpers/firebaseFunctions";

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

    //query firestore and return the positive and negative roll objects
    let posRollData,
        negRollData
    if(diceSplit.posDice) {
        getRoll(diceSplit.posDice).then(result => { // Calling then on the function that is running async
            console.log(`INSIDE THEN RESULT ${result}`) // proof that the object is being found
            posRollData = result; // try assigning result to posRollData
            console.log(posRollData); // further proof that the object is being found and is assigned to posRollData
            //w whatever function you need the rollData for should be called from inside here?
        }); //still returns a promise, need to return object from promise
        console.log("Return from getRoll():")
        console.log(posRollData); // see whether we have the result object in posRollData
        // The issue here seems to be that the line above is begin called before .then() finishes, thus posRollData is still undefined.
        // We likely need to run whatever function you need to use the rollData in inside the .then() function
    }
    if(diceSplit.negDice) {
        negRollData = getRoll(diceSplit.negDice).then(response => console.log(`inside then ${response}`))
        console.log("Return from getRoll():" + negRollData)
    }

    //create code to get the appropriate map of the positive and negative objects that is associated with the net desired result.
    //This will likely be a separate function(s) we create to do this work, because we have to take net results and figure out how
    //many positive results could have been netted against how many negative results to get the final net result.
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