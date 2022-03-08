export default function combineFaceArrays(faceArray, typeOf) {

    let combinedFaceArray = []
    console.log(faceArray, typeOf)

    if(typeOf !== 'force') {
        function permute(allFaces, face=0, combinedFaceArray=[0,0,0,0]){

            allFaces[face].forEach((result)=>{
                if( face === allFaces.length - 1 ){
                    // Base case...
                    combinedFaceArray.push( result.map((r,i) => r + combinedFaceArray[i]) );
                    console.log(combinedFaceArray);
                }
                else{
                    // Recursive case...
                    permute(allFaces, face + 1, result.map((r,i) => r + combinedFaceArray[i]) );
                    console.log(combinedFaceArray);
                }
            });/*  forEach() */
        console.log(combinedFaceArray)
        return combinedFaceArray
        }
        permute(faceArray);
        console.log(combinedFaceArray)
    } else {
        function permute(allFaces, face=0, combinedFaceArray=[0,0]){

            allFaces[face].forEach((result)=>{
                if( face === allFaces.length - 1 ){
                    // Base case...
                    combinedFaceArray.push( result.map((r,i) => r + combinedFaceArray[i]) );
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

    console.log(combinedFaceArray)
    return combinedFaceArray;
}