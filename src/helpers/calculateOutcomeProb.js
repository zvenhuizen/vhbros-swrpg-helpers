import getDiceSplit     from "./diceSplit";
import getOutcomes   from "./getOutcomes";
import { //rollExists,
         getRoll }      from "./firebaseFunctions";

export async function calculateOutcomeProb(dicePool, outcome) {
    
    console.log('Dice Pool:', dicePool)
    console.log('Dice Pool Result:', outcome)

    //returns net [s/f, a/thr, tri, des, lsp, dsp] where s, a, tri, des are positive #s and f & thr are negative #s
    let dicePoolObject = getDiceSplit(dicePool);

    // this is the final array to use to check database objects against
    let adjustedOutcome = removeStaticDice(dicePool, outcome);
    
    //send diceSplit to getRoll and wait for Promise to resolve
    let finalOutcomeProb = await getRoll(dicePoolObject).then(result => {

        //manipulate DB objects to calculate posDicePool and negDicePool odds
        let outcomeProb = getOutcomes(result.posDicePoolObj, result.negDicePoolObj, dicePoolObject.forceDicePool, adjustedOutcome)

        return outcomeProb
    });

    return finalOutcomeProb;
}

function removeStaticDice(dicePool, outcome) {

    //get number of static values rolled (i.e. rolling an advantage at the end of a roll)
    let suc = (dicePool.match(/s/g) || []).length;
    let adv = (dicePool.match(/a/g) || []).length;
    let tri = (dicePool.match(/t/g) || []).length;
    let fai = (dicePool.match(/f/g) || []).length * -1;
    let thr = (dicePool.match(/o/g) || []).length * -1;
    let des = (dicePool.match(/d/g) || []).length;
    let lsp = (dicePool.match(/l/g) || []).length;
    let dsp = (dicePool.match(/n/g) || []).length;

    //set final results of just the actual dice rolled

    let adjustedOutcome = {
        success: outcome.success - suc + fai,
        advantage: outcome.advantage - adv + thr,
        triumph: outcome.triumph - tri,
        despair: outcome.despair - des,
        lsp: outcome.lsp - lsp,
        dsp: outcome.dsp - dsp
    }
    
    return adjustedOutcome
}