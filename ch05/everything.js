/* 
    Implement every as a function that takes an array and a predicate function as parameters. 
    Write two versions, one using a loop and one using the some method.
*/

const every = (array, test) => {
    for(const element of array) {
        const testResult = test(element);
        if(!testResult) return false;
    }
    return true;
}

const everySome = (array, test) => {
    return !array
        .map(element => !test(element))
        .some(element => element)
}

const f = {
    every,
    everySome,
}

module.exports = f;