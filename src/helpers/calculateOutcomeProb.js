import getDiceSplit     from "./diceSplit";
import { getResults, 
         netResults }   from "./getResults";
import { //rollExists,
         getRoll }      from "./firebaseFunctions";

export async function calculateOutcomeProb(dicePool, dicePoolResult) {
    
    console.log('Dice Pool:', dicePool)

    //returns net [s/f, a/thr, tri, des, lsp, dsp] where s, a, tri, des are positive #s and f & thr are negative #s
    let dicePoolObject = getDiceSplit(dicePool);

    // this is the final array to use to check database objects against
    let [posNegOutcome, forceOutcome] = removeStaticDice(dicePool, dicePoolResult);
    console.log('Normal Dice Outcome:', posNegOutcome)
    console.log('Force Dice Outcome:', forceOutcome)
    
    //send diceSplit to getRoll and wait for Promise to resolve
    let finalOutcomeProb = await getRoll(dicePoolObject).then(result => {

        //manipulate DB objects to calculate posDicePool and negDicePool odds
        let outcomeProb = getResults(result.posDicePoolObj, result.negDicePoolObj, dicePoolObject.forceDicePool, posNegOutcome, forceOutcome)

        return outcomeProb
    });

    return finalOutcomeProb;
}

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