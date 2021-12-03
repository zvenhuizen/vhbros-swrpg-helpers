export default function permute(allDice, die=0, output=[0,0,0,0]){
  
  let outputs = []

  allDice[die].forEach((result)=>{
      if( die === allDice.length - 1 ){
          // Base case...
          outputs.push( result.map((r,i) => r + output[i]) );
      }
      else{
          // Recursive case...
          permute(allDice, die+1, result.map((r,i) => r + output[i]) );
      }
  });/*  forEach() */
}