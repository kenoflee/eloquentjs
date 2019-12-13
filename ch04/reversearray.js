/* 
    For this exercise, write two functions, reverseArray and reverseArrayInPlace. 
    The first, reverseArray, takes an array as argument and produces a new array that has the same elements 
    in the inverse order. 
    
    The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by 
    reversing its elements. Neither may use the standard reverse method.
*/


//let arrayValue = [1,2,3,4,5];

const reverseFunctions = {
    reverseArray: (array) => {
        const newArray = [];
        array.forEach(element => newArray.unshift(element))
        return newArray;
    },
    reverseArrayInPlace: (array) => {
        //Math.floor(array.length / 2): 6 / 2 = 3; 5 / 2 = 2
        let midpoint = Math.floor(array.length / 2);
        for(let i = 0; i < midpoint; i++) {
            let temp = array[i];
            let mirrorIndex = array.length - 1 - i; //6 - 1 - 0 = 5; 6 - 1 - 1 = 4
            array[i] = array[mirrorIndex];
            array[mirrorIndex] = temp;
        }
    }
}

module.exports = reverseFunctions;