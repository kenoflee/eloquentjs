/* 
Bean Counting 

Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters there are in the string.

Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase “B” characters). Rewrite countBs to make use of this new function.
*/


/* if ch is not defined, then search for 'B' by default */
const countChar = (str, ch = 'B') => {
    let count = 0;

    if(str.length === 0) return count;

    for(const char of str) {
        if(char === ch) {
            count++;
        }
    }
    return count;
}

console.log(countChar('', 'c'));