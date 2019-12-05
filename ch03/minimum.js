/* 
Minimum

Write a function min that takes two arguments and returns their minimum.
*/

const min = (first, second) => first > second ? second : first;

console.log(min(0, 10));
console.log(min(9, -10));
console.log(min(0, 0));