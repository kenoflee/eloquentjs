/* 
Recursion

Define a recursive function isEven corresponding to this description. The function should accept a single parameter (a positive, whole number) and return a Boolean.

*/

const isEven = (num) => {
    if(Math.sign(num) === -1 || !Number.isInteger(num)) return null;

    if(num % 2 === 1) {
        return false;
    } else if(num % 2 === 0) {
        return true;
    } else {
        isEven(num / 2);
    }
}

module.exports = isEven;