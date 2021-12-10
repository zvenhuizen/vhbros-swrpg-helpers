export default function returnPermutations(dice) {

    let outputs = []

    function permute(allDice, die=0, output=[0,0,0,0]){
    

    allDice[die].forEach((result)=>{
        if( die === allDice.length - 1 ){
            // Base case...
            outputs.push( result.map((r,i) => r + output[i]) );
            // console.log(outputs);
        }
        else{
            // Recursive case...
            permute(allDice, die+1, result.map((r,i) => r + output[i]) );
            // console.log(outputs);
        }
    });/*  forEach() */

    }
    
    permute(dice);

    return outputs;
}