import getDicePools     from "../getDicePools";
import getOutcomes   from "../getOutcomes";
import { //rollExists,
         getDicePoolData }      from "../firebaseFunctions";

export async function calculateOutcomeProb(dicePool, outcome) {

    let dicePoolObject = getDicePools(dicePool);

    //send dicePoolObject to getRoll and wait for Promise to resolve
    let finalOutcomeProb = await getDicePoolData(dicePoolObject).then(result => {

        // this is the final array to use to check database objects against
        let adjustedOutcomeObject = removeSymbols(dicePool, outcome);

        //manipulate DB objects to calculate posDicePool and negDicePool odds
        let outcomeProb = getOutcomes(result.posDicePoolObj, result.negDicePoolObj, dicePoolObject.forceDicePool, adjustedOutcomeObject)

        return outcomeProb
    });

    return finalOutcomeProb;
}

function removeSymbols(dicePool, outcome) {

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