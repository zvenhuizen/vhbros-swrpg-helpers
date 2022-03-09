export default function combineFaceArrays(faceArray, typeOf) {

    let combinedFaceArrays = []
    //console.log(faceArray, typeOf)

    if(typeOf !== 'force') {
        function permute(allFaces, face=0, combinedFaceArray=[0,0,0,0]){

            allFaces[face].forEach((result)=>{
                if( face === allFaces.length - 1 ){
                    // Base case...
                    combinedFaceArrays.push( result.map((r,i) => r + combinedFaceArray[i]) );
                    //console.log(combinedFaceArrays);
                }
                else{
                    // Recursive case...
                    permute(allFaces, face + 1, result.map((r,i) => r + combinedFaceArray[i]) );
                    //console.log(combinedFaceArrays);
                }
            });/*  forEach() */
        }
        permute(faceArray);
        //console.log(combinedFaceArrays)
    } else {
        function permute(allFaces, face=0, combinedFaceArray=[0,0]){

            allFaces[face].forEach((result)=>{
                if( face === allFaces.length - 1 ){
                    // Base case...
                    combinedFaceArrays.push( result.map((r,i) => r + combinedFaceArray[i]) );
                    // console.log(outputs);
                }
                else{
                    // Recursive case...
                    permute(allFaces, face + 1, result.map((r,i) => r + combinedFaceArray[i]) );
                    // console.log(outputs);
                }
            });/*  forEach() */
        }
        permute(faceArray);
    }

    //console.log(combinedFaceArrays)
    return combinedFaceArrays;
}