//target = 9 then array = [2,7,11,15] ans = index [0,1]

let sumNum = (target, array) =>{

    let myArray=[]

    for (let i = 0; i < array.length; i++) {

        firstNum = array[i]

        for (let j = 0; j < array.length; j++) {
        
            secondNum = array[j]

            sum = firstNum + secondNum

            // console.log(firstNum,secondNum,sum);

            
            
            if (sum === target) {
                
                // console.log(i, j);

                myArray.push([i,j])
                
            }
        }
    }
    return myArray.length > 0 ? myArray : null;
};

const target = 9;
const array = [2, 7, 11, 15];

console.log(sumNum(target, array)); 