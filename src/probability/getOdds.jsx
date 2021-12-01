import { getResultArrays }  from "../helpers/calculateFullProbability";
import getDiceSplit         from "../helpers/diceSplit";
import { forceCombos }      from '../helpers/Combos';
import getResults from "../helpers/getResults";
import { rollExists } from "../helpers/firebaseFunctions";
import { loadRolls } from "..";

export default function GetOdds(roll, result) {

    const posRoll = getDiceSplit(roll,'positive');
    const negRoll = getDiceSplit(roll,'negative');
    const forceDice = getDiceSplit(roll,'force');

    //get number of static values rolled (i.e. rolling an advantage at the end of a roll)
    var adv = (roll.match(/a/g) || []).length;
    var tri = (roll.match(/t/g) || []).length;
    var fai = (roll.match(/f/g) || []).length;
    var thr = (roll.match(/o/g) || []).length;
    var des = (roll.match(/d/g) || []).length;
    var lsp = (roll.match(/l/g) || []).length;
    var dsp = (roll.match(/n/g) || []).length;
    var suc = (roll.match(/s/g) || []).length;

    const resultArray = getResultArrays(result,suc,adv,tri,fai,thr,des,lsp,dsp);
    const posResult = resultArray[0]; //This is an array of [suc,adv,tri] rolled
    const negResult = resultArray[1]; //This is an array of [fai,thr,des] rolled
    const forceArray = [lsp,dsp];

    //query firestore and return the positive and negative roll objects
    let posRollData
    if(rollExists(posRoll)) {
        posRollData = loadRolls(posRoll)
    } else {
        //calculate & post data? Or has this already happened?
    }

    let negRollData
    if(rollExists(negRoll)) {
        negRollData = loadRolls(negRoll)
    } else {
        //calculate & post data? Or has this already happened?
    }

    console.log(resultArray)
    console.log(posResult, negResult)
    console.log(forceArray)
    console.log(posRollData)
    console.log(negRollData)

    //create code to get the appropriate map of the positive and negative objects that is associated with the net desired result.
    //This will likely be a separate function(s) we create to do this work, because we have to take net results and figure out how
    //many positive results could have been netted against how many negative results to get the final net result.
    let normalDiceOdds = getResults(posRollData, negRollData, result)

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

    let forceOdds = (forceRes / forcePoss)

    let resultsDec = normalDiceOdds * forceOdds
    let finalResults = (resultsDec * 100).toFixed(2)

    return finalResults
}