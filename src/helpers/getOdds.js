import getDiceSplit from "./diceSplit";
import { forceCombos } from './Combos';
import { getResults, 
         netResults } from "./getResults";
import { //rollExists,
         getRoll } from "./firebaseFunctions";

function removeStaticDice(roll, result) {

    let netRes = netResults(result)
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
    
    return [[sucfai, advthr, tri, des], [lsp, dsp]]
}

export async function getOdds(dicePool, result) {
    console.log('Dice Pool:', dicePool)

    //returns net [s/f, a/thr, tri, des, lsp, dsp] where s, a, tri, des are positive #s and f & thr are negative #s
    let diceSplit = getDiceSplit(dicePool);

    // this is the final array to use to check database objects against
    let [finalRes, forceArray] = removeStaticDice(dicePool, result);
    console.log('Final Results:', finalRes)

    
    //send diceSplit to getRoll and wait for Promise to resolve
    let finalResults = await getRoll(diceSplit).then(result => {

        //manipulate DB objects to calculate posDicePool and negDicePool odds
        let finalOdds = getResults(dicePool, result.posDice, result.negDice, finalRes)

        //calculate force dice info
        let forceDice = diceSplit.forceDice
        let forcePerms = (12 ^ forceDice.length)
        let forceRes = 0;

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

        //Calculate final odds
        let resultsDec = finalOdds * forceOdds //decimal value of odds
        let finalResults = (resultsDec * 100).toFixed(2)

        console.log(finalResults)
        return finalOdds
    });

    return finalResults;
}