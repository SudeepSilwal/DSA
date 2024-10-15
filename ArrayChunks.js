
//[1,2,3,4,5,6,7,8,9] ==> chunk([1,2,3,4,5,6,7,8,9], 3) ==> [[1,2,3],[4,5,6],[7,8,9]]

chunks = (array, chunkSize) => {

    const myArray = []

    let index = 0
    
    if (!Array.isArray(array)) {
        console.log("The given value is not an array.");
        return;
      }

    while (index < array.length ){
        const chunkArray = array.slice(index, index + chunkSize)

        // console.log(chunkArray);

        myArray.push(chunkArray);

        index += chunkSize;
        
    }
    
    return myArray

 }

 num = 1345

console.log(chunks(num, 8));