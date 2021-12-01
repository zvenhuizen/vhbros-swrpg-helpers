import getDiceSplit from "../helpers/diceSplit";
import { forceCombos } from '../helpers/Combos';
import { getResults, 
         netResults } from "../helpers/getResults";
import { rollExists } from "../helpers/firebaseFunctions";
import { loadRolls } from "..";

export default function GetOdds(roll, result) {

    let netRes = netResults(result) //returns net [s/f, a/thr, tri, des, lsp, dsp] where s, a, tri, des are positive #s and f & thr are negative #s
    let posDice = getDiceSplit(roll,'positive');
    let negDice = getDiceSplit(roll,'negative');
    let forceDice = getDiceSplit(roll,'force');

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
    let posRollData
    if(rollExists(posDice)) {
        posRollData = loadRolls(posDice)
    } else {
        //calculate & post data? Or has this already happened?
    }

    let negRollData
    if(rollExists(negDice)) {
        negRollData = loadRolls(negDice)
    } else {
        //calculate & post data? Or has this already happened?
    }

    //create code to get the appropriate map of the positive and negative objects that is associated with the net desired result.
    //This will likely be a separate function(s) we create to do this work, because we have to take net results and figure out how
    //many positive results could have been netted against how many negative results to get the final net result.
    let diceOdds = getResults(posRollData, negRollData, finalRes)

    //calculate force dice info
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