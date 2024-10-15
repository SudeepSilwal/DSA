 chunks = (array, chunkSize) => {

    const myArray = []

    let index = 0

    let remainder = array.length % chunkSize
    
    if (remainder === 0) {

        while (index < array.length ){
            const chunkArray = array.slice(index, index + chunkSize)

            // console.log(chunkArray);

            myArray.push(chunkArray);

            index += chunkSize;
            
        }
        
        return myArray
    }

 }

 num = [0,1,2,3,4,5,6,7,8,9]

console.log(chunks(num, 2));